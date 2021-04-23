import { JobCollection } from '@uikit/sections/JobCollection';
import { Empty } from 'antd';
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
    const [ empty, setEmpty ] = useState(Boolean);
    useEffect(() => {
        if(localStorage.getItem("saved")) {
            setSavedCollection(JSON.parse(localStorage.getItem("saved")));
            setEmpty(false)
        } else {
            setEmpty(true)
        }
    }, []);

    return (
        <Layout>

            <SavedJobsStyles>
            <main className="main-container">
                <div className="title__searchLink">
                    <Link href="/">
                        <h2 className="title">Northstar</h2>
                    </Link>
                    <Link href="/">back to search</Link>
                </div>
                <div className='main-content'>
                <Content>
                    <div className="collection__banner">
                        <CollectionBanner savedJobs={true} />
                    </div>
                    {
                    empty ? 
                    <Empty />
                    :
                    <JobCollection {...savedCollection} />
                    }
                </Content>
                </div>
            </main>
        </SavedJobsStyles>
        </Layout>
    );
};