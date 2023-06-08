array_to_search_through = []
for number in range(1, 1001):
    array_to_search_through.append(number)

def linear_search(value_to_find, array_to_search_through):
    for element in array_to_search_through:
        if element == value_to_find:
            return array_to_search_through.index(element)
    

def linear_search_global(value_to_find, array_to_search_through):
    answer = []
    for element in array_to_search_through:
        if element == value_to_find:
            answer.append(array_to_search_through.index(element))
    return answer