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

    .form-container {
        background: rgba(196, 196, 196, 0.1);
        border-radius: 10px;
        max-width: 284px;
        max-height: 280px;
        padding: 18px 0;
    }

    .form-item {
        color: #ffffff;
        margin-left: 20px;
        margin-top: 18px;
    }

    .form-input {
        background: #616161;
        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        outline: none;
        border: none;
        color: #ffffff;
        width: 190px;
    }

    .radio-submit-container {
        display: flex;
    }

    .radio {
        color: #ffffff;
    }

    @media (max-width: 1200px) {
        display: flex;
        flex-direction: row;
        padding: 0;
        margin-top: 3em;

        .title {
            margin-left: 1%;
            margin-bottom: 0;
        }
    }

`