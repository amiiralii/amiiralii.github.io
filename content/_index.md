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
        I do explore Machine learning use cases in software engineering. Some folks call the field Automated Software Engineering, or AI4SE or even ML4SE! 
        
        You wanna here an unpopular opinion of mine? get ready! LLMs are overrated!! I am not a fan of today's trendy complex AI (language models). My PhD advisor, Dr. Timm Menzies, has the same opinion. Instead, I try to come up with simpler solutions that are as efficient, but exponentially cheaper. check out my latest works to see more.
        
        you're intrested too? or wanna share your thoughts?
        Don't hesitate to hit me up 😃
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
