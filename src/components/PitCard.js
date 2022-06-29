import React from "react"
import {Box, Image, Text, Stack, Button, Spacer} from "@chakra-ui/react"

const PitCard = ({pitName,pitDescription,pitId, img}) => {
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
				h="20rem"
				src={img
				}
				alt="Bandit BBQ Pit"
				rounded="0.5rem"
			/>
			<Box p={5}>
				<Stack align="Center">
					<Text fontFamily={'Ravenscroft'} fontSize={"3.5rem"}>{pitName}</Text>
				</Stack>
				<Stack h="100%">
					<Text>
						{pitDescription}
					</Text>
					<Spacer/>
					<Button alignContent={"flex-end"} fontSize={'3xl'}>Customize</Button>
				</Stack>
			</Box>
		</Box>
	)
}

export default PitCard