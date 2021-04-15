import React, { useState, useEffect } from 'react';
import { StyledLeftView } from './styles';
import { HeartOutlined, SearchOutlined } from '@ant-design/icons'
import { SearchJobForm } from 'components/SearchJobForm';
import SearchFormModal from '../SearchFormModal';



interface LeftViewProps {
  handleForm: Function;
}


export const LeftView: React.FC<LeftViewProps> = ({handleForm}) => { 
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

  return (
      <StyledLeftView>
      <div className="header__navTools">
      <h2
      className='title'
      > StriveDash
      </h2>
      { width >= 1440 ? 
      <div>
      <div 
      className='saved-jobs-container'>
      <HeartOutlined className='saved-jobs-icon'/>
      <span>Saved jobs</span>
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
        handleForm={(payload: object) => handleForm(payload)}
        /> 
         <div 
          className='saved-jobs-container'>
          <HeartOutlined className='saved-jobs-icon'/>
          <span>Saved jobs</span>
          </div>
      </div>
        }
      </div>
    </StyledLeftView>
  )
}