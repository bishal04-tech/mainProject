
import Logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import CountryDropDown from '../CountryDropDown';

import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from './SearchBox';
import Navigations from './Navigations';
import { useContext } from 'react';
import { MyContext } from '../../App';
const Header= () => {
  const context=useContext(MyContext)
  return (
   <>
    
     <div className="headerWrapper">
       <div className="top-strip bg-blue">
        <div className="container">
          <p className="mb-0 mt-0 text-center"> Due to the current <b>global situation</b>, we are experiencing delays in shipping. We appreciate your understanding and support during this time.</p>

          
          </div>
       </div>
       <header className="header">
             <div className="container">
              <div className="row">
                <div className="logoWrapper d-flex align-items center col-sm-2">
                 <Link to="/">
                   <img src={Logo} alt="logo" />
                </Link>
                </div>
                  
               <div className='col-sm-9 d-flex align-items-center part2'>
                    {
                         context.countryList.length!==0 &&  <CountryDropDown/>
                    }
                    
                   

                     
                     <SearchBox/>
                     
                     <div className='part3 d-flex align-items-center ml-auto'>
                          <Button className='circle mr-3'>
                           < FiUser/>
                          </Button>
                          <div className='ml-auto cartTab d-flex align-items-center'>
                               <span className='price'>$3.29</span>
                               <div className='position-relati ve ml-2'>
                                  <Button className='circle '>
                           < IoBagOutline/>
                          </Button>
                          <span className='count d-flex align-items-center justify-content-center'>1

                          </span>
                               </div>
                          </div>
                     </div>
                  </div>
                </div>       
             </div>
       </header>

       <Navigations/>
     </div>
   </>
  );
}

export default Header;