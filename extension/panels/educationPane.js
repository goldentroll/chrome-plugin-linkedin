function educationPane(education) {
  const tabPane = createElement(
    "div",
    { class: "tabcontent", "data-id": "education" },
    ""
  );
  // Create education section
  const educationHeading = createElement("h2", {}, "Education");
  const educationList = createElement("ul");

  education.forEach((education) => {
    const educationItem = createElement(
      "li",
      {},
      `${education.degree ? education.degree : ""} - ${education.name}`
    );
    educationList.appendChild(educationItem);
  });
  tabPane.appendChild(educationHeading);
  tabPane.appendChild(educationList);
  return tabPane;
}
