import React, { useState } from 'react';
import { JobCard } from 'components/JobCard';
import { StyledJobCollection, DesktopContainer } from './styles';
import { Col, Row, Modal } from 'antd';
import { JobInfo } from '../../../components/JobInfoDesktop';
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
        if(width >= 1200) {
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
        <DesktopContainer>
        <StyledJobCollection show={show}>
            <div 
            className='job-collection-container'
            >
            <Row 
            gutter={[{ sm: 8, md: 10, lg: 12, xl: 12 }, { md: 2, lg: 4, xl: 10 }]}  
            >
            <Col span={8} xs={24} sm={12} md={8} lg={show ? 24 : 8 } onClick={handleJobInfoView}>
                <JobCard />
            </Col>
            <Col span={8} xs={24} sm={12} md={8} lg={show ? 24 : 8 } onClick={handleJobInfoView}>
                <JobCard />
            </Col>
            <Col span={8} xs={24} sm={12} md={8} lg={show ? 24 : 8 } onClick={handleJobInfoView}>
                <JobCard />
            </Col>
            <Col span={8} xs={24} sm={12} md={8} lg={show ? 24 : 8 } onClick={handleJobInfoView}>
                <JobCard />
            </Col>
            <Col span={8} xs={24} sm={12} md={8} lg={show ? 24 : 8 } onClick={handleJobInfoView}>
                <JobCard />
            </Col> 
            <Col span={8} xs={24} sm={12} md={8} lg={show ? 24 : 8 } onClick={handleJobInfoView}>
                <JobCard />
            </Col>
            <Col span={8} xs={24} sm={12} md={8} lg={show ? 24 : 8 } onClick={handleJobInfoView}>
                <JobCard />
            </Col>
            <Col span={8} xs={24} sm={12} md={8} lg={show ? 24 : 8 } onClick={handleJobInfoView}>
                <JobCard />
            </Col>
            <Col span={8} xs={24} sm={12} md={8} lg={show ? 24 : 8 } onClick={handleJobInfoView}>
                <JobCard />
            </Col>
            <Col span={8} xs={24} sm={12} md={8} lg={show ? 24 : 8 } onClick={handleJobInfoView}>
                <JobCard />
            </Col>
            <Col span={8} xs={24} sm={12} md={8} lg={show ? 24 : 8 } onClick={handleJobInfoView}>
                <JobCard />
            </Col>
            <Col span={8} xs={24} sm={12} md={8} lg={show ? 24 : 8 } onClick={handleJobInfoView}>
                <JobCard />
            </Col>
            <Col span={8} xs={24} sm={12} md={8} lg={show ? 24 : 8 } onClick={handleJobInfoView}>
                <JobCard />
            </Col>
            <Col span={8} xs={24} sm={12} md={8} lg={show ? 24 : 8 } onClick={handleJobInfoView}>
                <JobCard />
            </Col>
            <Col span={8} xs={24} sm={12} md={8} lg={show ? 24 : 8 } onClick={handleJobInfoView}>
                <JobCard />
            </Col>
            </Row>
            </div>
        <div
        className='job-info-container'>
        </div>
        </StyledJobCollection>
        { show ? <JobInfo show={show} close={handleClose}/> : null}
        <JobInfoModal onCancel={handleCancel} onOk={handleOk} showModal={showModal} visible={isModalVisible} />
        </DesktopContainer>
    );
};