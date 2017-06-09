import React, { Component } from 'react';
import './Option.css';

class Option extends Component {
	constructor(props) {
		super(props);
		this.state = {
			openList: false
		}
		this.handleBodyClick = this.handleBodyClick.bind(this);
	}

	handleBodyClick(e) {
		if (this.state.openList) {
			this.setState({
				openList: false
			});
		}
	}

	componentDidMount() {
		document.body.addEventListener('click', this.handleBodyClick);
	}

	componentWillUnmount() {
		document.body.removeEventListener('click', this.handleBodyClick);
	}

	render() {
		return (
			<div className="Option">
				<div className="OptionLabel">
					<span className="label">{this.props.label}:</span> {this.props.value}
				</div>
				<div className="OptionHandle" 
					onClick={() => {
						this.setState({ openList: true });
					}}
				>
				</div>
				<div className={`OptionList ${this.state.openList ? "" : "hide"}`}>
					<ul ref={ul => this.ul = ul}>
						{
							this.props.values.map(value => (
								<li key={value}
									className={this.props.value === value ? "active" : ""}
									onClick={() => this.props.onChange(value)}
								>{value}</li>
							))
						}
					</ul>
				</div>
			</div>
		)
	}
}

export default Option;
