import { FilterStyles } from './styles';
import React from 'react';

interface FilterProps {}

export const Filter: React.FC<FilterProps> = ({}) => { 
    
    return (
        <FilterStyles>
            <div
            className='main-container' >
                <h2 className='title'>Showing 42 jobs</h2>
            </div>
        </FilterStyles>
    )
}