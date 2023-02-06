package com.example.tictactoe;

import android.annotation.SuppressLint;
import android.app.AlertDialog;
import android.content.Intent;
import android.database.Cursor;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;


import androidx.appcompat.app.AppCompatActivity;

import java.util.ArrayList;

public class HighScoreScreen extends AppCompatActivity implements View.OnClickListener {
    Button button1;
    DBHelper myDb;
    ArrayList<String> stringList = new ArrayList<String>();
    @SuppressLint("MissingInflatedId")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.highscore_screen);
        button1 = findViewById(R.id.backBtn);
        button1.setOnClickListener(this);
        myDb = new DBHelper(HighScoreScreen.this);
        //myDb.insertIntoDB("brandon",6000,"2022-09-24 10:54:23");
        //myDb.deleteDataDB("brandon6");
        Cursor res = myDb.getAllData();
        if(res.getCount() == 0){

        }
        StringBuffer buffer = new StringBuffer();
        String data[] = new String[100];
        int k = 0;
        while(res.moveToNext()){
            //buffer.append("Name : " + res.getString(0) + " ");
            //buffer.append("Score : " + res.getString(1) + " ");
            // buffer.append("Date : " + res.getString(2) + "\n");

            data[k] = res.getString(0);
            k ++;
            data[k] = res.getString(1);
            k ++;
            data[k] = res.getString(2);
            k ++;
        }
        // Text view of top 10 players
        TextView textView = findViewById(R.id.score1);
        textView.setText(data[0]);
        TextView textView2 = findViewById(R.id.score2);
        textView2.setText(data[1]);
        TextView textView3 = findViewById(R.id.score3);
        textView3.setText(data[2]);
        TextView textView4 = findViewById(R.id.score4);
        textView4.setText(data[3]);
        TextView textView5 = findViewById(R.id.score5);
        textView5.setText(data[4]);
        TextView textView6 = findViewById(R.id.score6);
        textView6.setText(data[5]);
        TextView textView7 = findViewById(R.id.score7);
        textView7.setText(data[6]);
        TextView textView8 = findViewById(R.id.score8);
        textView8.setText(data[7]);
        TextView textView9 = findViewById(R.id.score9);
        textView9.setText(data[8]);
        TextView textView10 = findViewById(R.id.score10);
        textView10.setText(data[9]);
        TextView textView11 = findViewById(R.id.score11);
        textView11.setText(data[10]);
        TextView textView12 = findViewById(R.id.score12);
        textView12.setText(data[11]);
        TextView textView13 = findViewById(R.id.score13);
        textView13.setText(data[12]);
        TextView textView14 = findViewById(R.id.score14);
        textView14.setText(data[13]);
        TextView textView15 = findViewById(R.id.score15);
        textView15.setText(data[14]);
        TextView textView16 = findViewById(R.id.score16);
        textView16.setText(data[15]);
        TextView textView17 = findViewById(R.id.score17);
        textView17.setText(data[16]);
        TextView textView18 = findViewById(R.id.score18);
        textView18.setText(data[17]);
        TextView textView19 = findViewById(R.id.score19);
        textView19.setText(data[18]);
        TextView textView20 = findViewById(R.id.score20);
        textView20.setText(data[19]);
        TextView textView21 = findViewById(R.id.score21);
        textView21.setText(data[20]);
        TextView textView22 = findViewById(R.id.score22);
        textView22.setText(data[21]);
        TextView textView23 = findViewById(R.id.score23);
        textView23.setText(data[22]);
        TextView textView24 = findViewById(R.id.score24);
        textView24.setText(data[23]);
        TextView textView25 = findViewById(R.id.score25);
        textView25.setText(data[24]);
        TextView textView26 = findViewById(R.id.score26);
        textView26.setText(data[25]);
        TextView textView27 = findViewById(R.id.score27);
        textView27.setText(data[26]);



        /*AlertDialog.Builder builder = new AlertDialog.Builder(HighScoreScreen.this);
        builder.setCancelable(true);
        builder.setTitle("user entries");
        builder.setMessage(buffer.toString());
        builder.show();*/

    }
    public void onClick(View v){
        switch (v.getId()) {
            case R.id.backBtn:
                Intent i2 = new Intent(HighScoreScreen.this, HomeScreen.class);
                finish();
                startActivity(i2);
                break;
            default:
                break;
        }
    }

}
