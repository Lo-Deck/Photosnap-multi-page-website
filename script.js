
/* OPEN CLOSE MENU */

const btnMenu = document.querySelector('.button-menu');

let isMenuClicked = false;

btnMenu.addEventListener('click', () => {

    isMenuClicked = !isMenuClicked;

    if(isMenuClicked){
        document.querySelector('.menu').style.display = 'block';
        document.querySelector('.background').style.display = 'block';
        document.querySelector('.button-menu img').src = './assets/shared/mobile/close.svg';
    }
    else{
        document.querySelector('.menu').style.display = 'none';
        document.querySelector('.background').style.display = 'none';
        document.querySelector('.button-menu img').src = './assets/shared/mobile/menu.svg';
    }

});



/* BUTTON PRICING */

let isbtnClicked = false;

const cursor = document.querySelector('.cursor');

const price = document.querySelectorAll('.section-plan .price');


if(document.querySelector('.pricing')){

    document.querySelector('.button-choose-plan').addEventListener('click', () => {

        isbtnClicked = !isbtnClicked;

        if(isbtnClicked){

            cursor.style.transform = 'translateX(2.2rem)';

            price.forEach( (item, index) => {

                item.querySelector('span:nth-of-type(1)').textContent = `$${(  Number(item.querySelector('span:nth-of-type(1)').textContent.split('$')[1]) * 12 )}`;
                item.querySelector('span:nth-of-type(2)').textContent = 'per year';

            });

        }
        else{

            cursor.style.transform = 'translateX(0.2rem)';

            price.forEach( (item) => {

                item.querySelector('span:nth-of-type(1)').textContent = `$${(  Number(item.querySelector('span:nth-of-type(1)').textContent.split('$')[1]) / 12 )}.00`;
                item.querySelector('span:nth-of-type(2)').textContent = 'per month';

            });

        }

    });

}

