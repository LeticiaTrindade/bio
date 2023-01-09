import React from "react";
import Profile from '../Profile';
import Pessoal from '../Pessoal';
import Social from '../Social';

function Home(){
    return(
        <section className='container col-md-5'>
        <Profile/>
        <Pessoal/>
        <Social/>
        </section>
    );
}

export default Home;