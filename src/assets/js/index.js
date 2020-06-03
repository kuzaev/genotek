var accordionClickHandler = function (e) {
  var $header = e.target.closest(".accordion__item-header");
  if (!$header) return;

  var $item = e.target.closest(".accordion__item");
  var $itemContent = $item.querySelector(".accordion__item-content");
  var contentHeight = $item.querySelector(".accordion__item-wrap").clientHeight;

  $item.classList.toggle("open");

  if ($item.classList.contains("open")) {
    $itemContent.style.maxHeight = contentHeight + "px";
    return;
  }

  $itemContent.style.maxHeight = "0px";
};

var formControlFocusHandler = function (e) {
  var $clearButton = e.target.closest(".form__group").querySelector(".form__clear-button");
  $clearButton.classList.add("show");
};

var formControlBlurHandler = function (e) {
  var $clearButton = e.target.closest(".form__group").querySelector(".form__clear-button");
  $clearButton.classList.remove("show");
};

var clearButtonClickHandler = function (e) {
  var $formControl = e.target.closest(".form__group").querySelector(".form__control");
  $formControl.value = "";
  e.preventDefault();
};

var $accordionList = document.querySelectorAll(".accordion");
var $formControlList = document.querySelectorAll(".form__control");
var $clearButtonList = document.querySelectorAll(".form__clear-button");

$accordionList.forEach(function ($element) {
  $element.addEventListener("click", accordionClickHandler);
});

$formControlList.forEach(function ($element) {
  $element.addEventListener("focus", formControlFocusHandler);
});

$formControlList.forEach(function ($element) {
  $element.addEventListener("blur", formControlBlurHandler);
});

$clearButtonList.forEach(function ($element) {
  $element.addEventListener("mousedown", clearButtonClickHandler);
});
