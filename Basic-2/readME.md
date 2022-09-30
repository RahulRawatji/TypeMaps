## Some kind of sort Project
### ts config file basically helps the ts compiler 
#### tsconfig file was configured to store build files in build folder and read ts files from src folder
* tsconfig.json ts compilation file -> how compiler will behave
    command  = > tsc --init

- nodemon install to re-run the js file if any changes detected
- tsc checkes for the changes made in ts file and compiles them
  tsc -w will check for changes continuously
- concurently was installed to run both these commands concurrently

## Classes are checked in isolation
### don't need an instance of a class make it abstract
  - instance > const apple = new Apple();