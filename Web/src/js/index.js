import { Theme, getTheme, initTheme } from "./themeChanger.js";
import { Counters } from "./counters.js";

initTheme('ligth');

const themeButton = new Theme("ligth", document.querySelector('[data-theme-changer]'));
const counters = new Counters([
    {
        element: document.querySelector('#user-counter'),
        marker: 'user',
        data: () => "1",
        sign: "Количество пользователей:",
    },
    {
        element: document.querySelector('#time'),
        updateElement: true,
        marker: "time",
        data: () => `
            ${new Date().getDate()}: ${(new Date().getMonth() + 1)}: ${new Date().getFullYear()} \n
            ${new Date().getHours()}: ${new Date().getMinutes()}: ${new Date().getSeconds()}
        `,
        sign: "Время"
    }
], ["user", "time"], 1000);

themeButton.initElement();



document.querySelector('body').setAttribute('data-bs-theme', getTheme());

const themeIcon = document.querySelector('[data-theme-change-icon]');
if(getTheme() === "ligth") {
    themeIcon.classList.remove('bi-moon-fill')
    themeIcon.classList.add('bi-brightness-low');
}
else {
    themeIcon.classList.remove('bi-brightness-low');
    themeIcon.classList.add('bi-moon-fill');
}

document.addEventListener('themeChange', e => {
    document.querySelector('body').setAttribute('data-bs-theme', e.detail.themeAfter);

    const themeIcon = document.querySelector('[data-theme-change-icon]');

    if(e.detail.themeAfter === 'ligth') {
        themeIcon.classList.remove('bi-moon-fill')
        themeIcon.classList.add('bi-brightness-low');
    }
    else {
        themeIcon.classList.remove('bi-brightness-low');
        themeIcon.classList.add('bi-moon-fill');
    }
});