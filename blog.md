---
layout: default
title: Blog
permalink: /blog/
---
<section class="blog-header yellow">
  <div class="container">
    <h1 class="section-title dark">Cybersecurity Journal</h1>
    <p class="blog-intro">Insights, tutorials, and thoughts on cybersecurity, ethical hacking, and digital privacy.</p>
  </div>
</section>

<section class="blog-content black">
  <div class="container">
    <div class="blog-toolbar">
      <div class="blog-search">
        <input type="text" id="blog-search-input" placeholder="Search articles...">
        <button id="blog-search-button"><i class="fas fa-search"></i></button>
      </div>
    </div>

    {% if site.posts.size > 0 %}
    <div class="blog-container">
      <div class="blog-posts">
        {% for post in paginator.posts %}
          <article class="blog-post-card">
            <div class="post-meta">
              <span class="post-date">{{ post.date | date: "%b %-d, %Y" }}</span>
              {% if post.categories %}
                <span class="post-categories">
                  {% for category in post.categories %}
                    <span class="category">{{ category }}</span>
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
      
      <aside class="blog-sidebar">
        <div class="sidebar-section categories">
          <h3>Categories</h3>
          <ul>
            {% for category in site.categories %}
              <li><a href="/blog/categories/{{ category[0] | slugify }}">{{ category[0] }}</a> ({{ category[1].size }})</li>
            {% endfor %}
          </ul>
        </div>
        
        <div class="sidebar-section recent-posts">
          <h3>Recent Posts</h3>
          <ul>
            {% for post in site.posts limit:5 %}
              <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
            {% endfor %}
          </ul>
        </div>
        
        <div class="sidebar-section tags">
          <h3>Tags</h3>
          <div class="tag-cloud">
            {% for tag in site.tags %}
              <a href="/blog/tags/{{ tag[0] | slugify }}" class="tag">{{ tag[0] }}</a>
            {% endfor %}
          </div>
        </div>
      </aside>
    </div>
    
    <!-- Pagination -->
    {% if paginator.total_pages > 1 %}
    <div class="pagination">
      {% if paginator.previous_page %}
        <a href="{{ paginator.previous_page_path | relative_url }}" class="pagination-item">&laquo; Previous</a>
      {% else %}
        <span class="pagination-item disabled">&laquo; Previous</span>
      {% endif %}
      
      {% for page in (1..paginator.total_pages) %}
        {% if page == paginator.page %}
          <span class="pagination-item active">{{ page }}</span>
        {% elsif page == 1 %}
          <a href="{{ '/blog/' | relative_url }}" class="pagination-item">{{ page }}</a>
        {% else %}
          <a href="{{ site.paginate_path | relative_url | replace: ':num', page }}" class="pagination-item">{{ page }}</a>
        {% endif %}
      {% endfor %}
      
      {% if paginator.next_page %}
        <a href="{{ paginator.next_page_path | relative_url }}" class="pagination-item">Next &raquo;</a>
      {% else %}
        <span class="pagination-item disabled">Next &raquo;</span>
      {% endif %}
    </div>
    {% endif %}
    
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