document.addEventListener("DOMContentLoaded", () => {
  const name = document.getElementById("name");
  const phone = document.getElementById("phone");
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const data = {
      name: name.value,
      phone: phone.value,
    };
    postGoogle(data);
    async function postGoogle(data) {
      const URLForm =
        "https://docs.google.com/forms/d/e/1FAIpQLSdqBE7i9dHzh20DqKJqPpcI7JCLb8GkJGjCFPN0vax3Lyp6JQ/formResponse";
      const formData = new FormData();
      formData.append("entry.983799216", data.name);
      formData.append("entry.1592163710", data.phone);
      await fetch(URLForm, {
        method: "POST",
        body: formData,
      });
    }
  });
});
