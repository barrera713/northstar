import React, { useEffect, useState } from 'react';
import { LeftView } from '@uikit/sections/LeftView';
import { JobCollection } from '@uikit/sections/JobCollection';
import { Layout } from 'antd';
import { StyledHomeContainer } from './styles';
import { Filter } from 'components/Filter';
import { getStaticProps } from 'pages';
const { Content } = Layout;


interface HomeContainerProps {
  
}


export const HomeContainer: React.FC<HomeContainerProps> = (props) => { 


  // const [hideScroll, setHideScroll] = useState(false);
  const [ data, setData ] = useState();
  const [ loading, setLoading ] = useState(Boolean);

 
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

    if(description !== undefined) {
      BASE += `description=${description}`;
    };

    if(fullTime === true) {
      BASE += `&full_time=true`;
    };

    if(location !== undefined) {
      BASE += `&location=${location}`
    }

    const searchJobs = await fetch(`https://cors-anywhere.herokuapp.com/${BASE}`);
    setLoading(true);
    if(searchJobs.status === 200) {
      const json = await searchJobs.json();
      setLoading(false);
      setData(json);
    } else {
      // error message
    }
  }

  let collection;
  if(data === undefined) {
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
          <JobCollection {...collection} loading={loading} /> 
      </Content>
      </div>
    </main>
    </StyledHomeContainer>
  </Layout>
  )
}