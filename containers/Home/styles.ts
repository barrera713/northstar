import styled from 'styled-components';


export const StyledHomeContainer = styled.div`
    background-color: #212121;
    padding: 0 50px;
    
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
    }

    
    @media (max-width: 1200px) {
 
        .main-container {
            flex-direction: column;
            height: 100vh;
        }

        .main-content {
            flex: 3;
        }
    
    }
`