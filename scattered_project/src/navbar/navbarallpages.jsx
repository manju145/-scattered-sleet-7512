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
    
        bg={useColorModeValue('white', 'gray.800')}
      color={useColorModeValue('gray.600', 'white')}
      minH={'60px'}
      py={{ base: 2 }}
      px={{ base: 4 }}
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.900')}
      align={'center'}>
      <Flex
       backgroundColor={"yellow"}
        flex={{ base: 1, md: 'auto' }}
        ml={{ base: -2 }}
        display={{ base: 'flex', md: 'none' }}>
        <IconButton
          onClick={onToggle}
          icon={
            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
          }
          variant={'ghost'}
          aria-label={'Toggle Navigation'}
        />
      </Flex>
      
               <Stack
                 display={'flex'}
                 gap="30%"
           flex={{ base: 1, md: 0 }}
           justify={'flex-start'}
           justifyContent={'center'}
           direction={'row'}
           spacing={6}>
       <RouterLink to="/">
       <Text
             display={{ base: 'none', md: 'inline-flex' }}
             fontSize={'sm'}
             fontWeight={600}
             color={'white'}
             bg={'pink.400'}
             href={'#'}
             _hover={{
               bg: 'pink.300',
             }}>
             Home
           </Text>
       </RouterLink>

       <RouterLink to="mobile">
           <Text
             display={{ base: 'none', md: 'inline-flex' }}
             fontSize={'sm'}
             fontWeight={600}
             color={'white'}
             bg={'pink.400'}
             href={'#'}
             _hover={{
               bg: 'pink.300',
             }}>
            Mobiles
           </Text>
           </RouterLink>

           <RouterLink to="/furniture">
           <Text
             display={{ base: 'none', md: 'inline-flex' }}
             fontSize={'sm'}
             fontWeight={600}
             width="250%"
             color={'white'}
             bg={'pink.400'}
             href={'#'}
             _hover={{
               bg: 'pink.300',
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
             color={'white'}
             bg={'pink.400'}
             href={'#'}
             _hover={{
               bg: 'pink.300',
             }}>
              Electronics
           </Text>
           </RouterLink>

           <RouterLink to="/kidsAndToys">
           <Text
             display={{ base: 'none', md: 'inline-flex' }}
             fontSize={'sm'}
             width="400%"
             fontWeight={600}
             color={'white'}
             bg={'pink.400'}
             href={'#'}
             _hover={{
               bg: 'pink.300',
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
             color={'white'}
             bg={'pink.400'}
             href={'#'}
             _hover={{
                bg: 'pink.300',
             
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
 
 const DesktopNav = () => {
   const linkColor = useColorModeValue('gray.600', 'gray.200');
   const linkHoverColor = useColorModeValue('gray.800', 'white');
   const popoverContentBgColor = useColorModeValue('white', 'gray.800');
 
   return (
     <Stack direction={'row'} spacing={4}>
    
         <Box>
           <Popover trigger={'hover'} placement={'bottom-start'}>
             <PopoverTrigger>
               <Link
                 p={2}
                  fontSize={'sm'}
                 fontWeight={500}
                 color={linkColor}
                 _hover={{
                   textDecoration: 'none',
                   color: linkHoverColor,
                 }}>
               
               </Link>
             </PopoverTrigger>
 
           
               <PopoverContent
                 border={0}
                 boxShadow={'xl'}
                 bg={popoverContentBgColor}
                 p={4}
                 rounded={'xl'}
                 minW={'sm'}>
                 <Stack>
                 
                 </Stack>
               </PopoverContent>
            
           </Popover>
         </Box>
  
     </Stack>
   );
 };
 
 