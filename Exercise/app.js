const filterOutOdds = (...nums) => nums.filter(num => num%2 ===0);
const findMin = (...nums) => Math.min(...nums);
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});
const doubleAndReturnArgs = (arr,...nums) => [...arr, ...nums.map(num => num*2)];

const removeRandom = items => {
    const random = Math.floor(Math.random()*items.length)
    return [...items.slice(0, random), ...items.slice(random + 1)];
}
const extend = (arr1,arr2) => [...arr1,...arr2];

const addKeyVal = (obj,key,val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}
const removeKey = (obj,key) => {
    let newObj = {...obj};
    delete newObj[key]
    return newObj;
}

const combine = (obj1,obj2) => ({...obj1,...obj2});

const update = (obj,key,val) => {
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
}