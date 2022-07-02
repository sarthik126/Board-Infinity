// input
const studentName = document.getElementById("name");
const college = document.getElementById("college");
const loc = document.getElementById("location");
const picture = document.querySelector("#picture");
const studentImage = document.querySelector("#student-image");

// output
const card = document.querySelector(".right");
const outImage = document.querySelector(".card-image");
const outName = document.querySelector(".nameVal");
const outCollege = document.querySelector(".collegeVal");
const outLocation = document.querySelector(".locationVal");

// image path
var imagePath = ""

picture.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    imagePath = reader.result;
    studentImage.style.backgroundImage = `url(${imagePath})`;
  });
  reader.readAsDataURL(this.files[0]);
});

function generate(event) {
    event.preventDefault();
    let nameVal = studentName.value;
    let collegeVal = college.value;
    let locVal = loc.value;

    // console.log(nameVal,collegeVal,locVal);

    outImage.style.backgroundImage = `url(${imagePath})`;
    outName.innerHTML = nameVal;
    outCollege.innerHTML = collegeVal;
    outLocation.innerHTML = locVal;

    card.style.display = "flex";

    return false;
}