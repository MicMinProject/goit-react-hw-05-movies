import { NavLink, Outlet } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';

// ...

export const App = () => {
  return (
    <div
      css={{
        backgroundColor: '#e0e0e0',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
        paddingBottom: '20px',
        paddingTop: '20px',
      }}
    >
      <nav
        css={{
          paddingBottom: '30px',
          borderBottom: 'solid 2px',
          marginBottom: '30px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <NavLink
          style={({ isActive }) => {
            return { color: isActive ? 'red' : '' };
          }}
          to="/"
        >
          Home
        </NavLink>
        {' | '}
        <NavLink
          style={({ isActive }) => {
            return { color: isActive ? 'red' : '' };
          }}
          to="/movies"
        >
          Movies
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};
