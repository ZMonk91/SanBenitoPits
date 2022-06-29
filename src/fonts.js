import {Global} from "@emotion/react"

const Fonts = () => (
	<Global
		styles={`
        @font-face {
            font-family: 'Ravenscroft';
            src:
                url('./Ravenscroft.ttf') format('truetype),
                url('./ravenscroft-webfont.woff2') format('woff2'),
                url('./ravenscroft-webfont.woff') format('woff');
            font-weight: normal;
            font-style: normal;
        }
    `}
	/>
)

export default Fonts
