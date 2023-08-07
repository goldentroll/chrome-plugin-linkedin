function locationsPane(locations) {
  const tabPane = createElement(
    "div",
    { class: "tabcontent", "data-id": "locations" },
    ""
  );
  // Create locations section
  const locationsHeading = createElement("h2", {}, "Locations");
  const locationsList = createElement("ul");

  locations.forEach((location) => {
    const locationItem = createElement("li", {}, location.formatted);
    locationsList.appendChild(locationItem);
  });
  tabPane.appendChild(locationsHeading);
  tabPane.appendChild(locationsList);
  return tabPane;
}
