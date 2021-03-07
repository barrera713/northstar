import styled from 'styled-components';

export const StyledJobCollection = styled.div`
    background-color: red;
    max-width: 1000px;
    padding: 1.5em;
    border-radius: 10px;
    
    .title {
        
    }
    
    .content-main-container {  
        max-height: 600px;
        overflow: scroll;
        background: red;
        padding: .5em;
    }


    @media (max-width: 1200px) {
       padding: 1em;

    }
`