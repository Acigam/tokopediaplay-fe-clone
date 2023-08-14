"use client";
import { Flex, Circle, Box, Text, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ProductCard = ({ title, price, linkProduct }) => {
  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.800")}
      width="full"
      borderWidth="1px"
      rounded="lg"
      shadow="sm"
      position="relative"
    >
      <Link to={linkProduct} target="_blank">
        <Circle size="10px" position="absolute" top={2} right={2} bg="green.200" />

        <Box p="3">
          <Flex flexDirection={"column"} justifyContent={"space-between"}>
            <Text overflowWrap={"normal"} noOfLines={2} h="3em" overflow="hidden">
              {title}
            </Text>
            <Box fontSize="xl" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color={"gray.600"} fontSize="lg">
                Rp&nbsp;
              </Box>
              {price.toLocaleString("id-ID")}
            </Box>
          </Flex>
        </Box>
      </Link>
    </Box>
  );
};

export default ProductCard;
