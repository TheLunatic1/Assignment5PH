Answer the following questions clearly:
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
2. How do you create and insert a new element into the DOM?
3. What is Event Bubbling and how does it work?
4. What is Event Delegation in JavaScript? Why is it useful?
5. What is the difference between preventDefault() and stopPropagation() methods?



1.
getElementById: Retrives a single element useing unique id. Reurns null if no match found. It is fast and specific.
getElementsByClassName: Retrives all elements with the class name.Reurns a live HTMLCollection or an empty collection if no match. Returns multiple elements, and the collection updates automatically if the DOM changes.

querySelector: Retrives the first element that matches a css selector. Returns a single Element object of noll if no match is found. Flexible. Suppurts complex css selector.
querySelectorAll: Retrives all elements that matches a css selector. Non-live(static) list. Supports all aspects of getElementsByClassName but with broader selector.




2.
Use document.createElement(tagName) to creat new wlwment. Then add properties to the element(e.g. element.textContent = 'some text';). Then insert into the DOM by useing append/prepend etc(e.g. document.body.appendChild(newDiv);). 


3.
Event bubbling is the behaviour in the DOM model where an event triggered on a nested element goes upwards through its ancestors to the root if not stopped.
Suppose, if we click on an element of a DOM, if becomes a bubble inside a water body. so it starts to go upwards.but when it goes upwards if maintains to go through its parents path. Then parent's parent path. And so on untill it is stopped or reaches last node.

4.
Event delegation is a process where an event listener is attached to a parent element to handle events triggered by its children.
It is usefull because it reduces the number of event listeners(less memory useage). Works with elements added later.

5.
preventDefault(): (affects the event’s default action not propagation) Prevents the browser's default action for an event allowing the event to continue propagation. E.g. following link. submitting form.

stopPropagation(): (affects the event’s propagation not default action) Stops the event from bubbleing up or capturing down the DOM tree. Prevents the event from triggering listeners on parent elements, but the default action still occurs.


