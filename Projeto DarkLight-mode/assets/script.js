// Constantes 

const body = document.getElementById('body')
const h1 = document.getElementById('page-title')
const button = document.getElementById('mode-selector')
const footer = document.getElementById('footer')
const darkModeClass = 'dark-mode'

// Função principal

function changeMode(){
    changeStyle();
    changeTexte();
}

// Funções base

function changeStyle() {
    const classBody = body.getAttribute('class');
    const classH1 = h1.getAttribute('class');
    const classButton= button.getAttribute('class');
    const classFooter = footer.getAttribute('class');
    

    body.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    button.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);

    
    
    //Mostrar no console quando mudar a classe 
    
    console.log(classBody);
    console.log(classH1);
    console.log(classButton);
    console.log(classFooter);

}

function changeTexte(){
    const darkMode = "Dark Mode";
    const lightMode = "Light Mode";

    if (body.classList.contains(darkModeClass)) {
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + " ON";
        //return;  Sai da função e não precisaria do else;
    } else {
        button.innerHTML = darkMode;
        h1.innerHTML = lightMode+ "ON";
    }
}



button.addEventListener("click", changeMode);
