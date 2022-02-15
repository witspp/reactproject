import styled from "styled-components";


const Body=styled.div`
display:flex;
height:100vh;
width:100%;
justify-content:center;
align-items:center;`;

const Section = styled.div`
  width: 500px;
  height: 500px;
  

  background-color:grey;
  display:flex;
  justify-content:center;
  align-items:center;
 
`;

const Para=styled.div`
color:black;
`;

const Email=styled.div`
color:black;
width:20px;
`

const Main =styled.div`
color:black;
width:20px;
display:flex;
flex-direction:column;
justify-content:center;
`;

const Button=styled.div`

background:none;
border-radius:20px;
display:flex;
align-item:center;
justify-content:center;
`;


export { Section, Para, Main,Button,Email,Body};
 