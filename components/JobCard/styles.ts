import styled from 'styled-components';


export const JobCardStyles = styled.div`

    .card-container {
        border-radius: 10px;
        background: #4B4B4B;
        border: none;
    }

    .meta-title {
        color: #ECECED;
    }

    .meta-description {
        margin-top: -20px;
        color: #bfbfbf;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    };

    .card-description {
        color: #ffffff;
        max-height: 130px;
        margin-bottom: 10px;
        overflow: hidden;

        p {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

    .card-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
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