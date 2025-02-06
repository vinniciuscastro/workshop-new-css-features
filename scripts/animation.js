export default function initAnimationListeners() {
    const section = document.getElementById("animation")
    section.querySelector(".dropdown-button").addEventListener('click', (event) => {
        event.currentTarget.nextElementSibling.classList.toggle('open');
    });
    section.querySelector(".color-changer").addEventListener('click', (event) => {
        event.currentTarget.nextElementSibling.classList.toggle('dark');
    });
}