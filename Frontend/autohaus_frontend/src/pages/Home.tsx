import React from 'react';
import Kunden from "../components/Kunden";
import Auto from "../components/Auto";

const Home = (props: { isLoggedIn: boolean }) => {
    // Überprüfen, ob der Benutzer eingeloggt ist
    if (!props.isLoggedIn) {
        // Wenn nicht eingeloggt, zeige nichts an
        return <div>You are not logged in</div>;
    }

    return (
        <>
            <div>
                Hi, you are logged in!
            </div>
            <div>
                <Kunden></Kunden>
            </div>

            <div>
                <Auto></Auto>
            </div>
        </>
    );
};

export default Home;
