const homeCenter = document.querySelector('.center');
const home = document.querySelector('.home');
const homeA = document.querySelector('.center a');
const introduce = document.querySelector('.introduce');
const introduceInput = document.querySelector('.introduce input');
const page = document.querySelector('.page');


const showIntroduce = () => {
    home.style.display = 'none';
    introduce.style.display = 'block';
    homeCenter.style.left = '-102%';
}



const message = () => {
    if (introduceInput.value.toUpperCase() == 'WIKTOR') {
        introduceInput.value = "";
        homeCenter.style.display = "none";
        introduce.style.position = 'absolute';
        introduce.style.left = "-100%";
        page.style.display = 'block';
    }
}

//wysuwania tresc
$(window).on('scroll', function () {
    const art1HeightFromTop = $('.art1').offset().top;
    const art2HeightFromTop = $('.art2').offset().top;
    const art3HeightFromTop = $('.art3').offset().top;
    const art4HeightFromTop = $('.art4').offset().top;

    const art1Height = $('.art1').outerHeight();
    const art2Height = $('.art2').outerHeight();
    const art3Height = $('.art3').outerHeight();
    const art4Height = $('.art4').outerHeight();

    const scrollPosition = $(document).scrollTop();
    const displayHeight = $(window).height() * 1.01;

    if (scrollPosition < art1HeightFromTop + art1Height - displayHeight / 2) {
        $('.art1').addClass('active');
        $('.art2').removeClass('active');
    }

    if (scrollPosition >= art2HeightFromTop + art2Height - displayHeight) {
        $('.art2').addClass('active');
        $('.art3, .art1').removeClass('active');
    }

    if (scrollPosition >= art3HeightFromTop + art3Height - displayHeight) {
        $('.art3').addClass('active');
        $('.art2, .art4').removeClass('active');
    }
    
    if (scrollPosition >= art4HeightFromTop + art4Height - displayHeight) {
        $('.art4').addClass('active');
        $('.art3').removeClass('active');
    }
})
// //burger
// const burger = document.querySelector('.burger');
// const activElements = document.querySelectorAll('.active');

// burger.addEventListener('click', function () {
//     for (i = 0; i < activElements.length; i++) {
//         activElements[i].classList.toggle('show');
//     }
// })

// //header 
// const colorGirl = document.querySelector('.color');
// const grayGirl = document.querySelector('.gray');
// const h1Member = document.querySelector('.member h1');
// const h2Member = document.querySelector('.member h2');

// const colorGirlImg = ['img/s1.png', 'img/s2.png', 'img/s3.png'];
// const grayGirlImg = ['img/s1a.png', 'img/s2a.png', 'img/s3a.png'];
// const h1MemberText = ['DZIEWICĄ', 'Zjebany', 'Prawiczkiem'];
// const h2MemberText = ['A ja', 'A ja ', 'Jestem'];
// const intervalTime = 2000;
// let i = 0;

// function changeValues() {
//     i++;
//     if (i == colorGirlImg.length) {
//         i = 0;
//     }
//     colorGirl.src = colorGirlImg[i];
//     grayGirl.src = grayGirlImg[i];
//     h1Member.textContent = h1MemberText[i];
//     h2Member.textContent = h2MemberText[i];

// }
// setInterval(changeValues, intervalTime)


homeA.addEventListener('click', showIntroduce);
introduceInput.addEventListener('input', message);
introduceInput.addEventListener('input', message);
