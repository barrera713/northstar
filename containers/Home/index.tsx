import React from 'react';
import { LeftView } from '@uikit/layouts/LeftView';
import { Layout } from 'antd';
import { StyledHomeContainer } from './styles';
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
          Content
        </Content>
        </div>
      </div>
      </StyledHomeContainer>
  </Layout>
  )
}