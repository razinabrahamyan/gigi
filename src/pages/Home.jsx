import React, {useEffect} from 'react';

import Header from '../partials/Header';
import Client from "../partials/Client";
import Lead from "../partials/Lead";
import Self from "../partials/Self";
import Thank from "../partials/Thank";
import Review from "../partials/Review";

function Home({user}) {
    const locUser = JSON.parse(localStorage.getItem("user"))


    let component;
    if (locUser.role === 'client') {
        component = <Client user={locUser}/>;
    } else if (locUser.role === 'lead') {
        component = <Lead user={locUser}/>;
    } else if (locUser.role === 'self') {
        component = <Self user={locUser}/>;
    }

    return (
        <div className="flex flex-col min-h-screen overflow-hidden bg-grey-new">
            <Header/>
            <main className="flex-grow">
                {component}
            </main>
        </div>
    );
}

export default Home;