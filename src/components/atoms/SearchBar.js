import { SearchIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Input } from "@chakra-ui/react";

const SearchBar = (props) => {
  const { searchQuery, setSearchQuery, handleSearchSubmit } = props;

  return (
    <Flex
      as="form"
      alignItems="center"
      onSubmit={handleSearchSubmit}
      width={{ base: "16rem", md: "25rem" }}
    >
      <Input
        placeholder="Search Videos"
        borderWidth={1.5}
        borderRightRadius={"none"}
        borderColor="gray.400"
        focusBorderColor="green.500"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <IconButton
        type="submit"
        borderLeftRadius={"none"}
        borderWidth={1.5}
        aria-label="Search"
        icon={<SearchIcon />}
        onClick={handleSearchSubmit}
      />
    </Flex>
  );
};

export default SearchBar;
