# What is Emmet?
     
     Emmet is a tool that helps to speed up the process of writing HTML and CSS code. It is a plugin for text editors that provides 
        a set of abbreviations that can be expanded into full HTML or CSS code.
     Emmet abbreviations use a shorthand syntax that allows you to write code 
        quickly and efficiently. You can use Emmet to create complex HTML or CSS 
        structures with just a few keystrokes which can save you a lot of time when building websites.

     Emmet is available as a plugin for many popular text editors, including 
        Sublime Text, Visual Studio Code, and Atom. It is also built into some
        web development tools, such as the Live Edit feature in Google Chrome.
---

 # Difference between a Library and Framework?
     
    A library is a collection of code that provides a specific set of functions 
        or services that can be used by a program to perform certain tasks. 
        A library is typically designed to be flexible and reusable,
        meaning that it can be used in a variety of different programs and contexts.
     A framework is a set of libraries and tools that provides a structure for 
        building an application. A framework defines the architecture of an 
        application and provides a set of conventions and components that you can 
        use to build your application. Instead of writing all the code yourself,
        you use the components and conventions provided by the framework to build
        your application.

     In summary, a library is a collection of tools that you can use to solve 
       specific problems,
       while a framework is a structure that you can use to build an application.
       
      Example:
           In Python, NumPy is a library that provides functions for performing numerical operations,
           such as linear algebra and statistical analysis. Django is a web framework that provides 
           a structure for building web applications in Python.

           In Java, the Java Standard Library is a collection of libraries that provides a wide 
           range of functions, including input/output, networking, and data structures. 
           The Spring framework is a popular Java framework for building enterprise applications.

           In JavaScript, the React library is a popular library for building user interfaces,
           and the Angular framework is a popular framework for building web applications.

           In C++, the Boost library is a collection of libraries that provide a wide range 
           of functions, including data structures, algorithms, and utility functions.
           
 --- 
 
  # What is CDN? Why do we use it?
           
           Content Delivery Network (CDN) is a distributed network of servers that are used to deliver web content to users based on their
                geographic location. CDNs are used to improve the performance and availability of websites by reducing the distance between the 
                website's server and the user's device.

           CDNs work by caching the static content of a website (such as images, CSS files, and JavaScript files) on a network of servers
               located in strategic locations around the world. When a user requests a webpage from a website, the CDN sends the static content 
               from the nearest server to the user's device, rather than from the origin server. This reduces the time it takes to load the webpage,
               because the static content is delivered from a server that is closer to the user.
           
          There are several reasons why CDNs are used:

          Improved performance: CDNs improve the performance of websites by reducing the distance between the server and the user, which reduces the time it
                takes to load a webpage.

          Improved availability: CDNs can help improve the availability of a website by distributing the load across multiple servers and providing backup 
               servers in case of a failure.

          Reduced bandwidth costs: CDNs can help reduce bandwidth costs for website owners by offloading static content to the CDN's servers, rather than 
              serving it from the origin server.

           Improved security: CDNs can provide added security by blocking malicious traffic and protecting against DDoS attacks.

---

# Why is React known as React?
          React is a JavaScript library for building user interfaces that was developed by Facebook. It is known as React because it was designed to "react" 
            to changes in the state of an application.
         The concept of "reacting" to changes in state is central to the design of React, and it is the reason why the library is named React.

---

# What is crossorigin in script tag?
         The crossorigin attribute in a script tag is used to specify the CORS policy for a script that is being loaded from an external source. 
             CORS (Cross-Origin Resource Sharing) is a security feature that prevents web pages from making requests to a different domain than the 
             one that served the page.

         In the context of React, the crossorigin attribute is used to specify whether the script should be loaded with a CORS policy that allows it 
             to be used in a cross-origin manner (i.e., from a different domain than the one that served the page).
         Without the crossorigin attribute, the browser might block the script from being loaded or used by a page that is served from a different domain.
            This is because the default CORS policy for scripts is "same-origin", which means that the script can only be used by pages that are served 
            from the same domain as the script.
 
 ---
 
 # Difference between React and ReactDOM?
        React is a JavaScript library for building user interfaces. It is primarily used for building single-page applications (SPAs) and mobile            
             applications, and it allows developers to create reusable UI components.

       ReactDOM is a separate library that is used to render React components on the DOM (Document Object Model). It provides a way to take a React componen 
             and place it in the DOM, which is the structure of objects that represents the HTML document as a tree.

       In general, React is used to build the structure and logic of a user interface, while ReactDOM is used to render that interface in the browser. The
            are both part of the React ecosystem, but they serve different purposes.    
 ---
 
 # Difference between react.development.js and react.production.js files via CDN
      React is a JavaScript library for building user interfaces, and it is available as a package on npm (the package manager for JavaScript). There are two 
          versions of the React package that are typically used in web development: development and production.
     The development version of React (react.development.js) is optimized for debugging and includes helpful error messages and additional warning checks. It 
          is intended to be used during the development and testing of an application.
     The production version of React (react.production.js) is optimized for performance and is minified, which means that it has been compressed to reduce   
          its file size. It is intended to be used in the final, deployed version of an application.
     Both versions of React can be included in an HTML document using a CDN (Content Delivery Network), which is a network of servers that deliver web       
          content to users based on their geographic location. To include React in an HTML document using a CDN, you can use a script tag with the URL of the 
          React library, like this:
    <script src="https://unpkg.com/react@16.13.1/umd/react.development.js"></script>
    <script src="https://unpkg.com/react@16.13.1/umd/react.production.min.js"></script>
    It's generally recommended to use the production version of React in a deployed application, because it is faster and smaller than the development    
         version. However, during development and testing, it can be helpful to use the development version to get more detailed error messages and warning 
         checks.
     
    ---
    
    # What is async and defer? 
        async and defer are attributes that can be used in the script tag of an HTML document to specify how a script should be loaded and executed.

       The async attribute tells the browser to start downloading the script as soon as possible, but to execute it only after the HTML parser has finished 
             parsing the document. This means that the script will be executed as soon as it has finished downloading, but it may interrupt the parsing of                the HTML  document.

       The defer attribute tells the browser to start downloading the script as soon as possible, but to execute it only after the HTML parser has finished 
             parsing the document and all other deferred scripts have finished executing. This means that the script will be executed in the order in which 
             it appears in the HTML document, after all other content has been parsed and displayed.

       Both async and defer can be used to improve the performance of an HTML document by allowing the browser to load and execute scripts in the background 
             while the HTML parser continues to work. However, defer is generally considered to be more reliable because it ensures that scripts are executed 
             in the order in which they appear in the HTML document, while async does not guarantee this.

  ---  


    
