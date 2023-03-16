import React, { useEffect, useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import User from "components/user/User";
import Button from "components/ui/Button";
import { useAuthContext } from "context/AuthContext";

const Navbar = () => {
  const { user, login, logout } = useAuthContext();

  return (
    <StyledHeader>
      <StyledLink to="/">
        <FiShoppingBag />
        <h1>Shoppy</h1>
      </StyledLink>
      <StyledNavbar>
        <Link to="/products">Products</Link>
        {user && <Link to="/carts">Carts</Link>}
        {user && user.isAdmin && (
          <Link to="/products/new">
            <BsFillPencilFill />
          </Link>
        )}
        {user && <User user={user} />}
        {user ? (
          <Button text="Logout" onClick={logout} />
        ) : (
          <Button text="login" onClick={login} />
        )}
      </StyledNavbar>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100rem;
`;

const StyledLink = styled(Link)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    ${theme.typo.semiBold18};
  `}
`;

const StyledNavbar = styled.nav`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;

    a,
    button {
      color: ${theme.colors.gray600};
      ${theme.typo.medium16};
    }
  `}
`;

export default Navbar;
