const changingKeywords = document.querySelectorAll("span.changing-keyword");
const keywordsToggle = setKeywordsToggle(changingKeywords);

function setKeywordsToggle(keywords) {
  let index = 0;
  return setInterval(() => {
    keywords[index].classList.remove("shown");
    if (++index >= keywords.length) index = 0;
    keywords[index].classList.add("shown");
  }, 2000);
}

anime({
  targets: "div",
  translateX: 250,
  rotate: "1turn",
  backgroundColor: "#FFF",
  duration: 800,
});
