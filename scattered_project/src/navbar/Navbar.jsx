
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
   Input,
   
 } from '@chakra-ui/react';
 import {
   HamburgerIcon,
   CloseIcon,
   ChevronDownIcon,
   ChevronRightIcon,
 } from '@chakra-ui/icons';
 

 export default function Navbar() {
  const redirect = () => {
    window.location.href = '/'
 }
   const { isOpen, onToggle } = useDisclosure();
 
   return (
     <Box>
       <Flex
        border="8px"
        width={"100%"}
        margin="auto"
        height={"80px"}
               borderBottom={1}
         borderStyle={'solid'}
         borderColor={useColorModeValue('black.200', 'black.900')}
         align={'center'}>
         <Flex
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

         <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
        <button onClick={redirect}><img src="https://cdn.shortpixel.ai/spai/w_341+q_lossless+ret_img+to_webp/https://myapnabazar.in/wp-content/uploads/2020/08/final.png" alt=""
         width="100px"
        //  height="100px"
         /></button> 


           <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
             <DesktopNav />
           </Flex>
         </Flex>
 
         <Stack
           flex={{ base: 1, md: 0 }}
           justify={'flex-start'}
           justifyContent={'center'}
           direction={'row'}
           spacing={6}>
        
 
                 <RouterLink to="/login">
           <Text
             display={{ base: 'none', md: 'inline-flex' }}
             fontSize={'sm'}
             width="50px"
             marginRight={"30px"}
             fontWeight={600}
             color={'black'}
                    href={'#'}
             _hover={{
               bg: 'gray.300',
             }}>
              Login
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
 
 