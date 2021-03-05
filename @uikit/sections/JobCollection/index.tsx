import React from 'react';
import { JobCard } from 'components/JobCard';
import { StyledJobCollection } from './styles';
import { Col, Row } from 'antd';



interface JobCollectionProps {
    setView: boolean;
}

export const JobCollection: React.FC<JobCollectionProps> = (props) => { 

    console.log('PROPS', props)

    return (
        <StyledJobCollection>
            <div 
            className='content-main-container'
            >
            <Row gutter={[{md: 18, xl: 24}, {md: 18, xl: 24}]} 
            >
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