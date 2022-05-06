// problem 1
function fact(n){
    var fact = 1;
    for(var i=n;i>0;i--){
        fact = fact*i;
    }
    return fact;
}

// console.log(fact(5));

// problem 2
function cube(n){
    return n*n*n;
}

// console.log(cube(2));

// problem 3
function area(a){
    let result;
    result = (Math.sqrt(3)*a*a)/4;
    return result.toFixed(2);
}

// console.log(area(20))

// problem 4
function month(n){
    let months = [31,28,31,30,31,30,31,31,30,31,30,31];
    if(n>=1 && n<=12){
        return months[n-1];
    }
    return "Error"
}
// console.log(month(8));

// program 5
function temperature(n){
    let result = n*(9/5) + 32;
    return result.toFixed(2)
}
// console.log(temperature(12))

// program 6
function sumN(n){
    return (n*(n+1))/2;
}

// console.log(sumN(10));

// program 7
function Nterm(n){
    if(n<0){
        return "Error";
    }
    else{
        return n*n;
    }
}
// console.log(Nterm(18));

// program 8
function removeWhiteSpace(a){
    let tmp = "";
    for(i in a){
        if(a[i]!==" "){
            tmp += a[i];
        }
    }
    return tmp.length;
}
// console.log(removeWhiteSpace("Lorem Ipsum"));

// program 9
function quad(a,b,c){
    let result1,result2;
    result1 = (-b + Math.sqrt(b*b - 4*a*c))/(2*a);
    result2 = (b + Math.sqrt(b*b - 4*a*c))/(2*a);
    return [result1.toFixed(2),result2.toFixed(2)];
}
// console.log(quad(1,5,6));

// program 10

function steal(n,arr){
    let evenVals = [];
    let oddVals = [];
    let finalArr = [];
    for(let i=0;i<n;i++){
        if(i%2===0){
            evenVals.push(arr[i]);
        } else {
            oddVals.push(arr[i]);
        }
    }
    evenVals.sort((a, b)=> a-b);
    for(let i=0;i<n;i++){
        if(i%2===0){
            finalArr[i] = evenVals.shift();
        } else {
            finalArr[i] = oddVals.shift()
        }
    }
    return finalArr;
}

// console.log(steal(5,[3, 9, 1, 44, 6]));

// program 11
function occurances(arr){
    let finalArr = [];
    let dict = {}

    let uniqVals = new Set(arr);
    uniqVals = [...uniqVals];

    for(i=0;i<uniqVals.length;i++){
        dict[uniqVals[i]] = 0;
    }

    // counting
    let max = 0;
    for(i=0;i<arr.length;i++){
        dict[arr[i]] += 1;
        if(dict[arr[i]]>max){
            max = dict[arr[i]];
        }
    }

    // sorting
    let dict1 = {}
    for(let i=1;i<=max;i++){
        dict1[i] = []
    }
    
    for(let j=1;j<=max;j++){
        for(let key in dict){
            if(dict[key] === j){
                dict1[j].push(key);
            }
        }
    }

    for(let val in dict1){
        for(let i=0;i<dict1[val].length;i++){
            if(val >= 0){
                dict1[val].sort((a, b)=> b-a);
            }else{
                dict1[val].sort((a, b)=> a-b);
            }
        }
    }
    for(i=max;i>0;i--){
        finalArr.push(...dict1[i])
    }
    // console.log(dict1)
    return finalArr;
}
// console.log(occurances([3, 3, 4, 4, 7, 8]));

// program 12
function palindrome(n){
    let count = 0;
    for(let i=1;i<=n;i++){
        if(i.toString()===i.toString().split("").reverse().join("")){
            count++;
        }
    }
    return count;
}
// console.log(palindrome(111))

// program 13
// 2,6,12,20,30
function series(n){
    let val=2;
    for(i=2;i<=n;i++){
        val = val + 2*i;
    }
    return val;
}
// console.log(series(5))

// program 14
function leftRotate(n,s,arr){
    let finalArr = [];

    for(let i=s;i<n;i++){
        finalArr.push(arr[i]);
    }
    for(let i=0;i<s;i++){
        finalArr.push(arr[i]);
    }

    return finalArr;
}
// console.log(leftRotate(7,2,[1, 2, 3, 4, 5, 6, 7]))

