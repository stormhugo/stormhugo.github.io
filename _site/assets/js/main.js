document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const siteNav = document.querySelector('.site-nav');
    
    if (menuToggle) {
      menuToggle.addEventListener('click', function() {
        siteNav.classList.toggle('open');
      });
    }
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          if (siteNav.classList.contains('open')) {
            siteNav.classList.remove('open');
          }
          
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
    
    const animatedElements = document.querySelectorAll('.about-grid, .portfolio-grid, .cert-grid, .blog-grid, .contact-grid');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    animatedElements.forEach(element => {
      observer.observe(element);
    });
    
  
    
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.site-nav .page-link');
  
  function highlightActiveNavItem() {
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  
  highlightActiveNavItem();
  window.addEventListener('scroll', highlightActiveNavItem);
  
  const filterButtons = document.querySelectorAll('.portfolio-filter button');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
          if (filterValue === 'all') {
            item.style.display = 'block';
          } else if (item.classList.contains(filterValue)) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }
  
  const skillBars = document.querySelectorAll('.skill-progress .progress');
  
  function animateSkillBars() {
    skillBars.forEach(bar => {
      const targetWidth = bar.getAttribute('data-width');
      bar.style.width = targetWidth;
    });
  }
  
  const skillSection = document.querySelector('.about-skills');
  if (skillSection) {
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateSkillBars();
          skillObserver.unobserve(entry.target);
        }
      });
    });
    
    skillObserver.observe(skillSection);
  }
});


document.addEventListener('DOMContentLoaded', function() {
  const emailLink = document.getElementById('reveal-email');
  if (emailLink) {
    emailLink.addEventListener('click', function(e) {
      e.preventDefault();
      const username = "stormhugo-socials";
      const domain = "proton{dot}me";
      const emailDisplay = document.getElementById('email-display');
      emailDisplay.textContent = username + '{at}' + domain;
      emailDisplay.style.display = 'block';
      this.style.display = 'none';
    });
  }
});