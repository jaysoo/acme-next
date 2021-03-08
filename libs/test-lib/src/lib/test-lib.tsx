import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TestLibProps {}

const StyledTestLib = styled.div`
  color: pink;
`;

export function TestLib(props: TestLibProps) {
  return (
    <StyledTestLib>
      <h1>Welcome to test-lib!</h1>
    </StyledTestLib>
  );
}

export default TestLib;
