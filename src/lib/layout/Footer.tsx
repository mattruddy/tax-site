import { Flex, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex as="footer" width="full" justifyContent="center">
      <Text fontSize="sm">{new Date().getFullYear()} - MJR Group LLC</Text>
    </Flex>
  );
};

export default Footer;
