
HashKeyCopier - An AngularJS Utility
====================================

Taken from Ben Nadel's original README:

>The HashKeyCopier is a utility class for use in AngularJS applications. It is designed to copy the proprietary $$hashKey from one rendered object to another as a means to cut down on the amount of DOM rendering and Directive execution that the AngularJS framework needs to carry out.

(See below for full note)

I forked Ben's [original repository](https://github.com/bennadel/HashKeyCopier) and sent a [pull request](https://github.com/bennadel/HashKeyCopier/pull/3) to him for publishing to bower, but after not receiving a response for a few months I decided to publish it myself (sorry ben).

Install with Bower
------------------
    bower install angular-hashkey-copier

Usage
-----
Make sure to require it in your main app module:

```JavaScript
var app = angular.module( "ExampleApp", [ "andyperlitch.HashKeyCopier" ] );
```

Then, when updating a collection, do the following:

```JavaScript
$scope.myCollection = HashKeyCopier.copyHashKeys( $scope.myCollection, updates );
```

This assumes that the attribute `id` should be used as the identifying attribute of a collection member. If this is not the case, a third argument may be provided, like so:

```JavaScript
$scope.myCollection = HashKeyCopier.copyHashKeys( $scope.myCollection, updates, ['myIdAttribute'] );
```
It is an array because you can specify multiple keys to be identifying attributes. **NOTE:** it is not a way to specify __composite__ keys, only multiple attributes. Perhaps if demand is high, I may change the implementation so that providing multiple keys implies creating composite keys.

Original README Note from Ben Nadel
----------------------------
by [Ben Nadel][1]

>The HashKeyCopier is a utility class for use in AngularJS applications. It is 
>designed to copy the proprietary $$hashKey from one rendered object to another
>as a means to cut down on the amount of DOM rendering and Directive execution
>that the AngularJS framework needs to carry out.

>This is specifically for use in situations in which locally cached data needs
>to be overridden by live data returned from a remote server. When AngularJS 
>renders data in the document body, it uses an "expando" property, "$$hashKey,"
>to match an existing DOM node with an existing JavaScript object. It uses this
>key to know when it needs to re-build a DOM node; or, when it simply needs to 
>update the content of an existing DOM node.

>NOTE: I packaged this as its own module. I did this because I am not sure what
>the best practices are for distributing AngularJS classes. So, I went with a 
>module that has only one injectable. More likely, I would just copy the one 
>definition into my own app and rename it (as necessary).






[1]: http://www.bennadel.com