import styled from 'styled-components';


export const SavedJobsStyles = styled.div`

    background-color: #212121;
    padding: 0 50px;
    text-align: left;
    padding: 0 5%;
    margin-top: 5em;
    
    .main-container {
        display: flex;
        justify-content: space-between;
     
    }

    h2 {
        margin-bottom: 2em;
        text-align: left;
    }

    .title {
        margin-bottom: 3.5em;
    }
    
    .left-view {
        flex: 1;
    }
    
    .main-content {
        flex: 3;
        max-width: 1000px;
    }

    
    @media (max-width: 1200px) {
        margin-top: 1em;
        
        .main-container {
            flex-direction: column;
        }

        h2 {
            margin-left: 1%;
            margin-top: .3em;
        }

        .main-content {
            flex: 3;
            margin-top: -4.8em;
        }
    }

    @media (max-width: 576px) {

        padding: 0 1em;

        h2 {
            margin-top: .3em;
        }

        .main-content {
            flex: 3;
            margin-top: -.3em;
        }
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


    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
        padding: 0 .5em;
    }
`