
package wordgames;


import java.io.FileInputStream;
import java.io.FileNotFoundException;;
import java.io.IOException;
import java.util.Scanner;


/**
 *
 * @author Brandon
 */
public class WordGames {    
    public static String DICTIONARY = "dictionary.txt"; // The name of the file to be open.
    
    public static void main(String[] args) throws FileNotFoundException, IOException {
        boolean continueGame = true ; //condition to reset the game.       
        
        
        do{
            System.out.println("Welcome to the Word Games program menu."); 
            String gameSelection = getSelection(); // get the gameSelection number from getSelection() method.   
            System.out.println("");
            
            switch (gameSelection){ // Game selection options.
            case "1":                               
                substringProblem();
                break;
            case "2":                
                pointsProblem();
                break;
            case "3":
                System.out.println("");
                System.out.println("Goodbye");
                System.exit(0);                
            default :
                System.out.println("");
                System.out.println("Invalid option. Try again.");            
                break;
        }
            
         
        } while(continueGame = true);
        
    }       
    
    //method for Selection menu
    private static String  getSelection() throws FileNotFoundException, IOException {        
        // Selection menu
        System.out.println("Select from one of the following options.");
        System.out.println("1. Substring problem");
        System.out.println("2. Points problem");
        System.out.println("3. Exit");
                
        
        System.out.print("Enter you selection : ");//Ask user for input.
        String gameSelection = ""; // Declare variable for program selection.
        Scanner input = new Scanner(System.in); // Create a new Scanner object
        gameSelection = input.next();
        
        
        return gameSelection;
       
        
    }
    
    // Substring problem wordgame.
    private static void substringProblem() throws FileNotFoundException, IOException {
        
        try {
            // initialising file (" dictionary.txt)
            FileInputStream fStream = new FileInputStream (DICTIONARY);
            Scanner fileIn = new Scanner(fStream); //Create a new Scanner object
            Scanner input = new Scanner(System.in);

            

            //Ask user for input.
            System.out.println("Substring problem");
            System.out.print("Enter a substring : ");
            String substring = input.next();
            System.out.println("");      


            while(fileIn.hasNext()){
                String words = fileIn.next();
                System.out.print(words); 
                int options = 1; // declare variable for different options of the game
                
                // get characters in between of the word. (infix)
                String charsInbetween = ""; 
                if(words.length() > 1){
                    charsInbetween = words.substring(1, (words.length() - 1)); 
                }

                // swith case to identify prefix,infix and suffix.
                switch(options){

                case 1: if(words.startsWith(substring)){
                            System.out.print(" - prefix.");

                        }
                case 2: if (charsInbetween.indexOf(substring) != -1  ){
                            System.out.print(" - infix");
                        }
                case 3 :if(words.endsWith(substring)){
                            System.out.print(" - suffix.");                        
                        }            

                case 4: if(!words.contains(substring)){
                            System.out.print(" - not found");
                        }break;
                }
                System.out.println("");

            }
                System.out.println("");
        }
        catch(FileNotFoundException ex) { // error handling for "dictionary.txt" not found.
            System.out.println("Dictionary file cannot be opened ! Please make sure dictionary.txt is saved in the WordGames file.");                
            System.exit(1);
        }
        
    }
    
    //Points problem wordgame.
    private static void pointsProblem() throws FileNotFoundException, IOException {
        
        try {
            FileInputStream fStream = new FileInputStream (DICTIONARY);
            Scanner fileIn = new Scanner(fStream);
         
            System.out.println("Points problem.");
            System.out.println("");
            

            while(fileIn.hasNext()){
                String words = fileIn.next(); 
                            
                int score = 0;
                
                // read the word character by character.
                for(int j=0; j <= words.length()-1; j++) {                    
                    char letter = words.charAt(j);
                    System.out.print(letter);
                    score+=getValueLetter(letter);
                }

                if (score < 2) {
                    System.out.println("is worth " + score + " point");
                }
                else {
                    System.out.println(" is worth " + score + " points. ");
               }
              
            }
        }
        catch(FileNotFoundException ex) { // error handling for "dictionary.txt" not found.
            System.out.println("Dictionary file cannot be opened.");                
            System.exit(0);
        }
    }
    public static int getValueLetter(char letter){ // allocating points for each letter.
        switch (letter){
            case 'g':
            case 'd': return 2;

            case 'b':
            case 'c':
            case 'm':
            case 'p': return 3;

            case 'f':
            case 'h':
            case 'v':
            case 'w':
            case 'y': return 4;

            case 'k': return 5;

            case 'j':
            case 'x': return 8;

            case 'q':
            case 'z': return 10;

            default: return 1;
        }
    }
    
}


