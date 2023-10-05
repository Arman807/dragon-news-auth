import logo from '../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='flex justify-center'>
           <div>
           <img src={logo} alt="" />
           <p>Journalism Without Fear or Favour</p>
           <p>{moment().format("dddd, MMMM Do YYYY")}</p>
           </div>
        </div>
    );
};

export default Header;