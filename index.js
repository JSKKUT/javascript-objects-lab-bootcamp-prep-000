function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign
}




Objects updateObjectWithKeyAndValue(object, key, value) does not modify the original object, but rather returns a clone 
with the new data:





function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
    return object
}
Objects updateObjectWithKeyAndValue(object, key, value) returns an object with the orignal key value pairs 
and the new key value pair:
Objects updateObjectWithKeyAndValue(object, key, value) returns an object with an updated key value pair: