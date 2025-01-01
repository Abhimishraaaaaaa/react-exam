import React from 'react';

const Header = () => {
    return (
        <section className="heading">
            <div className="container">
                <div className="row align-items-center">
                    <div className="icon col-lg-6 col-sm-3 ">
                        <img
                            src="src/assets/corrintech.png"
                            alt="Logo"
                        />
                    </div>
                    <div className="nav col-lg-6 col-sm-9">
                        <ul className="nav justify-content-end">
                            <li className="nav-item">
                                <a className="nav-link disabled " href="#">
                                    home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">
                                    about
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">
                                    contact
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">
                                    content
                                </a>
                            </li>
                            <li>
                                <button type="button" >contact</button>
                            </li>
                        </ul>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Header;
