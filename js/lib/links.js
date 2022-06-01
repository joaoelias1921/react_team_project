// function if the github link is null then it will put a red border around github link input
document
  .getElementsByClassName("continue-btn")[0]
  .addEventListener("click", (event) => {
    if (document.getElementById("github-link").value == "") {
      document.getElementById("github-link").style.border = "1px solid red";
    }
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
    return true;
  } else {
    document.getElementById("github-link").style.border = "1px solid red";
    return false;
  }
}
