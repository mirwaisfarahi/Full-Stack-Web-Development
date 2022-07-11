# Python Programming

## Introduction

- Python is an easy to learn, powerful programming language. 
- It has efficient high-level data structures and a simple but effective approach to object-oriented programming. 
- Python’s elegant syntax and dynamic typing, together with its interpreted nature, make it an ideal language for scripting and rapid application development in many areas on most platforms.

## Programming in Python

1. Python is case sensitive.
2. Spacing is important.
3. Use error messages to help you learn.

## Data Types and Operators
The topics that we will cover here

1. Data Types: Integers, Floats, Booleans, Strings
2. Operators: Arithmetic, Assignment, Comparison, Logical
3. Built-In Functions, Type Conversion
4. Whitespace and Style Guidelines

### Arithmetic Operators
Arithmetic operators

1. (+) Addition
2. (-) Subtraction
3. (*) Multiplication
4. (/) Division
5. (%) Mod (the remainder after dividing)
6. (**) Exponentiation (note that ^ does not do this operation, as you might have seen in other languages)
7. (//) Divides and rounds down to the nearest integer
8. Bitwise operator (not covered here)
#### Examples
```
print(3 + 5) # 8
print(1 + 2 + 3 * 3) # 12
print(3 ** 2) # 9
print(9 % 2) # 1
```

### Variables and Assignment Operators

#### Variables
```
mv_population = 74728 
```

Here mv_population is a variable, which holds the value of 74728. 

The following two are equivalent in terms of assignment:

```
x = 3
y = 4
z = 5
```
and

```
x, y, z = 3, 4, 5
```

To name variables
1. Only use ordinary letters, numbers and underscores in your variable names.
2. You can’t use Python's reserved words, or "keywords," as variable names.
3. The pythonic way to name variables is to use all lowercase letters and underscores to separate words.

YES

```
my_height = 58
my_lat = 40
my_long = 105
```
NO
```
my height = 58
MYLONG = 40
MyLat = 105
```

#### Assignment Operators
```
x = 2, x += 2, x -= 2 and etc
```
### Integers and Floats
There are two Python data types that could be used for numeric values:

1. int - for integer values
2. float - for decimal or floating point values

You can create a value that follows the data type by using the following syntax:
```
x = int(4.7)   # x is now an integer 4
y = float(4)   # y is now a float of 4.0
```
You can check the type by using the type function:
```
>>> print(type(x))
int
>>> print(type(y))
float
```

Because the float, or approximation, for 0.1 is actually slightly more than 0.1, when we add several of them together we can see the difference between the mathematically correct answer and the one that Python creates.
```
>>> print(.1 + .1 + .1 == .3)
False
```

#### Python Best Practices

- For all the best practices, see the [PEP8 Guidelines](https://peps.python.org/pep-0008/)

- You can use the atom package [linter-python-pep8](https://atom.io/packages/linter-python-pep8) to use pep8 within your own programming environment.

### Booleans, Comparison Operators, and Logical Operators
The bool data type holds one of the values True or False, which are often encoded as 1 or 0, respectively.

#### Comparison Operators
```
Symbol Use Case	Bool	Operation
5 < 3	False	Less Than
5 > 3	True	Greater Than
3 <= 3	True	Less Than or Equal To
3 >= 5	False	Greater Than or Equal To
3 == 5	False	Equal To
3 != 5	True	Not Equal To
```
And there are three logical operators you need to be familiar with:
```
Logical Use	Bool	Operation
5 < 3 and 5 == 5	False	and - Evaluates if all provided statements are True
5 < 3 or 5 == 5	True	or - Evaluates if at least one of many statements is True
not 5 < 3	True	not - Flips the Bool Value
'''

