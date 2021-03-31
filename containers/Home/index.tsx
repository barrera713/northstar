import React, { useEffect, useState } from 'react';
import { LeftView } from '@uikit/sections/LeftView';
import { JobCollection } from '@uikit/sections/JobCollection';
import { Layout } from 'antd';
import { StyledHomeContainer } from './styles';
import { Filter } from 'components/Filter';
const { Content } = Layout;





interface HomeContainerProps {

}


export const HomeContainer: React.FC<HomeContainerProps> = (props) => { 

  const [hideScroll, setHideScroll] = useState(false);

  // useEffect(() => { 
  //     const jobContainer = document.getElementById('test');
  //     jobContainer.addEventListener('scroll', () => {
  //       console.log(jobContainer.scrollTop)

  //       if(jobContainer.scrollTop > 80 && window.innerWidth >= 1200) {
  //         // alert('desktop')
  //         setHideScroll(true)
  //       } else if(window.innerWidth < 1200 && jobContainer.scrollTop > 10) { // scrollY = 49
  //         // window.alert('smaller screen')
  //         setHideScroll(true)
  //       } else {
  //         setHideScroll(false)
  //       }
  //   });
  // }, []);


  return (
  <Layout>
    <StyledHomeContainer>
    <div className='main-container'>
      <div className='left-view'>
      <LeftView />
      </div>
      <div className='main-content' id='test'>
      <Content>
          <Filter {...props} />
          <JobCollection {...props} /> 
      </Content>
      </div>
    </div>
    </StyledHomeContainer>
  </Layout>
  )
}
