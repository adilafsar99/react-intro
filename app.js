let toggleLinks = (currentAnchor) => {
  let togglers = document.querySelectorAll(".toggler");
  togglers.forEach((anchor) => {
    if (currentAnchor.hash !== anchor.hash && anchor.ariaExpanded === "true") {
      anchor.click();
    }
  });
};