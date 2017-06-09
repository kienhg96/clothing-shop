import React from 'react';
import Logo from '../Logo';
import MetaMenu from '../MetaMenu';
import CategoryMenu from '../CategoryMenu';
import Navigation from '../Navigation';
import Copyright from '../Copyright';
import './LeftSideBar.css';

const LeftSideBar = ({categories, onSearchClick}) => (
	<div className="leftSidebarContainer sidebar">
		<div className="logoContainer">
			<Logo />
		</div>
		<div className="metaMenuContainer">
			<MetaMenu
				onSearchClick={onSearchClick}
			/>
		</div>
		<div className="leftSidebarScrollContainer">
			<div className="categoryMenuContainer">
				<CategoryMenu categories={categories}/>
			</div>
			<div className="navigationContainer">
				<Navigation />
			</div>
			<div className="copyrightContainer">
				<Copyright />
			</div>
		</div>
	</div>
);

export default LeftSideBar;
