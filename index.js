import{a as v,i as f,S as x}from"./assets/vendor-BH9GyP-n.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const d=document.querySelector("#loading");async function g(t,a){try{d.classList.add("loader");const o={key:"49142387-370a201ec94f73d63c9116370",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:40},i=await v.get("https://pixabay.com/api/",{params:o});return i.data.hits.length===0&&f.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:"432px",theme:"dark",messageSize:"16",backgroundColor:"#ef4040",messageColor:"#fafafb",iconColor:"#fafafb"}),d.classList.remove("loader"),i.data}catch(o){f.error({title:"Unexpected Error",message:`${o}`,position:"topRight",maxWidth:"432px",theme:"dark",messageSize:"16",backgroundColor:"#ef4040",messageColor:"#fafafb",iconColor:"#fafafb"}),d.classList.remove("loader")}}function L(t){const{webformatURL:a,largeImageURL:o,tags:i,likes:e,views:r,comments:l,downloads:y}=t;return`
        <a class="gallery-item" href="${o}">
            <img class="gallery-image" src="${a}" alt="${i}" data-source="${o}" />
            <div class="image-features">
                <div class="features-text-field">
                    <p class="image-feature-text">Likes</p>
                    <p class="image-feature-text">${e}</p>
                </div>
                <div class="features-text-field">
                    <p class="image-feature-text">Views</p>
                    <p class="image-feature-text">${r}</p>
                </div>
                <div class="features-text-field">
                    <p class="image-feature-text">Comments</p>
                    <p class="image-feature-text">${l}</p>
                </div>
                <div class="features-text-field">
                    <p class="image-feature-text">Downloads</p>
                    <p class="image-feature-text">${y}</p>
                </div>
            </div>
        </a>
    `}function p(t){return t.map(L).join("")}const b={form:document.querySelector(".search-form"),formInput:document.querySelector(".input-field"),gallery:document.querySelector(".gallery"),loadButton:document.querySelector(".load-btn")},{form:S,formInput:c,gallery:n,loadButton:u}=b,s={query:"",page:1,total:100,perPage:40,maxPage:10};let m=new x(".gallery a");S.addEventListener("submit",async t=>{if(t.preventDefault(),c.value.trim()===""){c.value="";return}document.querySelector(".gallery").innerHTML="",s.page=1,s.query=c.value.trim();const a=await g(s.query,s.page);s.total=a.totalHits,s.maxPage=Math.ceil(s.total/s.perPage);const o=p(a.hits);n.innerHTML=o,c.value="",m.refresh(),h()});u.addEventListener("click",async t=>{q()});n.addEventListener("click",t=>{t.preventDefault(),t.target!==n&&m.open(t.target)});async function q(){s.page+=1,u.classList.add("visually-hidden");const t=await g(s.query,s.page),a=p(t.hits);n.insertAdjacentHTML("beforeend",a),P(),m.refresh(),h()}function h(){s.page>=s.maxPage?(u.classList.add("visually-hidden"),f.info({title:"",message:"We're sorry, but you've reached the end of search results.",position:"topRight",maxWidth:"432px",messageSize:"16"})):u.classList.remove("visually-hidden")}function P(){const a=n.firstElementChild.getBoundingClientRect().height;scrollBy({top:a*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
