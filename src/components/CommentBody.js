import { Box, Flex, Divider, Text } from "@chakra-ui/react";
import { useState } from "react";
import format from "date-fns/format";

import { socket } from "../websocket/socket";

import { createComment } from "../services/VideoService";
import CommentForm from "./CommentForm";

const CommentBody = ({ comments, amount, videoId, commentCreated }) => {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyField] = useState([]);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newComment = await createComment(videoId, username, comment);

    if (newComment.status === "Fail") {
      setError(newComment.error);
      setEmptyField(newComment.emptyFields);
      return;
    }
    if (newComment.status === "Success") {
      socket.emit("send comment", {
        videoid: videoId,
        username,
        comment,
        timestamp: newComment.comment.createdAt,
      });
      commentCreated();
      setError(null);
      setEmptyField([]);
      setComment("");
    }
  };

  return (
    <>
      <CommentForm
        username={username}
        comment={comment}
        error={error}
        emptyFields={emptyFields}
        handleUsernameChange={handleUsernameChange}
        handleCommentChange={handleCommentChange}
        handleSubmit={handleSubmit}
      />

      <Text pt={3} px={3} color="gray.800" fontWeight="600">
        {amount} Comments
      </Text>
      <Box
        className="comment-list"
        mb="50px"
        maxHeight="400px"
        overflowY="auto"
        bg={"gray.100"}
        mt={3}
        borderRadius={"md"}
        style={{ scrollbarWidth: "thin" }}
      >
        {comments.map((comment) => (
          <Box key={comment._id} px={3} my={1}>
            <Flex alignItems="center">
              <Box as="span" fontWeight="bold" mr={2}>
                {comment.username}
              </Box>
              <Box as="span" fontSize="sm" color="gray.500">
                {format(new Date(comment.createdAt), "HH:mm MMM d, yyyy")}
              </Box>
            </Flex>
            <Box>{comment.comment}</Box>
            <Divider my={1.5} />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default CommentBody;
