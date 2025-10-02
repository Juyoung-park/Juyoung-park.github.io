---
layout: post
title: "Jekyll과 GitHub Pages로 블로그 만들기"
date: 2024-06-05 10:00:00 -0400
author: Juyoung Park
categories: [개발, 블로그]
tags: [jekyll, github-pages, 블로그, 웹개발]
---

GitHub Pages와 Jekyll을 사용해서 개인 블로그를 만드는 과정을 정리해보겠습니다.

## Jekyll이란?

Jekyll은 정적 사이트 생성기(Static Site Generator)입니다. 
Markdown 파일을 HTML로 변환하여 정적 웹사이트를 생성합니다.

### Jekyll의 장점

- **빠른 로딩**: 정적 파일이므로 서버 부하가 적고 빠릅니다
- **Git 기반**: Git을 통해 버전 관리가 가능합니다
- **무료 호스팅**: GitHub Pages에서 무료로 호스팅 가능합니다
- **SEO 친화적**: 정적 파일이므로 검색 엔진 최적화에 유리합니다

## GitHub Pages 설정

### 1. 저장소 생성

GitHub에서 `username.github.io` 형태로 저장소를 생성합니다.

### 2. Jekyll 테마 적용

Minimal Mistakes 테마를 사용했습니다:

```yaml
remote_theme: "mmistakes/minimal-mistakes"
```

### 3. 기본 설정

`_config.yml` 파일에서 사이트 정보를 설정합니다:

```yaml
title: "Juyoung Park"
description: "개발자 주영의 기술 블로그입니다."
url: "https://juyoung-park.github.io"
```

## 블로그 포스트 작성

### 포스트 구조

```markdown
---
layout: post
title: "포스트 제목"
date: 2024-06-05 10:00:00 -0400
author: Juyoung Park
categories: [카테고리]
tags: [태그1, 태그2]
---

포스트 내용...
```

### Markdown 문법 활용

- **볼드 텍스트**: `**텍스트**`
- *이탤릭 텍스트*: `*텍스트*`
- [링크](https://example.com): `[링크](URL)`
- 코드 블록: ```언어명

## 마무리

Jekyll과 GitHub Pages를 사용하면 무료로 개인 블로그를 운영할 수 있습니다. 
개발자라면 Git을 활용한 블로그 관리가 매우 편리할 것입니다.

앞으로 더 많은 기술적인 내용들을 공유하겠습니다!
