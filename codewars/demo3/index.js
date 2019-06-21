const nums1 = ['c','a','z','y'];
const nums2 = [1,10,2,28];

console.log(nums1.sort());
console.log(nums2.sort(function(a,b){
    return a-b;
    // console.log(a,b,'------');
}));