import { useEffect, useState } from "react";
import { Heading } from "@chakra-ui/react";

import { useTitle } from "../hooks/useTitle";
import { getAllVideos } from "../services/VideoService";
import ErrorMessage from "../components/atoms/ErrorMessage";
import VideoList from "../components/VideoList";

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useTitle("Tokopedia Play - Nonton Video & Shopping");

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await getAllVideos();
        setVideos(data.videos);
        setLoading(false);
      } catch (err) {
        setError("Something went wrong when fetching videos. Please try again later.");
        setLoading(false);
      }
    };
    fetchVideos();
  }, []);

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div className="home container">
      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <>
          <Heading as="h1" fontSize={20} noOfLines={1} pb={5}>
            Play
          </Heading>

          <VideoList loading={loading} videos={videos} />
        </>
      )}
    </div>
  );
};
export default Home;
