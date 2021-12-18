// alert("Chào mừng bạn đến với Hocban.vn !");
// Knowledge round-up
// ví dụ về function map()
var numbers= [1,2,3,4,5];
var doubled  = numbers.map(n => n * 2);
console.log(doubled);  // [2,4,6,8,10]
// ví dụ về function filter()
var numbers = [1,2,3,4,5];
var greaterThan2 = numbers.filter(n => n > 2);
console.log(greaterThan2); // [3,4,5]
// Ví dụ function reduct()
const numbers1 = [10, 15, 20, 54, 60];
var total = numbers1.reduce(function(total, currentValue) {   
    return total + currentValue;
});
console.log(total); // 195
// Ví dụ function find()
const ages = [3, 10, 28, 20];
function checkAge(age) {
  return age > 20;
}
let age = ages.find(checkAge);
console.log(age); // 28
// ví dụ function some()
const array = [1, 2, 3, 4, 5];
 
// Hàm kiểm tra một phần tử có chia hết cho 2 hay không
const even = (element) => element % 2 === 0;
 
console.log(array.some(even));// output: true
// Vd Thêm phần tử vào cuối mảng push()
let myarray = ["A", "B", "C"];
myarray.push("a");
console.log(myarray); //>[ 'A', 'B', 'C', 'a' ]
// vd thêm phần tử vào vị trí đầu của mảng  unshift()
let myarray1 = ["A", "B", "C"];
myarray1.unshift("a");
console.log(myarray1); //>[ 'a', 'A', 'B', 'C' ]
// Xóa phần tử trong mảng
var ar = [1, 2, 3, 4, 5, 6];    
ar.length = 4; // set length to remove elements
console.log( ar ); // [1, 2, 3, 4]

// ### Playground
// 1 Viết hàm tính tổng nếu 2 số trùng nhau thì tỏng bằng gấp 3 lầnz
function sumTriple (x, y) {
    if (x == y) {
      return 3 * (x + y);
      } 
     else
     {
      return (x + y);
     }
   }
   console.log( sumTriple(5,10));
   console.log( sumTriple(10,10));
// 2. Viết hàm tính độ chênh lệch của số nhập vào vs số 19
function diff_num(n) {
    if (n <= 19) {
      return (19 - n);
      }
    else
      {
       return (n - 19) * 3;
      }
  }
  console.log(diff_num(12));
  console.log(diff_num(19));
  console.log(diff_num(22));