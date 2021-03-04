import { JobCard } from 'components/JobCard';
import React from 'react';
import { StyledJobCollection } from './styles';
import { Col, Row } from 'antd';
import { Filter } from 'components/Filter';


interface JobCollectionProps {}

export const JobCollection: React.FC<JobCollectionProps> = ({}) => { 



    return (
        <StyledJobCollection>
            <div className='content-main-container'>
            <Filter />
            <Row gutter={[8, 16]} >
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