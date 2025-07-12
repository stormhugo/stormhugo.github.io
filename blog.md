---
layout: default
title: Blog
permalink: /blog/
custom_class: blog-page
---
<section class="blog-header yellow">
  <div class="container">
    <h1 class="section-title dark">Cybersecurity Journal</h1>
    <p class="blog-intro">Blog posts and articles about Cybersecurity, IT, Privacy or anything else I would like to talk about!</p>
  </div>
</section>

<section class="blog-content">
  <div class="container">
    {% if site.posts.size > 0 %}
    <div class="blog-container">
      <div class="blog-posts">
        {% for post in site.posts %}
          <article class="blog-post-card">
            <div class="post-meta">
              <span class="post-date">{{ post.date | date: "%b %-d, %Y" }}</span>
              {% if post.categories %}
                <span class="post-categories">
                  {% for category in post.categories %}
                    <a href="{{ site.baseurl }}/blog/categories/#{{ category | slugify }}" class="category">{{ category }}</a>
                  {% endfor %}
                </span>
              {% endif %}
            </div>
            <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
            <div class="post-excerpt">{{ post.excerpt }}</div>
            <a href="{{ post.url | relative_url }}" class="read-more">Continue Reading →</a>
          </article>
        {% endfor %}
      </div>
      
      {% include blog_sidebar.html %}
    </div>
    
    {% else %}
    <div class="blog-coming-soon">
      <div class="blog-placeholder">
        <h2>Coming Soon!</h2>
        <p>I'm currently working on my first cybersecurity articles. Check back soon for in-depth posts on:</p>
        <ul class="upcoming-topics">
          <li>
            <span class="topic-title">Vulnerability Assessment Methodologies</span>
            <span class="topic-desc">A step-by-step guide to conducting thorough vulnerability assessments.</span>
          </li>
          <li>
            <span class="topic-title">Securing Home Networks</span>
            <span class="topic-desc">Practical tips for improving your home network security posture.</span>
          </li>
          <li>
            <span class="topic-title">OSINT Techniques for Security Professionals</span>
            <span class="topic-desc">Leveraging open-source intelligence in security assessments.</span>
          </li>
          <li>
            <span class="topic-title">Getting Started with CTF Competitions</span>
            <span class="topic-desc">Resources and strategies for beginners in Capture The Flag competitions.</span>
          </li>
        </ul>
        
        <div class="blog-subscribe-section">
          <h3>Stay Updated</h3>
          <p>Want to be notified when new articles are published?</p>
          <div class="subscribe-options">
            <a href="https://linkedin.com/in/stormhugo" class="social-link">Connect on LinkedIn</a>
            <a href="https://github.com/stormhugo" class="social-link">Follow on GitHub</a>
          </div>
        </div>
      </div>
    </div>
    {% endif %}
  </div>
</section>