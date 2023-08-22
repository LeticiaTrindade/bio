import React from "react";
import './style.css';
import Avatar from '../images/avatar.webp';

function Profile(){
    return(
        <section className="profile">
            <div>
            <img className="img-profile" src={Avatar} />
            </div>
            <h1 className="img-h1">Letícia Trindade</h1>
            <h2 className="img-h2">@lelly.dev</h2>
        </section>
    );
}

export default Profile;