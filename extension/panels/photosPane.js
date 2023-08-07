function photosPane(photos) {
  const tabPane = createElement(
    "div",
    { class: "tabcontent grid-container", "data-id": "photos" },
    ""
  );
  // Create photos section
  photos.forEach((photo) => {
    let div = createElement("div", { class: "grid-item" }, "");
    let img = createElement("img", { width: "200px", src: photo.value }, "");
    let label = createElement("p", {}, photo.label);
    div.appendChild(img);
    div.appendChild(label);
    tabPane.appendChild(div);
  });
  return tabPane;
}
