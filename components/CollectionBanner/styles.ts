import styled from 'styled-components';

export const FilterStyles = styled.div` 
    margin-top: 10em;


    .main-container {
        max-width: 1000px;
        width: 100%;
        position: fixed;
        top: 0;
        height: 3.5rem;
        margin-top: 4em;
        background-color: rgba(196, 196, 196, 0.1);
        border-radius: 10px;
    }

    .title {
        margin-left: 2%;
        margin-top: .75em;
        align-items: center;
    }



    @media (max-width: 1200px) {
        margin-top: 0;

        .main-container {
            margin-top: 1em;
            margin-bottom: 1em;
            position: relative;
        }
    }

    @media (max-width: 411px) {
        .main-container {
            margin-top: -7em;
        }
    }

    @media (max-height: 700px) {

        .main-container {
            margin-top: 10px;
        } 
    }

    @media (max-height: 731px) {
        .main-container {
            margin-top: -4em;
        } 
    }

    @media only screen 
    and (min-device-width: 375px) 
    and (min-device-height: 812px) 
    and (-webkit-device-pixel-ratio: 3)
    and (orientation: portrait) { 
        .main-container {
            margin-top: 2em;
        }
    }

    @media only screen 
    and (min-device-width: 414px) 
    and (min-device-height: 812px) 
    and (-webkit-device-pixel-ratio: 3)
    and (orientation: portrait) { 
        .main-container {
            margin-top: 2em;
        }
    }

    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
        .main-container {
            margin-top: -10em;
        }
    }
`
