package com.example.tictactoe;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;



import androidx.appcompat.app.AppCompatActivity;

public class GameScreen extends AppCompatActivity {
    ImageView[] imgView = new ImageView[9];
    int []gameBox ={2,2,2,2,2,2,2,2,2};
    int moveCount =0;
    int humanMoveCount =0;
    int type = getPlayerType();
    Player humanPlayer = new Player(type);
    boolean gameContinue = true;
    boolean endTurn = false;
    int botType;

    // State meanings:
    //    0 - O
    //    1 - X
    //    2 - Null
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.game_screen);
        imgView[0]= findViewById(R.id.imageView0);
        imgView[1]= findViewById(R.id.imageView1);
        imgView[2]= findViewById(R.id.imageView2);
        imgView[3]= findViewById(R.id.imageView3);
        imgView[4]= findViewById(R.id.imageView4);
        imgView[5]= findViewById(R.id.imageView5);
        imgView[6] = findViewById(R.id.imageView6);
        imgView[7]= findViewById(R.id.imageView7);
        imgView[8]= findViewById(R.id.imageView8);
        if(humanPlayer.playerType == 1) {
            botTurn(0);
        }

    }
    public int getPlayerType(){
        int playerType ;
        int randomNum = (int) Math.round( Math.random() );
        playerType = randomNum;
        return playerType;
    }

    public void botTurn(int botType) {

        boolean endBotTurn = false;
        while(!endBotTurn) {
            int indexOfWinningMove =checkPossibleWin(botType) ;

            if (moveCount == 9) {
                gameContinue = false;
                String message ="Tied";
                Intent i = new Intent(GameScreen.this, ResultScreen.class);
                i.putExtra("EXTRA_MESSAGE",message);
                finish();
                startActivity(i);
            }

            if(indexOfWinningMove != -1){
                if(botType == 1){
                    gameBox[indexOfWinningMove] = 1;
                    imgView[indexOfWinningMove].setImageResource(R.drawable.x);
                }
                if(botType == 0){
                    gameBox[indexOfWinningMove] = 0;
                    imgView[indexOfWinningMove].setImageResource(R.drawable.o);
                }
                endBotTurn = true;
                moveCount++;
            }
            else{

                int randomNum = 0 + (int) (Math.random() * 9);
                if (gameBox[randomNum] == 2) {
                    if (botType == 1) {
                        gameBox[randomNum] = 1;
                        imgView[randomNum].setImageResource(R.drawable.x);
                    }
                    else {
                        gameBox[randomNum] = 0;
                        imgView[randomNum].setImageResource(R.drawable.o);
                    }
                    endBotTurn = true;
                    moveCount++;
                }
            }


        }
        if(botType == 1){
            if(checkWin(1)){
                gameContinue = false;
                String message ="You lost";
                Intent i = new Intent(GameScreen.this, ResultScreen.class);
                i.putExtra("EXTRA_MESSAGE",message);
                finish();
                startActivity(i);

            }
        }
        if(botType == 0){
            if(checkWin(0)){
                gameContinue = false;
                String message ="You lost";
                Intent i = new Intent(GameScreen.this, ResultScreen.class);
                i.putExtra("EXTRA_MESSAGE",message);
                finish();
                startActivity(i);

            }
        }
        if (moveCount == 9) {
            gameContinue = false;
            String message ="Tied";
            Intent i = new Intent(GameScreen.this, ResultScreen.class);
            i.putExtra("EXTRA_MESSAGE",message);
            finish();
            startActivity(i);
        }
        endTurn = false;
    }
    public boolean checkWin(int type){
        int a ;
        int b;
        for(int i=0;i<3;i++){
            a=checkRow(type,i);
            if(a == 3){
                return true;
            }
        }

        for(int i=0;i<3;i++){
            b=checkCol(type,i);
            if(b == 3){
             return true;
            }
        }

        if(checkDiagonalRight(type) == 3){
            return true;
        }

        if(checkDiagonalLeft(type) == 3){
            return true;
        }
    return false;
    }

    public int checkDiagonalLeft(int type){
        int matchCounter =0;
        int otherType = 0;

        if(type == 0){
            otherType= 1;
        }

        int[] index ={0,4,8};

        //leftDiagonal
        for(int i=0;i<=2;i++){
            if(gameBox[index[i]] == type) {
                matchCounter++;
            }
            else if(gameBox[index[i]] == otherType){
                matchCounter -= 1;
            }
        }
        return matchCounter;
    }

    public int checkDiagonalRight(int type){
        int matchCounter =0;
        int otherType = 0;

        if(type == 0){
            otherType= 1;
        }
        int[] index2 ={2,4,6};
        //rightDiagonal
        for(int i=0;i<=2;i++){
            if(gameBox[index2[i]] == type) {
                matchCounter++;
            }
            else if(gameBox[index2[i]] == otherType){
                matchCounter -= 1;
            }
        }
        return matchCounter;
    }

    public int checkCol(int type,int c){
        int matchCounter = 0;
        int otherType = 0;
        //row 0
        if(type == 0){
            otherType= 1;
        }

        for(int r = 0; r<=2; r++){
            if(gameBox[(3*r)+c] == type) {
                matchCounter++;
            }
            else if(gameBox[(3*r)+c] == otherType){
                matchCounter -= 1;
            }
    }
        return matchCounter;
    }

    public int checkRow(int type,int r){
        int matchCounter = 0;
        int otherType = 0;
        //row 0
        if(type == 0){
            otherType= 1;
        }

        for(int c = 0; c<=2; c++){
            if(gameBox[(3*r)+c] == type) {
                matchCounter++;
            }
            else if(gameBox[(3*r)+c] == otherType){
                matchCounter -= 1;
            }

        }

        return matchCounter;
    }
    public int checkPossibleWin(int type){
        int a ;
        int b;
        int boxIndex;
        for(int i=0;i<3;i++){
            a=checkRow(type,i);
            if(a == -2){
                for(int j=0;j<3;j++) {
                    boxIndex = (3 * i) + j;
                    if(gameBox[boxIndex] == 2){
                        System.out.println("a");
                        return boxIndex;
                    }
                }
            }
        }

        for(int i=0;i<3;i++) {
            b = checkCol(type, i);
            if (b == -2) {
                for (int j = 0; j < 3; j++) {
                    boxIndex = (3 * j) + i;
                    if (gameBox[boxIndex] == 2) {
                        return boxIndex;
                    }
                }
            }
        }

        if(checkDiagonalRight(type) == -2){
            int[] index ={2,4,6};
            for(int i =0;i<=2;i++){
                if(gameBox[index[i]] == 2){
                    return index[i];
                }
            }
        }



        if(checkDiagonalLeft(type) == -2){
            int[] index ={0,4,8};
            for(int i =0;i<=2;i++){
                if(gameBox[index[i]] == 2){
                    System.out.println("d");
                    return index[i];
                }
            }
        }
        return -1;
    }


    public void playerTap(View v) {

        ImageView img = (ImageView) v;
        int tappedImage = Integer.parseInt(img.getTag().toString());

        if(humanPlayer.playerType == 0) {
            while(!endTurn) {

                if (gameBox[tappedImage] == 2) {
                    moveCount++;
                    humanMoveCount++;


                    gameBox[tappedImage] = 0;
                    img.setImageResource(R.drawable.o);
                    endTurn = true;

                }

            }
           if(checkWin(0)){
               gameContinue = false;
               String message ="You won";
               String score = Integer.toString(humanMoveCount);
               Intent i = new Intent(GameScreen.this, ResultScreen.class);
               i.putExtra("EXTRA_MESSAGE",message);
               i.putExtra("SCORE_MESSAGE",score);
               finish();
               startActivity(i);
            }
            if (moveCount == 9) {
                gameContinue = false;
                String message ="Tied";
                Intent i = new Intent(GameScreen.this, ResultScreen.class);
                i.putExtra("EXTRA_MESSAGE",message);
                finish();
                startActivity(i);
                //print string
            }
            if(gameContinue) {
                botTurn(1);
            }
        }
        else if(humanPlayer.playerType == 1){

            while(!endTurn) {

                if (gameBox[tappedImage] == 2) {
                    moveCount++;
                    humanMoveCount++;
                    gameBox[tappedImage] = 1;
                    img.setImageResource(R.drawable.x);
                    endTurn = true;

                }

            }
            if(checkWin(1)){
                gameContinue = false;
                String message ="You won";
                String score = Integer.toString(humanMoveCount);
                Intent i = new Intent(GameScreen.this, ResultScreen.class);
                i.putExtra("EXTRA_MESSAGE",message);
                i.putExtra("SCORE_MESSAGE",score);
                finish();
                startActivity(i);
            }
            if (moveCount == 9) {
                endTurn=true;
                gameContinue = false;
                Intent i = new Intent(GameScreen.this, ResultScreen.class);
                finish();
                startActivity(i);
                //print string
            }

            if(gameContinue) {
                botType = 0;
                botTurn(botType);
            }
        }

    }
}



