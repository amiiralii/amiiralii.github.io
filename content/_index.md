---
# Leave the homepage title empty to use the site title
title: ""
date: 2025-08-08
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ""
      # Show a call-to-action button under your biography? (optional)
      button:
        text: Download CV
        url: uploads/resume.pdf
    design:
      css_class: dark
      background:
        color: black
        image:
          # Add your image background to `assets/media/`.
          filename: stacked-peaks.svg
          filters:
            brightness: 1.0
          size: cover
          position: center
          parallax: false
  - block: markdown
    content:
      title: '📚 My Research'
      subtitle: ''
      text: |-
          Bigger isn't always better. My research, guided by my advisor <a href="https://timm.fyi/" style="color: inherit; text-decoration: none; font-weight: bold; font-style: italic;" onmouseover="this.style.color='#6EE7B7'" onmouseout="this.style.color='inherit'">Dr. Timm Menzies</a>, challenges the idea that ML in software engineering needs massive datasets to be effective. Instead, I explore how we can do more with less, tackling real SE problems with fewer, higher-quality labels.

          This approach, which I call “Less, but better”, is about making ML practical, efficient, and impactful in the real world. Just as importantly, leaner models bring greater transparency and explainability, helping researchers and practitioners understand why models behave the way they do, not just what they predict. By combining efficiency with clarity, I aim to build solutions that are not only accurate, but also actionable and trustworthy.

          Interested, or want to share your thoughts? Don’t hesitate to reach out 😃
    design:
      columns: '1'
  # - block: collection
    # id: papers
    # content:
      # title: Featured Publications
      # filters:
        # folders:
          # - publication
        # featured_only: true
    # design:
      # view: article-grid
      # columns: 2
  - block: collection
    content:
      title: Recent Publications
      text: ""
      filters:
        folders:
          - publication
        exclude_featured: false
    design:
      view: citation
  # - block: collection
    # id: talks
    # content:
      # title: Recent & Upcoming Talks
      # filters:
        # folders:
          # - event
    # design:
      # view: article-grid
      # columns: 1
  # - block: collection
    # id: news
    # content:
      # title: Recent News
      # subtitle: ''
      # text: ''
      #Page type to display. E.g. post, talk, publication...
      # page_type: post
      #Choose how many pages you would like to display (0 = all pages)
      # count: 5
      # Filter on criteria
      # filters:
        # author: ""
        # category: ""
        # tag: ""
        # exclude_featured: false
        # exclude_future: false
        # exclude_past: false
        # publication_type: ""
      # Choose how many pages you would like to offset by
      offset: 0
      # Page order: descending (desc) or ascending (asc) date.
      order: desc
    design:
      # Choose a layout view
      view: date-title-summary
      # Reduce spacing
      spacing:
        padding: [0, 0, 0, 0]
---
