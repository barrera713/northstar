import React, { useState } from 'react';
import { JobCardStyles } from './styles';
import { Card, Avatar, Button } from 'antd';
import { SaveOutlined } from '@ant-design/icons';

interface JobCardProps {}

export const JobCard: React.FC<JobCardProps> = ({}) => { 

    const { Meta } = Card;

    return (
        <JobCardStyles>
              <Card
                hoverable={true}
                className='card-container'
            >
                <Meta
                avatar={<Avatar src="https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBazJiIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--4befa4f6603e069d3d64380dfbf7b42b2af3e4d4/Round_Logo1%20(1).png" />}
                title={<p className='meta-title'>Studio Game Engineer - Asia</p>}
                description={<p className='meta-description'>Remote/Europe - Full Time</p>}
                />
                <div className='card-description'>
                <p>Here at Playco, we make games that bring the world closer together through play.</p>
                <p>Our ideal teammates are thoughtful, humble, and passionate professionals who can both zoom into the details and zoom out to embrace the big picture. We are inspired by makers and tinkerers, who are unafraid to experiment with a healthy disregard for constraints. We hope you'll enrich our team with your enthusiasm and passion, both for games and for life.</p>
                </div>
                <div className='card-footer'>
                    <Button type='primary' shape='round'>
                        Apply now
                    </Button>
                    <Button 
                    shape='round'
                    size='middle' 
                    className='card-save-button'>
                        <SaveOutlined /> Save
                    </Button>
                    <div className='posted-date'>1d</div>
                </div>
            </Card>
        </JobCardStyles>
    )
}