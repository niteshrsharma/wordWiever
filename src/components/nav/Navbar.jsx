import { GiHamburgerMenu } from "react-icons/gi";
import Logo from '../../assets/logo.png';
import { FaSearch } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import styles from './Navbar.module.css';

export default function Navbar({tab, setTab, login}) {
    return (
        <div className={styles.nav}>
            <div className={styles.options}>
                <GiHamburgerMenu size={40} color="white" />
                <div onClick={() => setTab('gallery')}>
                    Gallery
                </div>
                <div onClick={() => setTab('dashboard')}>
                    Dashboard
                </div>
            </div>

            <img src={Logo} alt="logo" className={styles.logo} onClick={() => setTab('home')} />
            {
                tab == 'gallery' && <div className={styles.searchCont}>
                    <FaSearch size={25} color="white" />
                    <input type="text" />
                </div>
            }

            {
                !login ? <div className={styles.auth}>
                <button>Sign In</button>
                <button>Sign Up</button>
                </div>
                :
                <RiAdminFill size={35} color="white" style={{marginRight: "10px"}}/>
            }
        </div>
    )
}