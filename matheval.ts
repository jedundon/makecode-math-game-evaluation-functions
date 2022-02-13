//% 
namespace eval {
    //% block
    export function collapseArrayDigitsToNums(array: any[]): string[] {
        let symbols: string[] = []
        symbols = ["/", "*", "-", "+"]
        t_string = ""
        t_array = []
        let index = 0
        while (index <= array.length - 1) {
            if (symbols.indexOf(array[index]) >= 0) {
                if (!t_string.isEmpty()) {
                    t_array.push(t_string)
                    t_string = ""
                }

                t_array.push(array[index])
            } else {
                t_string = "" + t_string + convertToText(array[index])
            }

            index += 1
        }
        if (!t_string.isEmpty()) {
            t_array.push(t_string)
            t_string = ""
        }

        return t_array
    }

    //% block
    export function evalArraySymbolIndex(arr: any[], symindex: number): string[] {

        in_array = cloneArray(arr)
        out_array = []
        let index2 = 0
        while (index2 <= symindex - 2) {
            out_array.push(in_array.shift())
            index2 += 1
        }
        out_array.push(convertToText(evaluateMath(in_array.shift(), in_array.shift(), in_array.shift())))
        for (let value of in_array) {
            out_array.push(value)
        }
        return out_array
    }

    //% block
    export function evaluateMath(n1: string, s1: string, n2: string): number {
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

    //% block
    export function lowest_positive_number(a: number, b: number): number {
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

    //% block
    export function cloneArray(array2: any[]): string[] {

        clone = []
        for (let value2 of array2) {
            clone.push(value2)
        }
        return clone
    }

    //% block
    export function evalArrayMath(array3: any[]): number {

        out_array_2 = collapseArrayDigitsToNums(cloneArray(array3))
        while (lowest_positive_number(out_array_2.indexOf("/"), out_array_2.indexOf("*")) >= 0) {
            out_array_2 = evalArraySymbolIndex(out_array_2, lowest_positive_number(out_array_2.indexOf("/"), out_array_2.indexOf("*")))
        }
        while (lowest_positive_number(out_array_2.indexOf("-"), out_array_2.indexOf("+")) >= 0) {
            out_array_2 = evalArraySymbolIndex(out_array_2, lowest_positive_number(out_array_2.indexOf("-"), out_array_2.indexOf("+")))
        }
        return parseFloat(out_array_2.shift())
    }

    let out_array_2: string[] = []
    let clone: string[] = []
    let out_array: string[] = []
    let in_array: string[] = []
    let t_array: string[] = []
    let t_string = ""
}

