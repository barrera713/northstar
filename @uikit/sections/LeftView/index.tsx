import React, { useState } from 'react';
import { StyledLeftView } from './styles';
import { HeartOutlined, SearchOutlined } from '@ant-design/icons'
import { SearchJobForm } from 'components/SearchJobForm';
import SearchFormModal from '../SearchFormModal';
import Link from 'next/link';




interface LeftViewProps {
  handleForm: Function;
}


export const LeftView: React.FC<LeftViewProps> = ({ handleForm }) => { 
  const [width, setWidth] = React.useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);



  React.useLayoutEffect(() => {
    function updateSize() {
        setWidth(window.innerWidth);
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const sendPayloadToForm = (payload) => {
    handleForm(payload);
    handleCancel()
  }

  return (
      <StyledLeftView>
      <div className="header__navTools">
      <Link href="/">
      <h2
      className='title'
      >
        Northstar
      </h2>
      </Link>
      { width >= 1440 ? 
      <div>
      <div 
      className="saved-jobs-container">
      <HeartOutlined className='saved-jobs-icon'/>
      <Link href="saved-jobs">
      <span>Saved jobs</span>
      </Link>
      </div>
      <SearchJobForm handleForm={(payload: object) => handleForm(payload)} />
      </div>
      : 
      <div className="modal__container">
        <SearchOutlined onClick={showModal} />
        <SearchFormModal 
        onCancel={handleCancel} 
        onOk={handleOk} 
        showModal={showModal} 
        visible={isModalVisible} 
        handleForm={(payload: object) => sendPayloadToForm(payload)}
        /> 
         <div 
          className='saved-jobs-container'>
          <HeartOutlined className='saved-jobs-icon'/>
          <Link href="/saved-jobs">
          <span>
            Saved jobs
          </span>
          </Link>
          </div>
      </div>
        }
      </div>
    </StyledLeftView>
  )
}