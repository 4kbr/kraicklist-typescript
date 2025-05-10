# Task Done

> Note: the list that is (DONE) means it is done.

## 1. Improve API Functionality

🔸 (DONE) Case-insensitive Search
Current behavior: case-sensitive exact match
Fix: Convert both query and content/title to lowercase.

🔸 (DONE) API get product by id
Currently there are no API to get specific product.
Fix: Add API to get product By id.

🔸 (DONE) API get all unique tags and can search with query
This API is for showing all unique tags from each product

🔸 (DONE) API get random tags
This API is for showing some tags under search bar

🔸 (DONE) API implement pagination and search by tags in get products

🔸 (NOTYET) Menambah filter dengan task

## 2. Improve Result Presentation (UX)

🔸 (ONPROGRESS) Better Styling
Currently likely raw HTML / rough layout
Fix: Use CSS Grid / Flexbox, cards with thumbnail (thumb_url), truncated text, etc.

🔸 (DONE) Empty State Handling
Users should get friendly feedback when no results
Fix: Add No results for "query" UI instead of alert()

🔸 (HOLD) Loading State
UX improvement during async fetch
Fix: Add loading spinner or disabled button while fetching

🔸 (DONE) Pagination
Avoid overwhelming user with too many reults
Fix: Slice the results on client side or implement paging in backend

🔸 (ONGOING) Product page
Page for one product
