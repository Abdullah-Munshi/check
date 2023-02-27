//////////////////////////////////////////////////////
// SCRIPT FOR NAVIGATION ADAPTATION WHEN MENU ITEMS WIDTH EXCEEDS THE WIDTH OF CONTAINER IT WILL GO UNDER DROPDOWN
const container = document.querySelector(".main_nav");
const primary = container.querySelector(".-primary");
const primaryItems = container.querySelectorAll(".-primary > li:not(.amore)");
container.classList.add("aajsfied");

// insert "more" button and duplicate the list
primary.insertAdjacentHTML(
  "beforeend",
  `<li class="amore">
    <button type="button" aria-haspopup="true" aria-expanded="false">
    More<span class="d-inline ms-2"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6">
    <path id="Polygon_1" data-name="Polygon 1" d="M5,0l5,6H0Z" transform="translate(10 6) rotate(180)" fill="#fff"/>
  </svg>
  </span>
    </button>
    <ul class="asecondary">
      ${primary.innerHTML}
    </ul>
  </li>
`
);
const secondary = container.querySelector(".asecondary");
const secondaryItems = secondary.querySelectorAll("li");
const allItems = container.querySelectorAll("li");
const moreLi = primary.querySelector(".amore");
const moreBtn = moreLi.querySelector("button");
moreBtn.addEventListener("click", (e) => {
  e.preventDefault();
  container.classList.toggle("aashow-secondary");
  moreBtn.setAttribute(
    "aria-expanded",
    container.classList.contains("aashow-secondary")
  );
});

// adapt main_nav
const doAdapt = () => {
  // reveal all items for the calculation
  allItems.forEach((item) => {
    item.classList.remove("aahidden");
  });

  // hide items that won't fit in the Primary
  let stopWidth = moreBtn.offsetWidth;
  let hiddenItems = [];
  const primaryWidth = primary.offsetWidth;
  primaryItems.forEach((item, i) => {
    if (primaryWidth >= stopWidth + item.offsetWidth) {
      stopWidth += item.offsetWidth;
    } else {
      item.classList.add("aahidden");
      hiddenItems.push(i);
    }
  });

  // toggle the visibility of More button and items in Secondary
  if (!hiddenItems.length) {
    moreLi.classList.add("aahidden");
    container.classList.remove("aashow-secondary");
    moreBtn.setAttribute("aria-expanded", false);
  } else {
    secondaryItems.forEach((item, i) => {
      if (!hiddenItems.includes(i)) {
        item.classList.add("aahidden");
      }
    });
  }
};

doAdapt(); // adapt immediately on load
window.addEventListener("resize", doAdapt); // adapt on window resize

// hide Secondary on the outside click
document.addEventListener("click", (e) => {
  let el = e.target;
  while (el) {
    if (window.CP.shouldStopExecution(0)) break;
    if (el === secondary || el === moreBtn) {
      return;
    }
    el = el.parentNode;
  }
  window.CP.exitedLoop(0);
  container.classList.remove("aashow-secondary");
  moreBtn.setAttribute("aria-expanded", false);
});

///////////////////////////////////////////////////////////////////////////
// SCRIPT FOR MOBILE MENU

if (document.querySelector(".hamburger") !== null) {
  const hamburger = document.querySelector(".hamburger ");

  hamburger.addEventListener("click", function (e) {
    e.preventDefault();
    this.classList.toggle("active");
    document.querySelector(".sm-menu").classList.toggle("active");
  });
}
