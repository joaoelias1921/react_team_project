// function that verifies if the github input is empty, putting a red border around it
document
  .getElementsByClassName("next-btn")[0]
  .addEventListener("click", (event) => {
    if (document.getElementById("github-link").value == "") {
      document.getElementById("github-link").style.border = "1px solid red";
    }
  });

// validating the linkedin and github links
function verifyLinkdinLink() {
  var regexp =
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
  if (regexp.test(document.getElementById("linkdin-link").value)) {
    document.getElementById("linkdin-link").style.border = null;
  } else {
    document.getElementById("linkdin-link").style.border = "1px solid red";
  }
}

function verifyGithubLink() {
  var regexp =
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
  if (regexp.test(document.getElementById("github-link").value)) {
    document.getElementById("github-link").style.border = null;
  } else {
    document.getElementById("github-link").style.border = "1px solid red";
  }
}
