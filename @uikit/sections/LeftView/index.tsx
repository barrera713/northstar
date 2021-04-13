import React, { useState, useEffect } from 'react';
import { StyledLeftView } from './styles';
import { HeartOutlined } from '@ant-design/icons'
import { SearchJobForm } from 'components/SearchForm';

interface LeftViewProps {
  handleForm: Function;
}


export const LeftView: React.FC<LeftViewProps> = ({handleForm}) => { 
  const [isDesktop, setDesktop] = useState(Boolean);

  const updateMedia = () => {
    setDesktop(window.innerWidth <= 1200);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
      <StyledLeftView isDesktop={isDesktop}>
      <h2
      className='title'
      > StriveDash
      </h2>
      <div 
      hidden={isDesktop}
      className='saved-jobs-container'>
      <HeartOutlined className='saved-jobs-icon'/>
      <a>Saved jobs</a>
      </div>
      <SearchJobForm handleForm={(payload) => handleForm(payload)} />
    </StyledLeftView>
  )
}