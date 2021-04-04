import React, { useState } from 'react';
import { Button } from 'antd';
import { JobInfoStyles } from './styles';
import { datePosted, validCompanyUrl } from 'utils/tools';

interface JobInfoProps {
    show?: Boolean;
    close?: Function;
    jobDetails: {
        company?: string,
        company_logo?: string,
        company_url?: string,
        created_at?: string,
        description?: string,
        how_to_apply?: string,
        location?: string,
        title?: string,
        type?: string,
        url?: string
    };
}

export const JobInfoDesktop: React.FC<JobInfoProps> = (props) => {

    const { company, company_logo, company_url, created_at, description, how_to_apply, location, title, type, url } = props?.jobDetails

    console.log(validCompanyUrl(company_url))
    return (<JobInfoStyles {...props}>
        <div className="main-container">  
            <div>
                <div className='info-header'>
                <img src={company_logo} />
                <h3>{title}</h3>
                <p>{`Posted ${datePosted(created_at)} days ago`}</p>
                </div>
                <div className='job-meta'>
                    <div className='company-name-location'>
                        <p>{company} - {location}</p>
                    </div>
                    <div className='info-links'>
                        <p>Save</p>
                        {validCompanyUrl(company_url) ? <a target='_blank' href={company_url}>Company website</a>: <p>Website unavailable :(</p>}
                    </div>
                </div>
                <div className='overview-container'>
                    <div>
                        <h3>How to apply</h3>
                        <div dangerouslySetInnerHTML={{__html: how_to_apply }}>
                        </div>
                    </div>
                    <div dangerouslySetInnerHTML={{__html: description}}></div>
                </div>
            </div>
            <Button type='primary'
            onClick={() => props.close()}
        >Close</Button>   
        </div>
    </JobInfoStyles>)
}
