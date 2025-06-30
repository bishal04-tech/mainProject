import { useState } from 'react';
import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { IoManOutline } from "react-icons/io5";
import { IoWomanOutline } from "react-icons/io5";
import { GiLipstick } from "react-icons/gi";
import { GiWatch } from "react-icons/gi";
import { MdOutlineSmartToy } from "react-icons/md";
import { IoGiftOutline } from "react-icons/io5";
import { LuContact } from "react-icons/lu";
import { FaAngleRight } from "react-icons/fa";

const Navigations = () => {

      const [isopenSidebarVal,setisopenSidebarVal]=useState(false);
  return (
   <nav>
          <div className='container'>
                <div className='row'>
                      <div className='col-sm-2 navPart1'>
                              <div className='catWrapper'>
                                 <Button className='allCatTab align-items-center' onClick={()=>setisopenSidebarVal(!isopenSidebarVal)}>

                                <span className='icon1 mr-2'>
                                    <IoIosMenu/>
                                </span>
                                     <span className="text">
                                        ALL CATEGORIES
                                     </span>
                                      <span  className='icon2 ml-2'>
                                    <FaAngleDown />
                                </span>
                               </Button>

                               <div className={
                                    `sidebarNav ${isopenSidebarVal===true ? 'open' : '' }`
                               }>
                                <ul>
                                    <li>
                                         <Link to="/"><Button>men <FaAngleRight  className='ms-auto'/>
                                          </Button></Link> 

                                          <div className='submenu'>
                                           <Link to="/"><Button>clothing</Button> </Link>
                                     <Link to="/"><Button>footwear</Button> </Link>
                                      <Link to="/"><Button>watches</Button> </Link>
                                          </div>
                                    </li>

                                    <li>
                                         <Link to="/"><Button>women <FaAngleRight  className='ms-auto'/>
                                          </Button></Link> 

                                           <div className='submenu'>
                                           <Link to="/"><Button>clothing</Button> </Link>
                                     <Link to="/"><Button>footwear</Button> </Link>
                                      <Link to="/"><Button>watches</Button> </Link>
                                          </div>
                                    </li>

                                    <li>
                                         <Link to="/"><Button>watches
                                          </Button></Link> 
                                    </li>

                                    <li>
                                         <Link to="/"><Button>kids
                                          </Button></Link> 
                                    </li>

                                    <li>
                                         <Link to="/"><Button>gift
                                          </Button></Link> 
                                    </li>
                                </ul>
                               </div>
                              </div>
                      </div>

                      <div className='col-sm-10 navPart2 d-flex align-items-center'>
                             <ul className= 'list list-inline ml-auto'>
                            <li className="list-inline-item">
                <Button
                  component={Link}
                  to="/"
                  startIcon={<IoHomeOutline />}
                  color="inherit"
                >
                  Home
                </Button>
              </li>

              <li className="list-inline-item">
                <Button
                  component={Link}
                  to="/"
                  startIcon={<IoManOutline />}
                  color="inherit"
                >
                  Men
                </Button>

                <div className='submenu shadow'>
                    <Link to="/"><Button>clothing</Button> </Link>
                    <Link to="/"><Button>footwear</Button> </Link>
                    <Link to="/"><Button>watches</Button> </Link>
                </div>

                
              </li>

              <li className="list-inline-item">
                <Button
                  component={Link}
                  to="/"
                  startIcon={<IoWomanOutline />}
                  color="inherit"
                >
                  Women
                </Button>
                <div className='submenu shadow'>
                    <Link to="/"><Button>clothing</Button> </Link>
                    <Link to="/"><Button>footwear</Button> </Link>
                    <Link to="/"><Button>watches</Button> </Link>
                </div>
              </li>

              <li className="list-inline-item">
                <Button
                  component={Link}
                  to="/"
                  startIcon={<GiLipstick />}
                  color="inherit"
                >
                  Beauty
                </Button>
                <div className='submenu shadow'>
                    <Link to="/"><Button>clothing</Button> </Link>
                    <Link to="/"><Button>footwear</Button> </Link>
                    <Link to="/"><Button>watches</Button> </Link>
                </div>
              </li>

              <li className="list-inline-item">
                <Button
                  component={Link}
                  to="/"
                  startIcon={<GiWatch />}
                  color="inherit"
                >
                  watches
                </Button>
                
              </li>

              <li className="list-inline-item">
                <Button
                  component={Link}
                  to="/"
                  startIcon={<MdOutlineSmartToy />}
                  color="inherit"
                >
                  kids
                </Button>
              </li>

              <li className="list-inline-item">
                <Button
                  component={Link}
                  to="/"
                  startIcon={<IoGiftOutline />}
                  color="inherit"
                >
                  gift
                </Button>
              </li>

              <li className="list-inline-item">
                <Button
                  component={Link}
                  to="/"
                  startIcon={<LuContact />}
                  color="inherit"
                >
                  Contact
                </Button>
              </li>
                             </ul>
                      </div>

                </div>
          </div>
       </nav>
  );
}

export default Navigations;