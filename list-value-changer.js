var tempNumber = 2;

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
  ageValue.innerHTML = `${dobDay}/${dobMonth}/${dobYear} - ${age}`;
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

// esta é a função que cria um card com todos os valores do localStorage e acrescenta-o ao container
function createCard() {
  var card = document.createElement("div");
  card.className = "card";
  document.getElementsByClassName("cards-container")[0].appendChild(card);

  // creating the name section
  var cardName = document.createElement("div");
  cardName.className = "card-name";
  card.appendChild(cardName);
  var labelValue = document.createElement("label");
  labelValue.setAttribute("for", "nome");
  labelValue.innerHTML = "Value";
  cardName.appendChild(labelValue);
  var localNameValue = document.createElement("p");
  localNameValue.className = "name-value-name";
  localNameValue.innerHTML = "dan";
  cardName.appendChild(localNameValue);

  // creating the nickname section
  var cardNickname = document.createElement("div");
  cardNickname.className = "card-nickname";
  card.appendChild(cardNickname);
  var labelValue = document.createElement("label");
  labelValue.setAttribute("for", "nome");
  labelValue.innerHTML = "Nick";
  cardNickname.appendChild(labelValue);
  var localNicknameValue = document.createElement("p");
  localNicknameValue.className = "nickname-value-nickname";
  localNicknameValue.innerHTML = "danizika";
  cardNickname.appendChild(localNicknameValue);

  // creating the email section
  var cardEmail = document.createElement("div");
  cardEmail.className = "card-email";
  card.appendChild(cardEmail);
  var labelValue = document.createElement("label");
  labelValue.setAttribute("for", "nome");
  labelValue.innerHTML = "Email";
  cardEmail.appendChild(labelValue);
  var localEmailValue = document.createElement("p");
  localEmailValue.className = "email-value-email";
  localEmailValue.innerHTML = "ggg.@gmail.com";
  cardEmail.appendChild(localEmailValue);

  // creating the phone section
  var cardPhone = document.createElement("div");
  cardPhone.className = "card-phone";
  card.appendChild(cardPhone);
  var labelValue = document.createElement("label");
  labelValue.setAttribute("for", "nome");
  labelValue.innerHTML = "Phone";
  cardPhone.appendChild(labelValue);
  var localPhoneValue = document.createElement("p");
  localPhoneValue.className = "phone-value-phone";
  localPhoneValue.innerHTML = "123456789";
  cardPhone.appendChild(localPhoneValue);

  // creating the age section
  var cardAge = document.createElement("div");
  cardAge.className = "card-age";
  card.appendChild(cardAge);
  var labelValue = document.createElement("label");
  labelValue.setAttribute("for", "nome");
  labelValue.innerHTML = "Age";
  cardAge.appendChild(labelValue);
  var localAgeValue = document.createElement("p");
  localAgeValue.className = "age-value-age";
  localAgeValue.innerText = "222";
  cardAge.appendChild(localAgeValue);

  // creating the linkedin section
  var cardLinkedin = document.createElement("div");
  cardLinkedin.className = "card-linkedin";
  card.appendChild(cardLinkedin);
  var labelValue = document.createElement("label");
  labelValue.setAttribute("for", "nome");
  labelValue.innerHTML = "Linkedin";
  cardLinkedin.appendChild(labelValue);
  var localLinkedinValue = document.createElement("p");
  localLinkedinValue.className = "linkedin-value-linkedin";
  localLinkedinValue.innerHTML = "https://www.linkedin.com/in/danizika/";
  cardLinkedin.appendChild(localLinkedinValue);

  // creating the github section
  var cardGithub = document.createElement("div");
  cardGithub.className = "card-github";
  card.appendChild(cardGithub);
  var labelValue = document.createElement("label");
  labelValue.setAttribute("for", "nome");
  labelValue.innerHTML = "Github";
  cardGithub.appendChild(labelValue);
  var localGithubValue = document.createElement("p");
  localGithubValue.className = "github-value-github";
  localGithubValue.innerHTML = "github.com/danizika";
  cardGithub.appendChild(localGithubValue);

  // creating the team name section
  var cardTeamName = document.createElement("div");
  cardTeamName.className = "card-team-name";
  card.appendChild(cardTeamName);
  var labelValue = document.createElement("label");
  labelValue.setAttribute("for", "nome");
  labelValue.innerHTML = "Team";
  cardTeamName.appendChild(labelValue);
  var localTeamNameValue = document.createElement("p");
  localTeamNameValue.className = "team-value-team";
  localTeamNameValue.innerHTML = "Team Name";
  cardTeamName.appendChild(localTeamNameValue);

  // creating the institution section
  var cardInstitution = document.createElement("div");
  cardInstitution.className = "card-institution";
  card.appendChild(cardInstitution);
  var labelValue = document.createElement("label");
  labelValue.setAttribute("for", "nome");
  labelValue.innerHTML = "Institution";
  cardInstitution.appendChild(labelValue);
  var localInstitutionValue = document.createElement("p");
  localInstitutionValue.className = "institution-value-institution";
  localInstitutionValue.innerHTML = "Institution Name";
  cardInstitution.appendChild(localInstitutionValue);

  // creating the graduation section
  var cardGraduation = document.createElement("div");
  cardGraduation.className = "card-graduation";
  card.appendChild(cardGraduation);
  var labelValue = document.createElement("label");
  labelValue.setAttribute("for", "nome");
  labelValue.innerHTML = "Graduation";
  cardGraduation.appendChild(labelValue);
  var localGraduationValue = document.createElement("p");
  localGraduationValue.className = "graduation-value-graduation";
  localGraduationValue.innerHTML = "Graduation Name";
  cardGraduation.appendChild(localGraduationValue);
}
createCard();
// após essa função ser executada, todos valores contidos no localStorage serão inseridos no card
changeValue();
