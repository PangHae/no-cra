import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <>
      <HomeDiv>Here is Home. I used Styled-Component</HomeDiv>
      <div>I used scss</div>
    </>
  );
};

export default Home;

const HomeDiv = styled.div`
  background-color: black;
  color: white;
`;
