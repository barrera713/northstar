import React, { useState } from 'react';
import { JobCardStyles } from './styles';
import { Card, Avatar, Button } from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import { datePosted } from 'utils/tools';
import { saveInLocalStorage } from 'utils/hooks';


interface JobCardProps {
    id?: string;
    jobDetails: {
        id?: string;
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

export const JobCard: React.FC<JobCardProps> = (props) => { 

  
    const { company, company_logo, company_url, created_at, description, how_to_apply, location, title, type, url, id } = props?.jobDetails
    const { Meta } = Card;
    const companyLogo = <img style={{height: '100%', width: '100%', objectFit: 'contain' }} src={company_logo ? company_logo : null} />

    return (
        <JobCardStyles>
              <Card
                id={id}
                hoverable={true}
                className='card-container'
            >
                <Meta
                avatar={<Avatar src={companyLogo} shape='circle'/>}
                title={<p className='meta-title'>{title ? title : 'Title unavailable'}</p>}
                description={<p className='meta-description'>
                    {location ? location : 'Location unavailable'} - {type ? type : null}
                    </p>}
                />
                <div className='card-description' dangerouslySetInnerHTML={{__html: description}}>
                    {description === null ? 'Click on company link for more info' : null}
                </div>
                <div className='card-footer'>
                    <Button type='primary' 
                    onClick={() => window.open(url, '_blank')}
                    shape='round'>
                        Apply
                    </Button>
                    <Button 
                    shape='round'
                    size='middle' 
                    className='card-save-button'
                    onClick={() => saveInLocalStorage(props?.jobDetails)}
                    >
                        <SaveOutlined /> Save
                    </Button>
                    <div className='posted-date'>{`${datePosted(created_at)} d`}</div>
                </div>
            </Card>
        </JobCardStyles>
    );
};