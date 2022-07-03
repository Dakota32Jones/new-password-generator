# PHASE 1

## Step 1

```
I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
```

1. How long is the password? - Make this show up on the screen

The user should be able to type whatever they want.

1a. Check if less than 8. - Cannot be less or it will not meet criteria.

1b. Check if greater than 128. - Cannot be more or it will not meet criteria.

1c. Needs to be in between to be valid.

## Step 2

```
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
```

Should the user be able to type whatever they want? No only acceptable criteria, use a (BOOLEAN). - Think of 4 seperate confirms.

1. Ask for lowercase.
2. Ask for uppercase.
3. Ask for numeric.
4. Ask for special characters.

## Step 3

```
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
```

1. Make sure user selects at least one of the 4 confirms. Otherwise you don't know what characters to use to make their password. Can't a have an empty password.

# PHASE 2

```
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
```

1. Guarantee we have at least character of each required type.
2. If any of the confirms are true, add a character to your password. Make sure it's just one first to guarantee 1 of each type.
3. After you have 1 of each criteria, you can freely/randomly select a character from any character type.

3a. After we have one character of every type fullfilled, we can merge all valid characters into a single giant character pool. Then we can randomly select from the giant character pool to fill the password until it is the proper length.
