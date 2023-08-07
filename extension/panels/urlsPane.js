function urlsPane(urls) {
  const tabPane = createElement(
    "div",
    { class: "tabcontent", "data-id": "urls" },
    ""
  );
  const urlsHeading = createElement("h2", {}, "urls");
  const urlsList = createElement("ul");

  urls.forEach((url) => {
    const div = createElement("div", {}, "");
    const link = createElement(
      "a",
      {
        href: url.value,
        target: "_blank",
      },
      url.value
    );
    div.appendChild(link);
    urlsList.appendChild(div);
  });
  tabPane.appendChild(urlsHeading);
  tabPane.appendChild(urlsList);
  return tabPane;
}
