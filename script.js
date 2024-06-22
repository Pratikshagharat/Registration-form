const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu=document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')
    
    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}
document.querySelector('.formSubmit').addEventListener("click",(e)=>{
    e.preventDefault();
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const gender=document.querySelector('input[name="gender"]:checked');
    const terms= document.getElementById("terms").checked;

    const fullNameRegex = /^[A-za-z0-9 ]{3,20}$/;
    const emailRegex = /^[A-Za-z0-9]+(?:[.%_+][A-Za-z0-9]+)*@[A-Za-z0-9]+\.[A-Za-z]{2,}$/;
    const mobileRegex= /^[6-9][\d]{9}$/;
    const passwordRegex=/^(?=.*[A-Z])(?=.*[\d])(?=.*[\W_]).{8,}$/;

    document.querySelectorAll('.error')
    .forEach((curElem)=>(curElem.textContent = ""));
    let isValid=true;

    if(!fullNameRegex.test(fullName)){
        document.getElementById('fullNameError').textContent ="Full Name is not valid.";
        isValid= false;
    }
    if(!emailRegex.test(email)){
        document.getElementById('emailError').textContent ="Please enter a valid email address.";
        isValid= false;
    }
    if(!mobileRegex.test(mobile)){
        document.getElementById('mobileError').textContent ="Mobile Number must be 10 digits long.";
        isValid= false;
    }
    if(!passwordRegex.test(password)){
        document.getElementById('passwordError').textContent ="Password must be at least 8 characters.";
        isValid= false;
    }
    if(confirmPassword!=password){
        document.getElementById('confirmPasswordError').textContent ="Password is not matching.";
        isValid= false;
    }
    if(!gender){
        document.getElementById('genderError').textContent ="Please select a gender.";
        isValid= false;
    }
    if(!terms){
        document.getElementById('termsError').textContent ="You must accept the Terms and Conditions.";
        isValid= false;
    }
    let userData = [];
    if(isValid){
        let formClass = document.getElementsByClassName("form-data");
        Array.from(formClass).forEach((curElem)=>userData.push(curElem.value));
        Array.from(formClass).forEach((curElem)=>(curElem.textContent=""));
        console.log(userData);
        alert("Registration Successful!")
    }
});
