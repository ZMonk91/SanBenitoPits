import React from "react"
import {Box, Image, Text, Stack, Button} from "@chakra-ui/react"

const PitCard = ({pitName,pitDescription,pitId}) => {
	return (
		<Box
			maxW="18rem"
			rounded="0.5rem"
			// bg="gray.200"
			border={"0.1rem solid gray"}
            m={'1rem'}
		>
			<Image
				w="18rem"
				src={
					"https://i5.walmartimages.com/asr/42f6c748-2f02-4303-bd67-2dc3c2965b40_1.b247365d0cd1baa385a64a3159e798b7.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
				}
				alt="Bandit BBQ Pit"
				rounded="0.5rem"
			/>
			<Box p={5}>
				<Stack align="Center">
					<Text fontFamily={'Ravenscroft'} fontSize={"3.5rem"}>{pitName}</Text>
				</Stack>
				<Stack>
					<Text>
						{pitDescription}
					</Text>
					<Button fontSize={'3xl'}>Customize</Button>
				</Stack>
			</Box>
		</Box>
	)
}

export default PitCard