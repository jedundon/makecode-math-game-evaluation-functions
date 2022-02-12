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
        } else {
            t_string = "" + t_string + convertToText(array[index])
        }
    }
    if (!(t_string.isEmpty())) {
        t_array.push(t_string)
        t_string = ""
    }
    return t_array
}
function evalArraySymbolIndex (arr: any[], symindex: number) {
    in_array = cloneArray(arr)
    out_array = []
    for (let index = 0; index <= symindex - 2; index++) {
        out_array.push(in_array.shift())
    }
    out_array.push(convertToText(evaluateMath(in_array.shift(), in_array.shift(), in_array.shift())))
    for (let value of in_array) {
        out_array.push(value)
    }
    return out_array
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
function cloneArray (array: any[]) {
    clone = []
    for (let value of array) {
        clone.push(value)
    }
    return clone
}
function evalArrayMath (array: any[]) {
    out_array_2 = cloneArray(array)
    while (lowest_positive_number(out_array_2.indexOf("/"), out_array_2.indexOf("*")) >= 0) {
        out_array_2 = evalArraySymbolIndex(out_array_2, lowest_positive_number(out_array_2.indexOf("/"), out_array_2.indexOf("*")))
    }
    while (lowest_positive_number(out_array_2.indexOf("-"), out_array_2.indexOf("+")) >= 0) {
        out_array_2 = evalArraySymbolIndex(out_array_2, lowest_positive_number(out_array_2.indexOf("-"), out_array_2.indexOf("+")))
    }
    return out_array_2
}
let out_array_2: string[] = []
let clone: string[] = []
let out_array: string[] = []
let in_array: string[] = []
let t_array: string[] = []
let t_string = ""
let symbols: string[] = []
symbols = [
"/",
"*",
"-",
"+"
]
let text_list = [
"6",
"+",
"4",
"-",
"2",
"4",
"/",
"4",
"*",
"1",
"0"
]
game.splash(evalArrayMath(collapseArrayDigitsToNums(text_list)))
