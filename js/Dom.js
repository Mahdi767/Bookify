// Dom for featured section
function scrollIntoFeatured(){
   
    const target = document.getElementById('Featured-book');
   const scrollView = target.scrollIntoView({behavior:"smooth"});
    return scrollView;
}

document.getElementById('Featured-link-small').addEventListener("click",(e)=>{
e.preventDefault();
// document.getElementById('Featured-book').scrollIntoView({behavior:"smooth"});
scrollIntoFeatured();
})
document.getElementById('Featured-link-large').addEventListener("click",(e)=>{
e.preventDefault();
// document.getElementById('Featured-book').scrollIntoView({behavior:"smooth"});
scrollIntoFeatured();
})




/*Dom for Home*/
function scrollIntoHome(){
   
    const target = document.getElementById('Home-items');
   const scrollView = target.scrollIntoView({behavior:"smooth"});
    return scrollView;
}

document.getElementById('Home-large').addEventListener("click",(e)=>{
    e.preventDefault();
    scrollIntoHome();

})
document.getElementById('Home-sm').addEventListener("click",(e)=>{
    e.preventDefault();
    scrollIntoHome();

})