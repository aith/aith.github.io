---
layout: resume
title: resume
permalink: /resume/
description: aith's resume
nav: true
display_categories: [code]
years: [2021]
og_image: https://cpb-us-e1.wpmucdn.com/sites.ucsc.edu/dist/5/1049/files/2020/05/vlcsnap-2021-06-07-11h11m16s845.png
---
# [Ari Iramanesh](https://aith.github.io)

<div id="webaddress">
<a href="mailto:{{ site.email }}">{{ site.email }}</a>
|
<i class="fa fa-github"></i> <a href="http://github.com/{{ site.github_username}}">{{ site.github_username}}</a>
|
<i class="fa fa-linkedin"></i> <a href="http://linkedin.com/in/{{ site.linkedin_username  }}">{{ site.linkedin_username }}</a>
|
<a href="http://aith.github.io">aith.github.io</a>
</div>

## Education

`2017-21`
#### __{{ site.undergrad_school }}__  
#### _{{ site.undergrad_major}}_ 
#### {{ site.undergrad_qualities }}
#### _Relevant Coursework: Computer Architecture, Systems, Algorithms, Parallel Programming, Graphics_
#### _Linear Algebra, Vector Calculus, Computability_


## Skills
#### Fluent in C++, Python, C#, JS, Rust, Git, Linux, Exceptional grasp on many programming concepts
#### Excellent Verbal and Written Communication, Leadership, & Presentation


<!-- ## Publications -->

<!-- {% for y in page.years %} -->
<!-- {% bibliography -f papers -q @*[selected=true]* --template  <p><code>{{entry.year}}</code><h4><a href="https://aith.github.io{{ entry.html  }}">{{entry.title}}</a></h4><h4>{{entry.author}}</h4></p>%} -->
<!-- {% endfor %} -->

## Experience <a href="{{ site.baseurl }}{% link _pages/projects.md %} "> <i class="fa fa-link" aria-hidden="true"></i> </a>

{% if site.enable_project_categories and page.display_categories %}
<!-- Display categorized projects -->
    {% for category in page.display_categories %}
        {% assign categorized_projects = site.projects | where: "category", category %}
        {% assign sorted_projects = categorized_projects | sort: "importance" %}
        {% for project in sorted_projects %}
            {% if project.on_resume %}

`{{ project.year }}`  
{% if project.redirect %}
#### [__{{ project.title }}__]({{ project.redirect }}) {% if project.role %} - __{{ project.role }}__ {% endif %}
{% else %}
#### __{{ project.title }}__ {% if project.role %} - __{{ project.role }}__ {% endif %}
{% endif %}

{% if project.resume_desc %}
{{ project.cv_desc | replace: "  ", "<br>" }}
{% elsif project.cv_desc %}
{{ project.cv_desc | replace: "  ", "<br>" }}
{% elsif project.description %}
{{ project.description | replace: "  ", "<br>" }}
{% endif %}

            {% endif %}
        {% endfor %}
    {% endfor %}
{% endif %}


## Undergraduate Research
`2021`
#### __UCSC Expressive Intelligence Lab - [AgentCraft Developer](https://github.com/aith/agentcraft)__
Designed and developed Agentcraft, a _Complex Social AI Agent Simulation & Procedural Settlement Generator_ in 3 months and submitted to Generative Design in Minecraft 2021 Competition against 20+ submissions.  
• Executes AI Pathfinding, Procedurally Generated Historical Timeline, Schematic File Format and Parser, Realistic Road Generation, HTTP Communication, all under Time constraint of 10 minutes over 1,000,000 blocks using Full Lazy Loading to improve performance 10x   
• Wrote formal publication with advisor (currently in review).  
`2021`
#### __UCSC OpenLab - [Sea Surface Temp. Data Vis Developer](https://aith.github.io/CA-temperature-projections/)__
• Collaborated with Marine Scientists to design readable Web-based Data Vis using 3 distinct & new datasets with 1000s of features  
• With the guidance of Computationtal Media advisor, implemented Data Vis in JS/HTML/CSS/Vega Lite  
• Presented DataVis to a Virtual Reality Mozilla Hub to 20+ scientists and students


<!-- ### Footer
Last updated: June 2021 -->
