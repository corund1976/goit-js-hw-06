const formLogin = document.querySelector('.login-form');
const formEmail = formLogin.querySelectorAll("input");

formEmail.forEach(tagItem => tagItem.setAttribute("required", ""));

formLogin.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const user = {};

    event.currentTarget.querySelectorAll('input')
        .forEach(element => {
        user[element.name] = element.value;
        }
    );

    console.log(user);

    formLogin.reset();
});
