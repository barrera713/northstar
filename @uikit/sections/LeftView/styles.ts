import styled from 'styled-components';


interface Props {
    isDesktop: boolean
}


export const StyledLeftView = styled.div`
    text-align: left;
    padding: 0 5%;
    margin-top: 80px;

    .title {
        margin-bottom: 35px;
    }

    .saved-jobs-container {
        display: flex;
        text-align: left;
        margin-bottom: 70px;


        a {
            margin-left: 7px;
            color: #ffffff;
        }
    }
    
    .saved-jobs-icon {
        color: #ffffff;
        font-size: 20px;
        margin-right: 7px;
    }

    @media (max-width: 1200px) {
        display: flex;
        flex-direction: row;
        padding: 0;
        margin-top: 1em;

        .title {
            margin-left: 1%;
            margin-bottom: 0;
        }
    }

    @media (max-width: 576px) {
        width: 100%;
    }
`