import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Button, Text} from '@chakra-ui/react';

const Banner = ({ purpose, title1, title2, desc1, desc2, imageUrl, linkName, buttonText }) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width="500" height="300" alt="Banner" />
    <Box p="3">
      <Text color="grey.500" fontSize="sm" fontWeight="medium" >{purpose}</Text>
      <Text fontSize="3xl" fontWeight="bold" >{title1} <br /> {title2}</Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="grey.700" >{desc1} <br /> {desc2}</Text>
      <button fontSize="x1">
        <a href={linkName} >{buttonText} </a>
      </button>
    </Box>
    
  </Flex>
)
export default function Home() {
  return (
    <div >
      <h1>Hello World! </h1>
      <Banner 
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Find Homes, Villas, Apartments "
        desc2="and more"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
        linkName="/search?purpose=for-rent"
        buttonText="Explore Renting"
      />
      <Banner 
        purpose="BUY A HOME"
        title1="House for Sale for"
        title2="Everyone"
        desc1="Buy Homes, Villas, Apartments "
        desc2="and more"
        imageUrl="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
        linkName="/search?purpose=for-sale"
        buttonText="Explore For Sale"
      />
    </div>
  )
}
