const imageFolder = 'resources/images/carousel'; // Path to the local image folder
const imageCarousel = document.getElementById('imageCarousel');

fetchImageFiles(imageFolder)
  .then(imageFiles => {
    console.log(imageFiles);
    imageFiles.forEach(image => {
      const carouselItem = document.createElement('a');
      carouselItem.classList.add('carousel-item', 'valign-wrapper');

      const img = document.createElement('img');
      img.src = image;

      carouselItem.appendChild(img);
      imageCarousel.appendChild(carouselItem);
    });

    // Initialize the carousel
    M.Carousel.init(imageCarousel);
  })
  .catch(error => {
    console.error(error);
  });

function fetchImageFiles(folder) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', folder);
    xhr.onload = function () {
      if (xhr.status === 200) {
        const files = parseImageFiles(xhr.responseText);
        resolve(files);
      } else {
        reject('Error fetching image files.');
      }
    };
    xhr.onerror = function () {
      reject('Error fetching image files.');
    };
    xhr.send();
  });
}

function parseImageFiles(responseText) {
  const parser = new DOMParser();
  const html = parser.parseFromString(responseText, 'text/html');
  const links = html.getElementsByTagName('a');

  const imageFiles = [];
  for (let i = 0; i < links.length; i++) {
    const href = links[i].getAttribute('href');
    if (isImageFile(href)) {
      imageFiles.push(href);
    }
  }

  return imageFiles;
}

function isImageFile(filename) {
  const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
  const extension = filename.substring(filename.lastIndexOf('.')).toLowerCase();
  return allowedExtensions.includes(extension);
}