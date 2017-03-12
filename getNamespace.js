let getNamespace = function(path, parentObject) {
	let parts = path.split('.');
	let partIndex;
	let part;
	let currentScope;

	currentScope = typeof parentObject === 'undefined' ? window : parentObject;

	for (partIndex = 0; part = parts[partIndex]; partIndex++){

		if (!currentScope[part]){
			currentScope[part] = {};
		}
		currentScope = currentScope[part];
	}

	return currentScope;
};

getNamespace('com.senfino').getNamespace = getNamespace;