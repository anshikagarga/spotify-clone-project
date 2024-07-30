console.log("lets write javascript");

async function getsongs() {
  let a = await fetch("C://Users/10/OneDrive/Pictures/spotify clone project/songs");
  let response = await a.text();

  let div = document.createElement("div");
  div.innerHTML = response;
  let as = div.getElementsByTagName("a");
  let songs = [];

  for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href);
    }
  }
  return songs;
}
let songs = getsongs();
console.log(songs);
