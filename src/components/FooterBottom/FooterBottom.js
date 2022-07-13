import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: #2da89b;
  padding: 1px;

  color: #fff;

  text-align: center;
`;

function FooterBottom() {
  return (
    <StyledDiv>
      <p>Copyright &copy; 2022</p>
      <p>Author: Yuri Pustovoy</p>
    </StyledDiv>
  );
}

export { FooterBottom };
