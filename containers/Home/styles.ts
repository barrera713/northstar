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
        flex: 3;
        height: 100vh;
        overflow-y: scroll;
        padding-left: 2%;
        padding: 0 10px;
    }

    @media (max-width: 1200px) {
        padding: 0 70px;
        
        .main-container {
            flex-direction: column;
        }
    }
`