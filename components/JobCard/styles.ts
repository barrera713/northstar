import styled from 'styled-components';


export const JobCardStyles = styled.div`

    .card-container {
        max-width: 300px;
        height: 250px;
        border-radius: 10px;
        margin: 7px 0;
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
`