Pokedex Project

Day 1, Commit 1: Success. I will be I have created my git hub page and connected it. My next course of action is to connect the Pokemon API into my JS folder to see if it works through a console log.

Day1, Commit 2: API logged successfully. I will now log a single pokemon

Day 1, Commit 3: Successful in logging Pikachu. Now to only Pikachu's base speed stat.

Day 1, Commit 4: Logged Pikachu's speed stat. Now to log all other stats used for project

Day1, Commit 5: All of Pikachu's stats have been logged. I preformed this by calling upon the data and moving down the arrays and objects to reach the number I was looking for, then console logged them.

Day 1, Commit 6: I generated the starter Pokemon from gens I-III. They all log as intended, displaying all the stats in the order I wished. This was achived by creating several buttons in the HTML with seperate IDs. Then in the JS the button is set so that it changes the variable pokemon to the id of the button clicked. This is plugged into the end of my API HTTPS, thus generating the specific page each time the button is pushed.

Day 2, Commit 1: Now comes the hard part. Due to the videos of the carosel being down I am mostly in the dark apart from the memories pulled from my tired morning brain. I added in my slider buttons in my html with their spans so that they may bounce between the buttons, which I added into a whole new seperate sub div. In my css I edited my sliders so that I could make sure they were present. Will have to change later.

Day 2, Commit 2: I have now made it so that the buttons used to call upon the pokemon have been hidden. This will be important for making the carosel work.

Day 2, Commit 3: I have made it so that only the first pokemon, in this case Pikachu, will display using first-of-type. This is important because as I transition into my JS, I will make it so that the first-of-type transitions to different buttons, making those visible.

Day 2, Commit 4: The next button to scroll right works. To do this I created an element that was zero then second element that represented every button within the PokeButton class. To do this I accessed the class itself, pulled the lenght of the children since those divs are what rests in the button div. I then turned my next class into a button, which again went through the pokemonbutton children, but this time assigned them to firstButton using the eq command, then altered the css display to none so that it would vanish upon click. Then I made an ife statment that if the firstbutton was less than the array, which would always be true due to the fact that the button is within the larger array, it would cause that class to move up the list. Then it would make the class visible again, thus cycling through a new class whilest moving to the right

Day 2 Commit 5: Left scroller works using the same method I used for the right scroller

Day 2 Commit 6: I have turned the button into an image rather than text. To do this, I embeded the css style command into my html to select an image. This way, I would not have to create an entirely new class for each button, thus keeping my java's commands in tact. To do this, I had this source: https://stackoverflow.com/questions/8683528/embed-image-in-a-button-element

Day 2 Commit 7: Changed all my pokemon buttons into images

Day 2 Commit 8: Added the starter pokemon from the Sinnoh region, aka: Gen IV.

Day 3 Commit 1: I moved the background properties into the css by selecting the IDs using the # symbol. While it makes my code bulkier and more ugly, it'll help as I transition to mobile front end by making things a lot easier.

Day 3 Commit 2: Styled the top portion. Will go back to it if I have enough time.

Day 3 Commit 3: Styled bottom portion.

Day 3 Commit 4: Every time you call on a new pokemon, the info page will clear.

Day 3 Commit 5: I added mobile support by utilizing @ media min 500.

Day 4 Commit 1: Added arrow buttons.
