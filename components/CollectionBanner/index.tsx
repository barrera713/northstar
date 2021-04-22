import { FilterStyles } from './styles';
import React, { useState, useEffect } from 'react';


interface BannerProps {
    savedJobs?: boolean;
    defaultJobs: boolean;
    searchedJobs: [];
}

export const CollectionBanner: React.FC<BannerProps> = ({ searchedJobs, savedJobs, defaultJobs }) => { 

    const updateBanner = savedJobs ? "Your saved jobs" : `Showing ${Object.keys(searchedJobs).length} related jobs`;

    return (
        <FilterStyles>
            <div
            className='main-container' >
                { defaultJobs ? 
                <h3 className='title'>
                    Newest full-time roles 
                </h3> :
                <h3 className='title'>{updateBanner}</h3>
                }
            </div>
        </FilterStyles>
    );
};