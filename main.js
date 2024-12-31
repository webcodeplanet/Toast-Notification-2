function showToast(message, type) {
    let container = document.getElementById('container');
    let newDiv = document.createElement('div');
    
    newDiv.classList.add('toast', type);
    
    newDiv.innerHTML = `
    <img id="icon" src="svg/${type}.svg" alt="">
    <div id="message">${message}</div>
    <img id="close" src="svg/close.png" alt="">
    <div class="progress-bar"></div>
    `
    // newDiv.innerHTML = `
    // <span>${message}</span>
    // <div class="progress-bar"></div>
    // `

    container.appendChild(newDiv);

    setTimeout(() => {
        newDiv.remove();
    }, 3000);
}