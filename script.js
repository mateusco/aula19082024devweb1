const text = "Olá, sou Matheus Castro, tenho 25 anos e trabalho como Técnico de Suporte na Mindworks,|atendendo a Cesan há 3 anos. Sou formado em Técnico de Informática pelo Senac e estou no 3º|período de Análise e Desenvolvimento de Sistemas na FAESA.";
let index = 0;
const typingEffectElement = document.getElementById("typingEffect");

function type() {
    if (index < text.length) {
        const char = text.charAt(index);
        if (char === '|') {
            typingEffectElement.innerHTML += '<br>'; // Substitui | por uma quebra de linha
        } else {
            typingEffectElement.innerHTML += char; // Adiciona o caractere normal
        }
        index++;
        setTimeout(type, 20); // Ajuste a velocidade do efeito aqui
    }
}

type();

const progressBar = document.getElementById('progressBar');

function animateProgressBar() {
    let width = 0;
    const targetWidth = 60; // Percentual de preenchimento desejado

    const interval = setInterval(() => {
        if (width >= targetWidth) {
            clearInterval(interval);
        } else {
            width++;
            progressBar.style.width = width + '%'; // Atualiza a largura da barra
            progressBar.textContent = width + '%'; // Atualiza o texto da barra
        }
    }, 20); // Ajuste a velocidade do aumento
}

animateProgressBar();

// Função para mostrar o texto "Cursos" quando a seção é visível
function showCursosMessage() {
    const cursosMessage = document.getElementById('cursos-message');
    cursosMessage.classList.add('show'); // Adiciona a classe para exibir

    setTimeout(() => {
        cursosMessage.classList.remove('show'); // Remove a classe após o tempo definido
    }, 2000); // Tempo para desaparecer (2 segundos)
}

// Rolagem suave para as seções ao clicar no menu
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Previne o comportamento padrão do link

        // Obtém o id da âncora clicada
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Rolagem suave para o elemento alvo
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });

            // Adiciona um efeito especial ao clicar em 'cursos'
            if (targetId === 'cursos') {
                showCursosMessage();
            }
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const circle = document.querySelector('.circle');
    const div1 = document.querySelector('.box.box1');
    const div2 = document.querySelector('.box.box2');

    function updateCirclePosition() {
        // Altura da div1
        const div1Height = div1.offsetHeight;

        // Define a posição do círculo na linha de divisão entre div1 e div2
        circle.style.top = (div1Height - circle.offsetHeight / 2) + 'px';
    }

    // Atualiza a posição do círculo ao carregar e ao redimensionar
    updateCirclePosition();
    window.addEventListener('resize', updateCirclePosition);
});