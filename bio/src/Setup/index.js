import React from "react";
import './style.css';
import { Link } from "react-router-dom";
import home from '../images/home.svg';
import Profile from '../Profile/index';


function Setup() {
    return (<>

        <Profile />
        <section className='container col-md-5'>
           

                <Link to="/bio" className=" container a a-setup d-flex col-md-6">
                    <img className="icon" src={home} />
                    <h4>Voltar</h4>
                </Link>

                <h3 className="h3-setup">Meu Setup:</h3>
                <ul className="ul-setup">
                    <li className="li-setup">Placa Mãe: Z590 Gigabyte Vision G </li>
                    <li className="li-setup">Processador: i5 11600k 11ª Ge</li>
                    <li className="li-setup">Memória ram: Rise Mode Diamound DDR4 16GB 3200 MHZ White RGB (limt. Edition)</li>
                    <li className="li-setup">Placa de vídeo: GTX 1070 Asus 8GB (limt. Edition)</li>
                    <li className="li-setup">Fonte: Corsair CX650F RGB White 80 Plus Bronze</li>
                    <li className="li-setup">SSD: M.2 NVMe Aorus Write 3100 MB/s e Read 1050 MB/s RGB</li>
                    <li className="li-setup">Headset: Redragon Hylas Pink RGB</li>
                    <li className="li-setup">Mouse: OEX Boreal Pink 7200 DPI RGB</li>
                    <li className="li-setup">Teclado: OEX Prismatic Pink RGB</li>
                    <li className="li-setup">Monitor: Mymax 19'' Rosa</li>
                    <li className="li-setup">Webcam: Lenovo 300 FHD 1080P</li>
                </ul>
        </section>

    </>
    );
}

export default Setup;