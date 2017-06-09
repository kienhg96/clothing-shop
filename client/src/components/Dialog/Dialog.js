import React from 'react';
import './Dialog.css';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

const Dialog = ({show, children, onRequestClose = () => {}}) =>
	<ReactCSSTransitionGroup
		transitionName="dialogTransition"
		transitionEnterTimeout={200}
		transitionLeaveTimeout={100}
	>
	{show && <div className="dialogContainer">
		<div className="dialogContent">
			<div className="closeButton" onClick={onRequestClose}>
				<Icon icon="fa-times" style={{
					padding: 12,
					fontSize: 30
				}}/>
			</div>
			{children}
		</div>
		</div>
	}
    </ReactCSSTransitionGroup>
	

Dialog.propTypes = {
	show: PropTypes.bool.isRequired
}

export default Dialog;
