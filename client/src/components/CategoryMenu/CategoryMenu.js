import React from 'react';
import './CategoryMenu.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Loading from '../Loading';

const CategoryMenuItem = ({active, title, url}) => (
	<Link to={url} className={"categoryMenuItem" + (active ? " active" : "")}>
		{title}
	</Link>
)

const CategoryMenu = ({categories, pathname, loading}) => (
	<div className="categoryMenu">
		{
			loading ? <Loading width="80px" height="80px" /> 
			:categories.map(category => (
				<CategoryMenuItem
					key={category.id} 
					url={`/category/${category.name}`} 
					title={category.title}
					active={pathname === `/category/${category.name}`}
				/>
			))
		}
	</div>
);

CategoryMenu.propTypes = {
	categories: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string,
		title: PropTypes.string,
		id: PropTypes.string
	})).isRequired
}

export default connect(state => ({
	pathname: state.router.location.pathname,
	categories: state.categories,
	loading: state.loadings.categories
}))(CategoryMenu);
