import styled from 'styled-components';


export const JobInfoStyles = styled.div`

  .main-container {
    background-color: rgba(196, 196, 196, 0.1);
    border-radius: 10px;
    width: 600px;
    max-height: 620px;
    margin-left: 7px;
    overflow: scroll;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none; 
    padding: 0 7px;
  }

  .main-container::-webkit-scrollbar {
    display: none;
  }

  .info-header {
    display: flex;
    margin: 20px 0 15px 20px;

    p {
      position: relative;
      left: 21em;
      top: 13px;
      font-size: 12px;
    }

    h3 {
      color: #ffffff;
      margin: 13px 0 0 15px;
    }
  
    img {
      width: 60px;
      height: 60px;
    }
  }

  .company-name-location, .info-links {
    display: flex;
    margin-left: 20px;
    justify-content: space-between;

    p:nth-child(2) {
      margin: 0 20px; 
    }
  }

  .job-meta {
    display: flex;
    justify-content: space-between;
  }

  .overview-container {
    margin-left: 20px;
  }
`