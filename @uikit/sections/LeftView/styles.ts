import styled from 'styled-components';


export const StyledLeftView = styled.div`
    text-align: left;
    padding: 0 5%;
    margin-top: 5em;
    

    .title {
        margin-bottom: 2em;
    }

    .saved-jobs-container {
        display: flex;
        text-align: left;
        margin-bottom: 70px;
        align-items: center;


        p {
            margin-left: .5em;
            color: #ffffff;
        }
    }
    
    .saved-jobs-icon {
        color: #ffffff;
        margin-right: 1em;
    }

    @media (max-width: 1200px) {
        display: flex;
        flex-direction: row;
        padding: 0;
        margin-top: 1em;

        p, span {
            font-size: 18px;
        }


        .title {
            margin-left: 1%;
            margin-bottom: 0;
        }

        .header__navTools {
            display: flex;
            width: 1000px;
            justify-content: space-between;
            align-items: center;
            margin: .5em 0;

            .saved-jobs-container {
                margin-bottom: 0;
                margin-left: 2.5em;
                align-items: center;

                span {
                    margin-left: .5em;
                }
            }

            .modal__container {
                display: flex;
                padding: 0 .5em;
                justify-content: flex-end;
                align-items: center;
            }
        }
    }

    @media (max-width: 576px) {
        width: 100%;
    }
`