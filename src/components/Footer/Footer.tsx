import React from 'react';
// Icons
import { IconContext } from 'react-icons';
import { FaGithub } from 'react-icons/fa';
// Styles
import styles from './Footer.module.css';

// This component will be displaed at the bottom of webapp.
const Footer = () => {
    return (
        <div className={styles.container}>
            <h3>&copy; Eraj Hanif</h3>
            <IconContext.Provider value={{ color: "black", size: "2rem", }}>
                <div className={styles.socialIcons}>
                <a 
                        href="https://github.com/erajKamdar/Expense_tracker_PWA-7A" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <FaGithub className={styles.socialIcon} title="Contact Us" />
                    </a>
                    
                </div>
            </IconContext.Provider>
        </div>
    );
}

export default Footer;