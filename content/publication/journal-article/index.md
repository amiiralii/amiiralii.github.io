---
title: "Minimal Data, Maximum Clarity: A Heuristic for Explaining Optimization"
authors:
- admin
- Tim Menzies
date: "2025-09-10T00:00:00Z"

doi: ''

# Schedule page publish date (NOT publication's date).
# publishDate: "2017-01-01T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article"]

# Publication name and optional abbreviated publication name.
# publication: "*Journal of Source Themes, 1*(1)"
# publication_short: ""

abstract: Efficient, interpretable optimization is a critical but underexplored challenge in software engineering, where practitioners routinely face vast configuration spaces and costly, error-prone labeling processes. This paper introduces EZR, a novel and modular framework for multi-objective optimization that unifies active sampling, learning, and explanation within a single, lightweight pipeline. Departing from conventional wisdom, our Maximum Clarity Heuristic demonstrates that using less (but more informative) data can yield optimization models that are both effective and deeply understandable. EZR employs an active learning strategy based on Naive Bayes sampling to efficiently identify high-quality configurations with a fraction of the labels required by fully supervised approaches. It then distills optimization logic into concise decision trees, offering transparent, actionable explanations for both global and local decision-making. Extensive experiments across 60 real-world datasets establish that EZR reliably achieves over 90% of the best-known optimization performance in most cases, while providing clear, cohort-based rationales that surpass standard attribution-based explainable AI (XAI) methods (LIME, SHAP, BreakDown) in clarity and utility. These results endorse "less but better"; it is both possible and often preferable to use fewer (but more informative) examples to generate label-efficient optimization and explanations in software systems. To support transparency and reproducibility, all code and experimental materials are publicly available at this https URL.

# Summary. An optional shortened abstract.
summary: Introducing a new heuristic, "Less but Better data", and a powerful framework, EZR, for label-efficient SE optimization. 

tags:
- Software Engineering
- Multi-objective optimization
- Explainable AI

hugoblox:
  ids:
    arxiv: 2509.08667

url_pdf: 'https://arxiv.org/pdf/2509.08667'
url_code: 'https://github.com/amiiralii/Minimal-Data-Maximum-Clarity'




# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/jdD8gXaTZsc)'
  focal_point: ""
  preview_only: True

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
# projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
# slides: ""
---

<!-- {{% callout note %}}
Click the *Cite* button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}

{{% callout note %}}
Create your slides in Markdown - click the *Slides* button to check out the example.
{{% /callout %}}

Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/). -->