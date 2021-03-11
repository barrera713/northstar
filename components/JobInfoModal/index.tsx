import React from 'react';
import { Modal } from 'antd';




interface JobInfoModalProps {
    visible: boolean
    onCancel: () => void;
    onOk: () => void;
    showModal: () => void;
}

const JobInfoModal: React.FC<JobInfoModalProps> = (props) => {
    // const { visible, onCancel, onOk, showModal } = props;
    return (
        <Modal
         visible={props.visible}
         onCancel={props.onCancel}
        >
            Hello!
        </Modal>
    )
}

export default JobInfoModal;