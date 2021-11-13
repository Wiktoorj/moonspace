const homeCenter = document.querySelector('.center');
const home = document.querySelector('.home');
const homeH1 = document.querySelector('.center h1')
const homeA = document.querySelector('.center a')
const introduce = document.querySelector('.introduce')
const introduceInput = document.querySelector('.introduce input')
const page = document.querySelector('.page')
let homeHeight = 0;
let flag = true;

const showHome = () => {
    if (flag) {
        if (homeHeight < innerHeight + 10) {
            homeCenter.style.height = `${homeHeight}px`
            homeHeight += 5
            
        } else if (homeHeight > innerHeight) {
            flag = !flag;
            home.style.display = 'none';
            homeH1.style.display = 'block'
            homeA.style.display = 'block'
        }
    }
}

const showIntroduce = () => {
    introduce.style.display = 'block';
    homeCenter.style.left = '-100%';
}
// if (introduceInput.textContent.toUpperCase() == 'wiktor'){
//     console.log('dziala')
// }


const message = () => {
    if (introduceInput.value.toLowerCase() == 'wiktor') {
        introduceInput.value = ""
        homeCenter.style.display = "none";
        introduce.style.position = 'absolute';
        introduce.style.left = "100%"
        page.style.display = 'block'
    }

}


window.addEventListener('scroll', showHome);
homeA.addEventListener('click', showIntroduce)
introduceInput.addEventListener('input', message)