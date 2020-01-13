# Learn-Dev

## Languages:
Java, JavaScript, HTML/CSS, Python, PHP, C/C++
<br>

## Paradigms:
- <u>**Structured**</u>
    - **C**
    - <u>Object-oriented</u>
        - <u>Class-based</u>: **C++**, **Java**, **PHP**, **Python**
        - <u>Prototype-based</u>: **JavaScript**
- <u>**Imperative**</u>
The 1980s saw a rapid growth in interest in object-oriented programming. These languages were imperative in style, but added features to support objects.
    - **Java**, **PHP**, **Python**, **JavaScript**
    - <u>Procedural</u>: **C**, **C++**, **Python**, **PHP**
- <u>**Declarative**</u>
    - **SQL**, **Regex**, **config. managment systems (Ansible...)**, **HTML**, **Makefile (hybrid)**
    - <u>Functional</u>: It is a declarative programming paradigm in that programming is done with expressions or declarations instead of statements.
    Most popular programming languages are not specifically designed for functional programming.
    _**Main concepts:** first-class functions, anonymous functions (function literals, lambda abstractions, or lambda expressions) and nested functions, non-local variables and closures, higher-order functions._

    [![functional-prog-langs](assets/functional-prog-langs.png)](https://en.wikipedia.org/wiki/First-class_function#Language_support)

- <u>**Concurrent**</u>
    - **C++:** provide access to the native threading APIs of the operating system (`std::thread`)
    - **Java (using `thread` class or `Runnable` interface):** Java fundamentally uses a shared-memory concurrency model, with locking provided by monitors, to coordinate between threads.
    - **JavaScript :** via web workers, in a browser environment, promises, and callbacks.
    - **Python :** with `Twisted`, `greenlet` and `gevent`, or using `Stackless Python`
- <u>**Event-driven**</u>: **Javascript** ➜ concurrency
- <u>**Reflective**</u>: **Java**, **ECMAScript (➜ javaScript)**, **PHP**, **Python**
- <u>**Source embeddable**</u>: _Server-side:_ **PHP**; _Client-side:_ **JavaScript**.
<br>

## Basic Problems (to be solved progressively): _Web frontend & backend_
- **Things to be explored all along:**
    - Practicing (1) _(This. <u>Learn by doing / as you go</u>: solving problems, working on projects)_ in parallel with learning specifications and concepts (2) _(language basics and specifications , Coding best practices, Git and Semantic versioning, from recommended books and/or comprehensive documentations)_. Processes (1) and (2) should be independent from each other.
    - Implementing some common data structures and algorithms.
    - Debugging
- Basic HTML/CSS/JS. _<u>Application</u>: create a comprehensive dynamic form_
- Query and update a database: _MySQL/MariaDB, PostgreSQL, SQLite_
- Use Regular Expressions.
- Read and write to a text file.
- Parse common text formats: _XML, JSON, CSV, INI, Unix config files, YAML._
- Exception handling.
- Send/Receive HTTP/HTTPS GET/POST Requests/Responses,
- Use a RESTFUL API of an external service.
- Send emails
- Implement authentication methods : _HTTP Basic Authentication, OAuth2_
- Use sessions and cookies.
- Read from/Write to/Generate common binary file formats: _PDF, Zip, Excel, Word._
- Implement concurrency concepts (when applicable): _threads, processes, callbacks..._
- Create a basic RESTful API for a web app.
- _<u>Optional (Advanced)</u>: Client-side storage / Create a PWA: localStorage/Web Storage, IndexedDB, Cache._
    - Make a web app that tolerates intermittent connection to backend / is available for offline use.
- _<u>Optional</u>: Execute external programs._
- Interprocess Communications (IPC) and Data Streams _(no RPC or advanced distributed computing concepts)_:
    - File (access file and file system meta-data)
    - Files (process content, as streams of characters or bytes)
    - Network sockets (TCP)
    - Pipes (named and anonymous)
    - Memory-mapped files
    - Signals
- Cryptography: implement common concepts
    - ~~Classic protocols/programs: SSL/TLS, OpenPGP~~
    - ~~Hash functions~~
    - ~~Key derivation functions~~
    - ~~MAC functions~~
    - ~~Encrypt/Decrypt content, Making salted hashes~~
- Implement other authentication methods : _LDAP (BindDN, simple auth), OpenID Connect, SSO, MFA_
- Use a popular framework: _Spring MVC/Boot (Java), React/Angular (JavaScript, Frontend), Express.js (JavaScript, Backend), Django/Flask (Python), Laravel (PHP), Bootstrap/MDL (CSS)_
- Skills for collaborative developement projects:
    - Run/Deploy, read and modify code written by others.
    - Working with version control systems: _merging code changes in a Git environment_.
    - Agile / Scrum concepts and practices.
    - DevOps concepts and practices.
<br>

## Projects Ideas
- Compare software using Github repositories data through API :
    - Number of stars
    - Size : `(1/repo size) * 100`
    - Average closed issues : `[(nbr closed) / (nbr open)]*(nbr closed)`
    - Average commits per day  : `[(nbr commits) / (nbr days since first commit)] * 100`
    - + Results : _StackOverflow_, _Reddit_, _HackerNews_, _Google_
    - Visualize


## Misc. notes

[Check: `Misc_Notes.md`](Misc_Notes.md) :
- Online resources
- Tools / Components
- Projects & Ideas
- Inspirations
- Contributions
- Programming languages (Frameworks, libraries and tools)

## References

- [Java IO Tutorial](http://tutorials.jenkov.com/java-io/index.html)
