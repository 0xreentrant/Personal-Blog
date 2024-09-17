---
title: Building Blake, P2 - UI/UX Considerations
description: 
permalink: posts/{{ title | slug }}/index.html
date: '2024-07-25'
tags: []
---

![Article Cover](https://media.licdn.com/dms/image/v2/D4D12AQG0Xm3w4MVA5Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1719285288569?e=1732147200&amp;v=beta&amp;t=aFoMV41ifnrxbCKtV6id-y6J9UKG452eRWDsyDpPq-A)

### Alexander Perez, Senior Full Stack Engineer

**Building Full Stack SaaS platforms for startups | Typescript, React, Next.js, State Management, SQL/NoSQL, GraphQL, OAuth**

---

**Published on June 25, 2024**

---

## Update, September 1st, 2024:

**Blake is in open Beta at 👉️ [https://getblake.link](https://getblake.link)**

**If you'd like to share thoughts and suggestions, make sure to leave me a comment here or on any of my posts and I'll chat about it with you :)**

---

After building as a Full Stack engineer for over a decade, I've collected examples of design preferences and opinions on user experience that inform how software I build look and feel. Yes, they are definitely subjective, without hard science, but I can count on having strong references to other applications with huge user-bases and research teams of their own.

## User Experience: Motivations

Even though the main goal with Blake is to demonstrate my Full Stack Javascript skills, it is useful to think about how a SaaS can develop through its intended offerings. To spark the imagination, I thought of two other platforms that inspired Blake.

![Blake: Inspired by the masters of lists...](https://media.licdn.com/dms/image/v2/D4D12AQE45piVypzf1Q/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1719285951162?e=1732147200&amp;v=beta&amp;t=ZQJ8aupprxG1jjSKSF6Qzejp458tI2T4ZnbNbQ8cuQw)

The major inspirations to Blake are Notion and Spotify, two apps that revolve around documents and lists. Because a bookmark is relative to a document, Blake is akin to the layer of Notion that collects documents in a simple and easy-to-navigate experience. In the same way, Blake is intended to make collecting bookmarks simple. The interface stays out of the way and only makes itself known when one decides to act on the bookmark.

![Spotify: the classic "list as an experience"](https://media.licdn.com/dms/image/v2/D4D12AQHYrUCtlNb3-g/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1719285720784?e=1732147200&amp;v=beta&amp;t=5BiFnyXcFKQTMS2CaxnPVwXFUAMg8G_kQduIwVtFaHI)

![Notion: List of lists and other widgets](https://media.licdn.com/dms/image/v2/D4D12AQGzxKRtbgCpoA/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1719285996661?e=1732147200&amp;v=beta&amp;t=oppV7Q6TKRK14wrYeurdu890gP2dlxRyr7YjMnWiFBA)

Similarly to Spotify, Blake also intends to portray the list as the primary perspective: a thematic group, as tightly defined or loosely chaotic as the author intends to create. By providing the list as the single top-level organizing container, a user can find multiple ways to make use of it. For example:

- Lists can become a checklist for the last few days' worth of new bookmarks. One by one they can be explored, kept or removed for their worth, and notes made to collect whatever value each link provides.
- Lists can be a way to share knowledge with others. Bookmarks can be curated and shared with others, and others could make comments to collect impressions, opinions, interpretations, etc. for the purpose of growing organizational knowledge between colleagues, friends, and teammates.
- Lists can be used to group key information sources, such as rule-sets for favorite table-top games, various documentation for projects in-progress, recipes for the week, and so on.

Lists are abstract enough to categorize nearly anything, and concrete enough to provide a skeleton for progression and further action.

## Mobile considerations: core trade-offs

The major trade-off between a desktop app and a mobile one is screen real-estate and portability. With the desktop, we can present more features at once than you can with mobile. It also changes how someone understands how to navigate between content and functionality.

### Fitts's Law

[Fitts's Law](https://lawsofux.com/fittss-law/) extrapolates to three major rules:

1. Touch targets should be large enough for users to accurately select them.
2. Touch targets should have ample spacing between them.
3. Touch targets should be placed in areas of an interface that allow them to be easily acquired.

That affects a huge majority of UI/UX decisions and trade-offs when designing for mobile. For Blake, that applies in large part to:

- Dropdowns vs Drawers: operating commands and actions.
- Button Placement: "clickability" with mouse vs the finger.
- Priority of Layout: most important controls closest to primary fingers.

--- 

*Read the full article on LinkedIn*: [Click here to read, and leave a comment, please :)](https://www.linkedin.com/pulse/full-stack-skills-action-building-blake-nextjs-saas-alexander-jggif/?trackingId=jbvGc0HhS7q17s20ZoszwA%3D%3D)
