import React, { useState } from 'react';
import { Button } from 'antd';
import { JobInfoStyles } from './styles';

interface JobInfoProps {
    show?: Boolean;
    close?: Function;
}

export const JobInfoDesktop: React.FC<JobInfoProps> = (props) => {

    return (<JobInfoStyles {...props}>
        <div className="main-container">  
            <div className='info-header'>
            <img src="https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBazJiIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--4befa4f6603e069d3d64380dfbf7b42b2af3e4d4/Round_Logo1%20(1).png" />
            <h3>Core/Backend Engineer</h3>
            </div>
            <div className='link-tags'>
                <p>favorite</p>
                <p>link</p>
            </div>
            {/* <Button type='primary'
            onClick={() => props.close()}
            >Close</Button> */}
        </div>
    </JobInfoStyles>)
}