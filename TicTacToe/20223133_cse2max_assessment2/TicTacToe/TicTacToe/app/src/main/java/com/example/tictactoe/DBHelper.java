package com.example.tictactoe;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

import java.util.ArrayList;

public class DBHelper extends SQLiteOpenHelper {
    public static final String DATABASE_NAME ="DbName.db";
    public static final String TABLE_NAME ="high_score_players";
    public static final String COLUMN_NAME ="playerName";
    public static final String COLUMN_SCORE ="playerScore";
    public static final String COLUMN_DATE ="dateAndTime";


    public DBHelper(Context context){
        super(context, DATABASE_NAME, null,1);
    }

    @Override
    public void onCreate(SQLiteDatabase db) {
        // method to execute above sql query
        db.execSQL("create Table high_score_players(playerName TEXT primary key,playerScore TEXT,dateAndTime TEXT)");
    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
        db.execSQL("DROP TABLE IF EXISTS high_score_players");
        onCreate(db);
    }

    public boolean insertIntoDB(String playerName, int playerScore,String dateAndTime){
        SQLiteDatabase db = this.getWritableDatabase();
        //inserting data
        ContentValues contentValues = new ContentValues();
        contentValues.put(COLUMN_NAME, playerName);
        contentValues.put(COLUMN_SCORE, playerScore);
        contentValues.put(COLUMN_DATE, dateAndTime);
        db.insert("high_score_players",null, contentValues);
        return true;
    }

    public boolean updateDataDB(String playerName, int playerScore,String dateAndTime){
        SQLiteDatabase db = this.getWritableDatabase();
        //inserting data
        ContentValues contentValues = new ContentValues();
        contentValues.put(COLUMN_NAME, playerName);
        contentValues.put(COLUMN_SCORE, playerScore);
        contentValues.put(COLUMN_DATE, dateAndTime);
        Cursor cursor = db.rawQuery("Select *from high_score_players where playerName = ?", new String[]{playerName});
        if(cursor.getCount()>0){
            long result = db.update("high_score_players", contentValues, "playerName=?",new String[]{playerName});
            if(result ==-1){
                return false;
            } else{
                return true;
            }
        }
        else{
            return false;
        }

    }

    public boolean deleteDataDB(String playerName){
        SQLiteDatabase db = this.getWritableDatabase();
        //inserting data
        Cursor cursor = db.rawQuery("Select *from high_score_players where playerName = ?", new String[]{playerName});
        if(cursor.getCount()>0){
            long result = db.delete("high_score_players", "playerName=?",new String[]{playerName});
            if(result ==-1){
                return false;
            } else{
                return true;
            }
        }
        else{
            return false;
        }
    }

    public Cursor getAllData(){
        ArrayList<String> array_list = new ArrayList<>();
        SQLiteDatabase db = this.getReadableDatabase();
        Cursor cursor =db.rawQuery("select * from high_score_players ORDER BY playerScore DESC",null);
        return cursor;
    }

    public void deleteALL(){
        SQLiteDatabase db = this.getWritableDatabase();
        db.delete(TABLE_NAME,null,null);
    }

}
