# Exercise 1
apples = 14
print(apples)

print(f"I have {apples} apples.")


# Exercise 2
materials = ['wood', 'metal', 'stone']
words = {
  'elephant': "The world's largest land mammal.",
  'school': 'A place of learning.',
  'ice cream': 'A delicious milk-based dessert.',
}


# Exercise 3
num = 16
if num > 10:
  print(f"{num} is greater than 10.")
elif num == 10:
  print(f"{num} is exactly 10.")
else:
  print(f"{num} must be less than 10.")


# Exercise 4
for x in range(0,10):
  print("Doing the same thing over and over.")


# Exercise 5
base = 5
for num in range(0,20):
  print(num + base)


# Exercise 6
total = 0
for num in range(0,100):
  total += num

print(total)


# Exercise 7
for height in range(3,15):
  if height > 9:
    print("You can get on the rollercoaster!")
  else:
    print("You are too short to ride this rollercoaster.")


# Exercise 8
containers = ['purse', 'wallet', 'backback']
for container in containers:
  print(container)


# Exercise 9
def hello_world():
  return "Hello world!"

hello_world()


# Exercise 10
def add(first_num, second_num):
  return first_num + second_num

amount = add(5, 7)
print(amount)
