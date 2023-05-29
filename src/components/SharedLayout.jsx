import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';

import styled from 'styled-components';

const Header = styled.header`
  background-color: #fff;
  padding: 10px;
  color: #fff;
`;

const Nav = styled.nav`
  a {
    margin: 0 10px;
    color: #000;
    text-decoration: none;
    font-weight: bold;

    :hover {
      color: orangered;
    }
  }
`;

export function SharedLayout() {
  return (
    <>
      <Header>
        <Nav>
          <Link to="/">Home</Link>

          <Link to="/movies">Movies</Link>
        </Nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
