import React from 'react'
import './Style_all.css';
import { NavLink } from 'react-router-dom'
import './BestSeller'
import './Newdrops'
import './About'
import './FindaStore'

const NavBar = () => {

    //    const showfev =()=>{
    //     alert('.')


    //    }


    return (




        <>


<nav className="navbar navbar-expand-lg fixed-top">
                <div className="container-fluid boxnav">

                    <div className="col-md-2">
                        <NavLink to="/"><img className='logog' src="Images/YouTube/10001.jpeg" alt="" /></NavLink>
                    </div>

                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                    </button>

                    <div className="collapse navbar-collapse " id="navbarNav">
                        <div className="contener">
                            <div className="col-md-12 bg-dark ms-5 ">
                                <ul className="navbar-nav">

                                    <li className="nav-item  px-4 ">
                                        <NavLink className="nav-link  text-light" to={"BestSeller"}> BESTSELLERS</NavLink>
                                    </li>
                                    <li className="nav-item px-4">
                                        <NavLink className="nav-link  text-light" to={"Newdrops"} >NEW DROPS
                                        </NavLink>
                                    </li>
                                    <li className="nav-item px-4">
                                        <NavLink className="nav-link  text-light" to={"About"}>ABOUT G-SHOCK
                                        </NavLink>
                                    </li>
                                    <li className="nav-item px-4">
                                        <NavLink className="nav-link  text-light" to={"FindaStore"}>FIND A STORE
                                        </NavLink>
                                    </li>


                                </ul>
                            </div>
                        </div>


                        <div className="col-md-3 ms-auto">
                            <form class="d-flex " role="search">
                                <input class="form-control searchbar1 w-75 m-1  inputbox" type="search" placeholder="Search" aria-label="Search" />
                                <NavLink className=' bg-transparent mx-2 my-3' to={"AddtoFev"}  >  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bookmark-heart-fill" viewBox="0 0 16 16">
                                    <path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
                                </svg>   </NavLink></form>
                        </div>


                    </div>
                </div>
            </nav>





        </>
    )
}

export default NavBar
