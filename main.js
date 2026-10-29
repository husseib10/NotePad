const notes = document.getElementById("notes");

onload = () => {
  notes.value = localStorage.getItem("notes");
};

notes.addEventListener("input", () => {
  localStorage.setItem("notes", notes.value);
});
