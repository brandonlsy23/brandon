package com.example.tictactoe;


import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;

public class ResultScreen extends AppCompatActivity implements View.OnClickListener{
    Button button1;
    Button button2;
    Button button3;
    String score ;
    EditText nameInput;
    int playerScore = 0;
    String playerName;
    String strDate;
    DBHelper myDb;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.result_screen);
        myDb = new DBHelper(ResultScreen.this);

        Intent intent = getIntent();
        String message = intent.getStringExtra("EXTRA_MESSAGE");
        TextView textView = findViewById(R.id.displayMsg);
        textView.setText(message);

        score = intent.getStringExtra("SCORE_MESSAGE");
        TextView textView2 = findViewById(R.id.score01);
        textView2.setText("Number of moves : "+ score);


        nameInput =(EditText) findViewById(R.id.nameInput1);

        button1 = findViewById(R.id.button);
        button1.setOnClickListener(this);

        button2 = findViewById(R.id.button4);
        button2.setOnClickListener(this);

        button3 = findViewById(R.id.button5);
        button3.setOnClickListener(this);
    }

    public void onClick(View v){
        switch (v.getId()) {
            case R.id.button:
                Intent i = new Intent(ResultScreen.this, GameScreen.class);
                finish();
                startActivity(i);
                break;

            case R.id.button4:
                Date currentTime = Calendar.getInstance().getTime();
                DateFormat dateFormat = new SimpleDateFormat("yyyy-mm-dd hh:mm:ss");
                strDate = dateFormat.format(currentTime);
                playerName = nameInput.getText().toString();
                if(score !=null) {
                    playerScore = (10 - (Integer.parseInt(score))) * 1000;
                }
                Boolean checkInsert = myDb.insertIntoDB(playerName,playerScore,strDate);
                if(checkInsert == true)
                    Toast.makeText(ResultScreen.this,"new entry inserted", Toast.LENGTH_SHORT).show();
                else
                    Toast.makeText(ResultScreen.this,"new entry failed", Toast.LENGTH_SHORT).show();
                //myDb.insertIntoDB("brandon",6000,"2022-09-24 10:54:23");

                break;

            case R.id.button5:
                finish();
                System.exit(0);
                break;


            default:
                break;
        }
    }
}
