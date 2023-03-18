import Button from "components/ui/Button";
import React, { useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";

const ProductDetail = () => {
  const {
    state: {
      product: { image, category, title, price, options },
    },
  } = useLocation();
  const [selected, setSelected] = useState(options && options[0]);

  const handleClick = (e) => {
    /* 장바구니에 추가 */
  };

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  return (
    <StyledContainer>
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{price}</p>
        <select value={selected} onChange={handleSelect}>
          {options &&
            options.map((opt, idx) => <option key={idx}>{opt}</option>)}
        </select>
      </div>
      <Button text="장바구니 추가" onClick={handleClick} />
    </StyledContainer>
  );
};

const StyledContainer = styled.section`
  display: flex;
  align-items: flex-start;
  img {
    width: 30rem;
    height: 30rem;
  }
`;

export default ProductDetail;
