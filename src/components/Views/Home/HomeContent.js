import React from 'react';

const HomeContent = ({text})=> {
   
    return (
        <div className="homeContent">
            <div className="homeContent__text">{text}</div>
            <div className="homeContent__text">{text}</div>
            <div className="homeContent__text">{text}</div>   
        </div>
    );
}


export default HomeContent;

