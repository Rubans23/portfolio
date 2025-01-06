import React from 'react';
import "./Navbar.css";
import Toggle from '../Toggle/Toggle';

function Navbar() {
    const scrollToSection = (sectionId) => { 
        document.getElementById(sectionId).scrollIntoView({ 
            behavior: 'smooth' 
        }); 
    };
    const scrollToTop = () => { window.scrollTo({ top: 0, behavior: 'smooth'  }); };
    return (
        <div id='navbar' className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Ruban</div>
                <Toggle />
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <li onClick={scrollToTop}>Home</li>
                        <li onClick={() => scrollToSection('services')}>Specialties</li>
                        <li onClick={() => scrollToSection('works')}>Technologies</li>
                        <li onClick={() => scrollToSection('portfolio')}>Portfolio</li>
                    </ul>
                </div>
                <button onClick={() => scrollToSection('contact')} className='button n-button'>Contact</button>
            </div>
        </div>
    );
}

export default Navbar;
