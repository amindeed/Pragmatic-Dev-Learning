# Learn-Dev

## 1. Pragmatic Learning : _“Learn It By Doing It!”_

1. **Basic HTML/CSS/JS Application :** create a comprehensive dynamic form
2. **Query and update a database :** MySQL/MariaDB, PostgreSQL, SQLite
3. **Use Regular Expressions To Filter/Extract Substrings**
4. **Use Exception Handling**
5. **Send/Receive `HTTP/HTTPS` `GET/POST` Requests/Responses**
6. **Use a RESTFUL API of a third-party service, preferably through an official SDK/Library or a popular wrapper**
7. **Send emails**
8. **Use Classic Web Authentication Methods :** `HTTP Basic Authentication, OAuth2`
9. **Use sessions and cookies to authenticate users; Implement a custom authentication mechanism**
10. **Implement concurrency concepts (when applicable) :** `threads, processes, callbacks...`
11. **Create a basic RESTful API for a created web app/service**
12. **[Optional] Take advantage of client-side storage / Make a PWA :** `localStorage/Web Storage, IndexedDB, Cache`
13. **Interprocess Communications (IPC) and Data Streams (no RPC or advanced distributed computing concepts) :**
	- <u>Files</u>
		- Parse common text and data serialization formats : `HTML, XML, JSON, CSV, INI, Unix config files, YAML`
		- Process Common binary formats : `PDF, Zip, Excel, Word`
	- <u>File</u> (access file and file system meta-data)
	- <u>Network sockets (TCP)</u> : Client-Server Model
	- <u>Pipes</u> (named and anonymous)
	- <u>Shared Memory</u>
	- <u>Signals</u>
	- <u>Execute external programs / System commands</u>
14. **Inputs Sanitization and Spambots Prevention for Forms :**
	- Exclusive/Forced use of HTTPS
	- Sanitizing and validating input data
	- Checking HTTP headers (User Agent, HTTP referer…)
	- Hidden fields, CAPTCHA
	- Forms with email address fields : _Double Opt-in, check DNS blacklist status and MX records..._
15. **Using other methods/protocols to communicate to/between remote services :**
	- `gRPC, JSON-RPC, SOAP, XML-RPC`
	- [Optional] Message Broking/Queuing (clients) : `MQTT, AMQP`
16. **Use other authentication methods :** `LDAP (BindDN, simple auth), MFA, OpenID Connect, SSO`
17. **Use Popular Lossless Data Compression Algorithms :** `Deflate[64], BZip2, LZMA[2], Brotli, Zstandard`
18. **Cryptography : Implement Common Concepts Either Natively or Using Libraries :**
	- **_Symmetric :_**
		- <u>Block ciphers</u>
			- `AES/Rijindael, Twofish, Blowfish, 3DES`
			- Common Modes Of Operation : `CBC, CTR`
		- <u>Cryptographic Hash functions (Unkeyed) :</u> `SHA-2 (SHA-256, SHA-512), RIPEMD-160, MD5`
		- <u>Key derivation functions</u>
			- Password Hashing / Key Stretching Algorithms : `Argon2, scrypt, bcrypt, PBKDF2`
		- <u>Message authentication codes (MACs)</u> (Symmetric Authentication)
			- Keyed hash function based
				- `HMAC, SipHash`
				- Universal hash based : `ChaCha20-Poly1305, Poly1305-AES, UMAC`
			- Block cipher based : `OMAC/CMAC, PMAC`
		- <u>Stream ciphers</u>
			- Common ciphers : `RC4, block ciphers in stream mode, ChaCha[20]`
			- eSTREAM Portfolio (Software) : `HC-128/-256, Rabbit, Salsa20/12, SOSEMANUK`
	- **_Public-key :_**
		- <u>Major Asymmetric Algorithms</u>
			- Integer factorization : `RSA`
			- Discrete logarithm : `DSA, ElGamal, ECC (ECDH)`
		- <u>Digital Signature</u> (Asymmetric Authentication) : `DSA, ECC (ECDSA, EdDSA), ElGamal Signature Scheme, RSA-based signature schemes`
	- **_Popular Protocols/Programs :_** `SSL/TLS, OpenPGP, SSH`
- **∞. Advanced :**
    - Learn about topics that will potentially shape the future of software and computing, and practice as much as you can :
    	- Data Science
    	- Machine Learning
    	- IoT
    	- Artificial Intelligence (AI)
    	- Quantum Computing
    	- Blockchain

## 2. _“Learn As You Go!”_
### 2.1. Languages Basics and Specifications
#### 2.2. Understanding Common Programming Paradigms

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



### 3.2. Implementing common algorithms, along with data structures and serialization
### 3.3. Debugging and Profiling
## 4. Design
### 4.1. Common Software Design Patterns
- **MVC**
### 4.2. Database Design
## 5. Best Practices
### 5.1. Coding Conventions
### 5.2. Collaborative Development Guidelines
### 5.3. Follow The 12-Factor App Methodology


_Refactoring `README.md`_
-----------------------------------------------------------------------
_Old content_



## Languages:
Java, JavaScript, HTML/CSS, Python, PHP, [C/C++]
<br>

## Basic Problems (to be solved progressively): _Web frontend & backend_



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
