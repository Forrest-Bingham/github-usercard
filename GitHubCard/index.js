/* Step 1: using axios, send a GET request to the following URL 
           (replacing the placeholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios
  .get("https://api.github.com/users/Forrest-Bingham")
  .then(response => {
    console.log(response);
    console.log(typeof response.data);

    //User(response.data);
    const newUser = User(response.data);
    entryPoint.appendChild(newUser);
  })
  .catch(error => {
    console.log("The data was not returned", error);
  });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"
];
followersArray.forEach(element => {
  axios
    .get(`https://api.github.com/users/${element}`)
    .then(response => {
      console.log(response);
      // console.log(typeof response.data);
      const newUser = User(response.data);
      entryPoint.appendChild(newUser);
    })
    .catch(error => {
      console.log("The data was not returned", error);
    });
});

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function User(info) {
  const newCard = document.createElement("div"),
    newImage = document.createElement("img"),
    cardInfo = document.createElement("div"),
    personInfo = document.createElement("div"),
    name = document.createElement("h3"),
    username = document.createElement("p"),
    panelButtons = document.createElement("div"),
    buttonOpen = document.createElement("button"),
    buttonClose = document.createElement("button"),
    location = document.createElement("p"),
    profile = document.createElement("p"),
    anchor = document.createElement("a"),
    followers = document.createElement("p"),
    following = document.createElement("p"),
    bio = document.createElement("p");

  newCard.classList.add("card");

  newImage.src = info.avatar_url;
  newImage.classList.add("img");

  name.classList.add("name");
  username.classList.add("username");
  cardInfo.classList.add("cardInfo");
  location.classList.add("p");
  profile.classList.add("p");
  followers.classList.add("p");
  following.classList.add("p");
  bio.classList.add("p");
  panelButtons.classList.add("panel-buttons");
  buttonOpen.classList.add("panel-btn-open");
  buttonClose.classList.add("panel-btn-close");
  buttonClose.classList.add("hide-btn");
  personInfo.classList.add("personInfo");
  personInfo.classList.add("toggle-on");

  name.textContent = info.name;
  username.textContent = `Username: ${info.login}`;
  location.textContent = `Location: ${info.location}`;
  profile.textContent = "Profile: ";
  anchor.textContent = info.url;
  followers.textContent = `Followers: ${info.followers}`;
  following.textContent = `Following:  ${info.following}`;
  bio.textContent = `Bio: ${info.bio}`;
  buttonOpen.textContent = "\u25bc";
  buttonClose.textContent = "\u25b2";

  newCard.appendChild(newImage);
  newCard.appendChild(cardInfo);
  newCard.appendChild(panelButtons);
  panelButtons.appendChild(buttonOpen);
  panelButtons.appendChild(buttonClose);
  cardInfo.appendChild(personInfo);
  /* 
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
    profile.appendChild(anchor);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);*/

  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  personInfo.appendChild(location);
  personInfo.appendChild(profile);

  profile.appendChild(anchor);
  personInfo.appendChild(followers);
  personInfo.appendChild(following);
  personInfo.appendChild(bio);

  panelButtons.addEventListener("click", event => {
    console.log("button clicked");
    //1. toggle hide-btn on BOTH buttons
    buttonOpen.classList.toggle("hide-btn");
    buttonClose.classList.toggle("hide-btn");

    //2. Change visibility of content with "Toggle-On"
    personInfo.classList.toggle("toggle-on");
  });

  return newCard;
}

const entryPoint = document.querySelector(".cards");

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
