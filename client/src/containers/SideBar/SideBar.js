import React, { Component } from 'react';
import './SideBar.css';
import LeftSideBar from '../../components/LeftSideBar';
import TopSidebar from '../../components/TopSidebar';

class SideBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			leftSizebar: false,
		}
		this.onResize = this.onResize.bind(this);
	}

	onResize() {
		const x = window.innerWidth 
				|| document.documentElement.clientWidth 
				|| document.getElementsByTagName('body')[0].clientWidth;
		this.setState({
			leftSizebar: (x >= 900)
		});
	}

	componentDidMount() {
		window.addEventListener('resize', this.onResize);
		this.onResize();
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.onResize);
	}

	render() {
		return (
			<div>
				{this.state.leftSizebar 
					? <LeftSideBar 
						onSearchClick={this.props.onSearchClick}
					/> 
					: <TopSidebar 
						onSearchClick={this.props.onSearchClick}
					/>
				}
			</div>
		)
	}
}

export default SideBar;
