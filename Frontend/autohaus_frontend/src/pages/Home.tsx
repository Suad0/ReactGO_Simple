import React from 'react';
import Kunden from "../components/Kunden";

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
            <div className="grid grid-cols-3 gap-4">
                <div className="card col-span-3">
                    <Kunden></Kunden>
                </div>
            </div>
        </>
    );

};

export default Home;
