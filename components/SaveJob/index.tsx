import React, { useState, useEffect  } from 'react';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { saveInLocalStorage, alreadySaved, removeFromLocalStorage } from 'utils/saveJob';
import { notification } from 'antd';
import { SaveJobStyles } from './styles';

interface SaveJobProps {
    savedJob: object;
}

const SaveJob: React.FC<SaveJobProps> = (props) => {

    const [ save, setSave ] = useState(Boolean);

    useEffect(() => {
        if(alreadySaved(props.savedJob) === false) {
            setSave(false)
        } else {
            setSave(true)
        }
    }, [ save ])

    const handleSaveJob = (job: object, e: any) => {
        e.stopPropagation();
        saveInLocalStorage(job);
        setSave(true);
        openNotification()
        
    }

    const handleUnsaveJob = (job: object, e: any) => {
        e.stopPropagation();
        removeFromLocalStorage(job)
        setSave(false);
    }

    const openNotification = () => {
        notification.info({
          message: `Successfully saved! :)`,
          description: "Navigate to 'Saved jobs' to view all saved jobs.",
            placement: 'bottomLeft'
        });
    };

    return (
        <SaveJobStyles>
            <div className="save-job-button">
            { save === false ? 
            <HeartOutlined
                onClick={e => handleSaveJob(props.savedJob, e)}
                className='card-save-button'
            />
            :
            <HeartFilled onClick={e => handleUnsaveJob(props.savedJob, e)} />
            }
            </div>
        </SaveJobStyles>
    )
};


export default SaveJob;