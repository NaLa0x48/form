import logo from '../img/logo.jpeg'
const Header = () => {
    return ( 
    <div className='headerField'>
        <img src={logo} alt="Ycc-logo" className='logoImg'/>
        <h1>University Of Technology Yadanabon Cyber City</h1>
    </div>
     );
}
 
export default Header;