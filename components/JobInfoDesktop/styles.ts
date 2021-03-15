import styled from 'styled-components';


export const JobInfoStyles = styled.div`

  .main-container {
    background-color: rgba(196, 196, 196, 0.1);
    border-radius: 10px;
    width: 600px;
    max-height: 620px;
    margin-left: 7px;
    overflow: scroll;
  }

  .info-header, .company-and-location {
    display: flex;
    margin: 20px 0 10px 20px;

    h3 {
      color: #ffffff;
      margin: 13px 0 0 10px;
    }
  
    img {
      width: 60px;
      height: 60px;
    }
  }


  .overview-container {
    margin-left: 20px;
  }
`