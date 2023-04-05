#TODO
design

sidebar toggle logic  
(reusable toggle?)

read on:

- functions (different kinds and their particularities, object functions, constructor functions, instances)
- function parameters
- DOM objects

##IDEA and question on "open", "close " text:  
for reusability shall I create a small function that changes between 2 strings? Bu tthen the 2 strings must be either 2 more parameters in the toggle function, or an array...
Any smarter way?

##Current problems:

1. open and close text is hardcoded
2. tried to rewrite the code using classes and objects and failed to recognize dom element  
   (example: const toggle = query.selector(className) inside class instance returns null even though  
   the class is recognized with no problem)
