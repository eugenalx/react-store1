import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const PriceContainer = styled.span`
  width: 23%;
`;

export const Name = styled(PriceContainer)``;
export const Price = styled(PriceContainer)``;

export const Quantity = styled(PriceContainer)`
  display: flex;
  align-items: center;
`;

export const Value = styled.div`
  margin: 0 10px;
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
