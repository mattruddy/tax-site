import {
  Center,
  Divider,
  Flex,
  HStack,
  Heading,
  Image,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <HStack w="100%" justify="space-between" marginLeft="auto">
        <VStack justify="center">
          <Image h="8" src="/logo.png" />
          <Heading size="md">MJR Group</Heading>
          <Text fontSize={12}>Tax Planning and Consulting</Text>
        </VStack>
        <HStack>
          <Link href="/">Home</Link>
          <Center height="20px">
            <Divider orientation="vertical" />
          </Center>
          <Link href="/about">About Us</Link>
          <Center height="20px">
            <Divider orientation="vertical" />
          </Center>
          <Link href="/contact">Contact</Link>
        </HStack>
      </HStack>
    </Flex>
  );
};

export default Header;
