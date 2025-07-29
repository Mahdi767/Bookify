




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

//Dom for popular books

function scrollIntoPopular(){
   
    const target = document.getElementById('popular-book');
   const scrollView = target.scrollIntoView({behavior:"smooth"});
    return scrollView;
}

document.getElementById('popular-link-sm').addEventListener("click",(e)=>{
e.preventDefault();
// document.getElementById('Featured-book').scrollIntoView({behavior:"smooth"});
scrollIntoPopular();
})
document.getElementById('popular-link-large').addEventListener("click",(e)=>{
e.preventDefault();
// document.getElementById('Featured-book').scrollIntoView({behavior:"smooth"});
scrollIntoPopular();
})



// Dom for offer

function scrollIntoOffer(){
   
    const target = document.getElementById('offer-book');
   const scrollView = target.scrollIntoView({behavior:"smooth"});
    return scrollView;
}

document.getElementById('offer-link-sm').addEventListener("click",(e)=>{
e.preventDefault();
// document.getElementById('Featured-book').scrollIntoView({behavior:"smooth"});
scrollIntoOffer();
})
document.getElementById('offer-link-large').addEventListener("click",(e)=>{
e.preventDefault();
// document.getElementById('Featured-book').scrollIntoView({behavior:"smooth"});
scrollIntoOffer();
})


// dom for articles
function scrollIntoArticles(){
   
    const target = document.getElementById('articles');
   const scrollView = target.scrollIntoView({behavior:"smooth"});
    return scrollView;
}

document.getElementById('article-link-large').addEventListener("click",(e)=>{
e.preventDefault();
// document.getElementById('Featured-book').scrollIntoView({behavior:"smooth"});
scrollIntoArticles();
})
document.getElementById('article-link-sm').addEventListener("click",(e)=>{
e.preventDefault();
// document.getElementById('Featured-book').scrollIntoView({behavior:"smooth"});
scrollIntoArticles();
})




// // Search functionality
// const searchResults = document.getElementById('searchWrapperSmall').addEventListener("keyup",(e)=>{
// LoadVideos(e.target.value);
// })


// const LoadVideos = (searchWrapperSmall="")=>{

// }