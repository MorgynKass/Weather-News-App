// taking an API request and assigning it to a varible.
const url =
  "https://newsapi.org/v2/everything?q=Climate&from=2023-09-25&sortBy=popularity&pageSize=4&apiKey=8f60e3c2c4d54283b124acf84798a337";

// turning that request into Json format so I can access it.
fetch(url)
  .then((data) => {
    return data.json();
  })
  .then((jsObject) => {
    console.log(jsObject);

    // variable that holds my div element "main-story"
    const mainStory = document.querySelector(".main-story");
    // console.log(mainStory);

    // variable that holds my div element "news-one"
    const subStories = document.querySelector(".sub-stories");

    // variable that holds an array with all of my articles I can use in my project.
    let article = jsObject.articles;
    console.log(article);

    // varible that hold only a certain amount of stories so I can use them in my "sub-stories" element.
    let slicedArticle = article.slice(1);
    console.log(slicedArticle);

    // creating my main-story elements contents.

    // variable that will hold an img element and then appending it to my "main-story" div.
    let mainImg = document.createElement("img");
    mainImg.src = article[0].urlToImage;

    mainStory.appendChild(mainImg);

    // two variables that contain an h2 and a element. Appending a to h2 and then appending to my "main-story" div.
    let h2Main = document.createElement("h2");
    let mainLink = document.createElement("a");
    mainLink.href = article[0].url;
    mainLink.textContent = article[0].title;

    h2Main.appendChild(mainLink);
    mainStory.appendChild(h2Main);

    // variable that will hold an h3 element and then appending it to my "main-story" div.
    let h3Main = document.createElement("h3");
    h3Main.textContent = article[0].description;

    mainStory.appendChild(h3Main);

    // creating my sub-stories content.

    // for loop that loops through my slicedArticle array and allows me to assing certain info to certain elements.
    for (let i = 0; i < slicedArticle.length; i++) {
      let story = document.createElement("div");
      story.classList = "story";

      let subImg = document.createElement("img");
      subImg.src = slicedArticle[i].urlToImage;
      // console.log(slicedArticle[i].urlToImage);

      let subH2 = document.createElement("h2");
      let subLink = document.createElement("a");
      subLink.href = slicedArticle[i].url;
      subLink.textContent = slicedArticle[i].title;
      subH2.appendChild(subLink);

      let subH3 = document.createElement("h3");
      subH3.textContent = slicedArticle[i].description;

      story.append(subImg, subH2, subH3);

      subStories.appendChild(story);
    }
  });
