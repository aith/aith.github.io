---
layout: page
title: projects
permalink: /projects/
description: Selected projects. You can find most of my work on <a href="https://github.com/{{ site.github_username }}/"><u>Github</u></a>!
nav: true
display_categories: [code]
# horizontal: true
og_image: https://cpb-us-e1.wpmucdn.com/sites.ucsc.edu/dist/5/1049/files/2020/05/vlcsnap-2021-06-07-11h11m16s845.png
---
<div class="projects">
  {% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
    {% for category in page.display_categories %}
      <h2 class="category">{{category}}</h2>
      {% assign categorized_projects = site.projects | where: "category", category %}
      {% assign sorted_projects = categorized_projects | sort: "importance" %}
      <!-- Generate cards for each project -->
      {% if page.horizontal %}
        <div class="container">
          <div class="row row-cols-2">
          {% for project in sorted_projects %}
            {% include projects_horizontal.html %}
          {% endfor %}
          </div>
        </div>
      {% else %}
        <div class="grid">
          <div class="grid-sizer"></div>
          {% for project in sorted_projects %}
            {% if project.on_projects %}
              {% include projects.html %}
            {% endif %}
          {% endfor %}
        </div>
      {% endif %}
    {% endfor %}

  {% else %}
  <!-- Display projects without categories -->
    {% assign sorted_projects = site.projects | sort: "importance" %}
    <!-- Generate cards for each project -->
    {% if page.horizontal %}
      <div class="container">
        <div class="row row-cols-2">
        {% for project in sorted_projects %}
          {% include projects_hrz.html %}
        {% endfor %}
        </div>
      </div>
    {% else %}
      <div class="grid" style="display:grid; grid-auto-flow: dense; grid-template-columns: align-self: start;">
        {% for project in sorted_projects %}
          {% include projects.html %}
        {% endfor %}
      </div>
    {% endif %}
  {% endif %}
  

</div>


