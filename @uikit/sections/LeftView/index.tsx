import React, { useState, useEffect } from 'react';
import { StyledLeftView } from './styles';
import { HeartOutlined } from '@ant-design/icons'
import { SearchJobForm } from 'components/SearchForm';

interface LeftViewProps {
  handleForm: Function;
}


export const LeftView: React.FC<LeftViewProps> = ({handleForm}) => { 
  const [width, setWidth] = React.useState(0);


  React.useLayoutEffect(() => {
    function updateSize() {
        setWidth(window.innerWidth);
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    console.log("WINDOW WIDTH:", width)
  }, [width])

  return (
      <StyledLeftView>
      <h2
      className='title'
      > StriveDash
      </h2>
      { width >= 1440 ? 
      <div>
      <div 
      className='saved-jobs-container'>
      <HeartOutlined className='saved-jobs-icon'/>
      <a>Saved jobs</a>
      </div>
      <SearchJobForm handleForm={(payload: object) => handleForm(payload)} />
      </div>
      : null }
    </StyledLeftView>
  )
}