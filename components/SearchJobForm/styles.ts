import styled from 'styled-components';


interface Props {
    isDesktop: boolean
}


export const FormStyles = styled.div`
    
    .form-container {
        background: rgba(196, 196, 196, 0.1);
        border-radius: 10px;
        max-width: 20em;
        height: 18em;
        padding: 1em 0;
    }

    .form-item {
        color: #ffffff;
        margin-left: 2em;
        margin-top: 1em;
    }

    .form-input {
        background: #616161;
        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        outline: none;
        border: none;
        color: #ECECED;
        width: 16em;
    }

    .form-error {
        text-align: center;
    }

    .radio-submit-container {
        display: flex;
    }

    .radio {
        color: #ffffff;
    }

    @media (max-width: 1200px) {

        .form-container {
            margin: 0 auto;
            border-radius: 10px;
            width: 900px;
            height: 18em;
            padding: 1em 0;
        }
    }
`