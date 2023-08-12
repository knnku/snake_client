# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from here. 

## Getting Started

- Follow steps inside the snek server repo to run the server side.
- Change the IP and PORT inside `constants.js` to the proper values which can be found after running server side.
- Run the development snake client using the `node play.js` command.

### Controls

- Use `W,A,S,D` keys to move up, left, down and right respectively. 
- 180 degree turns are illegal!
- Pre written messages can be broadcast to the server!
  * Press `p` to say "Hello"
  * Press `o` to say "Wassup"
  * Press `i` to say "Goodbye"



***- ctrl+c to exit the server and game***