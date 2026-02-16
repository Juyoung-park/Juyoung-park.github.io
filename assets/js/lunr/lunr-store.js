var store = [{
        "title": "Variational Autoencoder",
        "excerpt":"Test posting   Generative AI  ","categories": ["Artificial Intelligent","Generative AI"],
        "tags": ["Generative AI","VAE"],
        "url": "/artificial%20intelligent/generative%20ai/Writing-First-Post/",
        "teaser": null
      },{
        "title": "My First Blog Post",
        "excerpt":"Hello! I’ve finally created my personal blog.   Starting the Blog   Although I work as a software engineer, I didn’t have a personal tech blog.  Now I’m running a blog built with Jekyll and hosted on GitHub Pages.   Future Plans   I plan to share the following content on this blog:      Technology Learning Journey: Experiences while learning new technologies   Development Tips and Know-how: Useful development tips from practical work   Project Reviews: Retrospectives and lessons learned from completed projects   Thoughts as a Developer: Development culture, career, and developer concerns   Conclusion   I look forward to consistently maintaining this blog and growing together with the developer community.  I appreciate your interest and feedback! 🚀  ","categories": ["blog","development"],
        "tags": ["jekyll","github-pages","blog"],
        "url": "/blog/development/Made-Blog/",
        "teaser": null
      },{
        "title": "Building a Blog with Jekyll and GitHub Pages",
        "excerpt":"Let me share the process of creating a personal blog using GitHub Pages and Jekyll.   What is Jekyll?   Jekyll is a static site generator that converts Markdown files into HTML to create static websites.   Advantages of Jekyll      Fast Loading: Static files have less server load and are faster   Git-based: Version control is possible through Git   Free Hosting: Available for free hosting on GitHub Pages   SEO Friendly: Static files are advantageous for search engine optimization   GitHub Pages Setup   1. Create Repository   Create a repository in the format username.github.io on GitHub.   2. Apply Jekyll Theme   I used the Minimal Mistakes theme:   remote_theme: \"mmistakes/minimal-mistakes\"   3. Basic Configuration   Set site information in the _config.yml file:   title: \"Juyoung Park\" description: \"Juyoung Park's personal tech blog.\" url: \"https://juyoung-park.github.io\"   Writing Blog Posts   Post Structure   --- layout: post title: \"Post Title\" date: 2024-06-05 10:00:00 -0400 author: Juyoung Park categories: [category] tags: [tag1, tag2] ---  Post content...   Using Markdown Syntax      Bold text: **text**   Italic text: *text*   Link: [Link](URL)   Code block: ```language   Conclusion   Using Jekyll and GitHub Pages allows you to run a personal blog for free.  For developers, blog management using Git is very convenient.   I’ll share more technical content in the future!  ","categories": ["development","blog"],
        "tags": ["jekyll","github-pages","blog","web-development"],
        "url": "/development/blog/Jekyll-GitHub-Pages-Setup/",
        "teaser": null
      },{
        "title": "Manhattan Distance and Median Value in Grid",
        "excerpt":"Finding Optimal Meeting Point Using Median   When dealing with Manhattan distance problems on a grid, there’s an important optimization technique: to minimize the sum of Manhattan distances from multiple points to a single target point, you should use the median of the x-coordinates and the median of the y-coordinates.   Why Median Works   The Manhattan distance between two points (x1, y1) and (x2, y2) is defined as:   |x1 - x2| + |y1 - y2|   When we want to find a point (x, y) that minimizes the sum of Manhattan distances from n points (x1, y1), (x2, y2), ..., (xn, yn), we need to:      Find the median of all x-coordinates - This gives us the optimal x-coordinate   Find the median of all y-coordinates - This gives us the optimal y-coordinate   Key Insight   The median is optimal for Manhattan distance because:     The sum of absolute deviations is minimized at the median   For x-coordinates: the sum Σ|x_i - x| is minimized when x is the median of all x_i   For y-coordinates: the sum Σ|y_i - y| is minimized when y is the median of all y_i   This property makes the median the optimal choice for minimizing total Manhattan distance, rather than using the mean (average) which is optimal for Euclidean distance.   Example   Given points: (1, 2), (3, 5), (5, 3), (7, 8), (9, 1)      x-coordinates: [1, 3, 5, 7, 9] → median = 5   y-coordinates: [2, 5, 3, 8, 1] → sorted: [1, 2, 3, 5, 8] → median = 3   Therefore, the optimal meeting point is (5, 3), which minimizes the total Manhattan distance from all given points.   ","categories": ["Coding","Algorithms"],
        "tags": ["manhattan distance","median","algorithm","optimization"],
        "url": "/coding/algorithms/median_value/",
        "teaser": null
      }]
