import React from 'react';

//Import components
import Heading from '../../Layout/Heading';
import NewsList from './NewsList';

 const News = () => {
    const heading = "News";
    return (
        <>
           <Heading title={heading} />
           <NewsList /> 
        </>
    )
}

export default News;