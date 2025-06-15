# OWASP Top 10 – Broken Authentication Demo

Dieses Projekt ist Teil einer Sammlung von einfachen Demos zur Veranschaulichung der [OWASP Top 10](https://owasp.org/www-project-top-ten/).  
Diese Anwendung zeigt eine typische **Broken Authentication**-Schwachstelle, indem sie jeden Login-Versuch – unabhängig von Benutzername und Passwort – akzeptiert.

---

## Beschreibung

Die Anwendung stellt ein einfaches Login-Formular bereit, das alle eingegebenen Anmeldeinformationen **bedingungslos akzeptiert**.  
Dies demonstriert eine schwerwiegende Verletzung grundlegender Authentifizierungslogik und simuliert eine realistische, aber fehlerhafte Implementierung, wie sie in schlecht gesicherten Webanwendungen vorkommen kann.

---

## Ausführen der Demo

### Voraussetzungen

- [Node.js](https://nodejs.org/) (getestet mit Version ≥ 18)
- [npm](https://www.npmjs.com/)

### Installation

```bash
git clone https://github.com/DerLolly99/Broken-Authentication-Demo.git
cd Broken-Authentication-Demo
npm install
