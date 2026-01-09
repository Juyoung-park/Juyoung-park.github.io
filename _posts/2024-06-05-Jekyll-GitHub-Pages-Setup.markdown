---
layout: post
title: "Building a Blog with Jekyll and GitHub Pages"
date: 2024-06-05 10:00:00 -0400
author: Juyoung Park
categories: [development, blog]
tags: [jekyll, github-pages, blog, web-development]
---

Let me share the process of creating a personal blog using GitHub Pages and Jekyll.

## What is Jekyll?

Jekyll is a static site generator that converts Markdown files into HTML to create static websites.

### Advantages of Jekyll

- **Fast Loading**: Static files have less server load and are faster
- **Git-based**: Version control is possible through Git
- **Free Hosting**: Available for free hosting on GitHub Pages
- **SEO Friendly**: Static files are advantageous for search engine optimization

## GitHub Pages Setup

### 1. Create Repository

Create a repository in the format `username.github.io` on GitHub.

### 2. Apply Jekyll Theme

I used the Minimal Mistakes theme:

```yaml
remote_theme: "mmistakes/minimal-mistakes"
```

### 3. Basic Configuration

Set site information in the `_config.yml` file:

```yaml
title: "Juyoung Park"
description: "Juyoung Park's personal tech blog."
url: "https://juyoung-park.github.io"
```

## Writing Blog Posts

### Post Structure

```markdown
---
layout: post
title: "Post Title"
date: 2024-06-05 10:00:00 -0400
author: Juyoung Park
categories: [category]
tags: [tag1, tag2]
---

Post content...
```

### Using Markdown Syntax

- **Bold text**: `**text**`
- *Italic text*: `*text*`
- [Link](https://example.com): `[Link](URL)`
- Code block: ```language

## Conclusion

Using Jekyll and GitHub Pages allows you to run a personal blog for free. 
For developers, blog management using Git is very convenient.

I'll share more technical content in the future!
