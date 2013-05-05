
# HashKeyCopier - An AngularJS Utility

by [Ben Nadel][1]

The HashKeyCopier is a utility class for use in AngularJS applications. It is 
designed to copy the proprietary $$hashKey from one rendered object to another
as a means to cut down on the amount of DOM rendering and Directive execution
that the AngularJS framework needs to carry out.

This is specifically for use in situations in which locally cached data needs
to be overridden by live data returned from a remote server. When AngularJS 
renders data in the document body, it uses an "expando" property, "$$hashKey,"
to match an existing DOM node with an existing JavaScript object. It uses this
key to know when it needs to re-build a DOM node; or, when it simply needs to 
update the content of an existing DOM node.


[1]: http://www.bennadel.com