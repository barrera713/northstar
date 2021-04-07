import React from 'react';
import { HeartOutlined } from '@ant-design/icons';
import { saveInLocalStorage } from 'utils/saveJob';
import { notification } from 'antd';
import { SaveJobStyles } from './styles';

interface SaveJobProps {
    savedJob: object;
}

const SaveJob: React.FC<SaveJobProps> = (props) => {

    const handleSaveJob = (job: object, e: any) => {
        e.stopPropagation();
        saveInLocalStorage(job);
        openNotification()
    }

    const openNotification = () => {
        console.log('notification')
        notification.info({
          message: `Successfully saved! :)`,
          description: "Navigate to 'Saved jobs' to view all saved jobs.",
            placement: 'bottomLeft'
        });
    };

    return (
        <SaveJobStyles>
            <div className="save-job-button">
            <HeartOutlined
                onClick={e => handleSaveJob(props.savedJob, e)}
                className='card-save-button'
            />
            </div>
        </SaveJobStyles>
    )
};


export default SaveJob;