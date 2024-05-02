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
      console.log(data.aboutMe.name);
      console.log(data.aboutMe.email);
      console.log(data.aboutMe.phone);
      console.log(data.aboutMe.location);

      //for in loop
      for (var key in data) {
        console.log(data[key].education); // displays requested data
      }

      console.log(data.aboutMe.portfolio);

      //console.log(data.aboutMe.work); // if we need the complete  'work' key/value pair, then we can grab it like this

      //traditional for Loop
      //using for loop we can iterate the list of values inside a particular key/value pair.
      //In this case we are pulling individual values from 'work'
      for (var i = 0; i < Object.keys(data.aboutMe.work).length; i++) {
        console.log(data.aboutMe.work[i]);
      }

      //foreach Loop
      const keys = Object.keys(data);
      keys.forEach((key) => {
        console.log(data[key].projects);
      });

      //for of Loop
      for (var key of data.aboutMe.skills) {
        console.log(key);
      }

      console.log(data.aboutMe.languages);
      console.log(data.aboutMe.hobbies);
    })

    .catch((error) => console.error("Unable to fetch data:", error));
}
