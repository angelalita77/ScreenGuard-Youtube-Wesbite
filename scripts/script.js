// const YTUrl = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=bruno%20mars&"
const ApiKey = "AIzaSyC8KDmieXuPxX9po92QRi3fvAzITE2KMMM";

const videoSection = document.querySelector('section')

fetch(YTUrl + "key=" + ApiKey)
.then (res => res.json())
.then(data => {
    console.log(data.items[0].snippet.title);})
.catch(error => {
    console.error ('Fetch error: ', error)
});

