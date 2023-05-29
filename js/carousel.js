const imageFolder = 'resources/images/carousel'; // Path to the folder in the GitHub repository
const imageCarousel = document.getElementById('imageCarousel');

fetchImageFiles(imageFolder)
  .then(imageFiles => {
    
    // Randomize the order of imageFiles array
    const shuffledImageFiles = shuffleArray(imageFiles);

    shuffledImageFiles.forEach(image => {
      const carouselItem = document.createElement('a');
      carouselItem.classList.add('carousel-item', 'valign-wrapper');

      const img = document.createElement('img');
      img.src = image.download_url;

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
    fetch(`https://api.github.com/repos/JanMrogala/JanMrogala.github.io/contents/${folder}`)
      .then(response => response.json())
      .then(data => {
        const imageFiles = data.filter(item => item.type === 'file' && isImageFile(item.name));
        resolve(imageFiles);
      })
      .catch(error => {
        reject('Error fetching image files.');
      });
  });
}

function isImageFile(filename) {
  const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
  const extension = filename.substring(filename.lastIndexOf('.')).toLowerCase();
  return allowedExtensions.includes(extension);
}

function shuffleArray(array) {
  // Fisher-Yates shuffle algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
