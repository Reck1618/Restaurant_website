(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const n=document.querySelectorAll(".popular-foods__card");n.forEach(o=>{o.addEventListener("mouseover",()=>{const r=document.querySelector(".popular-foods__card.active-card");r&&r.classList.remove("active-card"),o.classList.add("active-card")})});const l=document.querySelectorAll(".popular-foods__filter-btn");l.forEach(o=>{o.addEventListener("click",()=>{const r=document.querySelector(".popular-foods__filter-btn.active");r&&r.classList.remove("active"),o.classList.add("active")})});