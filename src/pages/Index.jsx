import { Container, VStack, Heading, Text, SimpleGrid, Box, Image, Button } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const snacks = [
  { id: 1, name: "Cheetos Crunchy", origin: "American", imageUrl: "https://images.unsplash.com/photo-1615490103413-3f3716e08282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxDaGVldG9zJTIwQ3J1bmNoeXxlbnwwfHx8fDE3MTUyODg3NjB8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 2, name: "Takis Fuego", origin: "Mexican", imageUrl: "https://images.unsplash.com/photo-1663862531159-e750d2e611c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxUYWtpcyUyMEZ1ZWdvfGVufDB8fHx8MTcxNTI4ODc2MXww&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 3, name: "Reese's Peanut Butter Cups", origin: "American", imageUrl: "https://images.unsplash.com/photo-1505253827648-b4de98bc66b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxSZWVzZSUyN3MlMjBQZWFudXQlMjBCdXR0ZXIlMjBDdXBzfGVufDB8fHx8MTcxNTI4ODc2Mnww&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 4, name: "Doritos Nacho Cheese", origin: "American", imageUrl: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxEb3JpdG9zJTIwTmFjaG8lMjBDaGVlc2V8ZW58MHx8fHwxNzE1Mjg4NzYyfDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 5, name: "Mexican Hot Chocolate", origin: "Mexican", imageUrl: "https://images.unsplash.com/photo-1493925410384-84f842e616fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxNZXhpY2FuJTIwSG90JTIwQ2hvY29sYXRlfGVufDB8fHx8MTcxNTI4ODc2M3ww&ixlib=rb-4.0.3&q=80&w=1080" },
  // Add more snacks as needed
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">
          Snack Haven
        </Heading>
        <Text fontSize="xl">Explore over 50+ trending snacks from America and Mexico!</Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {snacks.map((snack) => (
            <Box key={snack.id} p={5} shadow="md" borderWidth="1px" rounded="md">
              <Image src={snack.imageUrl} alt={snack.name} borderRadius="md" />
              <Text mt={2} fontSize="xl" fontWeight="semibold">
                {snack.name}
              </Text>
              <Text>{snack.origin}</Text>
              <Button rightIcon={<FaShoppingCart />} colorScheme="teal" variant="solid" mt={3}>
                Add to Cart
              </Button>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;
