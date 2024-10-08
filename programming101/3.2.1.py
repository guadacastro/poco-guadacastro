# Ex. 3.2.1 (**) - FizzBuzz
# Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the
# number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print
# "FizzBuzz".


# - initialize the variable i that will increment each time we enter the loop 
# - 


i = 1
total = 0
while (i <= 100):
    multipleof3 = (i % 3) == 0
    multipleof5 = (i % 5) == 0
    if (multipleof3):
        print ('Fizz')
    elif (multipleof5):
        print('Buzz')
    elif (multipleof3 and multipleof5):
        print('FizzBuzz')
    else: 
        print (i)
    i += 1


