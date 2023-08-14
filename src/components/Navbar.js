"use client";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";

import tokopediaPlay from "../assets/tokopedia-play.webp";
import SearchBar from "./atoms/SearchBar";
import { useState } from "react";

const NavbarLink = (props) => {
  const { children } = props;

  return (
    <Box
      as="span"
      px={2}
      py={2}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.100", "gray.700"),
      }}
      fontWeight={600}
      color={"gray.700"}
    >
      {children}
    </Box>
  );
};

const ListLinkNavbar = () => {
  return (
    <>
      <Link to="/">
        <NavbarLink>Explore</NavbarLink>
      </Link>
    </>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query_search=${searchQuery}`);
  };

  return (
    <>
      <Box
        bg={useColorModeValue("white", "gray.500")}
        borderBottom={0.5}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        px={4}
        style={{
          boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box display={{ base: "none", md: "block" }} fontWeight={"semibold"}>
              <Image width={170} src={tokopediaPlay} alt="Tokopedia Play" />
            </Box>
            <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
              <ListLinkNavbar />
            </HStack>
          </HStack>
          <Flex alignItems="center">
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              handleSearchSubmit={handleSearchSubmit}
            />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <ListLinkNavbar />
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
