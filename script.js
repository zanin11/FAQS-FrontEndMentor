let button1_mais = document.querySelector("#mais1");
let button2_mais = document.querySelector("#mais2");
let button3_mais = document.querySelector("#mais3");
let button4_mais = document.querySelector("#mais4");
let button1_menos = document.querySelector("#menos1");
let button2_menos = document.querySelector("#menos2");
let button3_menos = document.querySelector("#menos3");
let button4_menos = document.querySelector("#menos4");
button1_mais.addEventListener("click", e=>{
    button1_mais.style.display = 'none';
    button1_menos.style.display = 'inline';
    document.querySelector("#texto1").style.display = 'inline';
});
button1_menos.addEventListener("click", e=>{
    button1_menos.style.display = 'none';
    button1_mais.style.display = 'inline';
    document.querySelector("#texto1").style.display = 'none';
});
button2_mais.addEventListener("click", e=>{
    button2_mais.style.display = 'none';
    button2_menos.style.display = 'inline';
    document.querySelector("#texto2").style.display = 'inline';
});
button2_menos.addEventListener("click", e=>{
    button2_menos.style.display = 'none';
    button2_mais.style.display = 'inline';
    document.querySelector("#texto2").style.display = 'none';
});
button3_mais.addEventListener("click", e=>{
    button3_mais.style.display = 'none';
    button3_menos.style.display = 'inline';
    document.querySelector("#texto3").style.display = 'inline';
});
button3_menos.addEventListener("click", e=>{
    button3_menos.style.display = 'none';
    button3_mais.style.display = 'inline';
    document.querySelector("#texto3").style.display = 'none';
});
button4_mais.addEventListener("click", e=>{
    button4_mais.style.display = 'none';
    button4_menos.style.display = 'inline';
    document.querySelector("#texto4").style.display = 'inline';
});
button4_menos.addEventListener("click", e=>{
    button4_menos.style.display = 'none';
    button4_mais.style.display = 'inline';
    document.querySelector("#texto4").style.display = 'none';
});