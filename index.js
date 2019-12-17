function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
    return object
}

function deleteFromObjectByKey(object, key) {
  
}


Objects deleteFromObjectByKey(object, key) deletes `key` from a clone of object and returns the new object (it is non-destructive)
Objects deleteFromObjectByKey(object, key) does not modify the original object (it is non-destructive)