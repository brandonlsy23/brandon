import 'dart:io';
import 'package:flutter/material.dart';
import 'package:quiz_flutter_app/Questions.dart';
import 'package:quiz_flutter_app/quiz.dart';

void main() {
  runApp(const MyApp());

}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        // This is the theme of your application.
        //
        // Try running your application with "flutter run". You'll see the
        // application has a blue toolbar. Then, without quitting the app, try
        // changing the primarySwatch below to Colors.green and then invoke
        // "hot reload" (press "r" in the console where you ran "flutter run",
        // or simply save your changes to "hot reload" in a Flutter IDE).
        // Notice that the counter didn't reset back to zero; the application
        // is not restarted.
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(title: 'Welcome to quiz game'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});
  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {

    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
        centerTitle: true,
      ),
      body: Center(
        child: Column(children:<Widget>[
          Container(
            height: 150,
            margin:EdgeInsets.all(25),
            child: TextButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => const QuizGame()),
                );
              },
              child: const Text('Start Quiz',
                  style: TextStyle(fontSize: 30)
              ),
            ),
          ),
          Container(
            margin:EdgeInsets.all(25),
            child: TextButton(
              onPressed: () {
                exit(0);
              },
              child: const Text('Exit',
                  style: TextStyle(fontSize: 30)
              ),
            ),
          ),
        ]),
      ),
    );
  }
}
