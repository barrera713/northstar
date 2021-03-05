import styled from 'styled-components';


export const JobCardStyles = styled.div`
    .card-container {
        border-radius: 10px;
        background: #4B4B4B;
        border: none;
    }

    .meta-title {
        color: #ffffff;
    }

    .meta-description {
        margin-top: -20px;
        color: #bfbfbf;
    };

    .card-description {
        color: #ffffff;
    }

    .card-description p:nth-child(2) {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .card-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .card-save-button {
        position: relative;
        right: 3%;
    }

    .posted-date {
        color: #bfbfbf;
    }


    @media (max-width: 1200px) {

        .main-container {
            flex-direction: column;
        }

        .card-container {
           margin: 0;
           padding: 0;
        }
    }

`