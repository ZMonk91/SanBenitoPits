import React from "react"
import {Box, Image} from "@chakra-ui/react"
import './Logo.css'

export default function Logo(props) {
	return (
		<Box {...props}>
			<Image
				src="../san-benito-pits.svg"
				alt="San Benito Pits BBQ Barbecue Logo Hollister California"
				fill="#ff0000"
				minW="6rem"
				w="14rem"
				maxH="14rem"
			/>
		</Box>
	)
}
