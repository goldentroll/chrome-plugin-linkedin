function identifiersPane(identifiers) {
  const tabPane = createElement(
    "div",
    { class: "tabcontent", "data-id": "identifiers" },
    ""
  );

  // Create maids section
  if (identifiers.maids) {
    const maidsHeading = createElement("h6", {}, "Maids");
    const maidsList = createElement("ul");

    identifiers.maids.forEach((maid) => {
      const maidId = createElement("li", {}, `${maid.id} (${maid.type})`);
      maidsList.appendChild(maidId);
    });
    tabPane.appendChild(maidsHeading);
    tabPane.appendChild(maidsList);
  }

  // Create personalIds section
  if (identifiers.personalIds) {
    const personalIdsHeading = createElement("h6", {}, "Personal Ids");
    const personalIdsList = createElement("ul");

    identifiers.personIds.forEach((personalId) => {
      const personalIdElement = createElement("li", {}, `${personalId}`);
      personalIdsList.appendChild(personalIdElement);
    });
    tabPane.appendChild(personalIdsHeading);
    tabPane.appendChild(personalIdsList);
  }

  // Create recordIds section
  if (identifiers.recordIds) {
    const recordIdsHeading = createElement("h6", {}, "Record Ids");
    const recordIdsList = createElement("ul");

    identifiers.recordIds.forEach((recordId) => {
      const recordIdElement = createElement("li", {}, `${recordId}`);
      recordIdsList.appendChild(recordIdElement);
    });
    tabPane.appendChild(recordIdsHeading);
    tabPane.appendChild(recordIdsList);
  }

  return tabPane;
}
