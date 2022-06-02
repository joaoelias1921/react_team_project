var tempNumber = 0;

function changeValue() {
  // definindo variaveis para puxar valor do local storage
  var fullname = localStorage.getItem("fullname");
  var nickname = localStorage.getItem("nickname");
  var email = localStorage.getItem("email");
  var phone = localStorage.getItem("phone");
  var dobDay = localStorage.getItem("dobDay");
  var dobMonth = localStorage.getItem("dobMonth");
  var dobYear = localStorage.getItem("dobYear");
  var age = localStorage.getItem("age");
  var linkedin = localStorage.getItem("linkdin-link");
  var github = localStorage.getItem("github-link");
  var teamName = localStorage.getItem("teamName");
  var institution = localStorage.getItem("institution");
  var graduation = localStorage.getItem("graduation");

  // alterando valores da página list.html com as variaveis do local storage
  let nameValue =
    document.getElementsByClassName("name-value-name")[tempNumber];
  nameValue.innerHTML = fullname;
  let nicknameValue = document.getElementsByClassName(
    "nickname-value-nickname"
  )[tempNumber];
  nicknameValue.innerHTML = nickname;
  let emailValue =
    document.getElementsByClassName("email-value-email")[tempNumber];
  emailValue.innerHTML = email;
  let phoneValue =
    document.getElementsByClassName("phone-value-phone")[tempNumber];
  phoneValue.innerHTML = phone;
  let ageValue = document.getElementsByClassName("age-value-age")[tempNumber];
  ageValue.innerHTML =
    dobDay + "/" + dobMonth + "/" + dobYear + " (" + age + ")";
  let linkedinValue = document.getElementsByClassName(
    "linkedin-value-linkedin"
  )[tempNumber];
  linkedinValue.innerHTML = linkedin;
  let githubValue = document.getElementsByClassName("github-value-github")[
    tempNumber
  ];
  githubValue.innerHTML = github;
  let teamNameValue =
    document.getElementsByClassName("team-value-team")[tempNumber];
  teamNameValue.innerHTML = teamName;
  let institutionValue = document.getElementsByClassName(
    "institution-value-institution"
  )[tempNumber];
  institutionValue.innerHTML = institution;
  let graduationValue = document.getElementsByClassName(
    "graduation-value-graduation"
  )[tempNumber];
  graduationValue.innerHTML = graduation;
}
// após essa função ser executada, todos valores contidos no localStorage serão inseridos no card
changeValue();
