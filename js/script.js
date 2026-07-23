/**
 * SCRIPT DE INTERATIVIDADE DO SITE - RAFAEL BATISTA ADVOCACIA
 * Este arquivo controla o comportamento responsivo do menu mobile, efeitos de rolagem (scroll)
 * e melhorias na experiência de navegação do usuário.
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================================================
  // SELEÇÃO DE ELEMENTOS DO DOM
  // ==========================================================================
  const header = document.querySelector('.header');
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // ==========================================================================
  // EFEITO DE SCROLL NO CABEÇALHO (HEADER)
  // Adiciona fundo escuro com blur ao rolar a página a partir de 50px de altura.
  // ==========================================================================
  const checkScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  // Executa ao carregar para garantir o estado correto caso a página inicie scrollada
  checkScroll();
  // Ouvinte de evento de rolagem na janela
  window.addEventListener('scroll', checkScroll);

  // ==========================================================================
  // CONTROLE DO MENU HAMBÚRGUER MOBILE
  // Abre e fecha a gaveta de links em telas pequenas ao clicar no botão.
  // ==========================================================================
  const toggleMenu = () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  };

  hamburger.addEventListener('click', toggleMenu);

  // ==========================================================================
  // FECHAMENTO DO MENU AO CLICAR EM UM LINK
  // Garante que o menu mobile feche após o usuário escolher uma seção.
  // ==========================================================================
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Se o menu estiver aberto, fecha
      if (navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  });

  // ==========================================================================
  // NAVEGAÇÃO SUAVE ADICIONAL (SMOOTH SCROLL)
  // Garante rolagem suave e precisa, descontando a altura do cabeçalho fixo.
  // ==========================================================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      
      // Apenas processa se for um link âncora válido (diferente de '#' simples)
      if (targetId !== '#') {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          // Obtém a altura do header para compensar no posicionamento final
          const headerOffset = header.offsetHeight;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          // Realiza o scroll suave até a posição calculada
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
});
