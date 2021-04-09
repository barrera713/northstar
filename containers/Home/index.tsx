import React, { useEffect, useState } from 'react';
import { LeftView } from '@uikit/sections/LeftView';
import { JobCollection } from '@uikit/sections/JobCollection';
import { Layout } from 'antd';
import { fetcher } from 'utils/fetchAPI';
import { StyledHomeContainer } from './styles';
import { Filter } from 'components/Filter';
import useSWR from 'swr';
const { Content } = Layout;





interface HomeContainerProps {
  
}


export const HomeContainer: React.FC<HomeContainerProps> = (props) => { 


  // const [hideScroll, setHideScroll] = useState(false);

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



  // API CALL BUG: is coming from GIT, must set proxy to bypass cors
  const handleSearchForm = async () => {
    // const searchJobs = await fetch("https://api.github.com/repos/vercel/next.js");
    // const json = await searchJobs.json();
    // console.log("[RES]", json);
    
  }

  return (
  <Layout>
    <StyledHomeContainer>
    <main className='main-container'>
      <div className='left-view'>
      <LeftView handleForm={handleSearchForm}  />
      </div>
      <div className='main-content' id='test'>
      <Content>
          <Filter {...props} />
          <JobCollection {...props} /> 
      </Content>
      </div>
    </main>
    </StyledHomeContainer>
  </Layout>
  )
}