import React from 'react';
import { HeartOutlined } from '@ant-design/icons';
import { saveInLocalStorage } from 'utils/saveJob';
import { notification } from 'antd';
import { SaveJobStyles } from './styles';

interface SaveJobProps {
    savedJob: object;
}

const SaveJob: React.FC<SaveJobProps> = (props) => {

    console.log('SAVE JOB', props)
    const handleSaveJob = (job: object) => {
        saveInLocalStorage(job);
        openNotification()
    }

    const openNotification = ()=> {
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
                onClick={() => handleSaveJob(props.savedJob)}
                className='card-save-button'
            />
            </div>
        </SaveJobStyles>
    )
};


export default SaveJob;