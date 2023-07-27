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
    var p = document.createElement("p");
    p.innerText = projects[i].name;
    li.firstChild = projects[i].name;
    li.style.margin = "5px";
    const div = document.createElement("div");
    const link = document.createElement("a");
    link.innerText = "see the project";
    link.href = projects[i].link;
    link.target = "blank";
    var video = document.createElement("video");
    li.appendChild(video);
    video.src = projects[i].vedio;
    video.width = 160;
    video.controls = true;
    video.autoplay = false;
    video.height = 160;
    video.poster = projects[i].image;
    video.poster = "./asset/Group 17.png";
    li.appendChild(video);
    li.appendChild(div);
    div.appendChild(p);
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
const testimonail = document.getElementById("testemonial_top");
fetch("./comments.json")
  .then((res) => res.json())
  .then((data) => getComments(data.users))
  .catch((error) => console.log(error));
function getComments(data) {
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.className = "testemonial_img";
    var profile_wrapper = document.createElement("div");
    profile_wrapper.className = "profile-wrapper";
    var profile = document.createElement("img");
    profile.src = data[i].profile_img;
    profile_wrapper.appendChild(profile);
    div.appendChild(profile_wrapper);
    testimonail.appendChild(div);
    var name_wrapper = document.createElement("div");
    name_wrapper.className = "name_wrapper";
    var p = document.createElement("p");
    p.className = "name";
    p.innerText = data[i].name;
    name_wrapper.appendChild(p);
    div.appendChild(name_wrapper);
    var comment = document.createElement("p");
    comment.innerText = data[i].comments;
    comment.className = "comment";
    div.appendChild(comment);
    var Star_collection = document.createElement("div");
    Star_collection.className = "Star_collection";
    const yallowStar = document.createElement("img");
    yallowStar.src = "./asset/color star.png";
    yallowStar.style.display = "none";
    var grayStar = "Polygon 1.png";
    Star_collection.appendChild(yallowStar);
    var star = document.createElement("img");
    star.src = "./asset/Polygon 1.png";
    Star_collection.appendChild(star);
    var star1 = document.createElement("img");
    star1.src = "./asset/Polygon 1.png";
    Star_collection.appendChild(star1);
    var star2 = document.createElement("img");
    star2.src = "./asset/Polygon 1.png";
    Star_collection.appendChild(star2);
    var star3 = document.createElement("img");
    star3.src = "./asset/Polygon 1.png";
    Star_collection.appendChild(star3);

    star.addEventListener("click", () => {
      alert("clicked");
      // yallowStar.style.display = "inline-block";
      grayStar = "color star.png";
    });
    var star4 = document.createElement("img");
    star4.src = `./asset/${grayStar}`;
    Star_collection.appendChild(star4);
    div.appendChild(Star_collection);
    star4.style.display = "inline-block";
  }
}
function scrollRightTestimonial() {
  testimonail.scrollBy({
    left: 270,
    behavior: "smooth",
  });
}
function scrollLeftTestimonial() {
  testimonail.scrollBy({
    left: -270,
    behavior: "smooth",
  });
}

// setTimeout(scrollRightTestimonial, 5000);
// setInterval(scrollRightTestimonial, 5000);
