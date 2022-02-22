// Start Sidebar


let VerifyProduct = document.getElementById('VerifyProduct');
let sidebar = document.getElementById('sidebar');
VerifyProduct.addEventListener('click', function(event) {
    // event.preventDefault();
    event.stopPropagation();
    sidebar.classList.toggle('active');
});

close = document.getElementById('close');
close.addEventListener('click', function(event) {
    sidebar.classList.toggle('active');
});

document.addEventListener('click', function(event) {
    if (sidebar.classList.contains('active') && !event.target.isEqualNode(VerifyProduct) && !event.target.isEqualNode(sidebar) && !sidebar.contains(event.target)) {
        sidebar.classList.remove('active');
    }
});


// End Sidebar


/*----- Sticky -----*/
window.addEventListener("scroll", function() {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
}, 2000);
/*----- End Sticky -----*/





/*----- Bottom to Top  -----*/
var mybutton = document.getElementById("scrollmyBtn");
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
/*----- End Bottom to Top  -----*/





/*----- Effective Module Slider -----*/
$('.effective-module-slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
        breakpoint: 991,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        }
    }, {
        breakpoint: 767,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});
/*----- End Effective Module Slider -----*/




/*----- Review Slider -----*/
$('.review-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: false,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
        breakpoint: 991,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        }
    }, {
        breakpoint: 767,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});
/*----- End Review Slider -----*/




/*----- Special Feature Section -----*/
let parentList = document.querySelectorAll('.btn-parent');

parentList.forEach(parent => {
        parent.addEventListener('click', () => {

            let imgList = document.querySelectorAll('.img');
            imgList.forEach(img => {
                if (!img.classList.contains('hidden')) {
                    img.classList.add('hidden');
                }
            })
            let img = document.querySelector(`.img.${parent.dataset.str}`);



            img.classList.toggle('hidden');


        })
    })
    /*----- End Special Feature Section -----*/





var Tawk_API = Tawk_API || {},
    Tawk_LoadStart = new Date();
(function() {
    var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/61de8879f7cf527e84d1b2e5/1fp6ka7lu';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();