const baseURL = process.env.REACT_APP_SOCKET_URL || "http://localhost:3001";

export async function getAllVideos() {
  const response = await fetch(`${baseURL}/api/videos`);
  return await response.json();
}

export async function getVideoById(id) {
  const response = await fetch(`${baseURL}/api/videos/${id}`);
  return await response.json();
}

export async function getCommentsByVideoId(id) {
  const response = await fetch(`${baseURL}/api/videos/${id}/comments`);
  return await response.json();
}

export async function createComment(videoID, username, comment) {
  const response = await fetch(`${baseURL}/api/comments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ videoID, username, comment }),
  });
  return await response.json();
}

export async function searchVideos(query) {
  const response = await fetch(`${baseURL}/api/videos?query_search=${query}`);
  return await response.json();
}
