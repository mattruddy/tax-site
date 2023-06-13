import { Flex, Heading } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

const Home = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <NextSeo title="Home" />
      <Heading>Tax Preparation and Planning</Heading>
      <Heading>IRS Tax Problems</Heading>
    </Flex>
  );
};

export default Home;
