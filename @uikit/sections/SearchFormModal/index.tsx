import React from 'react';
import { Modal } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { SearchJobForm } from 'components/SearchJobForm';







interface SearchFormModalProps {
    visible: boolean;
    onCancel: () => void;
    onOk: () => void;
    showModal: () => void;
    handleForm: Function;
}

const SearchFormModal: React.FC<SearchFormModalProps> = (props) => {

    return (
        <Modal
        style={{ alignContent: "center" }}
        closeIcon={<CloseOutlined style={{color: "#ECECED" }} />}
        bodyStyle={{ background: "#282828" }}
        visible={props.visible}
        onCancel={props.onCancel}
        footer={false}
        >
            <SearchJobForm handleForm={props.handleForm} />
        </Modal>
    )
}

export default SearchFormModal;