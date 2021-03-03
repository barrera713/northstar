import Head from 'next/head'
import React from 'react';
import { LeftView } from '@uikit/layouts/LeftView';
import { Layout } from 'antd';
const { Sider, Content } = Layout;




interface HomeContainerProps {}


export const HomeContainer: React.FC<HomeContainerProps> = ({}) => { 
    return (
        <Layout>
        <Head>
          <title>Strivedash</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Sider>
        <LeftView />
        </Sider>
          <Content>
          <main>
            <h1>
              Main Page
            </h1>
          </main>
          </Content>
        <footer>
         Footer
        </footer>
      </Layout>
    )
}