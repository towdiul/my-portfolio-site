import React from 'react';

const Header = () => {
    return (
        <div>
            <header id="site-header" class="clearfix">
                    <div class="pull-left">
                        <h1><a href="#">Developer</a></h1>
                    </div>
                    <div class="pull-right">
                        <nav class="navbar site-nav" role="navigation">
                            
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                    <i class="fa fa-bars fa-2x"></i>
                                </button>
                            </div>

                            
                            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul class="nav navbar-nav">
                                    <li class="active"><a href="#header"><i class="fa fa-home"></i> <span>Home</span></a></li>
                                    <li><a href="#portfolio"><i class="fa fa-bookmark"></i> Portfolio</a></li>
                                    <li><a href="#services"><i class="fa fa-bullhorn"></i> Me</a></li>
                                    <li><a href="#testimonials"><i class="fa fa-thumbs-up"></i> Tetimonials</a></li>
                                    <li><a href="#contact"><i class="fa fa-phone-square"></i> Contact</a></li>
                                </ul>
                            </div>  
                        </nav>
                    </div>
                </header>	
        </div>
    );
};

export default Header;