// Function to create HTML elements
function createElement(tagName, attributes = {}, textContent = "") {
  const element = document.createElement(tagName);
  for (let key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
  element.textContent = textContent;
  return element;
}

// Function to display the profile data
function displayProfile(profileData) {
  document.getElementById(
    "updatedDate"
  ).textContent = `Updated at ${profileData.updated}`;

  const column1 = document.getElementById("column1");

  // Create profile image
  const avatarImg = createElement("img", {
    src: profileData.avatar,
    alt: "Profile Picture",
    class: "avatar",
  });

  // Create profile information
  const fullName = createElement("h1", {}, profileData.fullName);
  const gender = createElement("p", {}, `Gender: ${profileData.gender}`);
  const location = createElement("p", {}, `Location: ${profileData.location}`);
  const title = createElement("h5", {}, `Title: ${profileData.title}`);
  const organization = createElement(
    "h4",
    {},
    `Org: ${profileData.organization}`
  );
  const bio = createElement("p", {}, `Bio: ${profileData.bio}`);
  // Append elements to columns
  column1.appendChild(avatarImg);
  column1.appendChild(fullName);
  column1.appendChild(gender);
  column1.appendChild(location);
  // Create social media links
  if (profileData.twitter) {
    const twitterLink = createElement(
      "a",
      {
        href: profileData.twitter,
        target: "_blank",
      },
      ""
    );
    twitterLink.appendChild(
      createElement("i", { class: "fab fa-twitter" }, "")
    );
    twitterLink.innerHTML += "Twitter";
    column1.appendChild(twitterLink);
  }
  if (profileData.linkedin) {
    const linkedinLink = createElement(
      "a",
      {
        href: profileData.linkedin,
        target: "_blank",
      },
      ""
    );
    linkedinLink.appendChild(
      createElement("i", { class: "fab fa-linkedin" }, "")
    );
    linkedinLink.innerHTML += "Linkedin";
    column1.appendChild(linkedinLink);
  }
  column1.appendChild(title);
  column1.appendChild(organization);
  column1.appendChild(bio);

  //add details section
  const tabButtonContainer = document.getElementById("tabButtonContainer");
  const tabContainer = document.getElementById("column2");
  const details = profileData.details;

  for (let key in details) {
    if (details.hasOwnProperty(key)) {
      if (
        key === "name" ||
        key === "age" ||
        key === "gender" ||
        key === "demographics"
      )
        continue;
      // Add tab button for each key
      const tabButton = createElement(
        "button",
        {
          class: "tablinks",
          "data-id": key,
          style: "text-transform: capitalize;",
        },
        key
      );
      tabButtonContainer.appendChild(tabButton);

      // Add detail for each tab
      switch (key) {
        case "emails":
          tabContainer.appendChild(emailsPane(details.emails));
          break;
        case "phones":
          tabContainer.appendChild(
            createElement(
              "div",
              { class: "tabcontent", "data-id": "phones" },
              ""
            )
          );
          break;
        case "profiles":
          tabContainer.appendChild(profilesPane(details.profiles));
          break;
        case "locations":
          tabContainer.appendChild(locationsPane(details.locations));
          break;
        case "employment":
          tabContainer.appendChild(employmentPane(details.employment));
          break;
        case "photos":
          tabContainer.appendChild(photosPane(details.photos));
          break;
        case "education":
          tabContainer.appendChild(educationPane(details.education));
          break;
        case "urls":
          tabContainer.appendChild(urlsPane(details.urls));
          break;
        case "interests":
          tabContainer.appendChild(
            createElement(
              "div",
              { class: "tabcontent", "data-id": "interests" },
              ""
            )
          );
          break;
        case "identifiers":
          tabContainer.appendChild(identifiersPane(details.identifiers));
          break;
      }
    }
  }

  Array.from(document.getElementsByClassName("tablinks"), (btn) =>
    btn.addEventListener("click", handleClick, false)
  );
}

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  document.getElementById("column1").innerHTML =
    "<img height='120px' src='assets/loading.gif'></img>";
  document.getElementById("updatedDate").textContent = "";
  let url = tabs[0].url;
  document.getElementById("url").textContent = url;

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    url: url,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  // Send the URL to your API
  fetch("http://137.184.31.7:3000/fetchurl", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      // Display the API response
      document.getElementById("column1").innerHTML = "";
      displayProfile(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
