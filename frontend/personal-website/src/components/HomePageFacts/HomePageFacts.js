import React, {Component} from 'react';
import TypingCursor from '../TypingCursor/TypingCursor';
import TypingAnimation from '../TypingAnimation/TypingAnimation';
import TypingBackspaceAnimation from '../TypingBackspaceAnimation/TypingBackspaceAnimation';
import Facts from '../../constants/facts';
import './HomePageFacts.css';

class HomePageFacts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			index: 0,
			factLists: this.shuffleArray(Facts),
		}
	}

	generateNextFact = () => {
		// console.log(this.state.index);
		if (this.state.index === this.state.factLists.length - 1) {
			this.setState(prevState => ({
				index: 0,
			}));
		} else {
			this.setState(prevState => ({
				index: prevState.index + 1,
			}))
		}
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
		var fact = this.state.factLists[this.state.index];
		if (this.props.visible) {
			return(
				<TypingAnimation
					speed={40}
					cursor={<TypingCursor/>}
					onFinishedTyping={this.generateNextFact}
					loop={true}
					className="homepage-briefing">
					<span>
						{fact}
					</span>
					<TypingBackspaceAnimation delay={300} count={fact.length}/>
				</TypingAnimation>
			)
		} else {
			return (
				<div></div>
			)
		}
	}
}

export default HomePageFacts;
