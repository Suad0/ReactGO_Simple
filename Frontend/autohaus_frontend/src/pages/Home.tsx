import React from 'react';
import Kunden from "../components/Kunden";

const Home = (props: { name: string }) => {
    return (
        <>
            <div>
                {props.name ? 'Hi ' + props.name : 'You are not logged in'}
            </div>
            
            <div>

                <Kunden></Kunden>

            </div>

        </>
    );
};

export default Home;