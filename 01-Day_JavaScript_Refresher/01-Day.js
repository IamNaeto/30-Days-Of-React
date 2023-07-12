/*******************JavaScript Refresher******************** */
/*******
 * Exercise
 ******/

// Exercise: Level 1
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ]

//   Declare an empty array;
let emptyArr = []
console.log(emptyArr)

// Declare an array with more than 5 number of elements
let elementArr = ["Canada", "UK", "US", "Australia", "Germany", "Japan", "Italy"]
console.log(elementArr)

// Find the length of your array
let elementArrLength = elementArr.length
console.log(elementArrLength)

// Get the first item, the middle item and the last item of the array
let firstElement = elementArr[0]
let middleElement = elementArr[4]
let lastElement = elementArr.length-1
console.log("First Element:", firstElement)
console.log("Middle Element:", middleElement)
console.log("Last Element:", elementArr[lastElement])

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [
  "Charles",
  true,
  2024,
  {Country: "Canada", City: "Toronto"},
  {Skills: ["HTML", "CSS", "JavaScript", "React"]}
]
console.log(mixedDataTypes)

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

// Print the array using console.log()
console.log(itCompanies)

// Print the number of companies in the array
let numberOfCompanies = itCompanies.length
console.log(numberOfCompanies)

// Print the first company, middle and last company
let firstCompany = itCompanies[0]
let middleCompany = itCompanies[3]
let lastCompany = itCompanies[itCompanies.length-1]
console.log(firstCompany)
console.log(middleCompany)
console.log(lastCompany)

// Print out each company
let firstCom = itCompanies[0]
let secondCom = itCompanies[1]
let thirdCom = itCompanies[2]
let fourthCom = itCompanies[3]
let fifthCom = itCompanies[4]
let sixthCom = itCompanies[5]
let lastCom = itCompanies[6]

console.log(firstCom)
console.log(secondCom)
console.log(thirdCom)
console.log(fourthCom)
console.log(fifthCom)
console.log(sixthCom)

// Change each company name to uppercase one by one and print them out
console.log(firstCom.toUpperCase())
console.log(secondCom.toUpperCase())
console.log(thirdCom.toUpperCase())
console.log(fourthCom.toUpperCase())
console.log(fifthCom.toUpperCase())
console.log(sixthCom.toUpperCase())

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let arrSentence = `${itCompanies.slice(0, itCompanies.length-1).join(", ")} and ${itCompanies[itCompanies.length-1]} are big IT companies`
console.log(arrSentence)

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
if(itCompanies.includes("Twitter")){
  console.log("Twitter")
}else{
  console.log("The company is not found")
}

// Filter out companies which have more than one 'o' without the filter method
const filteredCompanies = [];

for (let i = 0; i < itCompanies.length; i++) {
  let count = 0;
  const companyName = itCompanies[i];
  
  for (let j = 0; j < companyName.length; j++) {
    if (companyName[j].toLowerCase() === 'o') {
      count++;
    }
    if (count > 1) {
      break;
    }
  }
  
  if (count <= 1) {
    filteredCompanies.push(companyName);
  }
}
console.log(filteredCompanies);

// Sort the array using sort() method
let sortedItCompanies = itCompanies.sort()
console.log(sortedItCompanies)

// Reverse the array using reverse() method
let reversedItCompanies = itCompanies.reverse()
console.log(reversedItCompanies)

// Slice out the first 3 companies from the array
let sliceFirstThree = itCompanies.slice(3)
console.log(sliceFirstThree)

// Slice out the last 3 companies from the array
let sliceLastThree = itCompanies.slice(0, 4)
console.log(sliceLastThree)

// Slice out the middle IT company or companies from the array
let sliceMid = itCompanies.slice(3,4)
console.log(sliceMid)

// Remove the first IT company from the array
let removeFirst = itCompanies.shift()
console.log(itCompanies)
console.log(removeFirst)

// Remove the middle IT company or companies from the array
let removeMid = itCompanies.splice(2,2)
console.log(removeMid)
console.log(itCompanies)

// Remove the last IT company from the array
let removeLast = itCompanies.pop()
console.log(removeLast)
console.log(itCompanies)

// Remove all IT companies
itCompanies.length = 0
// or
let removeAll = itCompanies.splice(0)
console.log(removeAll)
console.log(itCompanies)