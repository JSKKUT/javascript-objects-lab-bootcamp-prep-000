function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
    return object
}

function deleteFromObjectByKey(object, key) {
  var newObject = deleteFromObjectByKey(object, key);
    delete object[key] = variable;
      return newObject
}


 describe('deleteFromObjectByKey(object, key)', function() {
    it('deletes `key` from a clone of object and returns the new object (it is non-destructive)', function() {
      var obj = { prop: 1 }
      var newObj = deleteFromObjectByKey(obj, 'prop')


Objects deleteFromObjectByKey(object, key) does not modify the original object (it is non-destructive)



Objects deleteFromObjectByKey(object, key) deletes `key` from a clone of object and returns the new object (it is non-destructive)