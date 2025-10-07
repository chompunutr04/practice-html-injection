# Practice: HTML Injection

## 📘 Overview
This repository contains practice experiments about **HTML injection** (client-side injection of HTML content) and related input-sanitization techniques.  
The exercises were developed for academic study to demonstrate how unsanitized user input can affect web UI, and to explore mitigations at the application level.

## 🎯 Learning Objectives
- Understand what HTML injection is and how it differs from other injection classes.  
- Observe how unsanitized input can alter page structure or UI.  
- Practice simple mitigation techniques (escaping, sanitizing, safe templating).  
- Learn to balance functionality with security in front-end contexts.

## ⚙️ Contents / Features
- Example pages showing safe vs. unsafe handling of user input.  
- Small demos: inline insertion, attribute injection, and template rendering pitfalls.  
- Demonstrations of simple defenses: `textContent` instead of `innerHTML`, escaping utilities, and using templating libraries.  
- Short notes on when server-side validation is still required.

## 🧠 Technologies / Tools
- HTML / CSS / JavaScript (vanilla)  
- (Optional) lightweight templating or sanitizer libraries for demonstration (e.g. DOMPurify)  
- Browser developer tools for inspection and testing

## ⚠️ Important Security Note
This repository is for **educational purposes only**. Do **not** use insecure patterns in production. Always validate and sanitize input on the server side, and apply secure output-encoding strategies on the client side to prevent XSS and other injection attacks.

## 🚀 How to run (quick)
1. Clone the repo:
   ```bash
   git clone https://github.com/chompunutr04/practice-html-injection.git
   cd practice-html-injection

2. Open the demo page(s) in your browser (e.g. demo.html), or serve the folder with a simple static server:
 ```bash
# using Python 3
python -m http.server 8000
# then open http://localhost:8000 in your browser

3. Inspect behavior in the browser console / devtools and try the safe vs. unsafe inputs as described in each demo file.

```csharp
index.html
demo/
  unsafe.html
  safe.html
js/
  sanitizer-example.js
css/
images/
README.md



