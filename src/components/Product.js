import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ProductItem = ({ product }) => {
  return (
    <Wrapper>
      <img src={product.image} alt="" />
      <h4 className="my-3">{product.name}</h4>
      <p>{product.desc}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  img {
    width: 100%;
    max-width: 542px;
    height: 100%;
    max-height: 42.23rem;
    border-radius: 10px;
  }
  h4 {
    /* font-size: 2rem; */
    font-weight: 700;
  }
  p {
    font-size: 1.2rem;
    line-height: 27px;
    font-weight: 200;
  }
  @media screen and (max-width: 568px) {
    text-align: center;
  }
`;
ProductItem.propTypes = {
  product: PropTypes.object,
};

export default ProductItem;
