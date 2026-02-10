
let lang="es";
const t={
 es:{
  name:"William Suarez",
  role:"Desarrollador Web Full Stack",
  about_title:"Sobre mí",
  about_text:"Soy desarrollador web Full Stack",
  projects_title:"Proyectos",
  project1:"Plataforma que consume los personajes de la serie rick and morty.",
  contact_title:"Contacto",
  send:"Enviar",
  name_ph:"Nombre",
  email_ph:"Correo",
  message_ph:"Mensaje",
  about_title1:"habilidades",
  skills_title: "Habilidades",
  btn_code: "Código",
  btn_demo: "Ver Demo",
   soft_skills_title: "Habilidades Blandas",
  soft_communication: "Comunicación",
  soft_teamwork: "Trabajo en equipo",
  soft_problem: "Resolución de problemas",
  soft_adaptability: "Adaptabilidad",
  proproject_clima: "Weather application that consumes an external API and displays information according to the city searched."
  
  

 },
 en:{
  name:"William Suarez",
  role:"Full Stack Web Developer",
  about_title:"About Me",
  about_text:"I am a Full Stack Web Developer specialized in JavaScript, React and Node.js.",
  projects_title:"Projects",
  project1:"Platform that consumes the characters from the Rick and Morty series",
  contact_title:"Contact",
  send:"Send",
  name_ph:"Name",
  email_ph:"Email",
  message_ph:"Message",
  about_title1:"skils",
  skills_title: "Skills",
   btn_code: "Code",
  btn_demo: "Live Demo",
   soft_skills_title: "Soft Skills",
  soft_communication: "Communication",
  soft_teamwork: "Teamwork",
  soft_problem: "Problem Solving",
  soft_adaptability: "Adaptability",
  project_clima: "Weather application that consumes an external API and displays information according to the city searched."
  

 }
};




function render(){
 document.querySelectorAll("[data-i18n]").forEach(e=>e.textContent=t[lang][e.dataset.i18n]);
 document.querySelectorAll("[data-i18n-placeholder]").forEach(e=>e.placeholder=t[lang][e.dataset.i18nPlaceholder]);
}
document.getElementById("lang-btn").onclick=()=>{
 lang=lang==="es"?"en":"es";
 document.getElementById("lang-btn").textContent=lang==="es"?"EN":"ES";
 render();
};
render();
