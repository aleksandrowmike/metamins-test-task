import logoPicture from './Logo.svg';
import { Link } from "react-router-dom";

function Logo() {
    return (
        <Link to="/">
            <img src={logoPicture} alt="Logo Project" />
        </Link>
    );
}

export default Logo;