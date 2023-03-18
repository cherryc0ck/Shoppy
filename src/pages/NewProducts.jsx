import { addNewProduct } from "api/service/firebase";
import { uploadImage } from "api/uploader";
import Button from "components/ui/Button";
import React, { useState } from "react";
import styled from "styled-components";

const NewProducts = () => {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files && files[0]);
    }

    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);
    uploadImage(file) //
      .then((url) => {
        addNewProduct(product, url) //
          .then(() => {
            setSuccess("성공적으로 제품이 추가되었습니다.");
            setTimeout(() => {
              setSuccess(null);
            }, 3000);
          });
      })
      .finally(() => setIsUploading(false));
  };

  return (
    <StyledSection>
      <h1>새로운 제품 등록</h1>
      {success && <p>{success}</p>}
      {file && (
        <StyledUploadImg src={URL.createObjectURL(file)} alt="Local File" />
      )}
      <StyledForm onSubmit={handleSubmit}>
        <input
          type="file"
          name="file"
          accept="image/*"
          required
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="title"
          placeholder="제품명"
          value={product.title ?? ""}
          required
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          placeholder="가격"
          value={product.price ?? ""}
          required
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="category"
          placeholder="카테고리"
          value={product.category ?? ""}
          required
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="desc"
          placeholder="제품설명"
          value={product.desc ?? ""}
          required
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="options"
          placeholder="옵션"
          value={product.options ?? ""}
          required
          onChange={handleInputChange}
        />
        <Button
          text={isUploading ? "업로드중" : "제품등록하기"}
          disabled={isUploading}
        />
      </StyledForm>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 2.2rem;
    font-weight: bold;
  }
`;

const StyledUploadImg = styled.img`
  width: 25rem;
  height: 25rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  input {
    width: 100%;
    padding: 0.4rem 0 0.4rem 1rem;
    border: 1px solid lightgray;
  }
`;

export default NewProducts;
