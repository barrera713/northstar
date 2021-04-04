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

  .title-posted-date {
    display: flex;
    align-items: center;

    p {
      margin-left: 13em;
      font-size: 12px;
      margin-bottom: 3px;
    }

    h3 {
      padding: 0 20px;
      margin: 0;
      color: #ECECED;
    }
  }

  .info-header {
    display: flex;
    margin: 20px 0 15px 20px;
    
    img {
      width: 60px;
      height: 60px;
    }
    
  }

  .company-name-location, .info-links {
    display: flex;
    margin-left: 20px;
    justify-content: space-between;
  }

  .info-links {
    a, p {
      margin-left: 15px;
    }
  }

  .job-meta {
    display: flex;
    justify-content: space-between;
  }

  .overview-container {
    margin-left: 20px;
  }

  .close-icon {
    margin-top: 7px;
  }
`