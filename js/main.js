function changeLinkdinLink() {
  document.getElementById("linkdin-link").value =
    localStorage.getItem("linkIn");
}

function changeGithubLink() {
  document.getElementById("github-link").value = localStorage.getItem("github");
}

// putting the local storage values in the input fields
changeLinkdinLink();
changeGithubLink();

// event listener to save the value inside input fields to local storage variables
document
  .getElementsByClassName("continue-btn")[0]
  .addEventListener("click", function (event) {
    event.preventDefault();

    var linkdinLink = document.getElementById("linkdin-link").value;

    var githubLink = document.getElementById("github-link").value;

    localStorage.setItem("linkIn", linkdinLink);

    localStorage.setItem("github", githubLink);
  });

// validating the linkdin and github links
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
