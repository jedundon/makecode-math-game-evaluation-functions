def collapseArrayDigitsToNums(array: List[any]):
    global t_string, t_array
    t_string = ""
    t_array = []
    index = 0
    while index <= len(array) - 1:
        if symbols.index(array[index]) >= 0:
            if not (t_string.is_empty()):
                t_array.append(t_string)
                t_string = ""
            t_array.append(array[index])
        else:
            t_string = "" + t_string + convert_to_text(array[index])
        index += 1
    if not (t_string.is_empty()):
        t_array.append(t_string)
        t_string = ""
    return t_array
def evalArraySymbolIndex(arr: List[any], symindex: number):
    global in_array, out_array
    in_array = cloneArray(arr)
    out_array = []
    index2 = 0
    while index2 <= symindex - 2:
        out_array.append(in_array.shift())
        index2 += 1
    out_array.append(convert_to_text(evaluateMath(in_array.shift(), in_array.shift(), in_array.shift())))
    for value in in_array:
        out_array.append(value)
    return out_array
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
def cloneArray(array2: List[any]):
    global clone
    clone = []
    for value2 in array2:
        clone.append(value2)
    return clone
def evalArrayMath(array3: List[any]):
    global out_array_2
    out_array_2 = cloneArray(array3)
    while lowest_positive_number(out_array_2.index("/"), out_array_2.index("*")) >= 0:
        out_array_2 = evalArraySymbolIndex(out_array_2,
            lowest_positive_number(out_array_2.index("/"), out_array_2.index("*")))
    while lowest_positive_number(out_array_2.index("-"), out_array_2.index("+")) >= 0:
        out_array_2 = evalArraySymbolIndex(out_array_2,
            lowest_positive_number(out_array_2.index("-"), out_array_2.index("+")))
    return out_array_2
out_array_2: List[str] = []
clone: List[str] = []
out_array: List[str] = []
in_array: List[str] = []
t_array: List[str] = []
t_string = ""
symbols: List[str] = []
symbols = ["/", "*", "-", "+"]
text_list = ["6", "+", "4", "-", "2", "4", "/", "4", "*", "1", "0"]
game.splash(evalArrayMath(collapseArrayDigitsToNums(text_list)))