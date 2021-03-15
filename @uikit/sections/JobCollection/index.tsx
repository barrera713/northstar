import React, { useState } from 'react';
import { JobCard } from 'components/JobCard';
import { StyledJobCollection } from './styles';
import { Col, Row } from 'antd';
import { JobInfoDesktop } from '../../../components/JobInfoDesktop';
import JobInfoModal from 'components/JobInfoModal';



interface JobCollectionProps {
    
}

export const JobCollection: React.FC<JobCollectionProps> = (props) => { 
    const [width, setWidth] = React.useState(0);
    const [show, setShow] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    React.useLayoutEffect(() => {
        function updateSize() {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, [])

    const handleJobInfoView = () => {
        if(width >= 1120) {
            setShow(!show)
        } else {
            showModal();
        }
    }

    const handleClose = () => {
        setShow(!show)
    };


    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
   
    return (
        <StyledJobCollection show={show}>
            <div className='desktop-container'>
            <div 
            className='job-collection-container'
            >
            <Row 
            gutter={[{ sm: 8, md: 10, lg: 12, xl: 12 }, { md: 2, lg: 4, xl: 10 }]}  
            >
            <Col span={8} xs={24} sm={24} md={8} lg={show ? 24 : 8 } onClick={handleJobInfoView}>
                <JobCard />
            </Col>
            <Col span={8} xs={24} sm={24} md={8} lg={show ? 24 : 8 } onClick={handleJobInfoView}>
                <JobCard />
            </Col>
            <Col span={8} xs={24} sm={24} md={8} lg={show ? 24 : 8 } onClick={handleJobInfoView}>
                <JobCard />
            </Col>
            <Col span={8} xs={24} sm={24} md={8} lg={show ? 24 : 8 } onClick={handleJobInfoView}>
                <JobCard />
            </Col>
            <Col span={8} xs={24} sm={24} md={8} lg={show ? 24 : 8 } onClick={handleJobInfoView}>
                <JobCard />
            </Col> 
            <Col span={8} xs={24} sm={24} md={8} lg={show ? 24 : 8 } onClick={handleJobInfoView}>
                <JobCard />
            </Col>
            <Col span={8} xs={24} sm={24} md={8} lg={show ? 24 : 8 } onClick={handleJobInfoView}>
                <JobCard />
            </Col>
            <Col span={8} xs={24} sm={24} md={8} lg={show ? 24 : 8 } onClick={handleJobInfoView}>
                <JobCard />
            </Col>
            <Col span={8} xs={24} sm={24} md={8} lg={show ? 24 : 8 } onClick={handleJobInfoView}>
                <JobCard />
            </Col>
            <Col span={8} xs={24} sm={24} md={8} lg={show ? 24 : 8 } onClick={handleJobInfoView}>
                <JobCard />
            </Col>
            <Col span={8} xs={24} sm={24} md={8} lg={show ? 24 : 8 } onClick={handleJobInfoView}>
                <JobCard />
            </Col>
            <Col span={8} xs={24} sm={24} md={8} lg={show ? 24 : 8 } onClick={handleJobInfoView}>
                <JobCard />
            </Col>
            <Col span={8} xs={24} sm={24} md={8} lg={show ? 24 : 8 } onClick={handleJobInfoView}>
                <JobCard />
            </Col>
            <Col span={8} xs={24} sm={24} md={8} lg={show ? 24 : 8 } onClick={handleJobInfoView}>
                <JobCard />
            </Col>
            <Col span={8} xs={24} sm={24} md={8} lg={show ? 24 : 8 } onClick={handleJobInfoView}>
                <JobCard />
            </Col>
            </Row>
            </div>
        { show ? <JobInfoDesktop show={show} close={handleClose}/> : null}
        </div>
        <JobInfoModal onCancel={handleCancel} onOk={handleOk} showModal={showModal} visible={isModalVisible} />
        </StyledJobCollection>
    );
};