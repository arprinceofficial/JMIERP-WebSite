// Start Sidebar

// toggle Animation
let toggle = document.querySelector('#toggle');

toggle.onclick = function() {
        toggle.classList.toggle('active');
        sidebar.classList.toggle('active');
    }
    // toggle.addEventListener('blur', () => {
    //     toggle.classList.toggle('active');
    //     sidebar.classList.toggle('active');
    // })

let close = document.querySelector('#close');
close.onclick = function() {
    toggle.classList.toggle('active');
    sidebar.classList.toggle('active');
}


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