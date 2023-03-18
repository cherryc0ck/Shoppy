import { useQuery } from "@tanstack/react-query";
import { getProducts } from "api/service/firebase";
import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";

const Products = () => {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(["products"], getProducts);

  if (isLoading) return <p>로딩중입니다...</p>;
  else if (error) return <p>에러가 발생했습니다..ㅜㅜ</p>;
  return (
    <div>
      <StyledUl>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </StyledUl>
    </div>
  );
};

const StyledUl = styled.ul`
  display: flex;
  align-items: center;

  /* flex-wrap: wrap; */
`;

export default Products;
