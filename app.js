const nameError=document.querySelector("#name-error");
const phoneError=document.querySelector("#phon-error");
const emailError=document.querySelector("#email-error");
const messageError=document.querySelector("#message-error");
const submitError=document.querySelector("#submit-error");

function validateName(){
    let name=document.querySelector("#name").value;

  // for Name :
  // this is for compalsary name
    if(name.length==0){
          nameError.innerHTML="Name is required";
        return false;
    }
  // this condition is for full name (first name and Last name)
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML="Write full name";
        return false;
    }
// if name is correct and satisfied above conditions
    nameError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
  
}
// for Phon number:

function validatePhone(){

    let phonNo=document.querySelector("#phon").value;

    // this is for compalsary phonenumber
    if(phonNo.length==0){
        phoneError.innerHTML="Phon No is required";
        return false;
    }
    // required 10 digits number
    if(phonNo.length!=10){
        phoneError.innerHTML="Phon No should be 10 digits";
        return false;
    }
    // number should bo of 0 to 9 digits
    if(!phonNo.match(/^[0-9]{10}$/)){
        phoneError.innerHTML="Only 0-9 digits please";
        return false;
    }

    phoneError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;

}

// for Email:

function validateEmail(){

    let email=document.querySelector("#email").value;

    if(email.length==0){
        emailError.innerHTML="Email is required";
        return false;
    }

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML="Invalid email";
        return false;
    }

    emailError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;

}

// For message:

function validateMessage(){

    let message=document.querySelector("#message").value;

    let require=30;
    let left=require-message.length;

    if(message.length==0){
        messageError.innerHTML="Meggage is required";
        return false;
    }

    if(left>0&&left<=30){
        messageError.innerHTML=left + "more characters required";
        return false;
    }

    messageError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;

}

// for button:

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.style.display="block";
        
        submitError.innerHTML="Please fix the errors to submit";
        setTimeout(function(){submitError.style.display="none";},3000);
        return false;
    }
}
