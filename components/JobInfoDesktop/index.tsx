import React, { useState } from 'react';
import { Button } from 'antd';
import { JobInfoStyles } from './styles';

interface JobInfoProps {
    show?: Boolean;
    close?: Function;
}

export const JobInfo: React.FC<JobInfoProps> = (props) => {

    return (<JobInfoStyles {...props}>
        <div className="main-container">  
            <Button type='primary'
            onClick={() => props.close()}
            >Close</Button>
        </div>
    </JobInfoStyles>)
}