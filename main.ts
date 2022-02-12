function collapseArrayDigitsToNums (array: any[]) {
    t_string = ""
    t_array = []
    for (let index = 0; index <= array.length - 1; index++) {
        if (symbols.indexOf(array[index]) >= 0) {
            if (!(t_string.isEmpty())) {
                t_array.push(t_string)
                t_string = ""
            }
            t_array.push(array[index])
        }
    }
    if (!(t_string.isEmpty())) {
        t_array.push(t_string)
        t_string = ""
    }
    return t_array
}
function evaluateMath (n1: string, s1: string, n2: string) {
    if (s1 == "/") {
        return parseFloat(n1) / parseFloat(n2)
    } else if (s1 == "*") {
        return parseFloat(n1) * parseFloat(n2)
    } else if (s1 == "+") {
        return parseFloat(n1) + parseFloat(n2)
    } else {
        return parseFloat(n1) - parseFloat(n2)
    }
}
function lowest_positive_number (a: number, b: number) {
    if (b < 0 && a >= 0) {
        return a
    } else if (a < 0 && b >= 0) {
        return b
    } else if (Math.max(a, b) < 0) {
        return -1
    } else {
        return Math.min(a, b)
    }
}
let t_array: string[] = []
let t_string = ""
let clone : string[] = []
let num2 = ""
let s = ""
let num1 = ""
let output_array : string[] = []
let temp_array : string[] = []
let temp_string = ""
let symbols : string[] = []
function collapseArrayDigitsToNumbers3(array: string[]): string[] {
    
    temp_string = ""
    temp_array = []
    let index2 = 0
    while (index2 <= array.length - 1) {
        if (symbols.indexOf(array[index2]) >= 0) {
            if (!temp_string.isEmpty()) {
                temp_array.push(temp_string)
                temp_string = ""
            }
            
            temp_array.push(array[index2])
        } else {
            temp_string = "" + temp_string + convertToText(array[index2])
        }
        
        index2 += 1
    }
    if (!temp_string.isEmpty()) {
        temp_array.push(temp_string)
        temp_string = ""
    }
    
    return temp_array
}
function collapseArrayDigitsToNumbers2(array2: string[]): string[] {
    
    temp_string = ""
    temp_array = []
    let index22 = 0
    while (index22 <= array2.length - 1) {
        if (symbols.indexOf(array2[index22]) >= 0) {
            if (!temp_string.isEmpty()) {
                temp_array.push(temp_string)
                temp_string = ""
            }
            
            temp_array.push(array2[index22])
        } else {
            temp_string = "" + temp_string + convertToText(array2[index22])
        }
        
        index22 += 1
    }
    if (!temp_string.isEmpty()) {
        temp_array.push(temp_string)
        temp_string = ""
    }
    
    return temp_array
}
function collapseArrayDigitsToNumbers(array3: string[]): string[] {
    
    temp_string = ""
    temp_array = []
    let index222 = 0
    while (index222 <= array3.length - 1) {
        if (symbols.indexOf(array3[index222]) >= 0) {
            if (!temp_string.isEmpty()) {
                temp_array.push(temp_string)
                temp_string = ""
            }
            
            temp_array.push(array3[index222])
        } else {
            temp_string = "" + temp_string + convertToText(array3[index222])
        }
        
        index222 += 1
    }
    if (!temp_string.isEmpty()) {
        temp_array.push(temp_string)
        temp_string = ""
    }
    
    return temp_array
}
function evaluateArraySymbolIndex(arr: string[], symindex: number): string[] {
    
    output_array = cloneArray(arr)
    temp_array = []
    let index2222 = 0
    while (index2222 <= symindex - 2) {
        temp_array.push(output_array.shift())
        index2222 += 1
    }
    num1 = output_array.shift()
    s = output_array.shift()
    num2 = output_array.shift()
    temp_array.push(convertToText(evaluateMath(num1, s, num2)))
    for (let value of output_array) {
        temp_array.push(value)
    }
    return temp_array
}
function convertArrayToString(array4: string[]): string {
    
    temp_string = ""
    let index3 = 0
    while (index3 <= array4.length - 1) {
        temp_string = "" + temp_string + convertToText(array4[index3])
        index3 += 1
    }
    return temp_string
}
function evaluateArrayMath(array5: string[]): string[] {
    
    output_array = cloneArray(array5)
    while (lowest_positive_number(output_array.indexOf("/"), output_array.indexOf("*")) >= 0) {
        output_array = evaluateArraySymbolIndex(output_array, lowest_positive_number(output_array.indexOf("/"), output_array.indexOf("*")))
    }
    while (lowest_positive_number(output_array.indexOf("-"), output_array.indexOf("+")) >= 0) {
        output_array = evaluateArraySymbolIndex(output_array, lowest_positive_number(output_array.indexOf("/"), output_array.indexOf("*")))
    }
    return output_array
}
function cloneArray(array6: string[]): string[] {
    
    clone = []
    for (let value2 of array6) {
        clone.push(value2)
    }
    return clone
}
symbols = [
"/",
"*",
"-",
"+"
]
let text_list = [
"4",
"+",
"4",
"-",
"2",
"4",
"/",
"4",
"*",
"1",
"0",
"0"
]
game.splash(evaluateArrayMath(collapseArrayDigitsToNumbers(text_list)))
