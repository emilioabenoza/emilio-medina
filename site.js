/* V3: conserva menú y filtros de V2; añade desplegables y enlaces de filtro. */
(() => {
 'use strict';
 const header=document.querySelector('header');
 const toggle=document.querySelector('.menu-toggle');
 const nav=document.getElementById('menu-principal');
 const dropdowns=[...document.querySelectorAll('.nav-dropdown')];
 const closeDropdown=wrapper=>{
  wrapper.querySelector('.submenu-toggle').setAttribute('aria-expanded','false');
  wrapper.querySelector('.submenu').hidden=true;
 };
 const closeDropdowns=()=>dropdowns.forEach(closeDropdown);
 const closeMenu=()=>{
  if(toggle)toggle.setAttribute('aria-expanded','false');
  if(header)header.classList.remove('menu-open');
  closeDropdowns();
 };
 dropdowns.forEach(wrapper=>{
  const button=wrapper.querySelector('.submenu-toggle');
  const submenu=wrapper.querySelector('.submenu');
  const open=()=>{closeDropdowns();button.setAttribute('aria-expanded','true');submenu.hidden=false;};
  button.addEventListener('click',()=>{if(button.getAttribute('aria-expanded')==='true')closeDropdown(wrapper);else open();});
  button.addEventListener('keydown',event=>{
   if(event.key==='ArrowDown'){event.preventDefault();open();submenu.querySelector('a').focus();}
  });
  submenu.addEventListener('keydown',event=>{
   const links=[...submenu.querySelectorAll('a')];const index=links.indexOf(document.activeElement);
   if(event.key==='ArrowDown'||event.key==='ArrowUp'){
    event.preventDefault();links[(index+(event.key==='ArrowDown'?1:-1)+links.length)%links.length].focus();
   }
  });
  wrapper.addEventListener('focusout',event=>{if(event.relatedTarget&&!wrapper.contains(event.relatedTarget))closeDropdown(wrapper);});
  submenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
 });
 if(header&&toggle&&nav){
  header.classList.add('has-menu');
  toggle.addEventListener('click',()=>{
   if(toggle.getAttribute('aria-expanded')==='true')closeMenu();
   else{toggle.setAttribute('aria-expanded','true');header.classList.add('menu-open');}
  });
  document.addEventListener('keydown',event=>{
   if(event.key!=='Escape')return;
   const open=dropdowns.find(d=>d.querySelector('.submenu-toggle').getAttribute('aria-expanded')==='true');
   if(open){event.preventDefault();closeDropdown(open);open.querySelector('.submenu-toggle').focus();}
   else if(toggle.getAttribute('aria-expanded')==='true'){closeMenu();toggle.focus();}
  });
  document.addEventListener('click',event=>{
   dropdowns.forEach(d=>{if(!d.contains(event.target))closeDropdown(d);});
   if(!header.contains(event.target))closeMenu();
  });
  const media=window.matchMedia('(min-width: 961px)');
  if(media.addEventListener)media.addEventListener('change',closeMenu);
 }
 const buttons=[...document.querySelectorAll('[data-filter]')];
 const cards=[...document.querySelectorAll('.portfolio-grid [data-category]')];
 const count=document.getElementById('project-count');
 if(buttons.length&&cards.length){
  const valid=value=>buttons.some(b=>b.dataset.filter===value)?value:'todos';
  const requested=()=>valid(new URLSearchParams(window.location.search).get('area'));
  const apply=value=>{
   value=valid(value);buttons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===value)));
   let total=0;cards.forEach(c=>{c.hidden=value!=='todos'&&c.dataset.category!==value;if(!c.hidden)total++;});
   const active=buttons.find(b=>b.dataset.filter===value);
   if(count)count.textContent=total+' '+(total===1?'proyecto':'proyectos')+(value==='todos'?' en la selección':' · '+active.textContent);
  };
  buttons.forEach(b=>b.addEventListener('click',()=>{
   apply(b.dataset.filter);
   try{const url=new URL(location.href);if(b.dataset.filter==='todos')url.searchParams.delete('area');else url.searchParams.set('area',b.dataset.filter);history.replaceState(null,'',url);}catch(_){/* Algunos visores locales restringen History; el filtro sigue funcionando. */}
  }));
  apply(requested());window.addEventListener('popstate',()=>apply(requested()));
 }
})();
