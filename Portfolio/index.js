
// const slidLeft = () => {
//     const slider = document.getElementById("slid");
//     slider.scrollLeft = slider.scrollLeft - 500;
//   };
//   const slidRight = () => {
//     const slider = document.getElementById("m-section");
//     slider.scrollLeft = slider.scrollLeft + 500;
//   };
function pre(){
  var slider = document.getElementById("slid");
  slider.scrollBy({
    left : 100,
    behavior: 'smooth'
  });
}
function next(){
    var slider = document.getElementById("slid");
    slider.scrollBy({
      left : -100,
      behavior: 'smooth'
    });
}