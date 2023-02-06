import React from 'react';

import Header from '../partials/Header';
import Client from "../partials/Client";
import Lead from "../partials/Lead";
import Self from "../partials/Self";
import Thank from "../partials/Thank";

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-grey-new">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <Client />
        <Lead />
        <Self />
        <Thank />

      </main>
    </div>
  );
}

export default Home;