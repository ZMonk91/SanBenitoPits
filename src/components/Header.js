import {useState} from "react"
import {Flex, Button, Box, Spacer, IconButton, Container} from "@chakra-ui/react"
import {HamburgerIcon, CloseIcon} from "@chakra-ui/icons"
import Logo from "./Logo"

export const Header = () => {
	const [display, changeDisplay] = useState("none")
	const responsiveText = {
		sm: '2xl',
		md: '3xl',
		lg: '4xl',
		xl: '6xl'
	}


	return (
		<Container p={0} m={0}
		mb={30}>
			<Flex pos="fixed" top={0} w="100vw" bg="black" borderBottom={"1px solid gold"} shadow={"dark-lg"} zIndex={20}>
				{/* Desktop */}

				<Flex
					w="100%"
					p={6}
					display={["none", "none", "flex", "flex"]}
					align="center"

				>
					<Logo />
					<Spacer />
					<Box p={4}>
						<Button variant="ghost" fontSize={responsiveText}>
							Pits & Smokers
						</Button>
					</Box>
					<Box p={4}>
						<Button variant="ghost" fontSize={responsiveText}>
							Accessories
						</Button>
					</Box>
					<Box p={4}>
						<Button variant="ghost" fontSize={responsiveText}>
							Clothing
						</Button>
					</Box>
					<Box p={4}>
						<Button variant="ghost" fontSize={responsiveText}>
							Our Story
						</Button>
					</Box>
					{/* Mobile */}
				</Flex>
				<Spacer display={["flex", "flex", "none", "none"]} />
				<Logo p={2} display={["flex", "flex", "none", "none"]} />
				<Spacer display={["flex", "flex", "none", "none"]} />
				<IconButton
					aria-label="Open Menu"
					size="lg"
					icon={<HamburgerIcon />}
					onClick={() => changeDisplay("flex")}
					display={["flex", "flex", "none", "none"]}
					mr={2}
					my={2}
					alignSelf="center"
					// flexDirection={"row-reverse"}
					// w="20vw"
				/>

				{/* Mobile Content */}
				<Flex
					w="100vw"
					display={display}
					zIndex={20}
					h="100vh"
					pos="fixed"
					top="0"
					left="0"
					overflowY="auto"
					flexDir="column"
					bg="black"
				>
					<Flex justify="flex-end">
						<IconButton
							mt={2}
							mr={2}
							aria-label="Open Menu"
							size="lg"
							icon={<CloseIcon />}
							onClick={() => changeDisplay("none")}
						/>
					</Flex>
					<Flex flexDir="column" align="center">
						<Box p={2}>
							<Button h={"6rem"} w="100vw" fontSize="4xl">
								Pits & Smokers
							</Button>
						</Box>
						<Box p={4}>
							<Button h={"6rem"} w="100vw" fontSize="4xl">
								Accessories
							</Button>
						</Box>
						<Box p={4}>
							<Button h={"6rem"} w="100vw" fontSize="4xl">
								Clothing
							</Button>
						</Box>
						<Box p={4}>
							<Button h={"6rem"} w="100vw" fontSize="4xl">
								Our Story
							</Button>
						</Box>
					</Flex>
				</Flex>
			</Flex>
		</Container>
	)
}

export default Header
