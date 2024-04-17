import React from 'react';
import Kunden from "../components/Kunden";

const Home = (props: { emailName: string }) => {
    return (
        <>
            <div>
                {props.emailName ? 'Hi ' + props.emailName : 'You are not logged in'}
            </div>
            
            <div>

                <Kunden></Kunden>

            </div>

        </>
    );
};

export default Home;