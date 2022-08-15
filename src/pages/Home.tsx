import { Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Flex flexDir="column" gap="5" p="10">
      <Link to="/queries">
        <Button w="full">Queries</Button>
      </Link>
    </Flex>
  );
};

export default Home;
