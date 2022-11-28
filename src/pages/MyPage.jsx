import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const MyPage = () => {
  return (
    <>
      <section
        css={css`
          background-color: gray;
          color: white;
        `}
      >
        Here is My Page. I used emotion/react
      </section>
      <MyPageDiv>I used emotion/styled</MyPageDiv>
    </>
  );
};

export default MyPage;

const MyPageDiv = styled.div`
  background-color: green;
  color: red;
`;
