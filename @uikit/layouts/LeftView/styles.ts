import styled from 'styled-components';


export const StyledLeftView = styled.div`
    height: 100vh;
    text-align: left;
    padding-left: 50px;
    background-color: #212121;

    .title {
        padding-top: 80px;
        padding-bottom: 40px;
    }

    .saved-jobs-container {
        display: flex;
        text-align: left;
        padding-bottom: 60px;

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

`