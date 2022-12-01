import { isObject } from "./type";

// 深度合并两个对象
export const deepMergeObject = function (obj1: any, obj2: any) {
  for (let key in obj2) {
    if (isObject(obj1[key])) {
      obj1[key] = deepMergeObject(obj1[key], obj2[key])
    } else {
      obj1 = { ...obj1, ...obj2 }
    }
  }
  return obj1;
};
