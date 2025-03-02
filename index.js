import{a as y,S as b,i as c}from"./assets/vendor-KnZd4sWe.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();const l=40;let n=1;function L(e,s=!1){s?++n:n=1;const o={params:{key:"49142387-370a201ec94f73d63c9116370",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,iMAGES_per_page:l,page:n}};return y.get("https://pixabay.com/api/",o)}const d=document.querySelector(".gallery"),u=document.querySelector(".loader-box"),h=document.getElementById("load-more"),v=new b(".gallery a",{captionsData:"alt",captionDelay:250});function w(e,s=!1){s||(d.innerHTML="");const o=e.map(({webformatURL:r,largeImageURL:t,tags:a,likes:i,views:f,comments:g,downloads:p})=>`
          <li class="gallery-item">
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
                      <dd class="thumb-data-data">${f}</dd>
                    </div>
                    <div class="thumb-data-item">
                      <dt class="thumb-data-title">Comments</dt>
                      <dd class="thumb-data-data">${g}</dd>
                    </div>
                    <div class="thumb-data-item">
                      <dt class="thumb-data-title">Downloads</dt>
                      <dd class="thumb-data-data">${p}</dd>
                    </div>
                  </dl>
                </figcaption>
              </figure>
            </a>
          </li>
        `).join("");d.insertAdjacentHTML("beforeend",o),v.refresh(),s&&e.length&&S()}function S(){const e=document.querySelector(".gallery-item");if(!e)return;const s=e.getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}function M(e=!1){e||d.classList.add("hidden"),u.classList.remove("hidden")}function E(){d.classList.remove("hidden"),u.classList.add("hidden")}function $(){c.error({position:"topRight",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040"})}function q(){c.info({position:"topRight",title:"Info",message:"We're sorry, but you've reached the end of search results."})}function P(){h.classList.remove("hidden")}function B(){h.classList.add("hidden")}const I=document.querySelector("form"),O=document.querySelector("#search-text"),R=document.getElementById("load-more");I.addEventListener("submit",e=>{e.preventDefault(),m()});R.addEventListener("click",()=>m(!0));async function m(e=!1){B();const s=O.value;if(s){M(e);try{const o=await L(s,e);A(o.data,e)}catch(o){console.log(o)}}}function A({hits:e,totalHits:s},o){const r=Math.ceil(s/l),t=n===r,a=!!e.length;a||$(),t&&q(),a&&!t&&P(),E(),w(e,o)}
//# sourceMappingURL=index.js.map
