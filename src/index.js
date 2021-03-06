// console.log(data);

/*
*************INSTRUCTIONS***************
 
- Render the top list of dogs using the list item template you'll find on the HTML file
- Each list item should be clickable. When you click on an item, the selected dog should display on the main card
- The main card should contain all the information from the selected dog. Follow the template for the main card that you'll find on the HTML file.
- There should be only one card at the time on the screen
- The card should have a button that toggles for the selected dog between good dog/ bad dog
✅
 */

/*
***************CHALLENGE**************************

✅ Add the behaviour to a plus button at the beginning of the top row. 
✅ When clicked, it should replace the main card with a form to add a new dog to the list. 
✅ You'll find a template for the form on the HTML page. 
✅ Once the form is submitted, add the new dog to the beginning of the list, right next to the plus button.
*/

// anchor objects
const dogsListAnchorElem = document.querySelector(".dogs-list");
const mainCardAnchorElem = document.querySelector(".main__dog-section");

// header: create dog list buttons/navigation
// input: dog object
// output: listItemElem / button with dog name
function createDogListItemElement(dog) {
  const listItemElem = document.createElement("li");
  listItemElem.className = "dogs-list__button";
  listItemElem.innerText = dog.name;
  // when the card is clicked, it changes heading text to the dog name and renders dog card in the main page
  listItemElem.addEventListener("click", (event) => {
    // set mainCardAnchorElem to empty string, therefore it could append new h2 heading element
    mainCardAnchorElem.innerHTML = "";
    renderDogCard(dog);
  });

  return listItemElem;
}

// header: render dog list button
// input: dogs array
// output: dogsListAnchorElem / buttons with dog names in the header of html
function renderDogListItems(dogs) {
  for (let i = 0; i < dogs.length; i++) {
    const dog = dogs[i];
    const listItemElem = createDogListItemElement(dog);
    dogsListAnchorElem.append(listItemElem);
  }
}
renderDogListItems(data);

// main: create dog card
// input: dog object
// output: mainCardAnchorElem / the main dog card
function renderDogCard(dog) {
  const headingElem = document.createElement("h2");
  headingElem.innerText = dog.name;
  mainCardAnchorElem.append(headingElem);

  const imgElem = document.createElement("img");
  imgElem.setAttribute("height", "300");
  imgElem.setAttribute("width", "400");
  const imgSrcElem = dog.image;
  imgElem.setAttribute("src", imgSrcElem);
  mainCardAnchorElem.append(imgElem);

  const divTextElem = document.createElement("div");
  divTextElem.className = "main__dog-section__desc";
  mainCardAnchorElem.append(divTextElem);

  const bioHeadingElem = document.createElement("h3");
  bioHeadingElem.innerText = "Bio";
  divTextElem.append(bioHeadingElem);

  const bioParagraphElem = document.createElement("p");
  bioParagraphElem.innerText = dog.bio;
  divTextElem.append(bioParagraphElem);

  const divBtnContainerElem = document.createElement("div");
  divBtnContainerElem.className = "main__dog-section__btn";
  mainCardAnchorElem.append(divBtnContainerElem);

  const textElem = document.createElement("p");
  textElem.innerHTML = `<em>Is naughty?</em>`;
  let dogBehaves = dog.isGoodDog ? " No!" : " Yes!";
  textElem.append(dogBehaves);
  divBtnContainerElem.append(textElem);

  // main card button container
  const buttonElem = document.createElement("button");
  buttonElem.innerText = dog.isGoodDog ? "Bad dog" : "Good dog";

  // toggle between Good/Bad dog and change text between Yes!/No!
  buttonElem.addEventListener("click", () => {
    dog.isGoodDog = !dog.isGoodDog;

    textElem.innerHTML = `<em>Is naughty?</em>`;
    dogBehaves = dog.isGoodDog ? " No!" : " Yes!";
    textElem.append(dogBehaves);

    buttonElem.innerText = dog.isGoodDog ? "Bad dog" : "Good dog";
  });

  divBtnContainerElem.append(buttonElem);

  return mainCardAnchorElem;
}

// anchor object of plus button
const buttonAddAnchor = document.querySelector(".dogs-list__button--add");

buttonAddAnchor.addEventListener("click", (event) => {
  renderAddDogForm();
});

// input: -
// output: mainCardAnchorElem / form to add new dog
function renderAddDogForm() {
  // set mainCardAnchorElem to empty string, therefore it could append new h2 heading element
  mainCardAnchorElem.innerHTML = "";
  const h2Elem = document.createElement("h2");
  h2Elem.innerText = "Add a new Dog";
  mainCardAnchorElem.append(h2Elem);

  // create form
  const formElem = document.createElement("form");
  formElem.className = "form";
  formElem.addEventListener("submit", createDogObject);
  mainCardAnchorElem.append(formElem);

  // first field
  const nameLabelElem = document.createElement("label");
  nameLabelElem.setAttribute("for", "name");
  nameLabelElem.innerText = "Dog's name";
  formElem.append(nameLabelElem);

  const nameInputElem = document.createElement("input");
  nameInputElem.setAttribute("type", "text");
  nameInputElem.setAttribute("id", "name");
  nameInputElem.setAttribute("name", "name");
  formElem.append(nameInputElem);

  // second field
  const imgLabelElem = document.createElement("label");
  imgLabelElem.setAttribute("for", "image");
  imgLabelElem.innerText = "Dog's picture";
  formElem.append(imgLabelElem);

  const imgInputElem = document.createElement("input");
  imgInputElem.setAttribute("type", "url");
  imgInputElem.setAttribute("id", "image");
  imgInputElem.setAttribute("name", "image");
  formElem.append(imgInputElem);

  // third field
  const bioLabelElem = document.createElement("label");
  bioLabelElem.setAttribute("for", "bio");
  bioLabelElem.innerText = "Dog's bio";
  formElem.append(bioLabelElem);

  const bioTextAreaElem = document.createElement("textarea");
  bioTextAreaElem.setAttribute("rows", "5");
  bioTextAreaElem.setAttribute("id", "bio");
  bioTextAreaElem.setAttribute("name", "bio");
  formElem.append(bioTextAreaElem);

  // submit button
  const inputBtnElem = document.createElement("input");
  inputBtnElem.setAttribute("type", "submit");
  inputBtnElem.setAttribute("id", "submit");
  inputBtnElem.setAttribute("name", "submit");
  inputBtnElem.setAttribute("value", "Let's add a dog!");
  inputBtnElem.className = "form__button";

  formElem.append(inputBtnElem);

  return mainCardAnchorElem;
}

// input: event got from form eventListener (formElem.addEventListener("submit", createDogObject);)
// output: -
function createDogObject(event) {
  event.preventDefault();

  let dog = {};
  dog.id = getNextId();
  dog.name = document.querySelector(".form #name").value;
  dog.name = dog.name.charAt(0).toUpperCase() + dog.name.slice(1);
  dog.bio = document.querySelector(".form #bio").value;
  dog.isGoodDog = true;
  dog.image = document.querySelector(".form #image").value;

  data.push(dog);
  // create new dog button
  const listItemElem = createDogListItemElement(dog);
  // add new dog button between plus button and dog button next to it.
  dogsListAnchorElem.insertBefore(listItemElem, buttonAddAnchor.nextSibling);
}

// function generates a new dog id, that is passed to createDogObject().
// input: -
// output: dogId
function getNextId() {
  let dogId = 0;
  for (let i = 0; i < data.length; i++) {
    const dog = data[i];
    const currentId = dog.id;
    if (currentId >= dogId) {
      dogId = currentId + 1;
    }
  }
  return dogId;
}
