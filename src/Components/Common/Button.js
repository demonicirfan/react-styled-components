import styled, { css } from "styled-components";

const Button = styled.button`
  color: white;
  background-color: ${(p) => (p.secondary ? "black" : "#f8049c")};
  font-weight: bold;
  ${(p) =>
    p.large
      ? css`
          padding: 16px;
          border-radius: 5px;
          font-size: 1.5em;
        `
      : css`
          padding: 8px;
          border-radius: 4px;
          font-size: 1em;
        `}
  box-shadow: none;
  width: 100%;
  display: block;
  white-space: none;
  &:disabled {
    background: #eee;
    color: #666;
  }
`;

export { Button };
