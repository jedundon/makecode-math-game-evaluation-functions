def evaluateMath(n1: str, s1: str, n2: str):
    if s1 == "/":
        return parse_float(n1) / parse_float(n2)
    elif s1 == "*":
        return parse_float(n1) * parse_float(n2)
    elif s1 == "+":
        return parse_float(n1) + parse_float(n2)
    else:
        return parse_float(n1) - parse_float(n2)
def lowest_positive_number(a: number, b: number):
    if b < 0 and a >= 0:
        return a
    elif a < 0 and b >= 0:
        return b
    elif max(a, b) < 0:
        return -1
    else:
        return min(a, b)
symbols: List[str] = []
temp_string = ""
temp_array: List[any] = []
output_array: List[any] = []
num1 = ""
s = ""
num2 = ""
clone: List[any] = []
def collapseArrayDigitsToNumbers3(array: List[any]):
    global temp_string, temp_array
    temp_string = ""
    temp_array = []
    index2 = 0
    while index2 <= len(array) - 1:
        if symbols.index(array[index2]) >= 0:
            if not (temp_string.is_empty()):
                temp_array.append(temp_string)
                temp_string = ""
            temp_array.append(array[index2])
        else:
            temp_string = "" + temp_string + convert_to_text(array[index2])
        index2 += 1
    if not (temp_string.is_empty()):
        temp_array.append(temp_string)
        temp_string = ""
    return temp_array
def collapseArrayDigitsToNumbers2(array2: List[any]):
    global temp_string, temp_array
    temp_string = ""
    temp_array = []
    index22 = 0
    while index22 <= len(array2) - 1:
        if symbols.index(array2[index22]) >= 0:
            if not (temp_string.is_empty()):
                temp_array.append(temp_string)
                temp_string = ""
            temp_array.append(array2[index22])
        else:
            temp_string = "" + temp_string + convert_to_text(array2[index22])
        index22 += 1
    if not (temp_string.is_empty()):
        temp_array.append(temp_string)
        temp_string = ""
    return temp_array
def collapseArrayDigitsToNumbers(array3: List[any]):
    global temp_string, temp_array
    temp_string = ""
    temp_array = []
    index222 = 0
    while index222 <= len(array3) - 1:
        if symbols.index(array3[index222]) >= 0:
            if not (temp_string.is_empty()):
                temp_array.append(temp_string)
                temp_string = ""
            temp_array.append(array3[index222])
        else:
            temp_string = "" + temp_string + convert_to_text(array3[index222])
        index222 += 1
    if not (temp_string.is_empty()):
        temp_array.append(temp_string)
        temp_string = ""
    return temp_array
def evaluateArraySymbolIndex(arr: List[any], symindex: number):
    global output_array, temp_array, num1, s, num2
    output_array = cloneArray(arr)
    temp_array = []
    index2222 = 0
    while index2222 <= symindex - 2:
        temp_array.append(output_array.shift())
        index2222 += 1
    num1 = output_array.shift()
    s = output_array.shift()
    num2 = output_array.shift()
    temp_array.append(convert_to_text(evaluateMath(num1, s, num2)))
    for value in output_array:
        temp_array.append(value)
    return temp_array
def convertArrayToString(array4: List[any]):
    global temp_string
    temp_string = ""
    index3 = 0
    while index3 <= len(array4) - 1:
        temp_string = "" + temp_string + convert_to_text(array4[index3])
        index3 += 1
    return temp_string
def evaluateArrayMath(array5: List[any]):
    global output_array
    output_array = cloneArray(array5)
    while lowest_positive_number(output_array.index("/"), output_array.index("*")) >= 0:
        output_array = evaluateArraySymbolIndex(output_array,
            lowest_positive_number(output_array.index("/"), output_array.index("*")))
    while lowest_positive_number(output_array.index("-"), output_array.index("+")) >= 0:
        output_array = evaluateArraySymbolIndex(output_array,
            lowest_positive_number(output_array.index("/"), output_array.index("*")))
    return output_array
def cloneArray(array6: List[any]):
    global clone
    clone = []
    for value2 in array6:
        clone.append(value2)
    return clone
symbols = ["/", "*", "-", "+"]
text_list = ["4", "+", "4", "-", "2", "4", "/", "4", "*", "1", "0", "0"]
game.splash(evaluateArrayMath(collapseArrayDigitsToNumbers(text_list)))