const page =document.documentElement
const search=document.querySelector('#search')
const cache= document.querySelector('#voile')
const bd=document.body
const enfant_burger=[...document.querySelectorAll(".enfant")]

const brg=document.querySelector('.burger')
// event centre recherche
page.addEventListener('keydown',recherche)
page.addEventListener('click',etat_initiale)


// fonction
function etat_initiale(event) {
        cache.classList.add('opacity-0')
        cache.classList.remove('opacity-50')
        bd.classList.remove('overflow-hidden')
}
// met le focus sur l'element inp:search
function recherche(event) {
    if (event.ctrlKey && event.key=="k" ) {
        event.preventDefault()
        search.focus()
        cache.classList.remove('opacity-0')
        cache.classList.add('opacity-50')
        bd.classList.add('overflow-hidden')
    }
}