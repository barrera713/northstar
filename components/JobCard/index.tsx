import React from 'react';
import { JobCardStyles } from './styles';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

interface JobCardProps {}

export const JobCard: React.FC<JobCardProps> = ({}) => { 

    const { Meta } = Card;

    return (
        <JobCardStyles>
              <Card
                className='card-container'
            >
                <Meta
                avatar={<Avatar src="https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBazJiIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--4befa4f6603e069d3d64380dfbf7b42b2af3e4d4/Round_Logo1%20(1).png" />}
                title="Studio Game Engineer - Asia"
                description="Remote/Europe - Full Time"
                />
                <div className='card-description'>
                <p>Here at Playco, we make games that bring the world closer together through play.</p>
                <p>Our ideal teammates are thoughtful, humble, and passionate professionals who can both zoom into the details and zoom out to embrace the big picture. We are inspired by makers and tinkerers, who are unafraid to experiment with a healthy disregard for constraints. We hope you'll enrich our team with your enthusiasm and passion, both for games and for life.</p>
                </div>
            </Card>
        </JobCardStyles>
    )
}