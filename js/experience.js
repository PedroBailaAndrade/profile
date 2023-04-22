const experienceEntries = [
  ...document
    .getElementsByClassName("timeline")[0]
    .getElementsByClassName("group"),
];

const experienceObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("fade-in");
        experienceObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

experienceEntries.forEach((experienceEntry) => {
  experienceObserver.observe(experienceEntry);
});
