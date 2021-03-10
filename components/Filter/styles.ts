import styled from 'styled-components';

export const FilterStyles = styled.div` 
    margin-top: 10em;


    .main-container {
        max-width: 1000px;
        width: 100%;
        position: fixed;
        top: 0;
        height: 3.5rem;
        margin-top: 70px;
        background-color: rgba(196, 196, 196, 0.1);
        border-radius: 10px;
    }

    .title {
        margin-left: 2%;
        margin-top: 1%;
    }



    @media (max-width: 1200px) {
        margin-top: 0;

        .main-container {
            margin-top: 1em;
            margin-bottom: 1em;
            position: relative;
        }
    }
    @media (max-height: 700px) {
    .main-container {
        position: relative;
        margin-top: -70px;
        margin-bottom: 1em;
    } 
`
