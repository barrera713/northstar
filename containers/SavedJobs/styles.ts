import styled from 'styled-components';


export const SavedJobsStyles = styled.div`

    background-color: #212121;

    text-align: left;
    padding: 0 2.5em;
    margin-top: 5em;
    
    .main-container {
        display: flex;
        justify-content: space-between;
    }

    .title__searchLink {
        margin-bottom: 2em;
        margin-left: 2.31em;
        text-align: left;
    }

    .title {
        margin-bottom: 2em;
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
        padding: 0 3.5em;
        
        .main-container {
            flex-direction: column;
        }

        .title__searchLink {
            display: flex;
            flex-direction: row;
            margin-left: .75em;
            margin-top: .5em;
            margin-bottom: 2em;
            justify-content: space-between;

            p {
                padding: .5em 0;
            }
        }

        .main-content {
            flex: 3;
            margin-top: -4.2em;
        }
    }

    @media (max-width: 576px) {

        padding: 0 1em;

        .title__searchLink {
            margin-bottom: 3em;
            margin-left: .2em;
        }


        .main-content {
            flex: 3;
            margin-top: -.5em;
        }
    }

    // --------------- iPhone X ------------------
    @media only screen 
    and (min-device-width: 375px) 
    and (min-device-height: 812px) 
    and (-webkit-device-pixel-ratio: 3)
    and (orientation: portrait) { 
        .main-content {
            margin-top: -5.3em;
        }
    }

    @media only screen 
    and (min-device-width: 411px) 
    and (min-device-height: 731px)  { 
        .title__searchLink {
            margin-bottom: 6em;
        }
    }

    @media only screen 
    and (min-device-width: 411px) 
    and (min-device-height: 823px)  { 
        .title__searchLink {
            margin-bottom: 7.5em;
        }
    }

    @media only screen 
    and (min-device-width: 414px) 
    and (min-device-height: 736px) 
    and (-webkit-device-pixel-ratio: 3)
    and (orientation: portrait) { 
        .main-content {
            margin-top: -9em;
        }
    }


    @media only screen 
    and (min-device-width: 768px) 
    and (min-device-height: 1024px) 
    and (-webkit-device-pixel-ratio: 3)
    and (orientation: portrait) { 
        .main-content {
            margin-top: 0;
        }
    }


    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
        padding: 0;
    }
`