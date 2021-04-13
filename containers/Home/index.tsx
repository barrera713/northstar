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


  // const [hideScroll, setHideScroll] = useState(false);
  const [ data, setData ] = useState();

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

  interface FetchParams {
    description?: string;
    location?: string;
    fullTime?: boolean;
  }

  const handleSearchForm = async (params?: FetchParams) => {

    /*
    base URL = https://jobs.github.com/positions.json?
    add params to URL
    i.e => if description "ruby" was submitted, we add "search=ruby" to the base url
    repeat logic for all other params IF they exist
    */
   const { description, location, fullTime } = params;
   let BASE = "https://jobs.github.com/positions.json?";

   console.log({ "DESC": description, "location": location, "fulltime": fullTime });
    if(description !== undefined) {
      BASE += `description=${description}`;
    };

    if(fullTime === true) {
      BASE += `&full_time=true`;
    };

    if(location !== undefined) {
      BASE += `&location=${location}`
    }

    
    console.log('FINAL', BASE)
    const searchJobs = await fetch(`https://cors-anywhere.herokuapp.com/${BASE}`);
    const json = await searchJobs.json();
    console.log("[RES]", json);
    setData(json);
  }

  let collection;
  if(!data) {
    collection = props;
  } else {
    collection = data;
  }
  
  return (
  <Layout>
    <StyledHomeContainer>
    <main className='main-container'>
      <div className='left-view'>
      <LeftView handleForm={(payload) => handleSearchForm(payload)}  />
      </div>
      <div className='main-content' id='test'>
      <Content>
          <Filter {...collection} />
          <JobCollection {...collection} /> 
      </Content>
      </div>
    </main>
    </StyledHomeContainer>
  </Layout>
  )
}