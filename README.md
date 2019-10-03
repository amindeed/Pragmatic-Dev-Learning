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

## Basic Problems: _Web frontend & backend_
- **Things to be explored all along:**
    - Practicing (1) _(<u>learn by doing / as you go</u>: solving problems, working on projects)_ in parallel with learning specifications and concepts (2) _(language basics and specifications, Coding best practices, Git and Semantic versioning, from recommended books and/or comprehensive documentations)_. Processes (1) and (2) should be independent from each other.
    - Implementing some common data structures and algorithms.
    - Debugging
- Basic HTML/CSS/JS. _<u>Application</u>: create a comprehensive dynamic form_
- Query and update a database: _MySQL/MariaDB, PostgreSQL, SQLite_
- Use Regular Expressions.
- Read and write to text files.
- Parse common text formats: _XML, JSON, CSV, INI, unix config files._
- Exception handling.
- Send/Receive HTTP/HTTPS GET/POST requests/responses,
- Use a RESTFUL API of an external service.
- Send emails
- Implement authentication methods : _HTTP Basic Authentication, OAuth2_
- Use sessions and cookies.
- Create a basic RESTful API for a web app.
- Read from/Write to/Generate common binary file formats: _PDF, Zip, Excel, Word._
- Implement concurrency (when applicable): _threads, processes, callbacks..._
- _<u>Optional (Advanced)</u>: Client-side storage: localStorage/Web Storage, IndexedDB, Cache._
- _<u>Optional</u>: Execute external programs._
- Interprocess Communications (IPC) and Data Streams _(no RPC or advanced distributed computing concepts)_:
    - File (access file and file system meta-data)
    - Files (process content, as streams of characters or bytes)
    - Network sockets (TCP)
    - Pipes (named and anonymous)
    - Memory-mapped file
    - Signals
- Cryptography: implement common concepts
    - Classic protocols/programs: SSL/TLS, OpenPGP
    - Hash functions
    - Key derivation functions
    - MAC functions
    - Encrypt/Decrypt content, Making salted hashes
- Implement other authentication methods : _LDAP (BindDN vs simple auth), [SAML] SSO, MFA_
- Use a popular framework: _Spring MVC/Boot (Java), React (JavaScript, Frontend), Express.js (JavaScript, Backend), Django (Python), Laravel (PHP), Bootstrap/MDL (CSS)_
- Skills for collaborative developement projects:
    - Run, read and modify code written by others.
    - Working with version control systems: _merging code changes in a Git environment_.
<br>


## Misc. notes

- Things to consider when choosing a programming language for web backend
    - Fast time-to-market
    - Good performance and reliability for heavy-task and mission-critical use cases
    - Stability
    - Being popular, availability of resources (help, forums..)
    - Implementation of modern concepts and trends
<br>

- **Levels of learning :**
	- **Level 1: _Technology Concepts & Programming languages_**
	- **Level 2: _Frameworks, Tools & Implementations_**
	- **Level 3: _Standards & Project Management_**
<br>

