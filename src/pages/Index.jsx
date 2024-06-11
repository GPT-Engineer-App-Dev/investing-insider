import { Box, Container, Heading, VStack, Text, SimpleGrid, GridItem, Divider } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        {/* Header */}
        <Box bg="brand.700" color="white" p={4} borderRadius="md">
          <Heading as="h1" size="xl" textAlign="center">
            Financial News Today
          </Heading>
        </Box>

        {/* Headlines Section */}
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Headlines
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <GridItem>
              <Box p={4} borderWidth="1px" borderRadius="md">
                <Heading as="h3" size="md">
                  Headline 1
                </Heading>
                <Text mt={2}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                </Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box p={4} borderWidth="1px" borderRadius="md">
                <Heading as="h3" size="md">
                  Headline 2
                </Heading>
                <Text mt={2}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                </Text>
              </Box>
            </GridItem>
          </SimpleGrid>
        </Box>

        <Divider />

        {/* Market Data Section */}
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Market Data
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
            <GridItem>
              <Box p={4} borderWidth="1px" borderRadius="md">
                <Heading as="h3" size="md">
                  Market 1
                </Heading>
                <Text mt={2}>
                  Data 1
                </Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box p={4} borderWidth="1px" borderRadius="md">
                <Heading as="h3" size="md">
                  Market 2
                </Heading>
                <Text mt={2}>
                  Data 2
                </Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box p={4} borderWidth="1px" borderRadius="md">
                <Heading as="h3" size="md">
                  Market 3
                </Heading>
                <Text mt={2}>
                  Data 3
                </Text>
              </Box>
            </GridItem>
          </SimpleGrid>
        </Box>

        <Divider />

        {/* Featured Articles Section */}
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Featured Articles
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <GridItem>
              <Box p={4} borderWidth="1px" borderRadius="md">
                <Heading as="h3" size="md">
                  Article 1
                </Heading>
                <Text mt={2}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                </Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box p={4} borderWidth="1px" borderRadius="md">
                <Heading as="h3" size="md">
                  Article 2
                </Heading>
                <Text mt={2}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                </Text>
              </Box>
            </GridItem>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;