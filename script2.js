function subsetSum(arr, k){
    let result = [];

    function backTrack(start, currentSubset, currentSum){
        if(currentSum === k){
            result.push([...currentSubset]);
            return;
        }

        if(currentSum > k || start >= arr.length){
            return;
        }
        for(let i = start; i < arr.length; i++){
            currentSubset.push(arr[i]);
            backTrack(i+1, currentSubset, currentSum + arr[i]);
            currentSubset.pop();
        }
    }
    backTrack(0, [], 0)
    console.log(result)
}

// subsetSum([1,2,3], 3)


function uniqueLongestString(s){
    let left = 0, right = 0, maxLen = 0;
    let result = [];
    let set = new Set();
    while(right < s.length){
        if(!set.has(s[right])){
            set.add(s[right]);
            if((right - left) + 1 > maxLen){
                maxLen = (right - left) + 1;
                result = []
                result.push(s.substring(left, right+1))
            }else if((right - left) + 1 === maxLen){
                result.push(s.substring(left, right+1))
            }
            right++;
        }else{
            set.delete(s[left])
            left++;
        }
    }
    console.log('result', result);
    
}

// uniqueLongestString('aaaaaaa')


function validAnagrams(a, b){
    if(a.length !== b.length) return false;

    let count = {};
    for(char in a){
        count[char] = count[char] + 1 || 1
    }

    for(char in b){
        if(count[char] === 0 || count[char] === undefined) return false
        count[char]--;
    }
    return true
}
// console.log(validAnagrams("listen", "silent"))


function sumOfTwo(arr, k){
    let pairs = []
    let obj={};
    for(ele in arr){
        if(obj[arr[ele]]){
            pairs.push([obj[arr[ele]], arr[ele]])
        } else {
            obj[k - arr[ele]] = arr[ele]
        }
    }
    console.log(...pairs);
    
    return pairs
}
sumOfTwo([1,2,7,11,15,3,6,8], 9)