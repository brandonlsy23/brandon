package com.example.tictactoe;

import static android.app.Activity.*;

import androidx.appcompat.app.AppCompatActivity;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class HomeScreen extends AppCompatActivity implements View.OnClickListener {

    Button button1;
    Button button2;
    Button button3;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.home_screen);

        button1 = findViewById(R.id.button1);
        button1.setOnClickListener(this);

        button2 = findViewById(R.id.button2);
        button2.setOnClickListener(this);

        button3 = findViewById(R.id.button3);
        button3.setOnClickListener(this);
    }

    public void onClick(View v){
        switch (v.getId()) {
            case R.id.button1:
                Intent i = new Intent(HomeScreen.this, GameScreen.class);
                finish();
                startActivity(i);
                break;

            case R.id.button2:
                Intent i2 = new Intent(HomeScreen.this, HighScoreScreen.class);
                finish();
                startActivity(i2);
                break;

            case R.id.button3:
                finish();
                System.exit(0);
                break;


            default:
                break;
        }
    }



}