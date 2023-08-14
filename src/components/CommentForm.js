import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaComment, FaUser } from "react-icons/fa";

const CommentForm = (props) => {
  const {
    username,
    comment,
    error,
    emptyFields,
    handleUsernameChange,
    handleCommentChange,
    handleSubmit,
  } = props;

  return (
    <Box mt={1} as="form" onSubmit={handleSubmit}>
      <Stack spacing={1}>
        <Flex alignItems="flex-end">
          <Box width={"90%"}>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <FaUser color="gray.300" />
              </InputLeftElement>
              <Input
                isInvalid={emptyFields.includes("username")}
                variant="flushed"
                placeholder="Username"
                name="username"
                value={username}
                onChange={handleUsernameChange}
                mr={2}
                focusBorderColor="green.400"
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <FaComment color="gray.300" />
              </InputLeftElement>
              <Input
                isInvalid={emptyFields.includes("comment")}
                variant="flushed"
                placeholder="Comment"
                name="comment"
                value={comment}
                onChange={handleCommentChange}
                mr={2}
                focusBorderColor="green.400"
              />
            </InputGroup>
          </Box>
          <Button
            type="submit"
            colorScheme="teal"
            size="md"
            loadingText="Submitting"
            width="7rem"
            mt={2}
          >
            Comment
          </Button>
        </Flex>
        {error && (
          <Text
            className="error"
            color="red.400"
            mt={1}
            bg="red.50"
            p={2}
            border="1px"
            borderRadius="md"
          >
            {error}
          </Text>
        )}
      </Stack>
    </Box>
  );
};

export default CommentForm;
