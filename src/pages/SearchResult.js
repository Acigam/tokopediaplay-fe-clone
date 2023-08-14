import { useEffect, useState } from "react";
import { Heading } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

import { useTitle } from "../hooks/useTitle";
import { searchVideos } from "../services/VideoService";
import ErrorMessage from "../components/atoms/ErrorMessage";
import VideoList from "../components/VideoList";

const SearchResults = () => {
  const [searchParams] = useSearchParams();

  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useTitle("Tokopedia Play - Nonton Video & Shopping");

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const query = searchParams.get("query_search");
        if (query === "") {
          throw new Error("No results found. Try different keywords or remove search filters.");
        }

        const data = await searchVideos(searchParams.get("query_search"));
        if (data.videos.length === 0) {
          throw new Error("No results found. Try different keywords or remove search filters.");
        }

        setVideos(data.videos);
        setLoading(false);
        setError(null);
      } catch (err) {
        setError(
          err.message || "Something went wrong when fetching videos. Please try again later."
        );
        setLoading(false);
      }
    };
    fetchVideos();
  }, [searchParams]);

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div className="container">
      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <>
          <Heading as="h1" fontSize={20} noOfLines={1} pb={5}>
            {videos.length} Search Results
          </Heading>
          <VideoList loading={loading} videos={videos} />
        </>
      )}
    </div>
  );
};
export default SearchResults;
