/**
 * This file is Syntax highlighter component.
 */


import { Prism as SytaxHighlighter } from 'react-syntax-highlighter';
import { vs as style } from 'react-syntax-highlighter/dist/cjs/style/prism';

import *  as React from 'react';

const COdeSnippet = (props) => {
	const { code, language, customStyle } = props
	return (
		<SytaxHighlighter
			showLineNumbers
			language={language}
			style={{...style, ...customStyle}}
		>
			{code}
		</SytaxHighlighter>
	)
}

export default COdeSnippet;