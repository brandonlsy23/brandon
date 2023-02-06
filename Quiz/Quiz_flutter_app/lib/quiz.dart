import 'package:flutter/material.dart';
import 'package:quiz_flutter_app/Questions.dart';
import 'package:quiz_flutter_app/scoreScreen.dart';
 int questionNo = 0;
 int questionID = 1;
 int score = 0;
class QuizGame extends StatelessWidget {
  const QuizGame({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        scaffoldBackgroundColor:Colors.blueGrey,
      ),
      home: const QuizPage(title: 'Quiz game'),
    );
  }
}

class QuizPage extends StatefulWidget {
  const QuizPage({super.key, required this.title});
  final String title;
  @override
  State<QuizPage> createState() => _QuizPageState();
}
getScore(){
  return score;
}
class _QuizPageState extends State<QuizPage> {
  @override
  Widget build(BuildContext context) {
    // ignore: no_leading_underscores_for_local_identifiers
    void _incrementCounter() {
      setState(() {
        questionNo++;
      });
    }

    return Scaffold(
      appBar: AppBar(
        actions:[
          // ignore: prefer_const_constructors
          ElevatedButton(onPressed: (){
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => const ScoreScreen()),
            );
            // ignore: prefer_const_constructors
          }, child: Text("SUBMIT")),
        ],
        title: Text(widget.title),
        centerTitle: true,
      ),
      body: Center(
        child: Column(children:<Widget>[
          const Text("This game consist of 10 question",
          style:TextStyle(
            height: 2,
            color:Colors.black,
            fontSize: 18,
          ),
          ),

          const Text("Each question has 4 options and only 1 answer.",
            textAlign: TextAlign.center,
            style:TextStyle(
              color:Colors.black,
              fontSize: 18,
            ),
          ),

          Text.rich(TextSpan(
            text:(
              "Question $questionID"
            ),
            style: const TextStyle(
              height: 2,
              fontSize: 25,
            ),
            children:const [
              TextSpan(
                text: "/10",
                style: TextStyle(
                  fontSize: 25,
                )
              ),
            ]
          ),
          ),
          const Divider(thickness: 1.5),
          // ignore: prefer_const_constructors
          SizedBox(height: 20.0),
          Container(
            padding: const EdgeInsets.all(20),
            decoration:  BoxDecoration(
                color: Colors.white,
              borderRadius: BorderRadius.circular(25),
            ),
            child: Column(
              children: [
                Text(
                  sample_data[questionNo]['question'],
                  style:const TextStyle(
                    fontSize: 20,
                  )
                ),
                InkWell(
                  child: Container(
                    // ignore: prefer_const_constructors
                    margin: EdgeInsets.only(top: 20.0),
                    // ignore: prefer_const_constructors
                    padding: EdgeInsets.all(20),
                    decoration: BoxDecoration(
                      border: Border.all(color: Colors.grey),
                      borderRadius: BorderRadius.circular(15),
                    ),

                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                       // ignore: prefer_const_literals_to_create_immutables
                       children:  [
                         // ignore: prefer_const_constructors
                         Text(
                           sample_data[questionNo]['options'][0],
                           style: const TextStyle(color: Colors.blueGrey, fontSize: 18),
                         ),
                       ],
                      ),
                  ),
                  onTap: (){
                    // ignore: prefer_const_constructors
                    if(sample_data[questionNo]['answer_index'] ==0){
                      if(questionNo<9) {
                        _incrementCounter();
                        questionID++;
                      }
                      else{
                        Navigator.push(
                          context,
                          MaterialPageRoute(builder: (context) => const ScoreScreen()),
                        );
                      }
                      score++;
                    }
                    else{
                      if(questionNo<9) {
                        _incrementCounter();
                        questionID++;
                      }
                      else{
                        Navigator.push(
                          context,
                          MaterialPageRoute(builder: (context) => const ScoreScreen()),
                        );
                      }

                    }
                  },
                ),

                InkWell(
                  child: Container(
                    // ignore: prefer_const_constructors
                    margin: EdgeInsets.only(top: 20.0),
                    // ignore: prefer_const_constructors
                    padding: EdgeInsets.all(20),
                    decoration: BoxDecoration(
                      border: Border.all(color: Colors.grey),
                      borderRadius: BorderRadius.circular(15),
                    ),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      // ignore: prefer_const_literals_to_create_immutables
                      children:  [
                        // ignore: prefer_const_constructors
                        Text(
                          sample_data[questionNo]['options'][1],
                          style: const TextStyle(color: Colors.blueGrey, fontSize: 18),
                        ),
                      ],
                    ),
                  ),
                  onTap: (){
                    // ignore: prefer_const_constructors
                    if(sample_data[questionNo]['answer_index'] ==1){
                      if(questionNo<9) {
                        _incrementCounter();
                        questionID++;
                      }
                      else{
                        Navigator.push(
                          context,
                          MaterialPageRoute(builder: (context) => const ScoreScreen()),
                        );
                      }
                    score++;
                    }
                    else{
                      if(questionNo<9) {
                        _incrementCounter();
                        questionID++;
                      }
                      else{
                        Navigator.push(
                          context,
                          MaterialPageRoute(builder: (context) => const ScoreScreen()),
                        );
                      }

                    }
                  },
                ),

                InkWell(
                  child: Container(
                    // ignore: prefer_const_constructors
                    margin: EdgeInsets.only(top: 20.0),
                    // ignore: prefer_const_constructors
                    padding: EdgeInsets.all(20),
                    decoration: BoxDecoration(
                      border: Border.all(color: Colors.grey),
                      borderRadius: BorderRadius.circular(15),
                    ),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      // ignore: prefer_const_literals_to_create_immutables
                      children:  [
                        // ignore: prefer_const_constructors
                        Text(
                          sample_data[questionNo]['options'][2],
                          style: const TextStyle(color: Colors.blueGrey, fontSize: 18),
                        ),
                      ],
                    ),
                  ),
                  onTap: (){
                    // ignore: prefer_const_constructors
                    if(sample_data[questionNo]['answer_index'] ==2){
                      if(questionNo<9) {
                        _incrementCounter();
                        questionID++;
                      }
                      else{
                        Navigator.push(
                          context,
                          MaterialPageRoute(builder: (context) => const ScoreScreen()),
                        );
                      }
                      score++;
                    }
                    else{
                      if(questionNo<9) {
                        _incrementCounter();
                        questionID++;
                      }
                      else{
                        Navigator.push(
                          context,
                          MaterialPageRoute(builder: (context) => const ScoreScreen()),
                        );
                      }

                    }
                  },
                ),

                InkWell(
                  child: Container(
                    // ignore: prefer_const_constructors
                    margin: EdgeInsets.only(top: 20.0),
                    // ignore: prefer_const_constructors
                    padding: EdgeInsets.all(20),
                    decoration: BoxDecoration(
                      border: Border.all(color: Colors.grey),
                      borderRadius: BorderRadius.circular(15),
                    ),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      // ignore: prefer_const_literals_to_create_immutables
                      children:  [
                        // ignore: prefer_const_constructors
                        Text(
                          sample_data[questionNo]['options'][3],
                          style: const TextStyle(color: Colors.blueGrey, fontSize: 18),
                        ),
                      ],
                    ),
                  ),
                  onTap: (){
                    // ignore: prefer_const_constructors
                    if(sample_data[questionNo]['answer_index'] ==3){
                      if(questionNo<9) {
                        _incrementCounter();
                        questionID++;
                      }
                      else{
                        Navigator.push(
                          context,
                          MaterialPageRoute(builder: (context) => const ScoreScreen()),
                        );
                      }
                      score++;
                    }
                    else{
                      if(questionNo<9) {
                        _incrementCounter();
                        questionID++;
                      }
                      else{
                        Navigator.push(
                          context,
                          MaterialPageRoute(builder: (context) => const ScoreScreen()),
                        );
                      }

                    }
                  },
                ),
              ],
            ),
          ),
        ]),
      ),
    );
  }
}