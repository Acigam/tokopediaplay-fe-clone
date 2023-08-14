const getYoutubeId = (url) => {
  var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  var match = url.match(regExp);

  if (match && match[2].length === 11) {
    return match[2];
  } else {
    return 0;
  }
};

const formatDate = (dateTimeString) => {
  const date = new Date(dateTimeString);

  const optionsDate = { day: "numeric", month: "long", year: "numeric" };
  const formattedDate = date.toLocaleDateString("id-ID", optionsDate);

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;

  return `${formattedTime}, ${formattedDate}`;
};

export { getYoutubeId, formatDate };
