import styled from 'styled-components';

export const StyledJobCollection = styled.div`
    background-color: #616161;
    max-width: 1000px;
    padding: 1%;
    border-radius: 10px;
    
    .title {
        
    }
    
    .content-main-container {  
        max-height: 600px;
        overflow: scroll;
        padding: .5em;
    }


    @media (max-width: 576px) {

       

        .content-main-container {  
            max-height: 500px;
            overflow: scroll;
            padding: .75em;
        }
    }

    @media (max-width: 576px) {
        .content-main-container {  
            max-height: 500px;
            overflow: scroll;
            padding: .75em;
        }
    }

    @media only screen 
    and (min-device-width: 375px) 
    and (min-device-height: 812px) 
    and (-webkit-device-pixel-ratio: 3)
    and (orientation: portrait) { 
        .content-main-container {  
            max-height: 630px;
        }
    }

    @media only screen 
    and (min-device-width: 414px) 
    and (min-device-height: 736px) 
    and (-webkit-device-pixel-ratio: 3)
    and (orientation: portrait) { 
        .content-main-container {  
            max-height: 575px;
        }
    }

    @media only screen 
    and (min-device-width: 768px) 
    and (min-device-height: 1024px) 
    and (-webkit-device-pixel-ratio: 3)
    and (orientation: portrait) { 
        .content-main-container {  
            max-height: 575px;
        }
    }
`