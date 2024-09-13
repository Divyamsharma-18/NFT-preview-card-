import React from 'react';
import './App.css'
import myImage from '../src/Images/Avatar.png'
import { Text, Flex } from '@chakra-ui/react';
import myIcon from '../src/Images/Icon.svg'
import myClock from '../src/Images/Clock.svg'
import myCreator from '../src/Images/Creator.png'


function App() {

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      h="100vh"
      w="100vw"
      overflow="hidden"
      bg="hsl(217, 54%, 11%)" >



      <Flex
        bg="hsl(216, 50%, 16%)"
        borderRadius="10px"
        flexDirection="column"
        w="320px"
        justify="center"
        alignItems="center"
        gap='30px'>

        <img src={myImage} width="250px" style={{ borderRadius: '10px', marginTop: '35px' }} />


        <Text
          textColor='hsl(0, 0%, 100%)'
          fontSize="18px"
          pr='100px'
          fontWeight='500'
        >
          Equilibrium #3429
        </Text>

        <Text
          textColor='hsl(215, 51%, 70%)'
          textAlign='left'
          paddingLeft='35px'
          marginTop='-20px'
        >
          Our Equilibrium collection promotes balance and calm.
        </Text>


        <Flex 
        mt='-10px'>

          <Flex
          mr='30px'
          ml='8px'
            gap='8px'>
            <img src={myIcon} alt="" width='12px' />

            <Text
              textColor='hsl(178, 100%, 50%)'
            >
              0.041ETH
            </Text>

          </Flex>

          <Flex
          gap='5px'
          ml='40px'>
            <img src={myClock} alt="" />

            <Text
              textColor='hsl(215, 51%, 70%)'
            >
              3 days left
            </Text>
          </Flex>

        </Flex>


        <Flex 
        borderTop='1px' 
        borderColor='hsl(215, 51%, 70%)' 
        pt='20px'
        pb='20px'
        fontWeight='500'
        w='250px'>

          <img src={myCreator} width='30px' style={{border: '1px solid white', borderRadius: '20px'}}/>

          <Text
          ml='18px'
          textColor='hsl(215, 51%, 70%)'
          >
          Creation of
          </Text>

          <Text
          textColor='hsl(0, 0%, 100%)'
          ml='5px'
          >
          Jules Wyvern
          </Text>

        </Flex>

      </Flex>


    </Flex>
  )
}

export default App
