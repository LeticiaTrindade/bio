import React from "react";
import './style.css';
import instagram from '../images/instagram.svg';
import linkedin from '../images/linkedin.svg';
import github from '../images/github.svg';
import discord from '../images/discord.svg';
import twitch from '../images/twitch.svg';
import youtube from '../images/youtube.svg';

function Social() {
    return (
        <>
            <h3>Social</h3>
            <section className="d-flex section" >
                <a href="https://www.instagram.com/lelly.dev/" target="_blank" className="a a-instagram d-flex col-md-6">
                    <img className="icon" src={instagram} />
                    <h4>Instagram</h4>
                </a>

                <a href="https://www.linkedin.com/in/leticiatrindadett/" target="_blank" className="a a-linkedin d-flex col-md-6">
                    <img className="icon" src={linkedin} />
                    <h4>Linkedin</h4>
                </a>

                <a href="https://discord.gg/DMDF7xYe/" target="_blank" className="a a-discord d-flex col-md-6">
                    <img className="icon" src={discord} />
                    <h4>Discord</h4>
                </a>

                <a href="https://github.com/LeticiaTrindade/" target="_blank" className="a a-github d-flex col-md-6">
                    <img className="icon" src={github}/>
                    <h4>Github</h4>
                </a>
                
                <a href="https://www.youtube.com/@leticiatrindadet/" target="_blank" className="a a-youtube d-flex col-md-6">
                    <img className="icon" src={youtube} />
                    <h4>Youtube</h4>
                </a>

                <a href="https://www.twitch.tv/lellyplay/" target="_blank" className="a a-twitch d-flex col-md-6">
                    <img className="icon" src={twitch} />
                    <h4>Twitch</h4>
                </a>
            </section>
        </>

    );
}

export default Social;