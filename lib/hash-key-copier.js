(function( ng ) {
	"use strict";

	// We're going to package this as its own module. Not sure how else to distribute
	// an AngularJS class since it depends on an actual application name at the code-
	// time of the class definition.
	var module = ng.module( "hashKeyCopier", [] );

	// Define the injectable. We're using "value" because the result is a construtor,
	// NOT the result of a constructor instantiation. 
	module.value( "HashKeyCopier", HashKeyCopier );

	// I am the constructor.
	function HashKeyCopier( source, destination ) {

		// ---
		// INITIALIZATION.
		// ---


		// ---
		// PUBLIC METDHODS.
		// ---


		function copyHashKeys() {
			// ...
		}


		// ---
		// PRIVATE METDHODS.
		// ---


		// ---
		// RETURN PUBLIC API.
		// ---


		return({
			copyHashKeys: copyHashKeys
		});

	}

	// I provide a "static" method that encapsulates the proper instantation and 
	// execution of the copy operation.
	HashKeyCopier.copyHashKeys = function( source, destination ) {

		var copier = new HashKeyCopier( source, destination );

		copier.copyHashKeys();

		return( destination );

	};

})( angular );