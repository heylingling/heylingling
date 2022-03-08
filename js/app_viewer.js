const viewer = new Viewer(document.getElementById('viewer'), {
    inline: true,
    viewed() {
        viewer.zoomto(1);
    }
});

const gallery = new Viewer(document.getElementById('slider-item'));

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.getElementsByClassName("heart")[0].addEventListener("click", function()
{   
    for (let i = 0; i < 8; i++) {
        var item = document.getElementsByClassName('item')[i];
	    item.className += " disappear";
        sleep(1000);
    }
    setTimeout(() => {  window.location.href = "./subPage/subPage.html"; }, 2000);
    
});


// remove element when complete animation
$('.item').bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function(e) { $(this).remove(); });
