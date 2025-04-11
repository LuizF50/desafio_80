// Gerar estrelas dinamicamente
function criarEstrelas() {
    const starsContainer = document.querySelector('.stars');
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        starsContainer.appendChild(star);
    }
}

// Função principal de inversão
function opostoMagico(binario) {
    if (!/^[01]+$/.test(binario)) {
        throw new Error('Entrada inválida! Use apenas 0 e 1.');
    }

    return binario.split('').map(bit => bit === '0' ? '1' : '0').join('');
}

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    criarEstrelas();

    const btn = document.getElementById('invert-btn');
    const input = document.getElementById('binary-input');
    const result = document.getElementById('result');

    btn.addEventListener('click', () => {
        try {
            const valor = input.value.trim();
            if (!valor) throw new Error('Digite um número binário');

            const resultado = opostoMagico(valor);
            result.textContent = resultado;

            // Efeito visual
            btn.classList.add('active');
            setTimeout(() => btn.classList.remove('active'), 200);

        } catch (error) {
            result.textContent = error.message;
            result.style.color = '#ff6b6b';
            setTimeout(() => result.style.color = '#4F95DA', 2000);
        }
    });

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') btn.click();
    });
});