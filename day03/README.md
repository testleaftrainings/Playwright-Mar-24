Week 2 Day1 [Saturday]
 
*Agenda: Get Started with Playwright*
 
## Table of Contents

- [Playwright Architecture](#playwright-architecture)
  - [Internal Working with WebSockets](#internal-working-with-websockets)
  - [Integration with Chrome DevTools Protocol (CDP)](#integration-with-chrome-devtools-protocol-cdp)
- [Understanding Browser, Context, and Pages](#understanding-browser-context-and-pages)
- [Locators and Element Interaction](#locators-and-element-interaction)

## Playwright Architecture

Playwright is a node library that provides a high-level API to control web browsers. It facilitates real-time interaction and automation by communicating with browser instances through WebSocket connections and the Chrome DevTools Protocol (CDP).

### Internal Working with WebSockets

Playwright establishes a WebSocket connection to browser instances, enabling it to send commands and receive events in a non-blocking, asynchronous manner. This WebSocket-based communication is crucial for efficiently automating browser operations such as navigation, input, and rendering.

### Integration with Chrome DevTools Protocol (CDP)

The Chrome DevTools Protocol offers a comprehensive set of tools for nearly every aspect of web development and browser control, from DOM inspection to network management and performance profiling. Playwright utilizes CDP to offer fine-grained control over Chrome and Chromium-based browsers, enabling advanced automation capabilities that extend beyond basic page interactions. Through CDP, Playwright can perform actions like capturing screenshots, intercepting network requests, and manipulating browser sessions in ways that are not possible through traditional web automation tools.

## Understanding Browser, Context, and Pages

In Playwright, automation is structured around three key objects: Browser, Context, and Pages, each serving distinct roles in the automation workflow.

### Browser

Represents an instance of a web browser. Playwright can control multiple Browser instances simultaneously, with each operating in its isolated environment.

### Context

A Browser Context simulates an incognito session, allowing for parallel tests in a single Browser instance without shared cookies, localStorage, or session data.

### Pages

A Page object represents a single browser tab or window, serving as the primary interface for web content interaction, including navigation and element manipulation.

## Locators and Element Interaction

Playwright's Locator concept simplifies web element interaction by abstracting the process of finding and manipulating elements.

### Difference Between `page.locator("").click()` and `page.click("")`

*page.locator("").click()*: This method creates a Locator object for an element or set of elements and then performs a click on the first matching element. Ideal for scenarios requiring element reuse or multiple interactions.
*page.click("")*: Directly initiates a click action on an element matching the given selector. Suited for one-off interactions without the need for Locator reuse.

The main distinction lies in abstraction and reuse level, with `page.locator` offering a more versatile approach for complex scenarios.


