function darkModeListener() {
    const darkModeToggle = document.querySelector("#dark-toggle");
    if(!darkModeToggle.checked){
        sessionStorage.setItem('dark', '');
    }
    else{
        sessionStorage.setItem('dark', 'dark');
    }
    document.querySelector("html").classList.toggle("dark");
}

document.querySelector("input[type='checkbox']#dark-toggle").addEventListener("click", darkModeListener);
const storedTheme = sessionStorage.getItem('dark');
if(storedTheme === 'dark') {
    document.querySelector("#dark-toggle").checked = 1;
    document.querySelector("html").classList.add("dark");
}
