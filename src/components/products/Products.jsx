import { useQuery } from "@tanstack/react-query";
import { getProducts } from "api/service/firebase";
import React from "react";

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
      <ul></ul>
    </div>
  );
};

export default Products;
