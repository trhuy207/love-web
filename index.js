const id = document.getElementById('anhThu');

id.addEventListener('click', () => {
    // 👇️ hide buttont
    id.style.display = 'none';

    // 👇️ show div
    const meme = document.getElementById('toTinh');
    meme.style.display = 'block';
});