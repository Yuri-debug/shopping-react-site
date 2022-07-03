import styled from "styled-components";

import ProductsSingleBlock from "./ProductsSingleBlock";
import ProductsWrapper from "./ProductsWrapper";

import { useDispatch, useSelector } from "react-redux";

const ProductsDiv = styled.div`
  width: 70%;

  margin: 0 auto;
  padding: 46px 0;

  display: grid;
  grid-template-columns: 255px 255px 255px;
  column-gap: 50px;
  row-gap: 50px;

  justify-content: center;
`;

function Products() {
  const inputValue = useSelector(store => store.input.value)
  const data = useSelector(store => store.data.data);

  let productItems = data.map(
    (data) => {
      if (data.text.toUpperCase() == inputValue.toUpperCase()) {
      
        return (
          <ProductsSingleBlock
            arr={data}
            key={data.id.toString()}
            id={data.id}
            text={data.text}
            img={data.img}
          />
        );
      
      } else if (inputValue == "") {
        
        return (
          <ProductsSingleBlock
            arr={data}
            key={data.id.toString()}
            id={data.id}
            text={data.text}
            img={data.img}
          />
        );
      
      }
  
    }
  );

  return (
    <ProductsWrapper>
      <ProductsDiv>{productItems}</ProductsDiv>
    </ProductsWrapper>
  );

}

export default Products;
