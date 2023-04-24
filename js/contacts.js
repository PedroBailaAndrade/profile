const contacts = document
  .getElementById("contacts")
  .getElementsByClassName("card")[0];

const contactsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("fade-in");
        contactsObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

contactsObserver.observe(contacts);
