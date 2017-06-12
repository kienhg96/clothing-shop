import React, { Component } from 'react';
import './SideBar.css';
import LeftSideBar from '../../components/LeftSideBar';
import TopSidebar from '../../components/TopSidebar';
import { connect } from 'react-redux';
import { toggleSearchDialog } from '../../actions/dialogs';

class SideBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			leftSizebar: false,
		}
		this.onResize = this.onResize.bind(this);
		this.handleSearchClick = this.handleSearchClick.bind(this);
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

	handleSearchClick() {
		this.props.toggleSearchDialog(true);
	}

	render() {
		return (
			<div>
				{this.state.leftSizebar 
					? <LeftSideBar 
						onSearchClick={this.handleSearchClick}
					/> 
					: <TopSidebar 
						onSearchClick={this.handleSearchClick}
					/>
				}
			</div>
		)
	}
}

export default connect(() => ({}), {
	toggleSearchDialog
})(SideBar);
