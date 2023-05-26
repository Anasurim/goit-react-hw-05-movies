import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import React from 'react';

export function SharedLayout() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>

          <Link to="/movies">Movies</Link>
        </nav>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </header>
    </>
  );
}
