import React from 'react';

//Import components
import Heading from "../../Layout/Heading";
import HomeContent from "./HomeContent";

const Home = () => {
    const heading = "Home";
    const loremIpsum = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Ipsa, facere! Non commodi iusto impedit pariatur, ipsum 
                        molestias praesentium reiciendis explicabo quis alias 
                        dolorem minus a nobis possimus! Qui, voluptatem iure?`;

    return (
        <div>
            <Heading title={heading} />
            <HomeContent text={loremIpsum} />
        </div>
    );
}

export default Home;
