# OWASP Top 10 – Broken Authentication Demo

This project is part of a collection of simple demonstrations illustrating the [OWASP Top 10](https://owasp.org/www-project-top-ten/) security risks.  
This application showcases a typical Broken Authentication vulnerability by accepting any login attempt, regardless of username or password.

---

## Description

The application provides a basic login form that *unconditionally accepts* any set of login credentials.  
This demonstrates a critical violation of basic authentication logic and simulates a flawed implementation, such as might be found in insecure or hastily built web applications.

The project includes:
- A *broken version* that accepts all login attempts and exposes multiple authentication flaws
- A *fixed version* that properly validates credentials and applies basic security best practices

---

## Running the Demo

### Prerequisites

- [Node.js](https://nodejs.org/) (tested with version ≥ 18)
- [npm](https://www.npmjs.com/)

---

### Installation

```bash
git clone https://github.com/DerLolly99/Broken-Authentication-Demo.git
cd Broken-Authentication-Demo
npm install
```

### Execution

**1. Broken version:**

```bash
node logi.js
```

This will launch the login page at:
http://localhost:3000/logi.html

**2. Fixed version:**

```bash
node logi_fixed.js
```

This will launch the login page at:
http://localhost:3000

