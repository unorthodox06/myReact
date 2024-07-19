import { LOGO_IMG } from "../utils/constants";
const Header = () =>{
    return (
        <div className="header">
            <div className="logoBox">
                <img className="logo"src={LOGO_IMG}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Contact us</li>
                    <li>About us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;