
import { AiFillGoogleCircle } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';
import {AiFillInstagram } from 'react-icons/ai';
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'
const RightSideNavbar = () => {
    return (
        <div>
            <div>
                <h2 className="text-3xl">Login with</h2>
                <p className='flex items-center btn btn-outline'><AiFillGoogleCircle></AiFillGoogleCircle><span>Log in with google</span></p>
                <p className='flex items-center btn btn-outline'><BsGithub></BsGithub><span>Log in with github</span></p>
            </div>
            <div>
                <h2 className="text-3xl">Find us on</h2>
                <p className='flex items-center btn btn-outline'><BsFacebook></BsFacebook><span>Facebook</span></p>
                <p className='flex items-center btn btn-outline'><AiOutlineTwitter></AiOutlineTwitter><span>Twitter</span></p>
                <p className='flex items-center btn btn-outline'><AiFillInstagram></AiFillInstagram><span>Instragram</span></p>
            </div>
            <div>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNavbar;