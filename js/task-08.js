const inputForm = document.querySelector('.login-form');

inputForm.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();

    const email = event.currentTarget.elements.email;
    const password = event.currentTarget.elements.password;

    const user = {
        email: email.value,
        password: password.value
    }

    if (email.value === "" || password.value === "") {
        alert('Все поля должны быть заполнены!');
    } else {
        console.log(user);
    }
    
   inputForm.reset();


// const formLogin = document.querySelector('.login-form');

// formLogin.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//     event.preventDefault();

//     const {
//       elements: { email, password }
//      } = event.currentTarget;

//      if (email.value === "" || password.value === "") {
//       return alert("Please fill in all the fields!");
//     }

//     const user = {
//       email: email.value,
//       password: password.value,
//     };
    
//     // console.log(`Login: ${email.value}, Password: ${password.value}`);
//     console.log(user);  
  
//     event.currentTarget.reset();
// }
