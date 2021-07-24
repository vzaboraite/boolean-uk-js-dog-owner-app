console.log(data);

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
***************PSEUDO-CODE*************

1.0 bridge to:
1.0.1 dogsListAnchorElem: <ul class="dogs-list"></ul>✅
1.0.1 mainCardElem: <section class="main__dog-section">✅

2.0 createDogsListItems(dogs):✅
- create lisItemElem - <li>✅
-- className = "dogs-list__button"✅
-- innerText = dogName✅
-- each listItem.addEventListener("click", appearOnTheMainCard)✅
-- TODO: create appearOnTheMainCard()

- input: takes an array of dogs
- output: returns listItemElem

3.0 createCardElement(dog):
- input: a dog object
- output: mainCardElem

3.1 inside mainCardElem:
*h2Elem: update innerText from "No dogs ??" to dogName

*imgElem:✅
---setAttribute(height)✅
---setAttribute(width)✅
---setAttribute(src)✅

*divTextElem:✅
---className = "main__dog-section__desc"✅

**inside divTextElem:✅
---h3Elem: innerText = "Bio"✅
---bioTextElem: innerText = dog.bio✅

*divBtnElem:✅
**inside divBtnElem:
---pElem✅
----inside pElem: 
-----emElem: innetText = Is naughty?
----pElem.append(emElem): innerText = Yes!/No!

---buttonElem: innerText = Good dog/Bad dog✅
= contionals isNaughty? Yes! : No!
= buttonElem.addEventListener("click", checkIfNaughty())
== create checkIfNaughty()
== onClick changeInnerText()(edit later)
*/

// anchor objects
const dogsListAnchorElem = document.querySelector(".dogs-list");
const mainCardAnchorElem = document.querySelector(".main__dog-section");

// header: create dog list buttons/navigation
function renderDogListItems(dogs) {
  for (let i = 0; i < dogs.length; i++) {
    const dog = dogs[i];
    const dogName = dog.name;

    const listItemElem = document.createElement("li");
    listItemElem.className = "dogs-list__button";
    listItemElem.innerText = dogName;
    // TODO: on click renderDogInformation in main card
    listItemElem.addEventListener("click", () => {});

    dogsListAnchorElem.append(listItemElem);
  }

  return dogsListAnchorElem;
}
renderDogListItems(data);

// main: create dog card
function renderDogCard(dog) {
  headingElem.innerText = dog.name;

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
  let dogBehaves = dog.isGoodDog ? " Yes!" : " No!";
  textElem.append(dogBehaves);
  divBtnContainerElem.append(textElem);

  // main card button container
  const buttonElem = document.createElement("button");
  buttonElem.innerText = dog.isGoodDog ? "Good dog" : "Bad dog";

  // toggle between Good/Bad dog and change text between Yes!/No!
  buttonElem.addEventListener("click", () => {
    dog.isGoodDog = !dog.isGoodDog;

    textElem.innerHTML = `<em>Is naughty?</em>`;
    dogBehaves = dog.isGoodDog ? " Yes!" : " No!";
    textElem.append(dogBehaves);

    buttonElem.innerText = dog.isGoodDog ? "Good dog" : "Bad dog";
  });

  divBtnContainerElem.append(buttonElem);

  return mainCardAnchorElem;
}

createDogCard(data[0]);

// TODO: create function to append all listItemElem
