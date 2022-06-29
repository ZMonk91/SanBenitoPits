import React from "react"
import {Flex} from "@chakra-ui/react"
import {Pits} from "./Pits"
import PitCard from "./PitCard"

const PitList = () => {
	return (
		<Flex pt={40} wrap='wrap' justifyContent='center'>
			{Pits.map((pit) => {
				return (
					<PitCard
						pitName={pit.name}
						pitDescription={pit.description}
						pitId={pit.id}
						key={pit.id}
						img={pit.img}
					/>
				)
			})}
		</Flex>
	)
}

export default PitList
