import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.jpg'

const Header = () => (
  <header>
    <nav id="mainNav" className = "navbar navbar-lg fixed-top" style={{width: "250px", height:"100vh"}}>
		<a className="navbar-brand" href={"/"}>
			<img src={logo} alt="Logo" style={{width: "205px"}}/>
		</a>
		<div style={{width: "100%", height:"100vh"}}>
			<ul className="navbar-nav navbar-sidenav navbar-dark">
				<li className='nav-item'>
					<div className="nav-link">
						<i className="material-icons" style={{display: "inline-block", verticalAlign: "middle"}}>my_location</i>
						<Link to='/' style={{display: "inline-block", verticalAlign: "middle", marginLeft: "10px"}}>Live Map</Link>
					</div>
				</li>
				<li className='nav-item'>
					<div className="nav-link">
						<i className="material-icons" style={{display: "inline-block", verticalAlign: "middle"}}>notifications</i>
						<Link to='/alerts' style={{display: "inline-block", verticalAlign: "middle", marginLeft: "10px"}}>Alerts</Link>
					</div>
				</li>
				<li className='nav-item'>
					<div className="nav-link">
						<i className="material-icons" style={{display: "inline-block", verticalAlign: "middle"}}>history</i>
						<Link to='/history' style={{display: "inline-block", verticalAlign: "middle", marginLeft: "10px"}}>Stats</Link>
					</div>
				</li>
				<li className='nav-item'>
                                        <div className="nav-link">
                                                <i className="material-icons" style={{display: "inline-block", verticalAlign: "middle"}}>directions_bike</i>
                                                <Link to='/detail/8925' style={{display: "inline-block", verticalAlign: "middle", marginLeft: "10px"}}>Details</Link>
                                        </div>
                                </li>
			</ul>
		</div>
	</nav>
  </header>
)

export default Header;
