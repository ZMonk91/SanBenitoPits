import {Global} from "@emotion/react"

const Fonts = () => (
	<Global
		styles={`
            @font-face {
                font-family: 'Ravenscroft';
                src: url('./Ravenscroft.eot');
                src: url('./Ravenscroft.eot?#iefix') format('embedded-opentype'),
                    url('./Ravenscroft.woff2') format('woff2'),
                    url('./Ravenscroft.woff') format('woff'),
                    url('./Ravenscroft.ttf') format('truetype'),
                    url('./Ravenscroft.svg#Ravenscroft') format('svg');
                font-weight: normal;
                font-style: normal;
                font-display: swap;
}

    `}
	/>
)

export default Fonts
