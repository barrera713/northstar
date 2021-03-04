import styled from 'styled-components';


export const StyledHomeContainer = styled.div`
    background-color: #212121;


    .main-container {
        display: flex;
        justify-content: space-between;
    }

    .left-view {
        flex: 1;
    }

    .main-content {
        flex: 4;
    }

    @media (max-width: 1200px) {

        .main-container {
            flex-direction: column;
            max-width: 1000px;
            margin: 0 auto;
        }
    }
`