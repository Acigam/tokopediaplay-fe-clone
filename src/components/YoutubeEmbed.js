const YoutubeEmbed = ({ youtubeId, title }) => {
  return (
    <iframe
      src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
      title={title}
      allowFullScreen="allowfullscreen"
      style={{ width: "100%", height: "100%" }}
    ></iframe>
  );
};

export default YoutubeEmbed;
