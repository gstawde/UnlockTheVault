# UnlockTheVault
## PART A
  Project Title: Unlock the Vault
## PART B
  GitHub URL: https://github.com/gstawde/UnlockTheVault
## PART C
  2/4 - 2/16: GitHub setup, Flask project blueprint, finalize website design\
  2/17 - 2/29: User authentication (account creation, login/out)\
  3/1 - 3/20: Game functionality\
  3/21 - 4/10: Work on/Refine UI\
  4/10 - 4/15: Ensure user can view data from previous games if they have an account\
  4/16 - Finals: Testing, project refinement
## PART D
  - Front-end: HTML, CSS, JS, Node
  - Back-end: Flask, Python
## PART E
  Generating Vault Key: When a user starts a game, a 6 digit random key is generated, where the key rather than containing numbers has specifications for what type of number must be in each spot. Each digit can be a number between 0 and 9 inclusive. There is not one correct solution. Rather, each spot will indicate its relation to the previous spot (e.g. Spot 2 must be < Spot 1).\
  Hints: \
    - Each user gets up to 3 hints.\
    - When a user requests a hint, the current guesses for each digit will be evaluated\
    - If the digit is incorrect, the box with that digit will turn red; the number guessed will then be evaluated against the correct digit\
    - If the digit is correct, box with that digit will turn green
## PART F
  This game is simple to learn, yet still challenging enough to be consistently engaging.\
  Since there are no levels nor a consistent answer, the game avoids becoming redundant. \
  Educational: While it may seem a generally simple guessing game of chance, younger kids can use this to reinforce basic concepts like greater/less than that they’d encounter in a math class.
