import React, { Component } from 'react';
// import Styles from './HomePage.css';
import './HomePage.css';
import Typing from 'react-typing-animation';
import TypingCursor from '../TypingCursor/TypingCursor';
import TypingAnimation from '../TypingAnimation/TypingAnimation';
import HomePageFacts from '../HomePageFacts/HomePageFacts';
import Facts from '../../constants/facts';

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fact: "aaaaaaa",
			factVisible: false,
			index: 0,
			factLists: this.shuffleArray(Facts),
		}
	}

	generateFacts = () => {
		this.setState(prevState => ({
			factVisible: true,
		}));
	}

	shuffleArray = (a) => {
		var j, t;
		for (var i = a.length - 1; i > 0; i--) {
			j = Math.floor(Math.random() * (i + 1));
			t = a[i];
			a[i] = a[j];
			a[j] = t;
		}
		return a;
	}

	render() {
		return (
			<div className="homepage-container">
				<div className="homepage-greeting-container">
					<TypingAnimation
						speed={75}
						className="homepage-greeting"
						cursor={<TypingCursor/>}>
						<span>
							Hello !
						</span>
					</TypingAnimation>
					<TypingAnimation
						speed={75}
						startDelay={800}
						cursor={<TypingCursor/>}
						onFinishedTyping={this.generateFacts}
						className="homepage-greeting">
						<span>
							My name is Long To
						</span>
					</TypingAnimation>
					<HomePageFacts
						visible={this.state.factVisible}
					/>
				</div>
			</div>
		);
	}
}

export default HomePage;
