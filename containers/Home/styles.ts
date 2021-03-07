import styled from 'styled-components';


export const StyledHomeContainer = styled.div`
    background-color: #212121;
    
    .main-container {
        display: flex;
        justify-content: space-between;
        height: 100vh;
    }
    
    .left-view {
        flex: 1;
    }
    
    .main-content {
        flex: 3;
        padding-left: 0;
    }

    @media (max-width: 1200px) {
        padding: 0 70px;
        
        .main-container {
            flex-direction: column;
            height: 100vh;
        }
    }
`