

import Header from '../partials/Header';
import Client from "../partials/Client";
import Lead from "../partials/Lead";
import Self from "../partials/Self";

function Home({ handleChange , locUser , err ,  handelSubmitPatch , setquezArry , quezArry }) {
   


    let component;
    if (locUser.role === 'client') {
        component = <Client user={locUser} err={err} handleChange={handleChange}   handelSubmitPatch={handelSubmitPatch} quezArry={quezArry} setquezArry={setquezArry} />;
    } else if (locUser.role === 'lead') {
        component = <Lead user={locUser}  err={err}  handleChange={handleChange}  handelSubmitPatch={handelSubmitPatch}  quezArry={quezArry} setquezArry={setquezArry}/>;
    } else if (locUser.role === 'self') {
        component = <Self user={locUser}  err={err} handleChange={handleChange}   handelSubmitPatch={handelSubmitPatch}  quezArry={quezArry} setquezArry={setquezArry} />;
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