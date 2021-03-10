import React from 'react';
import { JobInfoStyles } from './styles';

interface JobInfoProps {
    show: boolean;
}

export const JobInfo: React.FC<JobInfoProps> = (props) => {
    return (<JobInfoStyles {...props}>
        <div className="main-container">
            Right Side
        </div>
    </JobInfoStyles>)
}