import React, { useState } from 'react';
import { JobCard } from 'components/JobCard';
import { StyledJobCollection } from './styles';
import { Col, notification, Row } from 'antd';
import { JobInfoDesktop } from '../../../components/JobInfoDesktop';
import JobInfoModal from 'components/JobInfoModal';
import { GetStaticProps, InferGetStaticPropsType } from 'next';



export const JobCollection = (props) => { 
    const [width, setWidth] = React.useState(0);
    const [show, setShow] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [viewJob, setViewJob] = useState(Object);

    React.useLayoutEffect(() => {
        function updateSize() {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    const handleJobInfoView = (job: object) => {
        setViewJob(job);    
        if(width >= 1120) {
            setShow(true)
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

    const openNotification = ()=> {
        notification.info({
          message: `Successfully saved! :)`,
          description: "Navigate to 'Saved jobs' to view all saved jobs.",
            placement: 'bottomLeft'
        });
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
            {Object.values(props).map((job: object) => ( 
            <Col span={8} xs={24} sm={24} md={8} lg={show ? 24 : 8 } onClick={() => handleJobInfoView(job)} >
                <JobCard jobDetails={job}  />
            </Col>
            ))}
            </Row>
            </div>
        { show ? <JobInfoDesktop show={show} close={handleClose} jobDetails={viewJob} /> : null}
        </div>
        <JobInfoModal onCancel={handleCancel} onOk={handleOk} showModal={showModal} visible={isModalVisible} jobDetails={viewJob} />
        </StyledJobCollection>
    );
};