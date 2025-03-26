import{a as b,S as w,b as S,i as u}from"./assets/vendor-DtmXjUio.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const P="49142387-370a201ec94f73d63c9116370",v="https://pixabay.com",$="/api";async function h(o,e){const r={q:o,key:P,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9,page:e},a=new URLSearchParams(r),t=`${v}${$}/?${a}`,s=await b.get(t);try{return s.data}catch{iziToast.error({title:"Error",message:"Ups.. Something wrong",position:"topRight"})}}function g(o){return o.map(e=>`<li class="gallary-item">
              <a class="gallery-link" href="${e.largeImageURL}">
                <img
                  src="${e.webformatURL}"
                  alt="${e.tags}"
                />
              </a>
              <ul class="gallary-item-info">
                <li class="info-block">
                  <h5>Likes</h5>
                  <p>${e.likes}</p>
                </li>
                <li class="info-block">
                  <h5>Views</h5>
                  <p>${e.views}</p>
                </li>
                <li class="info-block">
                  <h5>Comments</h5>
                  <p>${e.comments}</p>
                </li>
                <li class="info-block">
                  <h5>Downloads</h5>
                  <p>${e.downloads}</p>
                </li>
              </ul>
            </li>`).join("")}const R=document.querySelector(".form-js"),n=document.querySelector(".gallery"),c=document.querySelector(".js-backdrop"),d=document.querySelector(".js-load-more");d.addEventListener("click",E);R.addEventListener("submit",q);const k={lines:9,length:42,width:24,radius:45,scale:.9,corners:1,speed:.8,rotate:0,animation:"spinner-line-fade-quick",direction:1,color:"#ffffff",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"},m=new w(k),y=new S(".gallery a",{captionsData:"alt",captionDelay:250});let i=1,l="";async function q(o){if(o.preventDefault(),L(),i=1,n.innerHTML="",l=o.target.elements.input.value.trim(),l.length===0)return f(),u.error({message:"Sorry, your query is empty Please try again!",position:"topRight"});const e=await h(l,i);try{if(e.hits.length===0)return d.classList.add("is-hidden"),n.innerHTML="",u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});n.insertAdjacentHTML("beforeend",g(e.hits)),y.refresh(),e.totalHits>9&&d.classList.remove("is-hidden")}catch(r){console.log(r)}finally{f()}}async function E(){L(),i+=1;const o=await h(l,i);try{Math.ceil(o.totalHits/9)===i&&(d.classList.add("is-hidden"),u.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),n.insertAdjacentHTML("beforeend",g(o.hits));const r=n.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"}),y.refresh()}catch(e){console.log(e)}finally{f()}}function L(){m.spin(c),c.classList.remove("is-hidden")}function f(){m.stop(c),c.classList.add("is-hidden")}
//# sourceMappingURL=index.js.map
