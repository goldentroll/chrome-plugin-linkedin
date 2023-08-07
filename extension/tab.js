let handleClick = (e) => {
  Array.from(document.querySelectorAll(".active"), (e) =>
    e.classList.remove("active")
  ); // remove `active` class from every elements which contains him.
  e.target.classList.add("active");
  document
    .querySelector(`div.tabcontent[data-id*="${e.target.dataset.id}"]`)
    .classList.add("active");

  document.querySelector(`div.tabcontent[data-id*="photos"]`).style.display =
    e.target.getAttribute("data-id") === "photos" ? "grid" : "none";
};