- **Online resources**
    - Breaking into a software engineering career
        - [kdn251/interviews: Everything you need to know to get the job.](https://github.com/kdn251/interviews)
        - [10 Interview Questions Every JavaScript Developer Should Know](https://medium.com/javascript-scene/10-interview-questions-every-javascript-developer-should-know-6fa6bdf5ad95)
        - [JavaScript Training Sucks – JavaScript Scene – Medium](https://medium.com/javascript-scene/javascript-training-sucks-284b53666245)
    - Algorithms & Data structures
        - [The Algorithms](https://github.com/TheAlgorithms)
        - [karan/Projects: A list of practical projects that anyone can solve in any programming language.](https://github.com/karan/Projects)
        - [jwasham/coding-interview-university: A complete computer science study plan to become a software engineer.](https://github.com/jwasham/coding-interview-university)
    - Check more: https://github.com/amindeed?tab=stars&utf8=%E2%9C%93&utf8=%E2%9C%93&q=&q=interview


-------------------------------------------


- Tools / Components
    - OTP
        - [GitHub - RobThree/TwoFactorAuth](https://github.com/RobThree/TwoFactorAuth)
        - [GitHub - multiOTP/multiotp](https://github.com/multiOTP/multiotp)
        - [GitHub - Spomky-Labs/otphp](https://github.com/Spomky-Labs/otphp)
    - User Authentication
        - [GitHub - bitly/oauth2_proxy](https://github.com/bitly/oauth2_proxy)
        - [GitHub - teesloane/Auth-Boss](https://github.com/teesloane/Auth-Boss)
        - [GitHub - opauth/opauth](https://github.com/opauth/opauth)
        - [GitHub - panique/huge](https://github.com/panique/huge#live-demo)
    - [AlDanial/cloc](https://github.com/AlDanial/cloc)
        - Example 1: 'cloc TaskBoard --exclude-dir=lib,vendor'
        - Example 2: 'cloc.exe "iTop-2.4.1-3714_SourceCodeFolder"'
    - [sj26/mailcatcher: Catches mail and serves it through a dream.](https://github.com/sj26/mailcatcher)
    - [mailcheck/mailcheck](https://github.com/mailcheck/mailcheck)
    - [djfarrelly/MailDev: SMTP Server + Web Interface for viewing and testing emails during development.](https://github.com/djfarrelly/MailDev)
    - [zurb/foundation-emails](https://github.com/zurb/foundation-emails)
    - [mailchimp/email-blueprints](https://github.com/mailchimp/email-blueprints)
    - [niftylettuce/gulp-aws-splash](https://github.com/niftylettuce/gulp-aws-splash)
    - [mailcheck/mailcheck](https://github.com/mailcheck/mailcheck)
    - [buaazp/zimg](https://github.com/buaazp/zimg)
    - [Launch4j Executable Wrapper](https://sourceforge.net/projects/launch4j/)
    - Serverless & Storage Abstraction technologies (Distributed Computing)
        - [CloudBoost/cloudboost: One Complete Serverless Platform for the next web. Add Storage, Real time, Search, Notifications, Auth and more with one simple API.](https://github.com/CloudBoost/cloudboost)
    - File system Abstraction
        - [thephpleague/flysystem (PHP): S3 supported](https://github.com/thephpleague/flysystem)
    - [remoteStorage ‒ An open protocol for per-user storage on the Web](https://remotestorage.io/)
    - Real world examples / Inspiration / References
        - Testing
            - [zendesk/cross-storage: Cross domain local storage, with permissions](https://github.com/zendesk/cross-storage#tests)
        - Deploy to Google Cloud
            - [Camlistore on Google Cloud](https://camlistore.org/launch/)
        - [dwyl/learn-to-send-email-via-google-script-html-no-server](https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server)
        - Java
            - [hash.to - url shortener](http://hash.to/index.jsp)
                - Technologies: Java, Hibernate, Struts2, Urlrewrite, MySQL
- Projects & Ideas
    - Inspirations
        - Yahoo! Pipes-like
            - Terminology
                - Flowchart
                - draw flowchart graphs
                - Flow-Based Programming Paradigm
                - "visually connect elements" (https://github.com/jsplumb/jsPlumb)
                - "[..] where data flow is more prominent than control flow"
                - Other (but near) concepts
                    - Reflux: uni-directional dataflow application architecture
                    - Yahoo! Pipes: "a graphical user interface for building data mashups that aggregate web feeds, web pages, and other services, creating Web-based apps from various sources, and publishing those apps."
            - Node RED, uses:
                - https://github.com/chjj/marked
                - https://github.com/i18next/i18next
                - https://github.com/d3/d3
                - https://github.com/ajaxorg/ace
        - Project: Dynamic DNS using CloudFlare, Parallel or cPanel APIs
            - [lyoshenka/cloudflare-ddns: Simple, free dynamic DNS via Cloudflare](https://github.com/lyoshenka/cloudflare-ddns)
                - Extend to use Parallel or cPanel
        - [Raspberry Pi SMS to email gateway - Part 1 - AndyPi](https://andypi.co.uk/2017/05/06/raspberry-pi-sms-to-email-gateway-part-1/)
        - [EmailThis/extension-boilerplate: ⚡️ A template for building cross browser extensions for Chrome, Opera & Firefox.](https://github.com/EmailThis/extension-boilerplate)
        - Dec 1, 2017: "I have implemented imaging of machines [...] I set up a Clonezilla server and have brought that task [of manually installing all software and setting all settings on each machine] for a day long to ten minutes."
        - Dec 8, 2016: "We're a linux-mostly environment and CZ has been absolutely great for our IT staff in standardizing our desktop images. We use USB images that starts the cloning process automagically on boot. We've had mixed results using CZ over the network for cloning (PXE boot)."
        - Dec 1, 2017: "script to set up new users completely (Set group memberships, create mailbox in exchange, set logonscript, create HomeDirectory with correct permissions, etc)"
        - Dec 1, 2017: "To set up our backups on redundant storage across two of our buildings in two different cities. The idea was to create a DRBD Cluster with linux for the storage (Basically a RAID 1 over two servers over the network)."
    - Contributions
        - [chitsaou/copy-as-markdown](https://github.com/chitsaou/copy-as-markdown)
            - Add option to copy shortened URL
    - {FF Readability + Pandoc} as an archiving, content rendering, doc converting microservice/serverless app.
    - QR-code scanning with smartphone as typing method on PC (Windows). You wouldn't have to remember long (secure) passwords you've always been recommended to use.
        - Android Share widget -> Scan QR code on PC -> smart (i.e. URLs are automatically opened) retrieve of shared data on PC
    - Basic JavaFX GUI app to archive / compress (lz4) / dedup / encrypt data.
        - [GitHub - jfoenixadmin/JFoenix: JavaFX Material Design Library](https://github.com/jfoenixadmin/JFoenix)
        - [GitHub - shipilev/dedup-estimator: FS Deduplication/Compression Offline Estimator](https://github.com/shipilev/dedup-estimator)
        - [GitHub - larsga/Duke: Duke is a fast and flexible deduplication engine written in Java](https://github.com/larsga/Duke)
        - [GitHub - lz4/lz4-java: LZ4 compression for Java](https://github.com/lz4/lz4-java)
    - Packaged program to convert URL to PDF/DOC
        - [GitHub - aarmea/readability-scrape: Retrieve simplified versions of webpages, powered by Mozilla's Readability.js](https://github.com/aarmea/readability-scrape)
        - [GitHub - brynedwards/readability-wrapper: Command-line wrapper for Mozilla Readability.js](https://github.com/brynedwards/readability-wrapper)
        - [GitHub - zeit/pkg: Package your Node.js project into an executable](https://github.com/zeit/pkg)
        - [GitHub - jgm/pandoc: Universal markup converter](https://github.com/jgm/pandoc)
        - [GitHub - dlwyatt/WinFormsExampleUpdates: Updates to make TechNet PowerShell Windows Forms examples compatible with PowerShell 3.0 and later](https://github.com/dlwyatt/WinFormsExampleUpdates)
    - Push notifications server + meta android App + meta browsers extensions/apps
    - Asterisk, VoIP & UC
        - [Activa for Asterisk](http://activa.sourceforge.net/)
        - [OpalVOIP](https://sourceforge.net/projects/opalvoip/)
    - "Belarc Advisor"
    - Your own NTP server: RBPi + 3G USB modem supporting SMS send/receive + get local time through NITZ
        - [gsm - What AT command should be sent to modem to get time? - Electrical Engineering Stack Exchange](https://electronics.stackexchange.com/questions/82090/what-at-command-should-be-sent-to-modem-to-get-time)
        - [how get GSM network time - Google Search](https://goo.gl/8FBkwM)
    - Port Chrome extensions to Firefox
        - Reverse-engineer Chrome extensions
            - [Prayer Times - Chrome Web Store](http://j.mp/2HcZIRd)
            - [Anything to QRcode - Chrome Web Store](http://j.mp/2HfkdwL)
            - [History Trends Unlimited - Chrome Web Store](http://bit.ly/2CnfkxY)
    - Remote Clip Board: Android Client, Firefox/Chrome extensions, Windows Desktop Clients, Java EE/Spring backend.
    - File sharer over WebTorrent (start as a wrapper of file.pizza) --> ProductHunt
    - Have a git server to manage all my dev projects. Clone, dev, commit and pull everywhere.
        - GitLab
            ---- Work Mode ----
            - Start a project privatly on a Self-hosted Gitlab server, then publish on GitHub
            - Handling large files with Git LFS: [GitLab Git LFS Administration](https://docs.gitlab.com/ce/workflow/lfs/lfs_administration.html)
        - Github project pages inspirations
            - [LappleApple/feedmereadmes](https://github.com/LappleApple/feedmereadmes)
            - [minimaxir/facebook-page-post-scraper](https://github.com/minimaxir/facebook-page-post-scraper)
    - Sync Chrome Bookmarks
        - Chrome: Bookmarks.json, history.sqlite3, favicons.sqlite3
        - Firefox: places.sqlite, favicons.sqlite
        - Mapping Attributes/columns between FireFox Bookmarks and Chrome's
        - Store to Online Cloud Storage Provider. Auth to retrieve bookmarks.
        - Chrome/FF Extensions
        - Tools
            - Synchrome, using [Kinto/kinto: A generic JSON document store with sharing and synchronisation capabilities.](https://github.com/Kinto/kinto)
    - Search for top (sort by number of stars) projects repositories containing a search term in their source code.
    - Windows Shell command (right-click context menu) to convert *.md to *.mm
        - [pzhaonet/mindr: an R package which converts (.md, .Rmd) into mindmaps (.mm) (brainstorms)](https://github.com/pzhaonet/mindr)
    - Google Apps Script: Read/Write JSON files from/to Google Drive
        - (Class File  |  Apps Script  |  Google Developers)[http://j.mp/2Cm33KF]
            - getBlob(), getAs(contentType), setContent(content), getSize()
        - [javascript - File API - Blob to JSON - Stack Overflow](https://stackoverflow.com/a/46040402/3208373)
    - HackerNewsFeed
        - Social media (medium) like feed
        - Video category for all videos of channels that have ever been posted on HN
- Programming languages (Frameworks, libraries and tools)
    - General opinions & testimonials
        - Top languages (2017/2018): Java, JavaScript, Python, C++, C#, C, PHP, [..], Ruby, Go
        - Top back-end languages: Java (EE, Spring), PHP (Symfony, Wordpress, Laravel), SQL, Python, Javascript (Node.JS), C++, [Go]
        - Top client-side languages: HTML/CSS, JS (vanilla, jQuery, AngularJS, ReactJS), Java (Console, Android, JavaFX), C++ (QT, wxWidget, WTL, ATL/MFC, WinAPI), [C, [Go]]
        - Top scripting languages: Bash, PowerShell, Win CMD, Python (Linux), [VBScript].
        - JavaScript and Python appear unable to support natively multithreaded execution. (Spawning new processes does not count.)
    - Java
        - Java Certification
            - Exams / Certifications
                - Java SE 8 Programmer I 1Z0-808 (150 min, 70 Q, 65%) ➜ Oracle Certified Associate, Java SE 8 Programmer: http://j.mp/2uGoSDh
                - Java SE 8 Programmer II 1Z0-809 (150 min, 85 Q, 65%) ➜ Oracle Certified Professional, Java SE 8 Programmer: http://j.mp/2uFbKy8
            - Prep. Books
                - [OCA: Oracle Certified Associate Java SE 8 Programmer I Study Guide: Exam 1Z0-808 (432 pages)](http://j.mp/2uMRfQj)
                - [OCP: Oracle Certified Professional Java SE 8 Programmer II Study Guide: Exam 1Z0-809 (720 pages)](http://j.mp/2uFbuza)
                - [OCA / OCP Java SE 8 Programmer Certification Kit: Exam 1Z0-808 and Exam 1Z0-809 (1152 pages)](http://j.mp/2uE79wi)
        - Books
            - [Intro to Java Programming, Comprehensive Version (10th Edition)](https://www.amazon.com/Intro-Java-Programming-Comprehensive-Version/dp/0133761312/ref=sr_1_16?s=books&ie=UTF8&qid=1518730523&sr=1-16&keywords=java)
            - [Introduction to Java Programming: Brief Version, 10th Edition](https://www.amazon.com/Introduction-Java-Programming-Brief-Version/dp/0133592200/ref=sr_1_17?s=books&ie=UTF8&qid=1518730523&sr=1-17&keywords=java)
            - [Spring in Action: Covers Spring 4](https://www.amazon.com/Spring-Action-Covers-4/dp/161729120X/ref=sr_1_46?s=books&ie=UTF8&qid=1518728927&sr=1-46&keywords=spring)
            - [Spring Recipes: A Problem-Solution Approach](https://www.amazon.com/Spring-Recipes-Problem-Solution-Marten-Deinum/dp/1430259086/ref=sr_1_58?s=books&ie=UTF8&qid=1518728945&sr=1-58&keywords=spring)
        - Popular/featured frameworks (as of 2017-2018)
            - Oracle's
                - JAX-RS (Java EE)
                    - Jersey (shipped with GlassFish and Payara)
                    - RESTEasy (shipped with JBoss EAP and WildFly)
            - Spring's implementations
                - [Getting Started · Building a RESTful Web Service](https://spring.io/guides/gs/rest-service/)
                - [spring-boot-starter-jersey](http://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-developing-web-applications.html#boot-features-jersey)
            - Spring (Spring MVC, Spring Boot, Spring Integration, Spring Security and others)
            - Java EE (JSF, JAX-RS, CDI, JPA, etc)
            - GWT, Vaadin
            - Play (via a plugin)
            - Thymeleaf, Freemarker, Velocity, Tapestry
            - Struts, AspectJ, JBoss Seam, OSGI
            - JVM/Client-side: Swing, JavaFX
            - Android
        - [javaee/tutorial: The Java EE Tutorial](https://github.com/javaee/tutorial)
        - [javaee-samples/javaee7-samples](https://github.com/javaee-samples/javaee7-samples)
        - Android
            - [android10/Android-CleanArchitecture](https://github.com/android10/Android-CleanArchitecture)
            - [JackyAndroid / AndroidInterview-Q-A ](https://github.com/JackyAndroid/AndroidInterview-Q-A)
    - JavaScript
        - "JavaScript and Python appear unable to support natively multithreaded execution. (Spawning new processes does not count.)"
    - Python
        - Popular/featured frameworks (as of 2017-2018): Django, Flask, Pyramid
        - "JavaScript and Python appear unable to support natively multithreaded execution. (Spawning new processes does not count.)"
    - PHP
        - [defuse/php-encryption: Simple Encryption in PHP.](https://github.com/defuse/php-encryption)
    - C++
        - [Boost C++ Libraries](http://www.boost.org/)
        - [Windows Template Library (WTL)](https://sourceforge.net/projects/wtl/?source=directory)
        - [CppCMS — High Performance C++ Web Framework](http://cppcms.com/wikipp/en/page/main)
