import { FilterStyles } from './styles';
import React from 'react';

interface BannerProps {}

export const CollectionBanner: React.FC<BannerProps> = (props) => { 
    
    // console.log('FILTER PROPS', Object.keys(props).length)
    return (
        <FilterStyles>
            <div
            className='main-container' >
                <h3 className='title'>Showing {Object.keys(props).length} related jobs</h3>
            </div>
        </FilterStyles>
    )
}