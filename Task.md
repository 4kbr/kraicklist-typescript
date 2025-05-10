# Task Done

> Note: the list that is (DONE) means it is done.

## 1. Improve Search Functionality (Top Priority)

🔸 (DONE) Case-insensitive Search
Current behavior: case-sensitive exact match
Fix: Convert both query and content/title to lowercase.

## 2. Improve Result Presentation (UX)

🔸 (ONPROGRESS) Better Styling
Currently likely raw HTML / rough layout
Fix: Use CSS Grid / Flexbox, cards with thumbnail (thumb_url), truncated text, etc.

🔸 (ONPROGRESS) Empty State Handling
Users should get friendly feedback when no results
Fix: Add No results for "query" UI instead of alert()

🔸 (ONPROGRESS) Loading State
UX improvement during async fetch
Fix: Add loading spinner or disabled button while fetching

🔸 (ONPROGRESS) Pagination or Infinite Scroll
Avoid overwhelming user with too many results
Fix: Slice the results on client side or implement paging in backend
