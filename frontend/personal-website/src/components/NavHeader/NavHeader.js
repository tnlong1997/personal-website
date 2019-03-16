import React, {Component} from 'react';

import './NavHeader.css';

class NavHeader extends Component {
	render() {
		return (
			<div className="navheader-container">
				<div className="navheader-icon-nickname">
					<img className="navheader-nickname" src={require("../../resources/images/nickname.png")} alt="BadWolf"/>
				</div>
				<div className="navheader-nav">
					<ul className="navheader-nav-ul">
						<li className="navheader-nav-li">
							About
						</li>
						<li className="navheader-nav-li">
							Project
						</li>
						<li className="navheader-nav-li">
							Contacts
						</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default NavHeader
