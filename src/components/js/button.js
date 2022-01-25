import styled from "styled-components";

const ButtonWrapper = styled.button`
background-color: rgba(255, 255, 255, 0.3);
border: 1px solid white;
border-radius: 2px;
position: relative;
color: #FFf;
font-size: 20px;
font-weight: 400;
width: 200px;
height: 40px;
z-index: 1;
cursor:pointer;
&:hover{
background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(255, 255, 255, 1);
}
&:hover div{
  color: #2a2a2a;
}
`;

export const Button = ({ items }) => {
  return (
    <ButtonWrapper>
      {items}
    </ButtonWrapper>
  );
};
