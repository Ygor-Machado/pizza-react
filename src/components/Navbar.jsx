import Logo from '../assets/pizzaLogo.png';

import { Link } from 'react-router-dom';
import { useState } from 'react';

import '../styles/Navbar.css';

import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {

    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
      setOpenLinks(!openLinks);
    };

    return (
        <nav className="navbar" >
            <div className="leftSide" id={openLinks ? "open" : "close"}>
                <img src={Logo} />
                <div className='hiddenLinks'>
                    <Link to="/"> Home </Link>
                    <Link to="/menu"> Menu </Link>
                    <Link to="/about"> Sobre nós </Link>
                    <Link to="/contact"> Contato </Link>
                </div>
            </div>
            <div className="rightSide">
                <Link to="/"> Home </Link>
                <Link to="/menu"> Menu </Link>
                <Link to="/about"> Sobre nós </Link>
                <Link to="/contact"> Contato </Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon/>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;