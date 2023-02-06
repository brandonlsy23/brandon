package com.example.tictactoe;

public class Board {
    private int [] box;


    public Board() {

    }

    public void newGame() {
        box = new int[9];
        for (int i = 0; i < 10; i++) {
            box[i] =2;
        }
    }
}
