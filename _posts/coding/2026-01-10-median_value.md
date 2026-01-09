---
title: Manhattan Distance and Median Value in Grid
date: 2026-01-10 00:00:00 +/-TTTT
categories: [Coding, Algorithms]
tags: [manhattan distance, median, algorithm, optimization]     # TAG names should always be lowercase
---

## Finding Optimal Meeting Point Using Median

When dealing with Manhattan distance problems on a grid, there's an important optimization technique: **to minimize the sum of Manhattan distances from multiple points to a single target point, you should use the median of the x-coordinates and the median of the y-coordinates**.

### Why Median Works

The Manhattan distance between two points `(x1, y1)` and `(x2, y2)` is defined as:

```
|x1 - x2| + |y1 - y2|
```

When we want to find a point `(x, y)` that minimizes the sum of Manhattan distances from `n` points `(x1, y1), (x2, y2), ..., (xn, yn)`, we need to:

1. **Find the median of all x-coordinates** - This gives us the optimal x-coordinate
2. **Find the median of all y-coordinates** - This gives us the optimal y-coordinate

### Key Insight

The median is optimal for Manhattan distance because:
- The sum of absolute deviations is minimized at the median
- For x-coordinates: the sum `Σ|x_i - x|` is minimized when `x` is the median of all `x_i`
- For y-coordinates: the sum `Σ|y_i - y|` is minimized when `y` is the median of all `y_i`

This property makes the median the optimal choice for minimizing total Manhattan distance, rather than using the mean (average) which is optimal for Euclidean distance.

### Example

Given points: `(1, 2), (3, 5), (5, 3), (7, 8), (9, 1)`

- x-coordinates: `[1, 3, 5, 7, 9]` → median = `5`
- y-coordinates: `[2, 5, 3, 8, 1]` → sorted: `[1, 2, 3, 5, 8]` → median = `3`

Therefore, the optimal meeting point is `(5, 3)`, which minimizes the total Manhattan distance from all given points.

