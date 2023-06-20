import { Html, Head, Main, NextScript } from 'next/document'

const Document = function Document() {
	return (
		<Html lang="en">
			<Head />
			<body>
				<Main />
				<NextScript />
				{/* Render modals */}
				<div id="modals" />
			</body>
		</Html>
	)
}

export default Document
