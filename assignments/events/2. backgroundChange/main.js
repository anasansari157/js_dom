
document.addEventListener('click', function() {
    var color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    document.body.style.backgroundColor = color;
});


//Why selecting the the document body instead of window.addEvv.... doesn't work ?