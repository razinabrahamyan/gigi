import React, {useEffect} from 'react';

import Header from '../partials/Header';
import Client from "../partials/Client";
import Lead from "../partials/Lead";
import Self from "../partials/Self";
import Thank from "../partials/Thank";
import Review from "../partials/Review";

function Home({user}) {
    let component;
    if (user.role === 'client') {
        component = <Client user={user}/>;
    } else if (user.role === 'lead') {
        component = <Lead user={user}/>;
    } else if (user.role === 'self') {
        component = <Self user={user}/>;
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