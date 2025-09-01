function abc() {
    console.log('ash guard')
}

// abc()

// BMI calculator
function bmiCalculator(weight, height) {
    return (weight / (height * height))
}
// console.log(
//     bmiCalculator(60, 1.65).toFixed(2)
// )

// reusable discount calculator using HOF

function discountPercent(discount){
    return function (price){
        return price - price * (discount / 100)
    }
} 

// const tenPercentDiscount = discountPercent(10);

// const twentyPercentDiscount = discountPercent(20);

// console.log(tenPercentDiscount(200))
// console.log(twentyPercentDiscount(200))


function uniqueLongestString(s){
    let set = new Set()
    let left = 0, right = 0, maxLen = 0, startIndex = 0;
    debugger
    while(right < s.length){
         console.log(left, right, maxLen, startIndex)
        if(!set.has(s[right])){
            set.add(s[right]);
            if(right - left + 1 > maxLen){
                maxLen = right - left + 1;
                startIndex = left;
            }
            right++;
        } else{
            set.delete(s[right]);
            left++;
        }
    }
    console.log(left, right, maxLen, startIndex)
    console.log(s.substring(startIndex, maxLen + startIndex))
}

// uniqueLongestString('abcadcbabc')


