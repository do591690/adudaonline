$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });



    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

document.getElementById("cv/cv.pdf").addEventListener("click", function(event) {
    // Prevent the default anchor click behavior
    event.preventDefault();

    // Create a link element
    const link = document.createElement("a");
    // Specify the file URL and download name
    link.href = "cv/cv.pdf"; // Update this path
    link.download = "cv/cv.pdf"; // This will be the downloaded file name
    // Programmatically click the link to trigger the download
    link.click();
});


function sendWhatsAppMessage(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get values from the input fields
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`);
    
    // Replace 'your-phone-number' with your actual WhatsApp number (in international format, without '+' or '0')
    const phoneNumber = "769724971"; // e.g., "1234567890"
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${769724971}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
}