// program 15
function expression(arr){
    let result=0,i=0;
    
    while(true){
        if(arr[i] === '\*' || arr[i] ==='/' || arr[i] ==='+' || arr[i] ==='-'){
            let sum =  eval(arr[i-2],arr[i-1],arr[i]);
            arr[i] = sum;
            arr.splice(i-1,1);
            arr.splice(i-2,1);
            i = i-2;
        }
        i++;
        if(arr.length===1){
            break;
        }
    }
    
    result = arr[0]
    return result;
}
function eval(a,b,op){
    let x = parseFloat(a);
    let y = parseFloat(b);
    let result;
    if(op==='+'){
        result = x+y;
    }
    if(op==='-'){
        result = x-y;
    }
    if(op==='*'){
        result = x*y;
    }
    if(op==='/'){
        result = x/y;
    }
    // console.log(a+op+b+' --> '+result.toString())
    return result;
}
// console.log(expression("5 3 1 \* + 9 -".split(" ")));

let data = "";
let sampleInputs = [
    5,2,20,8,12,10,18,"Lorem Ipsum","5 1 6","5 3 9 1 44 6","3 3 4 4 7 8",5,5,"7 3 1 2 3 4 5 6 7","5 3 1 \* + 9 -"
]
for(let i=1;i<=15;i++){
    data = data+`
    <div class="program-box">
            <div class="program-input">
              <div class="program-name">Program ${i}</div>
              <hr>
              <input id="input-${i}" placeholder="Enter the input in given format..." type="text"/>
              <button onclick="execute(${i})" class="btn">Run</button>
              <p>( Sample Input: ${sampleInputs[i-1]} )</p>
            </div>
            <div class="line"></div>
            <div class="program-output">
              <p>Output:</p>
              <hr>
              <div id="output-${i}" class="output-para">
                Output...
              </div>
            </div>
          </div>
    `;
}

document.getElementById("main").innerHTML = data;

function execute(n){
    let inputId = "input-"+n;
    let outputId = "output-"+n;
    
    let inputVal = document.getElementById(inputId).value;

    if(!inputVal){
        return;
    }
    let outputVal = document.getElementById(outputId);

    let output;

    try{
    switch(n){
        case 1:
            output = fact(parseInt(inputVal));
            break;
        case 2:
            output = cube(parseInt(inputVal));
            break;
        case 3:
            output = area(parseFloat(inputVal));
            break;
        case 4:
            output = month(parseInt(inputVal))
            break;
        case 5:
            output = temperature(parseFloat(inputVal));
            break;
        case 6:
            output = sumN(parseInt(inputVal));
            break;
        case 7:
            output = Nterm(parseInt(inputVal));
            break;
        case 8:
            output = removeWhiteSpace(inputVal);
            break;
        case 9:
            let input = inputVal.split(" ");
            output = quad(parseFloat(input[0]),parseFloat(input[1]),parseFloat(input[2]));
            break;
        case 10:
            let val2 = inputVal.split(" ");
            let n = val2.shift()
            output = steal(n,val2)
            break;
        case 11:
            output = occurances(inputVal.split(" "));
            break;
        case 12:
            output = palindrome(parseInt(inputVal));
            break;
        case 13:
            output = series(parseInt(inputVal));
            break;
        case 14:
            let val3 = inputVal.split(" ");
            let n1 = val3.shift()
            let k = val3.shift()
            output = leftRotate(n1,k,[1, 2, 3, 4, 5, 6, 7]);
            break;
        case 15:
            output = expression(inputVal.split(" "));
            break;
        default:
            break;
    }
    console.log(output);
    outputVal.innerHTML = output;
}catch{
    outputVal.innerHTML = "Enter the proper input...";
}
}

// console.log(fact(5));
// console.log(cube(2));
// console.log(area(20));
// console.log(month(8));
// console.log(temperature(12));
// console.log(sumN(10));
// console.log(Nterm(18));
// console.log(removeWhiteSpace("Lorem Ipsum"));
// console.log(quad(1,5,6));
// console.log(steal(5,[3, 9, 1, 44, 6]));
// console.log(occurances([3, 3, 4, 4, 7, 8]));
// console.log(palindrome(111));
// console.log(series(5));
// console.log(leftRotate(7,2,[1, 2, 3, 4, 5, 6, 7]));
// console.log(expression("5 3 1 \* + 9 -".split(" ")));