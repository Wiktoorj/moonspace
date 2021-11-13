const homeCenter = document.querySelector('.center');
const home = document.querySelector('.home');
const homeH1 = document.querySelector('.center h1')
const homeA = document.querySelector('.center a')
const introduce = document.querySelector('.introduce')
const introduceInput = document.querySelector('.introduce input')
const page = document.querySelector('.page')


const showIntroduce = () => {
    home.style.display = 'none';
    introduce.style.display = 'block';
    homeCenter.style.left = '-102%';
}



const message = () => {
    const hideIntroduce = () => {
        introduce.style.display = 'none'
        console.log('2')
    }
    if (introduceInput.value.toUpperCase() == 'WIKTOR') {
        introduceInput.value = ""
        homeCenter.style.display = "none";
        introduce.style.position = 'absolute';
        introduce.style.left = "-100%"
        page.style.display = 'block'
        console.log('3')
        
    }
    console.log('4')
    

}


homeA.addEventListener('click', showIntroduce)
introduceInput.addEventListener('input', message)