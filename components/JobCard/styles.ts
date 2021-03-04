import styled from 'styled-components';


export const JobCardStyles = styled.div`

    .card-container {
        max-width: 300px;
        border-radius: 10px;
        margin: 7px -14px;
    }

    .card-description {
        margin-top: 10px;
    }

    .card-description p:nth-child(2) {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`