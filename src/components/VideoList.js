import React from "react";
import { SimpleGrid, Skeleton } from "@chakra-ui/react";
import VideoCard from "../components/VideoItem";

const VideoList = ({ loading, videos }) => {
  return (
    <SimpleGrid spacing={7} columns={{ base: 1, md: 4 }}>
      {loading
        ? Array.from({ length: 4 }).map((_, index) => <Skeleton key={index} height="200px" />)
        : videos.map((video) => (
            <VideoCard
              key={video._id}
              id={video._id}
              title={video.title}
              urlThumbnail={video.urlThumbnail}
              urlVideo={video.urlVideo}
            />
          ))}
    </SimpleGrid>
  );
};

export default VideoList;
