import styled from 'styled-components';

interface StyleProps  {
  show: Boolean;
}

export const JobInfoStyles = styled.div`
  background-color: #212121;  
  height: 100vh;
  width: 0;
  
  .main-container {
    background-color: red;
    width: 0px;
  }
`