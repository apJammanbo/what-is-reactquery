import { Box, Flex, Stack, useColorModeValue } from "@chakra-ui/react";
import { BGIMAGE_LIGHT } from "../../constants";
import { BGIMAGE_DARK } from "./../../constants";

const RootBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      w="100vw"
      h="100vh"
      bg={useColorModeValue("gray.100", "gray.900")}
      css={{
        backgroundImage: useColorModeValue(BGIMAGE_LIGHT, BGIMAGE_DARK),
        backgroundAttachment: "fixed",
      }}
    >
      <Flex alignItems="center" w="100%" h="100vh" overflowY="auto" flexDir="column">
        <Stack w="100%" maxW="5xl" px={{ base: 2, md: 2 }} mb={2} height="100%">
          {children}
        </Stack>
      </Flex>
    </Box>
  );
};

export default RootBox;
