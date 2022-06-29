
import {extendTheme} from "@chakra-ui/react"
// import {Button} from './Theme/Button'

//color mode config
const config = {
	initialColorMode: "dark",
	useSystemColorMode: false
}

const theme = extendTheme({
	config,
	fonts: {
		// body: `'Ravenscroft', sans-serif`
	},
	components: {
		Button: {
			baseStyle: {
				fontWeight: 300,
				fontFamily: "Ravenscroft"
			}
		}
	},
	styles: {
		global: {
			body: {
				bg: "black"
			},
			button: {
				_hover: {
					color: "#c8913e",
				}
			}
		}
	}
})

export default theme
