import { FilterStyles } from './styles';
import React from 'react';

interface FilterProps {}

export const Filter: React.FC<FilterProps> = (props) => { 
    
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