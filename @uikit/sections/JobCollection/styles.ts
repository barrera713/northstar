import styled from 'styled-components';


interface StyleJobCollectionProps  {
    show: boolean;
}

export const StyledJobCollection = styled.div<StyleJobCollectionProps>`
    background-color: ${(props: StyleJobCollectionProps) => props.show ? 'inherit' : '#616161'};
    max-width: 1000px;
    border-radius: 10px;
    overlfow: hidden;
    padding: ${(props: StyleJobCollectionProps) => props.show ? '0' : '.5em'};

    .desktop-container {
        display: ${(props: StyleJobCollectionProps) => props.show ? 'flex' : 'hidden'};
    }
    
    .job-collection-container {  
        max-height: 620px;
        overflow: scroll;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none; 
    }

    .job-collection-container::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: 576px) {

        .job-collection-container {  
            max-height: 500px;
            overflow: scroll;   
        }
    }

    @media (max-width: 576px) {
        .job-collection-container {  
            max-height: 500px;
            overflow: scroll;
        }
    }

    @media (max-width: 320px) {
        .job-collection-container {  
            max-height: 400px;
        }
    }

    @media (max-width: 411px) {
        .job-collection-container {  
            max-height: 620px;
        }
    }

    @media (max-height: 731px) {
        .job-collection-container {  
            max-height: 500px;
        }
    }

    @media (max-width: 360px) {
        .job-collection-container {  
            max-height: 400px;
        }
    }
    
    @media only screen 
    and (min-device-width: 360px) 
    and (min-device-height: 640px) 
    and (-webkit-device-pixel-ratio: 3)
    and (orientation: portrait) { 
        .job-collection-container {  
            max-height: 475px;
        }
    }

    @media only screen 
    and (min-device-width: 375px) 
    and (min-device-height: 667px) 
    and (-webkit-device-pixel-ratio: 3)
    and (orientation: portrait) { 
        .job-collection-container {  
            max-height: 500px;
        }
    }

    @media only screen 
    and (min-device-width: 280px) 
    and (min-device-height: 653px) 
    and (-webkit-device-pixel-ratio: 3)
    and (orientation: portrait) { 
        .job-collection-container {  
            max-height: 500px;
        }
    }

    @media only screen 
    and (min-device-width: 375px) 
    and (min-device-height: 812px) 
    and (-webkit-device-pixel-ratio: 3)
    and (orientation: portrait) { 
        .job-collection-container {  
            max-height: 625px;
        }
    }

    @media only screen 
    and (min-device-width: 414px) 
    and (min-device-height: 736px) 
    and (-webkit-device-pixel-ratio: 3)
    and (orientation: portrait) { 
        .job-collection-container {  
            max-height: 575px;
        }
    }


    @media only screen 
    and (min-device-width: 768px) 
    and (min-device-height: 1024px) 
    and (-webkit-device-pixel-ratio: 3)
    and (orientation: portrait) { 
        .job-collection-container {  
            max-height: 575px;
        }
    }

    
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
        .job-collection-container {  
            max-height: 810px;
        }
    }

    @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (orientation: portrait) {
        .job-collection-container {  
            max-height: 1050px;
        }
    }
`