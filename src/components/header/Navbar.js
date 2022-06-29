import logo from '../../assets/logo.svg'
import Button from '../UI/Button';
import '../../css/navigation.css'

function Navbar() {
    return ( 
        <nav className='nav'>
            <img src={logo} alt="suite"/>
            <Button className="button-nav">Request Beta Access</Button>
        </nav>
     );
}

export default Navbar;