// ============================================
// SOUL BODY COUNSELING — MAIN JS
// ============================================

// Mobile nav toggle
function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('open');
}

// Close mobile nav when a link is clicked
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('#navLinks a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('navLinks').classList.remove('open');
    });
  });

  // Scroll-based nav shadow
  const navWrapper = document.querySelector('.nav-wrapper');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navWrapper.style.boxShadow = '0 2px 24px rgba(44, 36, 32, 0.1)';
    } else {
      navWrapper.style.boxShadow = 'none';
    }
  });

  // Animate elements on scroll
  const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animateTargets = document.querySelectorAll(
    '.audience-card, .service-card, .modality-item, .credential-card, .resource-card, .blog-card, .value-item, .fee-card'
  );

  animateTargets.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.5s ${i * 0.07}s ease, transform 0.5s ${i * 0.07}s ease`;
    observer.observe(el);
  });

  // Blog filter (simple tag filtering — no actual filtering since posts are placeholders)
  const filterTags = document.querySelectorAll('.filter-tag');
  filterTags.forEach(tag => {
    tag.addEventListener('click', () => {
      filterTags.forEach(t => t.classList.remove('active'));
      tag.classList.add('active');
    });
  });
});
