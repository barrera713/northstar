import { JobCard } from 'components/JobCard';
import React from 'react';
import { StyledJobCollection } from './styles';
import { Col, Row } from 'antd';


interface JobCollectionProps {}

export const JobCollection: React.FC<JobCollectionProps> = ({}) => { 



    return (
        <StyledJobCollection>
            <div className='content-main-container'>
            <Row gutter={[{md: 24, xl: 24}, {md: 0, xl: 0}]}>
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