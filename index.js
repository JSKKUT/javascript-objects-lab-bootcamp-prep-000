function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
    return object
}

function deleteFromObjectByKey(object, key) {
  var newObject = deleteFromObjectByKey(object, key);
    delete object[key];
      return newObject
}


