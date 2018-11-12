var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  var obj = { prop: 1 };
  obj.prop2 = 2;
  return obj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  const obj = { prop: 1 };
  (obj, 'prop2', 2)
  return obj;
}
