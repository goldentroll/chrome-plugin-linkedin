function profilesPane(profiles) {
  const tabPane = createElement(
    "div",
    { class: "tabcontent", "data-id": "profiles" },
    ""
  );
  for (let service in profiles) {
    let social = profiles[service];

    const link = createElement(
      "a",
      {
        href: social.url,
        target: "_blank",
      },
      ""
    );
    link.appendChild(
      createElement("i", { class: `fab fa-${social.service}` }, "")
    );
    link.innerHTML += social.service;
    tabPane.appendChild(link);

    if (social.followers) {
      const followers = createElement(
        "span",
        {},
        `${social.followers} follows`
      );
      tabPane.appendChild(followers);
    }

    if (social.username) {
      const username = createElement(
        "p",
        { style: "margin-top:10px;" },
        `UserName: ${social.username}`
      );
      tabPane.appendChild(username);
    }

    if (social.userid) {
      const userid = createElement(
        "p",
        { style: "margin-top:10px;" },
        `UserId: ${social.userid}`
      );
      tabPane.appendChild(userid);
    }

    if (social.bio) {
      const bio = createElement("p", {}, `Bio: ${social.bio}`);
      tabPane.appendChild(bio);
    }

    const hr = createElement("hr", {}, "");
    tabPane.appendChild(hr);
  }
  return tabPane;
}
