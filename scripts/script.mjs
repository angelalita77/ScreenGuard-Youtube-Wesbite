// Setup constant for the API Key
const apiKey = "AIzaSyC8KDmieXuPxX9po92QRi3fvAzITE2KMMM"; // replace with your own API key

// Store elements for search, search results and video player
const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");
const playerContainer = document.getElementById("player-container");
const resultsDiv = document.getElementById("video-results");


//attempt 3 times to search for videoId in API snippet
const maxAttempts = 3;
let attempts = 0;
let nextPageToken = null;

searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim(); //make sure there is no extra space
  // if there is no empty search, search using
  // string of text saved in query.
  if (query) {
    playerContainer.innerHTML = "";
    resultsDiv.textContent = `Searching for: ${query} 🎬`;
    attempts = 0;
    nextPageToken = null;
    fetchVideos(query);
  } else {
    resultsDiv.textContent = "Please enter a search term!";
  }
});


async function fetchVideos(query) {
  const url = new URL("https://youtube.googleapis.com/youtube/v3/search");
  url.search = new URLSearchParams({
    part: "snippet",
    maxResults: 5,
    q: query,
    type: "video",
    videoDefinition: "any",
    videoDuration: "any",
    order: "relevance",
    key: apiKey,
    ...(nextPageToken && { pageToken: nextPageToken }),
  });

  console.log(url);

  try {
    // fetch data from the Google API
    const res = await fetch(url);
    //convert data to json
    const data = await res.json();

    // search thru data fetches for kind id type videos
    const videos = data.items.filter((item) => item.id.kind === "youtube#video");

    // If the video kind id is not found
    // call the fetchVideos() function again until found or
    // until it reach the max attempts
    if (videos.length === 0 && data.nextPageToken && attempts < maxAttempts) {
      attempts++;
      nextPageToken = data.nextPageToken;
      resultsDiv.textContent = `Still looking... (page ${attempts + 1})`;
      return fetchVideos(query);
    }
    
    displayVideos(videos);
    // if no videos was found
  } catch (err) {
    console.error("Error fetching videos:", err);
    resultsDiv.textContent = "Error fetching videos 😢";
  }
}