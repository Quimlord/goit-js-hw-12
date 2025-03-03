import{a as b,S as L,i as l}from"./assets/vendor-KnZd4sWe.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();const u=40;let n=1;function v(e,s=!1){s?++n:n=1;const o={params:{key:"49142387-370a201ec94f73d63c9116370",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,iMAGES_per_page:u,page:n}};return b.get("https://pixabay.com/api/",o)}const d=document.querySelector(".gallery"),h=document.querySelector(".loader-box"),m=document.getElementById("load-more"),w=new L(".gallery a",{captionsData:"alt",captionDelay:250});function S(e,s=!1){c(),s||(d.innerHTML="");const o=e.map(({webformatURL:r,largeImageURL:t,tags:a,likes:i,views:g,comments:p,downloads:y})=>`<li class="gallery-item">
            <a class="gallery-link" href="${t}">
              <figure class="thumb-container">
                <img
                  class="thumb-image"
                  src="${r}"
                  data-source="${t}"
                  alt="${a}"
                />
                <figcaption class="thumb-data">
                  <dl class="thumb-data-list">
                    <div class="thumb-data-item">
                      <dt class="thumb-data-title">Likes</dt>
                      <dd class="thumb-data-data">${i}</dd>
                    </div>
                    <div class="thumb-data-item">
                      <dt class="thumb-data-title">Views</dt>
                      <dd class="thumb-data-data">${g}</dd>
                    </div>
                    <div class="thumb-data-item">
                      <dt class="thumb-data-title">Comments</dt>
                      <dd class="thumb-data-data">${p}</dd>
                    </div>
                    <div class="thumb-data-item">
                      <dt class="thumb-data-title">Downloads</dt>
                      <dd class="thumb-data-data">${y}</dd>
                    </div>
                  </dl>
                </figcaption>
              </figure>
            </a>
          </li>`).join("");d.insertAdjacentHTML("beforeend",o),w.refresh(),s&&e.length&&M()}function M(){const e=document.querySelector(".gallery-item");if(!e)return;const s=e.getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}function E(e=!1){e||d.classList.add("hidden"),h.classList.remove("hidden")}function c(){d.classList.remove("hidden"),h.classList.add("hidden")}function $(){c(),l.error({position:"topRight",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040"})}function q(){l.info({position:"topRight",title:"Info",message:"We're sorry, but you've reached the end of search results."})}function P(){m.classList.remove("hidden")}function B(){m.classList.add("hidden")}const I=document.querySelector("form"),O=document.querySelector("#search-text"),R=document.getElementById("load-more");I.addEventListener("submit",e=>{e.preventDefault(),f()});R.addEventListener("click",()=>f(!0));async function f(e=!1){B();const s=O.value;if(s){E(e);try{const o=await v(s,e);A(o.data,e)}catch(o){console.log(o)}}}function A({hits:e,totalHits:s},o){const r=Math.ceil(s/u),t=n===r,a=!!e.length;a||$(),t&&q(),a&&!t&&P(),c(),S(e,o)}
//# sourceMappingURL=index.js.map
