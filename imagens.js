const images = document.querySelectorAll('.container-imagens img');
let currentIndex = 0;

function showNextImage() {
  // Remove a classe 'active' da imagem atual
  images[currentIndex].classList.remove('active');

  // Atualiza o índice para a próxima imagem
  currentIndex = (currentIndex + 1) % images.length;

  // Adiciona a classe 'active' à próxima imagem
  images[currentIndex].classList.add('active');
}

// Define o intervalo para trocar as imagens a cada 3 segundos
setInterval(showNextImage, 3000);