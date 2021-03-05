import { JobCard } from 'components/JobCard';
import React from 'react';
import { StyledJobCollection } from './styles';
import { Col, Row } from 'antd';


interface JobCollectionProps {}

export const JobCollection: React.FC<JobCollectionProps> = ({}) => { 



    return (
        <StyledJobCollection>
            <div className='content-main-container'>
            <Row gutter={[24, { xs: 8, sm: 16, md: 16, lg: 24 }]} >
            <Col span={8}>
                <JobCard />
            </Col>
            <Col span={8}>
                <JobCard />
            </Col>
            <Col span={8}>
                <JobCard />
            </Col>
            <Col span={8}>
                <JobCard />
            </Col>
            <Col span={8}>
                <JobCard />
            </Col> 
            <Col span={8}>
                <JobCard />
            </Col>
            <Col span={8}>
                <JobCard />
            </Col>
            <Col span={8}>
                <JobCard />
            </Col>
            <Col span={8}>
                <JobCard />
            </Col>
            <Col span={8}>
                <JobCard />
            </Col>
            <Col span={8}>
                <JobCard />
            </Col>
            <Col span={8}>
                <JobCard />
            </Col>
            <Col span={8}>
                <JobCard />
            </Col>
            <Col span={8}>
                <JobCard />
            </Col>
            <Col span={8}>
                <JobCard />
            </Col>
            </Row>
            </div>
        </StyledJobCollection>
    );
};