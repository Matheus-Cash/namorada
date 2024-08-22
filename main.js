// Função para adicionar efeitos aos blocos de citação
function addHoverEffects() {
    // Seleciona todos os blocos de citação
    const quotes = document.querySelectorAll('.quotes blockquote');

    quotes.forEach(quote => {
        // Adiciona um evento de 'mouseover' para aumentar o tamanho e mudar a cor
        quote.addEventListener('mouseover', () => {
            quote.style.transform = 'scale(1.05)';
            quote.style.backgroundColor = '#ffe4e1'; // Cor de fundo suave
        });

        // Adiciona um evento de 'mouseout' para restaurar o estilo original
        quote.addEventListener('mouseout', () => {
            quote.style.transform = 'scale(1)';
            quote.style.backgroundColor = '#f9f9f9'; // Cor de fundo original
        });
    });
}

// Função para mostrar uma mensagem de saudação ao carregar a página
function showGreeting() {
    const greeting = "Olá, Nayane! Espero que você esteja tendo um dia maravilhoso!";
    alert(greeting); // Exibe a mensagem em uma caixa de alerta
}

// Executa as funções quando a página é carregada
window.onload = () => {
    showGreeting();
    addHoverEffects();
};


document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.photo-gallery img');

    images.forEach(image => {
        image.addEventListener('click', function() {
            // Remove a classe 'zoomed' de todas as imagens
            images.forEach(img => img.classList.remove('zoomed'));

            // Adiciona a classe 'zoomed' à imagem clicada
            this.classList.add('zoomed');
            
            // Remove a classe 'zoomed' após a animação terminar
            setTimeout(() => {
                this.classList.remove('zoomed');
            }, 300); // Tempo igual ao da animação
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const blockquotes = document.querySelectorAll('.quotes blockquote');

    blockquotes.forEach(blockquote => {
        blockquote.addEventListener('click', function() {
            // Remove a classe 'clicked' de todas as citações
            blockquotes.forEach(bq => bq.classList.remove('clicked'));
            
            // Adiciona a classe 'clicked' à citação clicada
            this.classList.add('clicked');
        });
    });
});
