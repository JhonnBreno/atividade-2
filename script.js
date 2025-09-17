const btn = document.getElementById('btn');
const sidebar = document.getElementById('sidebar');
const times = document.getElementById('times');
btn.addEventListener('click', () => {
    if(sidebar.classList.contains('visible')){
        sidebar.classList.remove('visible');
        sidebar.classList.add('hidden');
    } else {
        sidebar.classList.remove('hidden');
        sidebar.classList.add('visible');
    }
});
times.addEventListener('click', () => {
    sidebar.classList.toggle('visible');
    sidebar.classList.toggle('hidden');
});

