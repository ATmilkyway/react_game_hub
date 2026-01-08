import NavBar from "@/components/NavBar";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Flex
        height="86dvh"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
      >
        <Heading fontSize={48} mb={5}>
          Oops
        </Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "The page doesn't exist "
            : "An unexptected error ocured."}
        </Text>
      </Flex>
    </>
  );
};

export default ErrorPage;
