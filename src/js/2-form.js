const form = document.querySelector(".feedback-form")
const textarea = form.querySelector("textarea")
// const dataLocalStorage = JSON.parse(localStorage.getItem("feedback-form-state"))
//     const dataEmail = dataLocalStorage.email;
//     const dataMessage = dataLocalStorage.message;
//     const emailValue = form.elements.email.value;
//     const dataParseStorage = JSON.parse(localStorage.getItem("feedback-form-state")).email;

form.addEventListener("input", takeDataForm)
function takeDataForm(ent){
    ent.preventDefault();
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
if(form.elements.email.value === "" || form.elements.email.value != JSON.parse(localStorage.getItem("feedback-form-state")).email){
    form.elements.email.value = JSON.parse(localStorage.getItem("feedback-form-state")).email;
    };
if(form.elements.message.value === "" || form.elements.message.value != JSON.parse(localStorage.getItem("feedback-form-state")).message){
    form.elements.message.value = JSON.parse(localStorage.getItem("feedback-form-state")).message;
    }
};




// takeDataLocal;

form.addEventListener("submit", () => {
    form.reset();
    localStorage.removeItem("feedback-form-state");
    
} )

// localStorage.removeItem("feedback-form-state");
// function sendDataForm(){
//     const email = form.elements.email.value;
//     const message = form.elements.message.value;
//     const dataForm = {
//         email,
//         message,
//     };
//     form.reset();
//     localStorage.removeItem("feedback-form-state");
    





// form.addEventListener("input", () => {
//     // preventDefault();
//     const localStringifyEmail = JSON.stringify(form.elements.email.value)
//     const localStringifyArea = JSON.stringify(form.elements.message.value)
//     localStorage.setItem("email", localStringifyEmail)
//     localStorage.setItem("Area", localStringifyArea)
  
//    })
// if(form.elements.email.value === "" ) {
//     const localGet = localStorage.getItem("email")
//     const localGetParse = JSON.parse(localGet)
//     form.elements.email.value = localGetParse};
// if(form.elements.message.value === "" ) {
//         const localGetMessage = localStorage.getItem("Area")
//         const localGetParseMessage = JSON.parse(localGetMessage)
//         form.elements.message.value = localGetParseMessage};
// form.addEventListener("submit", () => {
//     localStorage.removeItem("email")
//     localStorage.removeItem("Area")
//     form.reset()
// })

