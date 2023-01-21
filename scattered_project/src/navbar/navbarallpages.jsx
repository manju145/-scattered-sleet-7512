import React from 'react';
import {Link as RouterLink } from 'react-router-dom';

import {
   Box,
   Flex,
   Text,
   IconButton,
   Button,
   Stack,
   Collapse,
   Icon,
   Link,
   Popover,
   PopoverTrigger,
   PopoverContent,
   useColorModeValue,
   useBreakpointValue,
   useDisclosure,
   
 } from '@chakra-ui/react';
 import {
   HamburgerIcon,
   CloseIcon,
   ChevronDownIcon,
   ChevronRightIcon,
 } from '@chakra-ui/icons';
 

 export default function Navbarallpage() {
   const { isOpen, onToggle } = useDisclosure();
 
   return (
    <Box>
    <Flex
       border="8px"
    width={"100%"}
    margin="auto"
        bg={useColorModeValue('white', 'gray.800')}
      color={useColorModeValue('gray.600', 'white')}
      py={{ base: 2 }}
      px={{ base: 4 }}
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('black.200', 'black.900')}
      align={'center'}
      >
      <Flex
             border="8px"
        display={{ base: 'flex', md: 'none' }}
        >
        <IconButton
          onClick={onToggle}
          icon={
            isOpen ? <CloseIcon w={3} h={5} /> : <HamburgerIcon w={5} h={5} />
          }
          variant={'ghost'}
          aria-label={'Toggle Navigation'}
        />
      </Flex>
      
               <Stack
                 display={'flex'}
                  gap="20%"
                margin={"auto"}
       
           justify={'flex-start'}
           justifyContent={'center'}
           alignContent={'center'}
           direction={'row'}
           >
         <RouterLink to="mobile">
           <Text
             display={{ base: 'none', md: 'inline-flex' }}
             fontSize={'sm'}
             fontWeight={600}
             color={'black'}
                      href={'#'}
             _hover={{
               bg: 'gray.300',
             }}>
            Mobiles
           </Text>
           </RouterLink>

           <RouterLink to="/">
       <Text
             display={{ base: 'none', md: 'inline-flex' }}
             fontSize={'sm'}
             fontWeight={600}
             color={'black'}
                         href={'#'}
             _hover={{
               bg: 'gray.300',
             }}>
           Home Appliances
           </Text>
       </RouterLink>

           <RouterLink to="/furniture">
           <Text
             display={{ base: 'none', md: 'inline-flex' }}
             fontSize={'sm'}
             fontWeight={600}
             width="150%"
             color={'black'}
                        href={'#'}
             _hover={{
               bg: 'gray.300',
             }}>
             Furniture and Decor
           </Text>
           </RouterLink>

           <RouterLink to="/electronic">
           <Text
             display={{ base: 'none', md: 'inline-flex' }}
             fontSize={'sm'}
             width="150%"
             fontWeight={600}
             color={'black'}
                     href={'#'}
             _hover={{
               bg: 'gray.300',
             }}>
              Electronics
           </Text>
           </RouterLink>

           <RouterLink to="/kidsAndToys">
           <Text
             display={{ base: 'none', md: 'inline-flex' }}
             fontSize={'sm'}
             width="300%"
             fontWeight={600}
             color={'black'}
                     href={'#'}
             _hover={{
               bg: 'gray.300',
             }}>
             Kids And Toys
           </Text>
           </RouterLink>

           <RouterLink to="/sports">
           <Text
             display={{ base: 'none', md: 'inline-flex' }}
             fontSize={'sm'}
             width="350%"
             fontWeight={600}
             color={'black'}
                    href={'#'}
             _hover={{
                bg: 'gray.300',
             
              }}
             >
              Sports, Hobbies, Fashion
           </Text>
           </RouterLink>
         </Stack>
       </Flex>
 
       <Collapse in={isOpen} animateOpacity>
       </Collapse>
     </Box>
   );
 }
 
//  const DesktopNav = () => {
//    const linkColor = useColorModeValue('gray.600', 'gray.200');
//    const linkHoverColor = useColorModeValue('gray.800', 'white');
//    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
 
//    return (
//      <Stack direction={'row'} spacing={4}>
    
//          <Box>
//            <Popover trigger={'hover'} placement={'bottom-start'}>
//              <PopoverTrigger>
//                <Link
//                  p={2}
//                   fontSize={'sm'}
//                  fontWeight={500}
//                  color={linkColor}
//                  _hover={{
//                    textDecoration: 'none',
//                    color: linkHoverColor,
//                  }}>
               
//                </Link>
//              </PopoverTrigger>
 
           
//                <PopoverContent
//                  border={0}
//                  boxShadow={'xl'}
//                  bg={popoverContentBgColor}
//                  p={4}
//                  rounded={'xl'}
//                  minW={'sm'}>
//                  <Stack>
                 
//                  </Stack>
//                </PopoverContent>
            
//            </Popover>
//          </Box>
  
//      </Stack>
//    );
//  };
 
 