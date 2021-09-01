

let textarea = document.getElementById("textarea");
let featureFlag = document.getElementById("feature-flag");
console.log("hello");
function saveMyData() {
  if (localStorage.getItem("autosave-data")) {
    textarea.value = localStorage.getItem("autosave-data");
  }

  updateMyData();
}

function updateMyData() {
  setInterval(() => {
    let mydata = textarea.value;
    if (featureFlag.checked) {
      localStorage.setItem("autosave-data", mydata);
    }
  }, 1000);
}

saveMyData();
