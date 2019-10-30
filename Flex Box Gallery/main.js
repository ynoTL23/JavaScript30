const panels = document.querySelectorAll('.panel')
console.log(panels);

function toggleOpen() {
    this.classList.toggle('open');
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));