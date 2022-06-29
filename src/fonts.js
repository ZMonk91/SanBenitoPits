import { Global } from '@emotion/react';

const Fonts = () => (
	<Global
		styles={`
        @font-face {
            font-family: 'Ravenscroft';
           	font-style: normal;
	        font-weight: normal;
            src: url('./Ravenscroft.ttf')
        }
    `}
	/>
)

export default Fonts