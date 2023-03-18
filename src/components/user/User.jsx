import React from "react";
import styled from "styled-components";

const User = ({ user }) => {
  const { displayName, photoURL } = user;
  return (
    <StyledProfile>
      <figure>
        <img src={photoURL} alt="Google Profile Img" />
      </figure>
      <span>{displayName}</span>
    </StyledProfile>
  );
};

const StyledProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  figure {
    width: 3rem;
    height: 3rem;

    img {
      border-radius: 50%;
    }
  }
`;

export default User;
