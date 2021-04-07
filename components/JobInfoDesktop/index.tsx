import React, { useEffect } from 'react';
import { CloseCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { JobInfoStyles } from './styles';
import { numOfDays, validCompanyUrl } from 'utils/tools';
import SaveJob from 'components/SaveJob';

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

    useEffect(() => {
        const subContainer = document.getElementById("sub-container");
        subContainer.scrollIntoView({ behavior: "smooth"});
    }, [props.jobDetails])

    console.log(created_at)
    return (<JobInfoStyles {...props}>
        <div className="main-container">  
            <div id="sub-container">
                <div className='info-header'>
                <img src={company_logo} />
                <div className='title-posted-date'>
                <h3>{title}</h3>
                <p>{`Posted ${numOfDays(created_at)} days ago`}</p>
                </div>
                </div>
                <div className='job-meta'>
                    <div className='company-name-location'>
                        <p>{company} - {location}</p>
                    </div>
                    <div className='info-links'>
                        <SaveJob savedJob={props.jobDetails} />
                        {validCompanyUrl(company_url) ? <a target='_blank' href={company_url}>Company website</a>: <p>Website unavailable :(</p>}
                    </div>
                </div>
                <div className='overview-container' >
                        <h3>How to apply</h3>
                        <div
                        className="api_html_overview" 
                        dangerouslySetInnerHTML={{__html: how_to_apply }}>
                        </div>
                    <div dangerouslySetInnerHTML={{__html: description}}></div>
                </div>
            </div>
            <CloseCircleOutlined onClick={() => props.close()} className="close-icon" />
        </div>
    </JobInfoStyles>)
}
