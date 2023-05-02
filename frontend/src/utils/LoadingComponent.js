import React from 'react';
import { css } from '@emotion/react';
import HashLoader from 'react-spinners/HashLoader';

//css
const override = css`
  display: block;
  margin-left: 50%;
  border-color: red;
`;
const LoadingComponent = () => {
  return <HashLoader color="#36d7b7" loading={true} css={override} />;
};

export default LoadingComponent;
