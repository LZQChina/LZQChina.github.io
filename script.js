/* Reveal */
const reveals = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
    reveals.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 120) {
            el.classList.add('active');
        }
    });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

/* 3D Hover */
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        card.style.transform = `rotateY(${x/18}deg) rotateX(${-y/18}deg)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateY(0) rotateX(0)';
    });
});

/* Project View */
const project = document.getElementById('project');
const pImg = document.getElementById('project-img');
const pTitle = document.getElementById('project-title');
const pDesc = document.getElementById('project-desc');

document.querySelectorAll('.card').forEach(card => {
    card.onclick = () => {
        pImg.src = card.querySelector('img').src;
        pTitle.textContent = card.dataset.title;
        pDesc.textContent = card.dataset.desc;
        project.style.display = 'flex';
    };
});

document.querySelector('.close').onclick = () => {
    project.style.display = 'none';
};
