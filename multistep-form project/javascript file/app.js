const form=document.querySelector(".form-section");
const username=document.querySelector(".username");
const usernameError=document.querySelector(".username-error");
const email=document.querySelector(".email");
const emailError=document.querySelector(".email-error");
const phone=document.querySelector(".phone-no");
const phoneError=document.querySelector(".phone-error");


//reset
function resetForm() {
  form.reset();
}

let isFormValid=false;
// Call the resetForm function when the page is loaded
window.onload = resetForm;


//form
form.addEventListener('submit',(e)=>{
    e.preventDefault();


    //check username

      let re=/^[a-z ,.'-]+$/i;
  
      if(username.value.trim()===""){
        username.parentElement.className="same-line error";
      }else if(re.test(username.value.trim())){
        username.parentElement.className="same-line";
  
      }else{
        username.parentElement.className="same-line error";
        usernameError.innerHTML="Enter valid name";
      }
    //check email valid
    let regex=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  
    if(email.value.trim()===""){
      email.parentElement.className="same-line error";
    }else if(regex.test(email.value.trim())){
      email.parentElement.className="same-line";
    }else{
      email.parentElement.className="same-line error";
      emailError.innerHTML="Enter valid email";
    }
  
    //check phone number
  
    let reg=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if(phone.value.trim()===""){
      phone.parentElement.className="same-line error";
    }else if(reg.test(phone.value.trim())){
      phone.parentElement.className="same-line";
    }else{
      phone.parentElement.className="same-line error";
      phoneError.innerHTML="Enter valid number";
    }
    if (
      username.parentElement.className === "same-line" &&
      email.parentElement.className === "same-line" &&
      phone.parentElement.className === "same-line"
  ) {
      // Change the URL to the next page
      window.location.href = "step2.html";
  }

  });
  







