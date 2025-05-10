# Task Done

> Note: the list that is (DONE) means it is done.

## 1. Improve Search Functionality (Top Priority)

🔸 (DONE) Case-insensitive Search
Current behavior: case-sensitive exact match
Fix: Convert both query and content/title to lowercase.

🔸 Ranking or Sorting
Not all results are equal.
Fix: Rank by match relevance (e.g., title match > content match), or add sort by date (updated_at).

## 2. Improve Result Presentation (UX)

🔸 Better Styling
Currently likely raw HTML / rough layout
Fix: Use CSS Grid / Flexbox, cards with thumbnail (thumb_url), truncated text, etc.

🔸 Empty State Handling
Users should get friendly feedback when no results
Fix: Add No results for "query" UI instead of alert()

🔸 Loading State
UX improvement during async fetch
Fix: Add loading spinner or disabled button while fetching

🔸 Pagination or Infinite Scroll
Avoid overwhelming user with too many results
Fix: Slice the results on client side or implement paging in backend
