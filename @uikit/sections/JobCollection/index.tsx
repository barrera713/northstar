import React, { useState } from 'react';
import { JobCard } from 'components/JobCard';
import { StyledJobCollection, DesktopContainer } from './styles';
import { Col, Row } from 'antd';
import { JobInfo } from '../../../components/JobInfo';


interface JobCollectionProps {
    
}

export const JobCollection: React.FC<JobCollectionProps> = (props) => { 

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(!show)
    };

    // create flex wrap container
    // flex job info
    // create state for display
    return (
        <DesktopContainer>
        <StyledJobCollection show={show}>
            <div 
            className='job-collection-container'
            >
            <Row 
            gutter={[{ sm: 8, md: 10, lg: 12, xl: 12 }, { md: 2, lg: 4, xl: 10 }]}  
            >
            <Col span={8} xs={24} sm={12} md={8} lg={show ? 24 : 8} onClick={() => setShow(!show)}>
                <JobCard />
            </Col>
            <Col span={8} xs={24} sm={12} md={8} lg={show ? 24 : 8} onClick={() => setShow(!show)}>
                <JobCard />
            </Col>
            <Col span={8} xs={24} sm={12} md={8} lg={show ? 24 : 8} onClick={() => setShow(!show)}>
                <JobCard />
            </Col>
            <Col span={8} xs={24} sm={12} md={8} lg={show ? 24 : 8} onClick={() => setShow(!show)}>
                <JobCard />
            </Col>
            <Col span={8} xs={24} sm={12} md={8} lg={show ? 24 : 8} onClick={() => setShow(!show)}>
                <JobCard />
            </Col> 
            <Col span={8} xs={24} sm={12} md={8} lg={show ? 24 : 8} onClick={() => setShow(!show)}>
                <JobCard />
            </Col>
            <Col span={8} xs={24} sm={12} md={8} lg={show ? 24 : 8} onClick={() => setShow(!show)}>
                <JobCard />
            </Col>
            <Col span={8} xs={24} sm={12} md={8} lg={show ? 24 : 8} onClick={() => setShow(!show)}>
                <JobCard />
            </Col>
            <Col span={8} xs={24} sm={12} md={8} lg={show ? 24 : 8} onClick={() => setShow(!show)}>
                <JobCard />
            </Col>
            <Col span={8} xs={24} sm={12} md={8} lg={show ? 24 : 8} onClick={() => setShow(!show)}>
                <JobCard />
            </Col>
            <Col span={8} xs={24} sm={12} md={8} lg={show ? 24 : 8} onClick={() => setShow(!show)}>
                <JobCard />
            </Col>
            <Col span={8} xs={24} sm={12} md={8} lg={show ? 24 : 8} onClick={() => setShow(!show)}>
                <JobCard />
            </Col>
            <Col span={8} xs={24} sm={12} md={8} lg={show ? 24 : 8} onClick={() => setShow(!show)}>
                <JobCard />
            </Col>
            <Col span={8} xs={24} sm={12} md={8} lg={show ? 24 : 8} onClick={() => setShow(!show)}>
                <JobCard />
            </Col>
            <Col span={8} xs={24} sm={12} md={8} lg={show ? 24 : 8} onClick={() => setShow(!show)}>
                <JobCard />
            </Col>
            </Row>
            </div>
        <div
        className='job-info-container'>
        </div>
        </StyledJobCollection>
        { show ? <JobInfo show={show} close={handleClose}/> : null}
        </DesktopContainer>
    );
};