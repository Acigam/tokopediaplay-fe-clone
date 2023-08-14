import { Card, CardBody, AspectRatio, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const VideoCard = ({ id, title, urlThumbnail, urlVideo }) => {
  return (
    <Link to={`/video/${id}`}>
      <Card maxW="sm" style={{ cursor: "pointer" }} boxShadow={"none"}>
        <AspectRatio ratio={16 / 9}>
          <Image
            objectFit="cover"
            src={urlThumbnail}
            alt={title}
            borderRadius={{ base: "sm", md: "md" }}
          />
        </AspectRatio>
        <CardBody px={1} py={1.5}>
          <Text fontWeight={"semibold"} size="md" overflowWrap={"normal"} noOfLines={2}>
            {title}
          </Text>
        </CardBody>
      </Card>
    </Link>
  );
};

export default VideoCard;
