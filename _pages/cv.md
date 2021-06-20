---
layout: cv
title: cv
permalink: /cv/
description: aith's cv
nav: true
display_categories: [code]
years: [2021]
og_image: https://cpb-us-e1.wpmucdn.com/sites.ucsc.edu/dist/5/1049/files/2020/05/vlcsnap-2021-06-07-11h11m16s845.png
---
# [Ari (aith) Iramanesh](https://aith.github.io)
Software Engineer

<div id="webaddress">
<a href="mailto:{{ site.email }}">{{ site.email }}</a>
|
<i class="fa fa-github"></i> <a href="http://github.com/{{ site.github_username}}">{{ site.github_username}}</a>
|
<i class="fa fa-linkedin"></i> <a href="http://linkedin.com/in/{{ site.linkedin_username  }}">{{ site.linkedin_username }}</a>
|
<a href="http://aith.github.io">aith.github.io</a>
</div>


<div id="blurb">
Software Engineer experienced with AI, Procedural Content Generation, Simulations, Online Games, Fast Prototyping, & Development Automation. </div>

## Technical Skills
<div id="blurb">
Python, C++, C#, JS, Rust, Git, Linux, Bash, Concurrency, Jupyter, ML, Generative Algorithms, Unity, OS, Computer Architecture, GPU Programming
</div>

## Education

`2017-21`
<div id="blurb"> B.S. of Computer Science, Computer Game Design - <b>University of California, Santa Cruz</b> - GPA 3.8 - Dean's Honors  
</div>

## Undergraduate Research
`2021`
#### __UCSC Expressive Intelligence Lab - [AgentCraft Developer](https://github.com/aith/agentcraft)__
Designed and developed Agentcraft, a _Complex Social AI Agent Simulation & Procedural Settlement Generator._  
• Implemented Difficult AI Pathfinding, Procedurally Generated Historical Timeline, Schematic File Format and Parser, Full Lazy Loading Optimization, Realistic Road Generation, HTTP-Minecraft Comm., CLI in Python, all under Time & Performance Constraints  
• Submitted to Generative Design in Minecraft 2021 and drafted a Publication for EXAG (currently in review).  
`2021`
#### __UCSC Open Lab - [Sea Surface Temp. Data Vis Developer](https://aith.github.io/CA-temperature-projections/)__
• Collaborated with Marine Scientists to design Readable Web-based Data Vis using research data  
• With the guidance of Computationtal Media advisor, implemented Data Vis in JS/HTML/CSS/Vega Lite  
• Presented DataVis to a Mozilla Hub with other Data Visualizations


## Publications

{% for y in page.years %}
{% bibliography -f papers -q @*[selected=true]* --template  <p><code>{{entry.year}}</code><h4><a href="https://aith.github.io{{ entry.html  }}">{{entry.title}}</a></h4><h4>{{entry.author}}</h4></p>%}
{% endfor %}


## Experience <a href="{{ site.baseurl }}{% link _pages/projects.md %} "> <i class="fa fa-link" aria-hidden="true"></i> </a>

{% if site.enable_project_categories and page.display_categories %}
<!-- Display categorized projects -->
    {% for category in page.display_categories %}
        {% assign categorized_projects = site.projects | where: "category", category %}
        {% assign sorted_projects = categorized_projects | sort: "importance" %}
        {% for project in sorted_projects %}
            {% if project.on_cv %}

`{{ project.year }}`  
{% if project.redirect %}
#### [_{{ project.title }}_]({{ project.redirect }}) - __{{ project.role }}__  
{% else %}
#### _{{ project.title }}_ - __{{ project.role }}__  
{% endif %}

{% if project.cv_desc %}
{{ project.cv_desc | replace: "  ", "<br>" }}
{% elsif project.description %}
{{ project.description | replace: "  ", "<br>" }}
{% endif %}

            {% endif %}
        {% endfor %}
    {% endfor %}
{% endif %}

<!-- ### Footer
Last updated: June 2021 -->
