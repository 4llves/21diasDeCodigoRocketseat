const requestUrl = `https://api.unsplash.com/search/photos?query=london&client_id=nyrhEUFSk6yEk-EAC2zl4dwculhEgWmBRObo4HLGeF8`;
const getImagesButton = document.querySelector('.getImagesButton');
const imageToDisplay1 = document.querySelector('.imageToDisplay1');
const imageToDisplay2 = document.querySelector('.imageToDisplay2');
const imageToDisplay3 = document.querySelector('.imageToDisplay3');
const imageToDisplay4 = document.querySelector('.imageToDisplay4');

getImagesButton.addEventListener('click', async () => {
  let randomImage1 = await getNewImage();
  let randomImage2 = await getNewImage();
  let randomImage3 = await getNewImage();
  let randomImage4 = await getNewImage();

  imageToDisplay1.src = randomImage1;
  imageToDisplay2.src = randomImage2;
  imageToDisplay3.src = randomImage3;
  imageToDisplay4.src = randomImage4;
});

async function getNewImage() {
  let randomNumber = Math.floor(Math.random() * 10);
  return fetch(requestUrl)
    .then((response) => response.json())
    .then((data) => {
      let allImages = data.results[randomNumber];
      return allImages.urls.regular;
    });
}