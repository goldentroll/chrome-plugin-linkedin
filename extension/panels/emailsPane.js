function emailsPane(emails) {
  const tabPane = createElement(
    "div",
    { class: "tabcontent", "data-id": "emails" },
    ""
  );
  // Create email md5 section
  const emailMD5Heading = createElement("h6", {}, "Email MD5");
  const emailMD5List = createElement("ul");

  emails.forEach((email) => {
    const emailMd5 = createElement("li", {}, `${email.md5} - ${email.label}`);
    emailMD5List.appendChild(emailMd5);
  });
  tabPane.appendChild(emailMD5Heading);
  tabPane.appendChild(emailMD5List);
  return tabPane;
}
