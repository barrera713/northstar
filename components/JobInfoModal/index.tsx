import React from 'react';
import { Modal } from 'antd';
import { JobModalStyles } from './styles';
import { CloseOutlined } from '@ant-design/icons';
import { validCompanyUrl } from 'utils/tools';
import SaveJob from 'components/SaveJob';






interface JobInfoModalProps {
    visible: boolean
    onCancel: () => void;
    onOk: () => void;
    showModal: () => void;
    jobDetails: {
        company?: string,
        company_logo?: string,
        company_url?: string,
        created_at?: string,
        description?: string,
        how_to_apply?: string,
        location?: string,
        title?: string,
        type?: string,
        url?: string
    };
}

const JobInfoModal: React.FC<JobInfoModalProps> = (props) => {
    const { company, location, title, company_logo, company_url, type, created_at, how_to_apply, description } = props.jobDetails;
    return (
        <JobModalStyles>
        <Modal
        closeIcon={<CloseOutlined style={{color: '#ECECED'}} />}
        bodyStyle={{background: '#282828'}}
        width={800}
         visible={props.visible}
         onCancel={props.onCancel}
         footer={false}
        >
            <div style={{display: 'flex', marginBottom: '10px'}}>
                <img src={company_logo} style={{width: '30px', height: '30px'}} />
                <h3 style={{marginLeft: '10px'}}>{title}</h3>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div>
                <p>{company}</p>
                <p>{location}</p>
                <div style={{marginTop: '-5px', marginBottom: '7px'}}>{validCompanyUrl(company_url) ? <a target='_blank' href={company_url}>Company website</a>: <p>Website unavailable :(</p>}</div>
                </div>
                <SaveJob savedJob={props.jobDetails} />
            </div>
            <div>
                <div >
                <h3>How to apply</h3>
                <div dangerouslySetInnerHTML={{__html: how_to_apply }}></div>
                </div>
                <div dangerouslySetInnerHTML={{__html: description}}></div>
                </div>
        </Modal>
        </JobModalStyles>
    )
}

export default JobInfoModal;