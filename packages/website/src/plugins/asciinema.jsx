import * as React from 'react';
import AsciinemaPlayer from '../components/asciinema/AsciinemaWrapper';

const asciinemaPlugin = {
	id: 'asciinema-player/plugin',
	title: 'asciinema-player',
	Renderer: ({ nodeId, data }) => {
		return (
			<div id='asciinema-player-container'>
				<AsciinemaPlayer url={data?.url} id={nodeId} />
			</div>);
	},
	version: 1,
	controls: {
		columnCount: 1,
		type: 'autoform',
		schema: {
			properties: {
				url: {
					type: 'string',
				},
			},
		}, // end of schema
	}, // end of controls
};

export default asciinemaPlugin;