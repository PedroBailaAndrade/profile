const skills = document.getElementById("skills");
const skillsCards = document
  .getElementById("skills")
  .getElementsByClassName("card");

skills.onmousemove = (e) => {
  if (window.innerWidth > 768) {
    for (const card of skillsCards) {
      const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  } else {
    return;
  }
};
