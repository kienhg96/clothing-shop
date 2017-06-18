import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SearchAgain = ({onSubmit, content, onChange}) => (
	<form onSubmit={onSubmit}>
		<div style={{
			color: '#7f7f7f',
			marginBottom: 20,
			fontSize: 13
		}}>Please try again with some different keywords.</div>
		<Input placeholder="Type your keyword" 
			style={{
				border: '1px solid #eee',
				marginBottom: 10,
				fontSize: 15
			}}
			value={content}
			onChange={e => onChange(e.target.value)}
		/>
		<Button color="yellow" type="submit">Search</Button>
	</form>
);

export default SearchAgain;
