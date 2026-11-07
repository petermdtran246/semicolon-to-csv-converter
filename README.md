# Legacy Data to CSV Converter 🔄

A lightweight, client-side web application designed to parse and convert legacy semicolon-separated data records into standard Comma-Separated Values (CSV) format. This project serves as a proof-of-concept for migrating accounting data between systems.

## Overview
When upgrading enterprise software (e.g., accounting systems), legacy data often needs to be reformatted before it can be imported. This tool allows users to input raw string records delimited by semicolons (`;`) and instantly converts them to CSV format (`,`), handling edge cases like embedded commas and quotes seamlessly.

## Key Features
*   **Instant Client-Side Conversion:** Utilizes Vanilla JavaScript to process data locally within the browser. Zero server round-trips required.
*   **Robust Edge-Case Handling:** Intelligently detects and escapes embedded commas (e.g., `Shearer, Jessica` becomes `"Shearer, Jessica"`) to preserve data integrity and prevent CSV column shifts.
*   **Double Quote Escaping:** Adheres to strict CSV formatting rules by escaping pre-existing double quotes.
*   **Single-Page Application (SPA) Feel:** Uses `event.preventDefault()` to intercept form submissions, preventing page reloads and providing immediate visual feedback.
*   **Accessible & Clean UI:** Features a custom "Financial Mint" color scheme, ensuring a professional, readable, and highly accessible user experience without relying on heavy CSS frameworks.

## Tech Stack
*   **HTML5:** Semantic markup and accessible form structures.
*   **CSS3:** Custom styling with a focus on clean layout, CSS variables (conceptually), and interactive states.
*   **JavaScript (ES6):** DOM manipulation, Event Listeners, Array/String methods (`.split()`, `.join()`, `.indexOf()`, `.replaceAll()`), and flow control.

## Technical Implementation Highlights
*(For developers and recruiters)*

The core logic resides in `convert.js`. It demonstrates a solid understanding of fundamental programming concepts and data structures:

1.  **String to Array Parsing:** The raw input is parsed using `.split(';')` to create a mutable array of fields.
2.  **Iterative Validation:** A `for` loop iterates through the data. It applies sanitization rules, checking for the existence of problematic characters (`,` `"` `\n` `\r`) using `.indexOf()`.
3.  **String Reconstitution:** Validated and sanitized fields are merged back into a standard CSV string using `.join(',')`.
4.  **DOM Event Delegation:** The script targets the `submit` event of the form rather than a simple button click, ensuring standard HTML form accessibility while overriding the default HTTP POST behavior.

## Getting Started

Since this is a client-side application with zero dependencies, setting it up is instant.

1. Clone the repository:
   ```bash
   git clone [https://github.com/your-username/data-converter.git](https://github.com/your-username/data-converter.git)
