import React, { useState, useEffect } from 'react';
import { JobCard } from 'components/JobCard';
import { StyledJobCollection } from './styles';
import { Col, notification, Row } from 'antd';
import { JobInfoDesktop } from 'components/JobInfoDesktop';
import JobInfoModal from 'components/JobInfoModal';
import { Alert } from 'antd';



interface JobCollectionProps {
    loading?: boolean;
    error?: boolean;
};


export const JobCollection: React.FC<JobCollectionProps> = (props) => { 
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
        if(width >= 1440) {
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

    const errorMessage = () => {
        notification.info({
            style: {
                backgroundColor: "#CF6679",
                borderRadius: "10px",
            },
            message: <p style={{color: "#ECECED" }}>Server error</p>,
            description: "Something went wrong, please try again.",
            placement: 'bottomLeft',
            duration: 2
        });
    };
    
    useEffect(() => {
    }, [width])


    const { error, loading } = props;
    return (
        <StyledJobCollection show={show} error={error}>
            { error ? 
            <>
            <div className="error__vector">
                {/* <Alert message="Something went wrong" type="error"/> */}
                {errorMessage()}
                <img src="./fatal_error.png" />
                <p>Illustration by <a href="https://icons8.com/illustrations/author/5dca95ef01d036001426e2bc">Ivan Haidutski</a> from <a href="https://icons8.com/illustrations">Ouch!</a></p>
            </div>
            </>
            :
            <div className='desktop-container'>
            <div 
            className='job-collection-container'
            >
                <Row 
                gutter={[{ sm: 8, md: 10, lg: 12, xl: 12 }, { md: 2, lg: 4, xl: 10 }]}  
                >
                {Object.values(props).map((job: object) => ( 
                    <Col span={8} xs={24} sm={24} md={8} lg={show ? 24 : 8 } onClick={() => handleJobInfoView(job)} >
                    <JobCard jobDetails={job} loading={loading} />
                </Col>
                ))}
                </Row>
            </div>
        { show ? <JobInfoDesktop show={show} close={handleClose} jobDetails={viewJob} /> : null}
        </div>
        }
        <JobInfoModal onCancel={handleCancel} onOk={handleOk} showModal={showModal} visible={isModalVisible} jobDetails={viewJob} />
        </StyledJobCollection>
    );
};