import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const ProductCard = ({ product }) => {
  const { id, image, title, category, price } = product;
  const navigate = useNavigate();

  return (
    <StyledLi
      onClick={() => navigate(`/products/${id}`, { state: { product } })}
    >
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{price}</p>
      </div>
      <p>{category}</p>
    </StyledLi>
  );
};

const StyledLi = styled.li`
  img {
    width: 14rem;
    height: 14rem;
  }
`;

export default ProductCard;
