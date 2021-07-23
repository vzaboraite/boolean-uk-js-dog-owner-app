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

// the bridge to <ul class="dogs-list"></ul>
const dogsListAnchorElem = document.querySelector(".dogs-list");

// 1.0
function createDogsListItems(dogs) {
  for (let i = 0; i < dogs.length; i++) {
    const dog = dogs[i];
    const dogName = dog.name;

    const listItemElem = document.createElement("li");
    listItemElem.className = "dogs-list__button";
    listItemElem.innerText = dogName;
    listItemElem.addEventListener("click", () => {
      //   TODO: appearOnTheMainCard()
      console.log("clicked");
    });
    dogsListAnchorElem.append(listItemElem);
  }

  return dogsListAnchorElem;
}

const listItemsResult = createDogsListItems(data);

console.log("listItemResult: ", listItemsResult);

// 2.0
function createCardElement(dog) {
  // the bridge to <section class="main__dog-section"></section>
  const mainCardElem = document.querySelector(".main__dog-section");
  const headingElem = document.querySelector(".main__dog-section h2");
  //   TODO: figure out how to update headingElem to dogName
  //   maybe create a updateHeadingElem() ??
  //   const dogName = dog.name;

  //   headingElem.innerText = dogName;

  const imgElem = document.createElement("img");
  imgElem.setAttribute("height", "300");
  imgElem.setAttribute("width", "400");
  const imgSrcElem = dog.image;
  imgElem.setAttribute("src", imgSrcElem);
  mainCardElem.append(imgElem);

  const divTextElem = document.createElement("div");
  divTextElem.className = "main__dog-section__desc";
  mainCardElem.append(divTextElem);

  const h3Elem = document.createElement("h3");
  h3Elem.innerText = "Bio";
  divTextElem.append(h3Elem);

  const bioTextElem = document.createElement("p");
  bioTextElem.innerText = dog.bio;
  divTextElem.append(bioTextElem);

  const divBtnElem = document.createElement("div");
  divBtnElem.className = "main__dog-section__btn";
  mainCardElem.append(divBtnElem);

  const pElem = document.createElement("p");
  const emElem = document.createElement("em");
  //   TODO: figure out how to appendelements in order
  //   emElem.innerText = "Is naughty?";
  //   pElem.append(emElem);
  //   pElem.innerText = "Yes!/No!";
  //   divBtnElem.append(pElem);

  const buttonElem = document.createElement("button");
  buttonElem.innerText = "Good dog/Bad dog";
  divBtnElem.append(buttonElem);

  console.log("em: ", emElem);
  console.log("pelem: ", pElem);

  return mainCardElem;
}

const mainCardElemResult = createCardElement(data[0]);

console.log("mainCardElemResult: ", mainCardElemResult);

// TODO: create function to append all listItemElem
