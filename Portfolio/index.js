/*Seervices page js */

function pre() {
  var slider = document.getElementById("slid");
  slider.scrollBy({
    left: 100,
    behavior: "smooth",
  });
}
function next() {
  var slider = document.getElementById("slid");
  slider.scrollBy({
    left: -100,
    behavior: "smooth",
  });
}

// portfolio - page
var projects;
var portfolio = document.getElementById("projects");
const scrollRight = document.getElementById("arrowRight");
const scrollLeft = document.getElementById("arrowLeft");
fetch("./Portfolio_List.json")
  .then((res) => res.json())
  .then((data) => setData(data))
  .catch((error) => console.log(error));
function setData(data) {
  projects = data.projects;
  // console.log(projects);
  for (let i = 0; i < projects.length; i++) {
    var li = document.createElement("li");
    var title = document.createElement("h3");
    title.innerText = projects[i].name;
    li.firstChild = projects[i].name;
    li.style.margin = "5px";
    const div = document.createElement("div");
    const link = document.createElement("a");
    link.innerText = "see the project";
    link.href = projects[i].link;
    link.target = "blank";
    // var video = document.createElement("video");
    // li.appendChild(video);
    // video.src = projects[i].vedio;
    // video.width = 160;
    // video.controls = true;
    // video.autoplay = false;
    // video.height = 160;
    // video.poster = projects[i].image;
    // video.poster = "./asset/Group 17.png";
    var Image = document.createElement("img");
    Image.src = projects[i].image;
    Image.className = "Image";
    var Description = document.createElement("p");
    Description.innerText = projects[i].description;
    Description.className = "Description";
    li.appendChild(Image);
    li.appendChild(div);
    div.appendChild(title);
    div.appendChild(Description);
    div.appendChild(link);
    portfolio.appendChild(li);
  }
}
/* left and right scroll in portfolio*/
scrollRight.addEventListener("click", () => {
  portfolio.scrollBy({
    left: -240,
    behavior: "smooth",
  });
});
scrollLeft.addEventListener("click", () => {
  portfolio.scrollBy({
    left: 240,
    behavior: "smooth",
  });
});
/*  testimonail page js*/

// setTimeout(scrollRightTestimonial, 5000);
// setInterval(scrollRightTestimonial, 5000);
