---
layout: default
title: Home
---
<section id="home" class="yellow">
  <div class="container">
    <div class="hero-content">
      <h1 class="hero-title">Hugo Storm</h1>
      <h2 class="hero-subtitle">Cybersecurity Professional</h2>
      <p class="hero-description">Passionate cybersecurity specialist documenting my journey and sharing insights in digital security and privacy.</p>
      <div class="hero-buttons">
        <a href="#contact" class="btn btn-primary">Get In Touch</a>
      </div>
    </div>
  </div>
</section>

<section id="about" class="black">
  <div class="container">
    <h2 class="section-title">About Me</h2>
    <div class="about-grid">
      <div class="about-text">
        <p>Hi! I'm Hugo! A dedicated and curious Cybersecurity Professional (in the making) and IT nerd, with expertise in Security Architecture, Networking, Coding, Privacy and Operational Systems. Through my website I want to keep developing my knowledge and share my curiosity and exepertise with the world, so welcome!</p>
        <p>Cyber Security == "Constant learning, and changes happening in the industry", and it's one of the things I like so much about CS, and IT in general! I love to dive into the little details and regularly learn about new security concepts, tools, and techniques. My goal is to contribute to a safer digital environment and educate myself (and the rest of the world) as much as I can.</p>
        <p>On my website you will be able to follow along with me through my learning journey, see what I have accomplished so far and what I am working towards! I'll be also sharing some of my thoughts on various topics through my blog, may it be about Cyber Security, Privacy, or anything else I like to talk about! </p>
      </div>
      <div class="about-skills">
        <h3>My Skills</h3>
        <div class="skill-bar">
          <span class="skill-name">Python</span>
          <div class="skill-progress">
            <div class="progress" data-width="95%"></div>
          </div>
        </div>
        <div class="skill-bar">
          <span class="skill-name">Network Security</span>
          <div class="skill-progress">
            <div class="progress" data-width="85%"></div>
          </div>
        </div>
        <div class="skill-bar">
          <span class="skill-name">Security Analysis</span>
          <div class="skill-progress">
            <div class="progress" data-width="70%"></div>
          </div>
        </div>
        <div class="skill-bar">
          <span class="skill-name">Docker</span>
          <div class="skill-progress">
            <div class="progress" data-width="95%"></div>
          </div>
        </div>
        <div class="skill-bar">
          <span class="skill-name">SQL</span>
          <div class="skill-progress">
            <div class="progress" data-width="95%"></div>
          </div>
        </div>
        <div class="skill-bar">
          <span class="skill-name">Python Scripting</span>
          <div class="skill-progress">
            <div class="progress" data-width="35%"></div>
          </div>
        </div>
        <div class="skill-bar">
          <span class="skill-name">Malware Analysis</span>
          <div class="skill-progress">
            <div class="progress" data-width="25%"></div>
          </div>
        </div>
        <div class="skill-bar">
          <span class="skill-name">HTML</span>
          <div class="skill-progress">
            <div class="progress" data-width="65%"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="learning-path" class="yellow">
  <div class="container">
    <h2 class="section-title dark">My Recent Learnings</h2>
    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-marker completed"></div>
        <div class="timeline-content">
          <h3>Foundations of Cybersecurity</h3>
          <p>Completed core curriculum in networking, systems architecture, and information security principles.</p>
          <span class="timeline-date">2023</span>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-marker completed"></div>
        <div class="timeline-content">
          <h3>Network Security Specialization</h3>
          <p>Completed advanced courses in firewall management, IDS/IPS systems, and network monitoring.</p>
          <span class="timeline-date">2024</span>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-marker completed"></div>
        <div class="timeline-content">
          <h3>Google Cybersecurity Professional Certificate</h3>
          <p>Completed 8 courses preparing for entry-level roles in cybersecurity through hands-on and practice-based assessments.</p>
          <span class="timeline-date">2024</span>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-marker completed"></div>
        <div class="timeline-content">
          <h3>LFEL1001: Understanding the EU Cyber Resilience Act (CRA)</h3>
          <p>Completed a course about the new EU CRA regulation that sets CS standards for PDEs in the EU. </p>
          <span class="timeline-date">2025</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="certifications" class="black">
  <div class="container">
    <h2 class="section-title">Recent Certifications</h2>
    <div class="cert-grid">
      <div class="cert-item">
        <div class="cert-logo">GCPC</div>
        <h3>Google Cybersecurity Professional Certificate</h3>
        <p>Issued by Coursera - 2024</p>
      </div>
      <div class="cert-item">
        <div class="cert-logo">LFEL1001</div>
        <h3>Understanding the EU Cyber Resilience Act (CRA)</h3>
        <p>Issued by The Linux Foundation - 2025</p>
      </div>
      <div class="cert-item planned">
        <div class="cert-logo">CAPC</div>
        <h3>IBM Cybersecurity Analyst Professional Certificate</h3>
        <p>In Progress</p>
      </div>
      <div class="cert-item planned">
        <div class="cert-logo">CompTIA</div>
        <h3>Security+</h3>
        <p>Planned</p>
      </div>
    </div>
  </div>
</section>

<section id="blog-highlight" class="yellow">
  <div class="container">
    <h2 class="section-title dark">Latest Articles</h2>
    <div class="blog-grid">
      {% if site.posts.size > 0 %}
        {% for post in site.posts limit:3 %}
          <div class="blog-post">
            <span class="blog-date">{{ post.date | date: "%b %-d, %Y" }}</span>
            <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
            <p>{{ post.excerpt | strip_html | truncate: 120 }}</p>
            <a href="{{ post.url | relative_url }}" class="read-more">Read More</a>
          </div>
        {% endfor %}
      {% else %}
        <div class="blog-placeholder">
          <h3>Coming Soon</h3>
          <p>I'm currently working on my first cybersecurity articles. Check back soon for posts on:</p>
          <ul class="blog-topics">
            <li>Network Security Analyses</li>
            <li>Case Studies</li>
            <li>Privacy Practices</li>
            <li>Cybersecurity Career Advice</li>
          </ul>
        </div>
      {% endif %}
    </div>
    <div class="blog-cta">
      <a href="{{ '/blog/' | relative_url }}" class="btn btn-secondary">View All Articles</a>
    </div>
  </div>
</section>

<section id="contact" class="black">
  <div class="container">
    <h2 class="section-title">Get in touch!</h2>
    <div class="connect-container">
      <div class="connect-card">
        <div class="connect-icon">
          <i class="fas fa-envelope"></i>
         </div>
        <h3>Email</h3>
        <p>For any inquiries:</p>
        <a href="#" id="reveal-email" class="connect-link">Show Email Address</a>
        <span id="email-display" class="email-display"></span>
      </div>
      <div class="connect-card">
        <div class="connect-icon">
          <i class="fab fa-github"></i>
        </div>
        <h3>GitHub</h3>
        <p>See my projects and contributions!</p>
        <a href="https://github.com/stormhugo" target="_blank" class="connect-link">stormhugo</a>
      </div>
      <div class="connect-card">
        <div class="connect-icon">
          <i class="fab fa-linkedin"></i>
        </div>
        <h3>LinkedIn</h3>
        <p>Check me on LinkedIn!</p>
        <a href="https://linkedin.com/in/stormhugo" target="_blank" class="connect-link">Hugo Storm</a>
      </div>
    </div>
    <div class="connect-footer">
      <p>"Looking forward to learning more!"</p>
    </div>
  </div>
</section>