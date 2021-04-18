import { FilterStyles } from './styles';
import React from 'react';

interface BannerProps {}

export const CollectionBanner: React.FC<BannerProps> = (props) => { 
    
    // console.log('FILTER PROPS', Object.keys(props).length)
    return (
        <FilterStyles>
            <div
            className='main-container' >
                <h2 className='title'>Showing {Object.keys(props).length} jobs</h2>
            </div>
        </FilterStyles>
    )
}