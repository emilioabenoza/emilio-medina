/* Interacciones locales; sin dependencias, peticiones externas ni almacenamiento. */
(() => {
 'use strict';
 const header=document.querySelector('header');
 const toggle=document.querySelector('.menu-toggle');
 const nav=document.getElementById('menu-principal');
 if(header&&toggle&&nav){
  header.classList.add('has-menu');
  const close=()=>{toggle.setAttribute('aria-expanded','false');header.classList.remove('menu-open');};
  toggle.addEventListener('click',()=>{
   const open=toggle.getAttribute('aria-expanded')!=='true';
   toggle.setAttribute('aria-expanded',String(open));header.classList.toggle('menu-open',open);
  });
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&toggle.getAttribute('aria-expanded')==='true'){close();toggle.focus();}});
  document.addEventListener('click',e=>{if(!header.contains(e.target))close();});
  const media=window.matchMedia('(min-width: 961px)');
  if(media.addEventListener)media.addEventListener('change',close);
 }
 const buttons=[...document.querySelectorAll('[data-filter]')];
 const cards=[...document.querySelectorAll('.portfolio-grid [data-category]')];
 const count=document.getElementById('project-count');
 if(buttons.length&&cards.length){
  const apply=value=>{
   buttons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===value)));
   let total=0;cards.forEach(c=>{c.hidden=value!=='todos'&&c.dataset.category!==value;if(!c.hidden)total++;});
   const active=buttons.find(b=>b.dataset.filter===value);
   if(count)count.textContent=total+' '+(total===1?'proyecto':'proyectos')+(value==='todos'?' en la selección':' · '+active.textContent);
  };
  buttons.forEach(b=>b.addEventListener('click',()=>apply(b.dataset.filter)));
 }
})();
