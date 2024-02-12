const form = document.querySelector(".feedback-form");
const textarea = form.querySelector(".form-label-textarea")
form.addEventListener("input", takeDataForm);

function takeDataForm(event) {
    event.preventDefault();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
    const dataForm = {
        email,
        message,
    };
    const localStringify = JSON.stringify(dataForm);
    localStorage.setItem("feedback-form-state", localStringify);
}
putDataForm();
function putDataForm() {
    const storedData = JSON.parse(localStorage.getItem("feedback-form-state"));
    if (storedData) {
        if (form.elements.email.value === "" || form.elements.email.value !== storedData.email) {
            form.elements.email.value = storedData.email;
        }
        if (form.elements.message.value === "" || form.elements.message.value !== storedData.message) {
            form.elements.message.value = storedData.message;
        }
    }
}
form.addEventListener("submit", function () {
    if(form !== null && textarea !== null ) {
    localStorage.removeItem("feedback-form-state");
    preventDefault();
    form.reset();
    }
});
