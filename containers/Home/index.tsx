import React from 'react';
import { LeftView } from '@uikit/sections/LeftView';
import { JobCollection } from '@uikit/sections/JobCollection';
import { Layout } from 'antd';
import { StyledHomeContainer } from './styles';
import { Filter } from 'components/Filter';
const { Content } = Layout;





interface HomeContainerProps {}


export const HomeContainer: React.FC<HomeContainerProps> = ({}) => { 
    return (
    <Layout>
      <StyledHomeContainer>
      <div className='main-container'>
        <div className='left-view'>
          <LeftView />
        </div>
        <div className='main-content'>
        <Content>
          <Filter />
          <JobCollection />
        </Content>
        </div>
      </div>
      </StyledHomeContainer>
  </Layout>
  )
}