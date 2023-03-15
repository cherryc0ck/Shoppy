import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const supportDeviceSize = 768;

export const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/SFProDisplay-Regular.ttf');
  }
  @font-face {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 500;
    src: url('/fonts/SFProDisplay-Medium.ttf');
  }
  @font-face {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 600;
    src: url('/fonts/SFProDisplay-Semibold.ttf');
  }
  @font-face {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 700;
    src: url('/fonts/SFProDisplay-Bold.ttf');
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
  }

  html {
    font-size: 62.5%; // 1rem = 10px 로 변경 한 것, 바꾼 이유는 사파리에서 폰트가 너무 작은것은 허용하지 않기 때문.
    // 참고링크 = https://stackoverflow.com/questions/68790660/setting-root-font-size-not-affecting-rem-units-in-safari-for-margin-padding-et
    // 128px => 12.8rem , 4px => 0.4rem 가능!

    @media all and (max-width: ${supportDeviceSize}px) {
      font-size: 31.25%;
    }
  }

  body {
    box-sizing: border-box;
    background: white;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    margin: 0;
    padding: 0;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    user-select: none;

    &:disabled {
      cursor: not-allowed;
    }
  }

  input,
  textarea {
    margin: 0;
    padding: 0;
    border: 0;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
