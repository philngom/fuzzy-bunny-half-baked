export function renderBunny(bunny) {
    const bunnyEl = document.createElement('p');

    bunnyEl.classList.add('bunny');

    bunnyEl.textContent = bunny.name;

    return bunnyEl;
}