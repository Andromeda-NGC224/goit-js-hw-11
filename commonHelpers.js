import{S as u,i as p}from"./assets/vendor-7659544d.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const a=document.querySelector(".img-list");function m(s){const o=s.hits.map(i=>`<li class="list-item"><a href="${i.largeImageURL}" class="list-item-link">
      <img class="list-item-img" src="${i.webformatURL}" alt="${i.tags}"></a>
      <div class="list-item-description">
        <h2 class="description-name">Likes
          <p class="description-value">${i.likes}</p>
        </h2>
        <h2 class="description-name">Views 
          <p class="description-value">${i.views}</p>
        </h2>
        <h2 class="description-name">Comments 
          <p class="description-value">${i.comments}</p>
        </h2>
        <h2 class="description-name">Downloads 
          <p class="description-value">${i.downloads}</p>
        </h2>
      </div>
    </li>`).join("");a.insertAdjacentHTML("beforeend",o),new u(".list-item a",{captionDelay:250,captionSelector:"img",captionsData:"alt",scrollZoom:!1,fadeSpeed:1e3}).refresh()}const l=document.querySelector(".input");function d(){let s=l.value.split(" ").join("+");const o=new URLSearchParams({key:"42405110-7b28ad03e73a48ed950cc828f",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return a.innerHTML="",fetch(`https://pixabay.com/api/?${o}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}const c=document.querySelector(".form");document.querySelector(".btn");c.addEventListener("submit",s=>{if(l.value.trim()===""){s.preventDefault(),c.reset();return}s.preventDefault(),d().then(t=>{t.hits.length<=0&&p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),m(t)}).catch(t=>console.log(t)),c.reset()});
//# sourceMappingURL=commonHelpers.js.map
