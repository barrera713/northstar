import styled from 'styled-components';

export const FilterStyles = styled.div` 
    margin-bottom: 20%;
    
    
    .main-container {
        max-width: 1000px;
        position: fixed;
        top: 0;
        width: 100%;
        height: 3.5rem;
        margin-top: 70px;
        margin-bottom: 35px;
        background-color: rgba(196, 196, 196, 0.1);
        border-radius: 10px;
        overflow: hidden;
    }

    .title {
        margin-left: 2%;
        margin-top: 1%;
    }



    @media (max-width: 1200px) {
        .main-container {
            margin-top: 20%;
        }
    }
`
