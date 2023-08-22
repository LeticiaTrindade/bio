import React from "react";
import './style.css';
import Pc from '../images/setup.svg';
import Portfolio from '../images/code.svg';
import { Link } from "react-router-dom";

function Pessoal() {
    return (<>
        <h3>Pessoal</h3>
        <section className="d-flex section" >
            <a href="https://leticiatrindade.github.io/portfolio/" target="_blank" className="a a-portfolio d-flex col-md-6">
                <img className="icon" src={Portfolio} />
                <h4>Portfolio</h4>
            </a>
            <Link to="/setup" className="a a-setup d-flex col-md-6">
                <img className="icon" src={Pc} />
                <h4>Setup</h4>
            </Link>

        </section>
    </>
    );
}

export default Pessoal;