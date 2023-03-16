import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Firebase from "service/Firebase";

const Navbar = () => {
  return (
    <StyledHeader>
      <StyledLink to="/">
        <FiShoppingBag />
        <h1>Shoppy</h1>
      </StyledLink>
      <StyledNavbar>
        <Link to="/products">Products</Link>
        <Link to="/carts">Carts</Link>
        <Link to="/products/new">
          <BsFillPencilFill />
        </Link>
        <Firebase />
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

    a {
      color: ${theme.colors.gray600};
      ${theme.typo.medium16};
    }
  `}
`;

export default Navbar;
