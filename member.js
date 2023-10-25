function skillsMember() {
  var member = document.getElementById("member");
  var skills = document.getElementById("skills");
  var projects = document.getElementById("projects");
  var contact = document.getElementById("contact");
  var memberContent = document.getElementById("memberContent");
  var skillsContent = document.getElementById("skillsContent");
  var projectsContent = document.getElementById("projectsContent");
  var contactContent = document.getElementById("contactContent");
  member.classList.add("active");
  skills.classList.remove("active");
  projects.classList.remove("active");
  contact.classList.remove("active");
  memberContent.classList.remove("hidden");
  skillsContent.classList.add("hidden");
  projectsContent.classList.add("hidden");
  contactContent.classList.add("hidden");
}