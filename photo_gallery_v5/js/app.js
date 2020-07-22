/* baguetteBox.run('.gallery'); */
let photoDes = '';
for (let i=1;i<=12;i++){
    let x =(i).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    photoDes += `<a href="photos/${x}.jpg" data-caption="Image caption">
    <img src="photos/thumbnails/${x}.jpg" alt="First image">
    </a>`;
    document.getElementsByClassName('gallery').innerHTML = photoDes;
}