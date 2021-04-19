import { FilterStyles } from './styles';
import React from 'react';


interface BannerProps {
    savedJobs?: boolean;
}

export const CollectionBanner: React.FC<BannerProps> = (props) => { 

    const bannerTitle = props.savedJobs ? "Your saved jobs" : `Showing ${Object.keys(props).length} related jobs`;

    return (
        <FilterStyles>
            <div
            className='main-container' >
                <h3 className='title'>   
                    {bannerTitle}
                </h3>
            </div>
        </FilterStyles>
    );
};