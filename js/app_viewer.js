const viewer = new Viewer(document.getElementById('viewer'), {
    inline: true,
    viewed() {
        viewer.zoomto(1);
    }
});

const gallery = new Viewer(document.getElementById('slider-item'));
var i=0;
document.getElementsByClassName("heart")[0].addEventListener("click", function()
{   
    var item = document.getElementsByClassName('item')[i];
    item.className += " disappear";
    i+=1;
    if (i == 8)
        setTimeout(() => {  window.location.href = "./subPage/subPage.html"; }, 2000);
    
});


// remove element when complete animation
$('.item').bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function(e) { $(this).remove(); });
