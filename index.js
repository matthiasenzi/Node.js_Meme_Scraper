// 1. Get HTML from URL - Node-Fetch to console log HTML from the URL

const fetch = require('node-fetch');
const cheerio = require('cheerio');
const fs = require('fs');

fetch('https://memegen-link-examples-upleveled.netlify.app/')
  .then((res) => res.text())
  .then((html) => {
    // 2. Identify all the pictures on the website.

    const $ = cheerio.load(html); // gets the HTML code of the entire website.

    const ImagesArray = []; //the loop sorts out the first 10 images and puts them into an array.

    $("[href$='.jpg']").each(function () {
      const link = $(this).html().split('"');
      ImagesArray.push(link[1]);
    });

    for (let i = 0; i < 10; i++) {
      const Images = ImagesArray[i];

      const FinalImagesArray = []; // first 10 images are put to an array.
      FinalImagesArray.push(Images);

      console.log(FinalImagesArray);
    }
    $.html();
  });

// 3. Create a memes folder if it doesn't exist yet

const dir = './memes';
try {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
} catch (err) {
  console.error(err);
}

// 6. Loop over the array for 10 times.

// 7. Download the image information.

// 8. Creat a new file with this image information
