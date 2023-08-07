function employmentPane(employment) {
  const tabPane = createElement(
    "div",
    { class: "tabcontent", "data-id": "employment" },
    ""
  );
  // Create employment section
  const employmentHeading = createElement("h2", {}, "Employment");
  const employmentList = createElement("ul");

  employment.forEach((employment) => {
    const employmentItem = createElement(
      "li",
      {},
      `${employment.title} at ${employment.name}`
    );
    employmentList.appendChild(employmentItem);
  });
  tabPane.appendChild(employmentHeading);
  tabPane.appendChild(employmentList);
  return tabPane;
}
