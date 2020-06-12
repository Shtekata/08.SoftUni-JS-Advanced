function notify(message) {
    const notifycation = document.querySelector('#notification');
    notifycation.textContent = message;
    notifycation.style.display = 'block';
    setTimeout(() => {
        notifycation.style.display = 'none';
    }, 2000);
}

