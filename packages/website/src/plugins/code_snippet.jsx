/***
 * This file is a plugin for react-page, it response to show formatted code, 
 * it support hightlight a bundle of programming language syntaxes. 
 */

import React, { lazy } from 'react';

// lazy load to keep initial bundle small
const CodeSnippet = lazy(() => '../components/CodeSnippet.jsx');

const style = {
	["code[class*=\"language-\"]"]: {
		fontSize: "18px",
		lineHeight: '1.6',
	}
};

const codeSnippet = {
	Renderer: ({ data }) =>
		data?.code ? (
			<CodeSnippet
				language={data.language}
				code={data.code}
				customStyle={style} />) : null,
	id: 'code-snippet',
	title: 'Code snippet',
	description: 'A code snippet',
	version: 1,
	controls: {
		type: 'autoform',   // use uniform auto generate the form.
		schema: {
			propertties: {
				language: {
					type: 'string',
				},
				code: {
					type: 'string',
					uniforms: {
						multiline: true,
					},
				},
			},
			required: ['code'],
		},
	},
};
export default codeSnippet;