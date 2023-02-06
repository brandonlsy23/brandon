import 'dart:io';

import 'package:flutter/material.dart';
import 'package:quiz_flutter_app/quiz.dart';
int score = getScore();
class ScoreScreen extends StatelessWidget {
  const ScoreScreen({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const ScorePage(title: 'Score Screen'),
    );
  }
}

class ScorePage extends StatefulWidget {
  const ScorePage({super.key, required this.title});
  final String title;
  @override
  State<ScorePage> createState() => _ScorePageState();
}

class _ScorePageState extends State<ScorePage> {
  @override
  Widget build(BuildContext context) {

    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
        centerTitle: true,
      ),
      // ignore: prefer_const_constructors
      body: Center(
        child: Column(children: <Widget>[
          // ignore: prefer_const_constructors
          Text( "Your score is : ",
            // ignore: prefer_const_constructors
            style:TextStyle(
              height: 5,
              color:Colors.black,
              fontSize: 18,
            ),
          ),
          // ignore: prefer_const_constructors
          Text.rich(TextSpan(
              text:(
                  "$score"
              ),
              // ignore: prefer_const_constructors
              style: TextStyle(
                height: 2,
                fontSize: 25,
              ),
              // ignore: prefer_const_literals_to_create_immutables
              children: [
                // ignore: prefer_const_constructors
                TextSpan(
                    text: "/10",
                    // ignore: prefer_const_constructors
                    style: TextStyle(
                      fontSize: 25,
                    )
                ),
              ]
            ),
          ),

          // ignore: prefer_const_constructors
          Text( "Thank you for playing with us.",
            // ignore: prefer_const_constructors
            style:TextStyle(
              height: 5,
              color:Colors.black,
              fontSize: 18,
            ),
          ),
          Container(
            // ignore: prefer_const_constructors
            margin:EdgeInsets.all(25),
            child: TextButton(
              onPressed: () {
                exit(0);
              },
              child: const Text('Exit',
                  style: TextStyle(fontSize: 20),
              ),
            ),
          ),

       ]),
      ),
    );
  }
}