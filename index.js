import{a as q,S,i as n}from"./assets/vendor-BBSqv8W6.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const P="https://pixabay.com/api/",M="49142387-370a201ec94f73d63c9116370";async function y(r){let e={key:M,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0};try{const s=await q.get(P,{params:e});return s.data.hits.length===0&&iziToast.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",pauseOnHover:!0,balloon:!0}),s.data}catch(s){throw console.error(s),s}}function E(r){const{largeImageURL:e,webformatURL:s,tags:d,likes:t,views:o,comments:i,downloads:b}=r,w=r.tags.split(",")[0];return`
    <li class="gallery-item">
    <div class="wrapper"> 

     <a href="${e}" class="gallery-link" >
    <img src="${s}"
      class="gallery-image"
      alt="${w}"
    />
  </a>
  
    </div>
<div class="details">
  <p class="detail-info">Likes<br><span class="detail-value"> ${t}</span></p>
  <p class="detail-info">Views<br><span class="detail-value"> ${o}</span> </p>
  <p class="detail-info">Comments<br><span class="detail-value"> ${i}</span> </p>
  <p class="detail-info">Downloads<br><span class="detail-value"> ${b}</span> </p>

  </div>
    </li>
    `}function h(r){return r.map(E).join("")}const f=document.querySelector(".search-form"),u=document.querySelector(".gallery"),m=document.querySelector(".loader"),l=document.querySelector(".loader-more"),p=document.querySelector(".load-button-style"),v=new S(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),a={query:"",page:1,perPage:40,total:0};c();g();f.addEventListener("submit",async r=>{if(r.preventDefault(),a.page=1,a.query=f.elements.searchQuery.value.trim(),a.query===""){n.warning({message:"Please, fill the form!",position:"topRight"});return}u.innerHTML="",c(),g(),m.classList.add("visible");try{const e=await y(a.query,a.page,a.perPage);if(a.total=e.totalHits,e.hits.length===0){n.info({message:"No images found. Try another query.",position:"topRight"});return}u.insertAdjacentHTML("beforeend",h(e.hits)),v.refresh(),L()}catch(e){n.error({title:"Error",message:"Something went wrong, try again later!"}),console.error(e)}finally{m.classList.remove("visible")}r.target.reset()});p.addEventListener("click",async r=>{r.preventDefault(),a.page+=1,c(),B();try{const e=await y(a.query,a.page,a.perPage);u.insertAdjacentHTML("beforeend",h(e.hits)),v.refresh(),O(),L()}catch(e){n.error({title:"Error",message:"Something went wrong, try again later!"}),console.error(e)}finally{g()}});function $(){p.style.display="block"}function c(){p.style.display="none"}function B(){l.classList.remove("visually-hidden"),l.classList.add("visible")}function g(){l.classList.add("visually-hidden"),l.classList.remove("visible")}function L(){const r=Math.ceil(a.total/a.perPage);a.page<r?$():(c(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topLeft"}))}function O(){const{height:r}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
