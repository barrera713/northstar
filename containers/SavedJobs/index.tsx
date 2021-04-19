import { JobCollection } from '@uikit/sections/JobCollection';
import { Button } from 'antd';
import { CollectionBanner } from 'components/CollectionBanner';
import Link from 'next/link';
import React from 'react';
import { SavedJobsStyles } from './styles';
import { Layout } from 'antd';
import { LeftView } from '@uikit/sections/LeftView';
const { Content } = Layout;




interface SavedJobs {

}


export const SavedJobsContainer: React.FC<SavedJobs> = () => {
    return (
        <SavedJobsStyles>
            <main className="main-container">
                <h2 className="title">StriveDash</h2>
                <div className='main-content'>
                <Content>
                    <CollectionBanner savedJobs={true} />
                    <JobCollection />
                </Content>
                </div>
            </main>
        </SavedJobsStyles>
    );
};