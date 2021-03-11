import styled from 'styled-components';

// when info card is rendered max-width becomes 400px (1000px is default)

interface StyleJobCollectionProps  {
    show: boolean;
}

export const StyledJobCollection = styled.div<StyleJobCollectionProps>`
    background-color: ${(props: StyleJobCollectionProps) => props.show ? 'inherit' : '#616161'};
    max-width: ${(props: StyleJobCollectionProps) => props.show ? '395px' : '1000px'};
    padding: .5em;
    border-radius: 10px;
    overlfow: hidden;
    
    .title {
        
    }
    
    .job-collection-container {  
        max-height: 620px;
        padding: .5em;
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
            padding: .75em;
        }
    }

    @media (max-width: 576px) {
        .job-collection-container {  
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
        .job-collection-container {  
            max-height: 630px;
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
`

interface DesktopProps {
    
} 

export const DesktopContainer = styled.div<DesktopProps>`
    display: flex;
    justify-content: space-between;
`