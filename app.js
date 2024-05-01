document
  .getElementById("btn_loadResume")
  .addEventListener("click", appendText, true);

function appendText() {
  fetch("./resume.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      // Object.keys(data.aboutMe).length; //check the size of JSON properties
      console.log(data.aboutMe.location);
      //   for (var i = 0; i < Object.keys(data.aboutMe.location).length; i++) {
      //     console.log(data.aboutMe.location[i]);
      //   }
      for (var key in data) {
        console.log(data[key].education); // displays requested data
      }
    })

    .catch((error) => console.error("Unable to fetch data:", error));
}
