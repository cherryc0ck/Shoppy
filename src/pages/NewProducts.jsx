import React from "react";
import styled from "styled-components";

const NewProducts = () => {
  const inputs = [
    {
      type: "text",
      placeholder: "제품명",
    },
    {
      type: "type",
      placeholder: "가격",
    },
    {
      type: "text",
      placeholder: "카테고리",
    },
    {
      type: "text",
      placeholder: "제품설명",
    },
    {
      type: "text",
      placeholder: "옵션",
    },
  ];
  return (
    <section>
      <h1>새로운 제품 등록</h1>
      <StyledForm>
        <input type="file" />
        {inputs.map((inp, idx) => (
          <input key={idx} type={inp.type} placeholder={inp.placeholder} />
        ))}
      </StyledForm>
    </section>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default NewProducts;
