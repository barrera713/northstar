import styled from 'styled-components';


export const SavedJobsStyles = styled.div`

    background-color: #212121;
    text-align: left;
    padding: 0 50px;

    .main-container {
        display: flex;
        justify-content: space-between;
    }

    .title__searchLink {
        text-align: left;
        margin-top: 5em;
        margin-left: 1.2em;
    }

    .title {
        margin-bottom: 2em;
    }

    .collection__banner {
        margin-top: 5em;
    }
    
    .main-content {
        flex: 3;
        max-width: 1000px;
    }

    
    @media (max-width: 1200px) {
        padding: 0 3.5em;
        
        .main-container {
            flex-direction: column;
        }

        .title__searchLink {
            display: flex;
            flex-direction: row;
            margin-left: .75em;
            margin-top: 1.5em;
            justify-content: space-between;

            p {
                padding: .5em 0;
            }
        }

        .main-content {
            flex: 3;
            margin-top: -13.7em;
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
            margin-top: -5.5em;
        }
    }

    // --------------- iPhone X ------------------
    @media only screen 
    and (min-device-width: 375px) 
    and (min-device-height: 812px) 
    and (-webkit-device-pixel-ratio: 3)
    and (orientation: portrait) { 
        .main-content {
            margin-top: -8.2em;
        }
    }

    @media only screen 
    and (min-device-width: 411px) 
    and (min-device-height: 731px)  { 
        .title__searchLink {
            margin-bottom: 5.5em;

            .title {
                margin-bottom: 2.2em;
            }
        }
    }

    @media only screen 
    and (min-device-width: 411px) 
    and (min-device-height: 823px)  { 
        .title__searchLink {
            margin-bottom: 7.5em;
        }
    }

    // iPhone 6/7/8 Plus
    @media only screen 
    and (min-device-width: 414px) 
    and (min-device-height: 736px) 
    and (-webkit-device-pixel-ratio: 3)
    and (orientation: portrait) { 
        .main-content {
            margin-top: -13em;
        }
    }


    @media only screen 
    and (min-device-width: 768px) 
    and (min-device-height: 1024px) 
    and (-webkit-device-pixel-ratio: 3)
    and (orientation: portrait) { 

    
    }

    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
        padding: 0 .5em;

        .collection__banner {
            margin-top: 7.5em;
        }
    }


    @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (orientation: portrait) {
        padding: 0 .5em;

        .collection__banner {
            margin-top: 14.5em;
        }
    }
`