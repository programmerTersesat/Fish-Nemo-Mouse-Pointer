document.addEventListener('mousemove', (event) => {
    const follower = document.getElementById('follower');
    const x = event.clientX;
    const y = event.clientY;

    follower.style.left = `${x}px`;
    follower.style.top = `${y}px`;
});
