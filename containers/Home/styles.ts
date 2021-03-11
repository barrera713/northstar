import styled from 'styled-components';


export const StyledHomeContainer = styled.div`
    background-color: #212121;
    padding: 0 50px;
    
    .main-container {
        display: flex;
        justify-content: space-between;
        height: 80vh;
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

    @media (max-width: 576px) {
        padding: 0 1em;
    }

    @media only screen 
    and (min-device-width: 375px) 
    and (min-device-height: 812px) 
    and (-webkit-device-pixel-ratio: 3)
    and (orientation: portrait) { 
        .main-content {
            margin-top: -12em;
        }
    }

    @media only screen 
    and (min-device-width: 414px) 
    and (min-device-height: 736px) 
    and (-webkit-device-pixel-ratio: 3)
    and (orientation: portrait) { 
        .main-content {
            margin-top: -10em;
        }
    }


    @media only screen 
    and (min-device-width: 768px) 
    and (min-device-height: 1024px) 
    and (-webkit-device-pixel-ratio: 3)
    and (orientation: portrait) { 
        .main-content {
            margin-top: -10%;
        }
    }
`