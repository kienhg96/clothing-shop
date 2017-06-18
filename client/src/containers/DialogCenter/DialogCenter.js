import React from 'react';
import { connect } from 'react-redux';
import SearchDialog from '../../components/SearchDialog';
import { toggleSearchDialog } from '../../actions/dialogs';
import { push } from 'react-router-redux';
import OverlayLoading from '../../components/OverlayLoading';

const DialogCenter = (props) => (
	<div>
		<SearchDialog 
			show={props.dialogs.search}
			onRequestClose={() => {props.toggleSearchDialog(false)}}
			onSubmit={v => {
				props.toggleSearchDialog(false);
				props.push({
					pathname: '/search',
					search: `q=${encodeURI(v)}`
				});
			}}
		/>
		<OverlayLoading
			show={props.dialogs.overlayLoading}
		/>
	</div>
)

export default connect(state => ({
	dialogs: state.dialogs
}), {
	toggleSearchDialog,
	push
})(DialogCenter);
