import React from 'react';
import './MetaMenu.css';
import Icon from '../Icon';
import { Link } from 'react-router-dom';

const MetaMenuItem = ({url, icon, onClick, chil}) => (
	<Link onClick={onClick} className="metaMenuItem" to={url}>
		<Icon icon={icon} />
	</Link>
);

const MetaMenu = ({menu, onMenuClick, onSearchClick ,itemCount = 5}) => (
	<div className="metaMenu">
		{
			menu && 
			<a className="metaMenuItem" onClick={onMenuClick}>
				<Icon icon="fa-bars" />
			</a>
		}
		<MetaMenuItem url="/user" icon="fa-user"/>
		<a className="metaMenuItem" onClick={e => {
			e.preventDefault();
			onSearchClick();
		}}>
			<Icon icon="fa-search" />
		</a>
		<Link to="/cart">
			<div style={{
				display: 'inline',
				position: 'relative'
			}}>
				<span className="metaMenuItem">
					<Icon icon="fa-shopping-bag" />
				</span>
				{itemCount > 0 && 
					<div className="productInBagNumber">
						{itemCount > 9 ? "9+" : itemCount}
					</div>
				}
			</div>
		</Link>
	</div>
);

export default MetaMenu;
