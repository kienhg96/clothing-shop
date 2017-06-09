import React, { Component } from 'react';
import Logo from '../Logo';
import MetaMenu from '../MetaMenu';
import CategoryMenu from '../CategoryMenu';
import Navigation from '../Navigation';
import Copyright from '../Copyright';
import Icon from '../Icon';
import TransparentButton from '../TransparentButton';
import './TopSidebar.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

class TopSidebar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showMenu: false
		}
		this.onScroll = this.onScroll.bind(this);
		this.onMenuToggle = this.onMenuToggle.bind(this);
	}

	componentDidMount() {
		window.addEventListener('scroll', this.onScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll);
		this.onScroll();
	}

	onScroll(e) {
		const doc = document.documentElement;
		const top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
		if (top > 140) {
			this.meta.classList.add('fixedMetaMenu');
		} else {
			this.meta.classList.remove('fixedMetaMenu');
		}
	}

	onMenuToggle(e) {
		e.preventDefault();
		this.setState({
			showMenu: !this.state.showMenu
		}, () => {
			if (this.state.showMenu) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = '';
			}
		});
	}

	render() {
		return (
			<div className="topSidebarContainer sidebar">
				<div className="logoContainer">
					<Logo />
				</div>
				<div className="metaMenuContainer" ref={meta => this.meta = meta}>
					<MetaMenu menu={true} 
						onMenuClick={this.onMenuToggle}
						onSearchClick={this.props.onSearchClick}
					/>
				</div>
				<ReactCSSTransitionGroup
					transitionName="responsiveMenuTransition"
					transitionEnterTimeout={100}
					transitionLeaveTimeout={100}
				>
				{
					this.state.showMenu && 
					<div className="menuAllScreen" onClick={this.onMenuToggle}>
						<div className="closeButtonContainer">
							<TransparentButton>
								<Icon icon="fa-times" style={{
									color: '#fff',
									fontSize: 26
								}}/>
							</TransparentButton>
						</div>
						<div className="littleMenu">
							<div className="categoryMenuContainer">
								<CategoryMenu categories={this.props.categories} />
							</div>
							<div className="navigationContainer">
								<Navigation />
							</div>
							<div className="copyrightContainer">
								<Copyright />
							</div>
						</div>
					</div>
				}
				</ReactCSSTransitionGroup>
			</div>
		)
	}
}

export default TopSidebar;
