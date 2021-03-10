import React, { useState } from 'react';
import { JobCard } from 'components/JobCard';
import { StyledJobCollection } from './styles';
import { Col, Row } from 'antd';
import { JobInfo } from '../JobInfo';


interface JobCollectionProps {
    
}

export const JobCollection: React.FC<JobCollectionProps> = (props) => { 

    console.log('PROPS', props)
    const [show, setShow] = useState(false);

    return (
        <>
        <StyledJobCollection>
            <div 
            className='content-main-container'
            >
            <Row gutter={[{ sm: 8, md: 10, lg: 12, xl: 12 }, { md: 2, lg: 4, xl: 10 }]} 
            >
            <Col span={8} md={8} sm={12} xs={24}>
                <JobCard />
            </Col>
            <Col span={8} md={8} sm={12} xs={24}>
                <JobCard />
            </Col>
            <Col span={8} md={8} sm={12} xs={24}>
                <JobCard />
            </Col>
            <Col span={8} md={8} sm={12} xs={24}>
                <JobCard />
            </Col>
            <Col span={8} md={8} sm={12} xs={24}>
                <JobCard />
            </Col> 
            <Col span={8} md={8} sm={12} xs={24}>
                <JobCard />
            </Col>
            <Col span={8} md={8} sm={12} xs={24}>
                <JobCard />
            </Col>
            <Col span={8} md={8} sm={12} xs={24}>
                <JobCard />
            </Col>
            <Col span={8} md={8} sm={12} xs={24}>
                <JobCard />
            </Col>
            <Col span={8} md={8} sm={12} xs={24}>
                <JobCard />
            </Col>
            <Col span={8} md={8} sm={12} xs={24}>
                <JobCard />
            </Col>
            <Col span={8} md={8} sm={12} xs={24}>
                <JobCard />
            </Col>
            <Col span={8} md={8} sm={12} xs={24}>
                <JobCard />
            </Col>
            <Col span={8} md={8} sm={12} xs={24}>
                <JobCard />
            </Col>
            <Col span={8} md={8} sm={12} xs={24}>
                <JobCard />
            </Col>
            </Row>
            </div>
        </StyledJobCollection>
        <JobInfo show={show} /> 
        </>
    );
};