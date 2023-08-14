import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AspectRatio, Grid, GridItem, Text } from "@chakra-ui/react";
import { nanoid } from "nanoid";

import { socket } from "../websocket/socket";

import { getYoutubeId } from "../utils/";
import { useTitle } from "../hooks/useTitle";
import { getVideoById } from "../services/VideoService";
import { getCommentsByVideoId } from "../services/VideoService";

import YoutubeEmbed from "../components/YoutubeEmbed";
import ProductList from "../components/ProductList";
import CommentBody from "../components/CommentBody";
import ErrorMessage from "../components/atoms/ErrorMessage";

const VideoDetail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState({});
  const [comments, setComments] = useState([]);
  const [amountComments, setAmountComments] = useState([]);
  const [youtubeId, setYoutubeId] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    socket.emit("join room", id);

    const fetchVideo = async () => {
      try {
        const data = await getVideoById(id);
        if (data.error) {
          throw new Error(data.error);
        }
        setVideo(data);
        setYoutubeId(getYoutubeId(data.urlVideo));
        setIsLoading(false);
      } catch (err) {
        setError(err.message || "Something went wrong.");
        setIsLoading(false);
      }
    };
    fetchVideo();
  }, []);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const comments = await getCommentsByVideoId(id);
        setComments(comments.comments);
        setAmountComments(comments.amount);
      } catch (err) {
        setError("Something went wrong.");
      }
    };
    fetchComments();
  }, []);

  useEffect(() => {
    const receiveCommentListener = (receivedComment) => {
      console.log("Received comment:", receivedComment);
      receivedComment._id = nanoid();
      setComments((prevComments) => [receivedComment, ...prevComments]);
    };

    socket.on("receive comment", receiveCommentListener);

    return () => {
      socket.off("receive comment", receiveCommentListener);
    };
  }, []);

  function commentCreated() {
    setAmountComments(amountComments + 1);
  }

  useTitle(`Nonton Video ${video.title} di Tokopedia Play`);

  return (
    <div className="video-detail">
      {isLoading ? null : error ? (
        <ErrorMessage message={error} />
      ) : (
        <Grid
          templateAreas={`"video product" 
                        "comment product"`}
          gridTemplateColumns={"0.7fr 0.3fr"}
          gridTemplateRows={"1fr"}
          h="200px"
          columnGap="4"
          rowGap="1"
        >
          <AspectRatio maxW="auto" ratio={16 / 9}>
            <GridItem area={"video"} bg="black">
              {youtubeId && <YoutubeEmbed youtubeId={youtubeId} title={video.title} />}
            </GridItem>
          </AspectRatio>

          <GridItem area={"product"}>
            {video.products && video.products.length > 0 ? (
              <ProductList products={video.products} />
            ) : (
              <NoProduct />
            )}
          </GridItem>

          <GridItem area={"comment"}>
            {comments && (
              <CommentBody
                videoId={id}
                comments={comments}
                amount={amountComments}
                commentCreated={commentCreated}
              />
            )}
          </GridItem>
        </Grid>
      )}
    </div>
  );
};

const NoProduct = () => {
  return (
    <Text fontSize="md" textAlign="center" bg={"gray.100"} padding={5} borderRadius={"md"}>
      This video has no products for sale yet.
    </Text>
  );
};

export default VideoDetail;
