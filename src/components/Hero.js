import {
	Flex,
	Stack,
	Text,
	Box,
	VStack,
	useBreakPointValue
} from "@chakra-ui/react"

const Hero = () => {
	return (
		<Flex
			h="100vw"
			backgroundImage={'url("./Hero.png")'}
			backgroundSize={"cover"}
			backgroundPosition={"center"}
		>
			<VStack
				w={"100%"}
				justify={"center"}
				bgGradient={"radial(transparent, blackAlpha.800)"}
			></VStack>
		</Flex>
	)
}

export default Hero
