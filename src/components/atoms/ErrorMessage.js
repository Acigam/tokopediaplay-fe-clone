import React from "react";
import { Box, Text } from "@chakra-ui/react";

const ErrorMessage = ({ message }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh" mx={3}>
      <Text fontSize="xl" color="gray.500">
        {message}
      </Text>
    </Box>
  );
};

export default ErrorMessage;
