
  function findFirstDuplicate(arr) {
      // type your code here
    const arrFilter = [];
   
  
    for (const element of arr) {
      if (arrFilter.includes(value)) {
         
        return element;
      }
       
      arrFilter.unshift(element);
      
    }
  
    return -1;
  }
  


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// 1. arrFilter <- []
// 2. Loop through each element of arr
// 3. Conditional stating  if elements in loop are in arrFilter then return element
// 4. Else if push/add element to arrFilter
// 5. Else return -1 

// And a written explanation of your solution
/* Declared and empty array to called arrFilter. Looped through each element of the passed-in
array. A conditional was used to return one of the looped elements if it was included in arrFilter   
 and if it wasn't then the element was added to arrFilter. So arrFilter essentially grows until 
 a duplicate number is returned. Then outside of the loop there will be instructions to return
 -1 for the additional edge cases */