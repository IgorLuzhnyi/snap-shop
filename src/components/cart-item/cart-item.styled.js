import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 70px;
  margin-bottom: 15px;
`;

export const CartImage = styled.img`
  width: 30%;
  height: 70px;
  object-fit: cover;
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;

  .name {
    font-size: 16px;
  }
`;
