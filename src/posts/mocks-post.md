---
title: Mocks in your web3 protocol tests fool you
description: 
permalink: posts/{{ title | slug }}/index.html
date: '2024-09-04'
tags: []
---

![Zetachain back in November '23](https://media.licdn.com/dms/image/v2/D5612AQFg1TL2j9MaBA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1725502095635?e=1732752000&amp;v=beta&amp;t=68nJRzcEIDj7sKUwCcYk4iCCrdhDbu0ZYV4b6jeRX7k)

## Alexander Perez, Sr. Full Stack Engineer

*Rapid application development specialist | Typescript, React, Next.js, State Management, SQL/NoSQL, GraphQL, OAuth*

**Published on September 4, 2024**

---

### Don’t let mocks in your protocol tests fool you

> *Note: This article was written for web3 protocol developers. Security researchers will also get a little glimpse into techniques for testing protocols.*

Mocking expensive, slow, or complex-to-set-up components is a great way to make testing faster, cheaper, and simpler to leverage. However, the expectations of the mock can diverge from the expectations of the real-world object. When that happens, your codebase might not work, despite passing tests.

The biggest threat to developing a protocol is the mental model of the protocol within the mind of the developer. A flawed mental model happens from numerous sources, but today we’ll focus on one: the false sense of security that comes with passing tests.

> *Note: I’m using the definition of “mock” as described by Martin Fowler in [this article](https://martinfowler.com/articles/mocksArentStubs.html).*

**TL;DR**: If you want to skip to actionable insights, jump to [How can I ensure our mocks are correct?](https://0xreentrant.github.io/blog/2023/mocks-fool-you/#how-can-I-ensure-our-mocks-are-correct).

### Our case

Imagine getting green checkmarks on all your tests. You’ve built a suite to exercise the happy paths and even some edge cases. All tests passed. It’s time to celebrate. But when you try to run the deployed example, something unsavory emerges.

![Error Example](https://media.licdn.com/dms/image/v2/D5612AQF8TIsbtytSrA/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1725502152439?e=1732752000&amp;v=beta&amp;t=yUS8EPEXAacX0LbIMZoXFRtGcJxbqmwdHPHB4r-AFIU)

> *Note: Before you hire a firm to audit your code, make sure to fully deploy your code to a testnet with all 3rd-party contracts and features available.*

You're going to think, “What’s wrong? I coded this perfectly - all tests passed!” But your mocks fooled you. It’s a false positive, and those green checkmarks aren’t giving the confidence they should. Let’s break down what to keep in mind.

### Mocks have tradeoffs

When we use mocks, we’re making a tradeoff. Here are two main reasons to use them:

1. Dependencies are too expensive, slow, or complex to spin up each time.
2. We want our tests to run quickly and efficiently.

### But what are the consequences?

These tradeoffs are acceptable when:

- You’re building the protocol pre-launch.
- You’re adding to an existing protocol.
- You’re exploring new systems.

However, in web3 financial protocols, stakes are high, and care must be taken before accepting real people's assets. As our favorite rug-pull [journalist](https://rekt.news/stake-rekt/) says, “They say the house always wins. Not in crypto.”

### How can I ensure our mocks are correct?

“But reentrant, we read the documentation front-to-back, and everything works as expected!”

I get it. You’ve put in the work. But consider:

- The documentation could be wrong.
- The implementation may have changed.
- You might have used the wrong flag in a function.

Then things break. Here’s what to do before deploying your new protocol:

1. Create “smoke-tests.”
2. Deploy on a fully-functional testnet and run manual tests.
3. Build “forking tests” that fork a live network.
4. Build integration tests for all major features.

> *Decision tree for determining when mocks fail.*

### What do these possibilities look like?

There’s nothing like a real environment to expose the brittleness of a test suite’s assumptions. In web3, this paranoia is warranted.

### Smoke tests

If your contracts interface with 3rd-party code, ensure to run manual or scripted tests for each feature. If mocks were passing but the tests fail, there’s an issue with the mock.

![Example](https://media.licdn.com/dms/image/v2/D5612AQF4IT_I3KH4Ow/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1725502149403?e=1732752000&amp;v=beta&amp;t=eFpUE9jmBDynTvcz6D6u-HIWcj96QhgzJ-r8nVZHLGw)

### Manual testing on a testnet

Run tests on a testnet to ensure that all features that interact with 3rd-party systems work. It’s more accessible, but it may require amassing gas tokens.

### Forking tests

Fork a live chain and run a local version. This gives more control and speed, but tests may take longer compared to mocking tests.

### Live Integration Tests

Integration tests on a live testnet offer the most assurance of correctness, with all components deployed and no mocks. You’ll need testnet gas tokens for every run.

![Testing](https://media.licdn.com/dms/image/v2/D5612AQE56D7yOrlLZg/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1725502149277?e=1732752000&amp;v=beta&amp;t=WbXoT6RIeYsJqDpm9RhPU0u_B4N6llhLBHRlp_ljHNE)

### Conclusion

Mocks are helpful but come with tradeoffs. To avoid false positives, increase assurances by running tests against actual 3rd-party code.

In web3, it's critical to ensure that real money isn't lost due to thefts or mishandling of digital assets. Test comprehensively, test often.
