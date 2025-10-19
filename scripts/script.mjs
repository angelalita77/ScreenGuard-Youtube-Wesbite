// const YTUrl = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=bruno%20mars&"

// -----------------CONSTANT API VARIABLES ---------------------//
// YouTube API Key
const API_KEY = "AIzaSyC8KDmieXuPxX9po92QRi3fvAzITE2KMMM";
//Search query to mimic what's typed in search bar
const SEARCH_QUERY = "nujabes";
const SEARCH_URL = "https://www.googleapis.com/youtube/v3/search";
const MAX_RESULTS = 2;


//Example of a CURL Snippet - search with and without spaces
// https://www.googleapis.com/youtube/v3/search?key=AIzaSyC8KDmieXuPxX9po92QRi3fvAzITE2KMMM&q=nujabes&part=snippet&type=video&maxResults=2
// https://www.googleapis.com/youtube/v3/search?key=AIzaSyC8KDmieXuPxX9po92QRi3fvAzITE2KMMM&q=nujabes light land&part=snippet&type=video&maxResults=2


// Parameters for the API request:
// part=snippet: Get title, description, and thumbnails
// q: The search query
// type=video: Only return video results
// maxResults=5: Limit the results to 2

// const url = `${SEARCH_URL}?key=${API_KEY}&q=${SEARCH_QUERY}&part=snippet&type=video&maxResults=${MAX_RESULTS}`

// Check to see if URL is concantinated well
// console.log(url);
// console.log("https://www.googleapis.com/youtube/v3/search?key=AIzaSyC8KDmieXuPxX9po92QRi3fvAzITE2KMMM&q=nujabes&part=snippet&type=video&maxResults=2");

console.log(`Starting fetch for (${SEARCH_QUERY}) YouTube videos...`);

document.getElementById('search-btn').addEventListener('click', doSearch);

// console.log("Request URL:", url);

// Parameters for the API request:
// part=snippet: Get title, description, and thumbnails
// q: The search query
// type=video: Only return video results
// maxResults=2: Limit the results to 2
function doSearch(){

    const query = document.getElementById('search-input').value;
    console.log(query);


// fetch(url)
//     .then(res => {
//         if (!res.ok) {
//             throw new Error(`HTTP error! status: ${res.status}`);
//         }
//         return res.json(); // Parse the JSON body
//     })
//     .then(data => {
//         // Log the full JSON response to the console
//         console.log("✅ Full JSON Response from YouTube API:", data);
//         console.log(data.items.length);

//         // Walk through the data to show the key pieces of information for the first video
//         if (data.items && data.items.length > 0) {
//             const firstVideo = data.items[0];

//             console.log("--- Key Data for First Video ---");
//             // 1. Video ID (needed for the player)
//             console.log("Video ID:", firstVideo.id.videoId);

//             // 2. Title and Description (from the snippet)
//             console.log("Title:", firstVideo.snippet.title);
//             console.log("Description:", firstVideo.snippet.description);

//             // 3. Thumbnail URL
//             console.log("Thumbnail URL (Medium):", firstVideo.snippet.thumbnails.medium.url);
//             console.log("------------------------------");
//         } else {
//             console.log("No videos found for the query.");
//         }
//     })
//     .catch(error => {
//         console.error("❌ An error occurred during the API request:", error);
//         console.error("Please check your API Key, network connection, and YouTube API quota limit.");
//     });
}



