import { JobCollection } from '@uikit/sections/JobCollection';
import { Button } from 'antd';
import { CollectionBanner } from 'components/CollectionBanner';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { SavedJobsStyles } from './styles';
import { Layout } from 'antd';
const { Content } = Layout;




interface SavedJobs {

}


export const SavedJobsContainer: React.FC<SavedJobs> = () => {

    const [ savedCollection, setSavedCollection ] = useState()
    useEffect(() => {
        if(localStorage.getItem("saved") !== undefined) {
            setSavedCollection(JSON.parse(localStorage.getItem("saved")));
        }
    }, [ ]);

    return (
        <SavedJobsStyles>
            <main className="main-container">
                <div className="title__searchLink">
                    <h2 className="title">StriveDash</h2>
                    <Link href="/">back to search</Link>
                </div>
                <div className='main-content'>
                <Content>
                    <div className="collection__banner">
                        <CollectionBanner savedJobs={true} />
                    </div>
                    <JobCollection {...savedCollection} />
                </Content>
                </div>
            </main>
        </SavedJobsStyles>
    );
};