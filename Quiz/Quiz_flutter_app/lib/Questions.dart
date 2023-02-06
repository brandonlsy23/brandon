class Question{
  final int id, answer;
  final String question;
  final List<String> options;

  Question({required this.id, required this.question, required this.answer, required this.options});
}

// ignore: constant_identifier_names
const List sample_data =[
  {
    "id": 1,
    "question": "Under which of the following Android is licensed?",
    "options": ['OSS','Sourceforge','Apache/MIT','None of the above'],
    "answer_index" : 2,
  },
  {
    "id": 2,
    "question": "Android is based on which of the following language?",
    "options": ['Java','C++','C','None of the above'],
    "answer_index" : 0,
  },
  {
    "id": 3,
    "question": "APK stands for -",
    "options": ['Android Phone Kit','Android Page Kit','Android Package Kit','None of the above'],
    "answer_index" : 2,
  },
  {
    "id": 4,
    "question": "Which of the following is the first callback method that is invoked by the system during an activity life-cycle?",
    "options": ['onClick() method','onCreate() method','onStart() method','onRestart() method'],
    "answer_index" : 1,
  },
  {
    "id": 5,
    "question": " Which of the following is not an activity lifecycle callback method?",
    "options": ['onClick() method','onCreate() method','onStart() method','onBackPressed() method'],
    "answer_index" : 3,
  },
  {
    "id": 6,
    "question": "  Which of the following is the parent class of service?",
    "options": ['context','object','contextThemeWrapper','contextWrapper'],
    "answer_index" : 3,
  },
  {
    "id": 7,
    "question": " NDK stands for -",
    "options": ['Native Development Kit','New Development kit','Native Design Kit','None of the above'],
    "answer_index" : 0,
  },
  {
    "id": 8,
    "question": " Which of the following is contained in the src folder?",
    "options": ['XML','Java source code','Manifest','None of the above'],
    "answer_index" : 1,
  },
  {
    "id": 9,
    "question": " Which of the following method is used to handle what happens after clicking a button?",
    "options": ['onClick','onCreate','onSelect','None of the above'],
    "answer_index" : 0,
  },
  {
    "id": 10,
    "question": " Which of the following android component displays the part of an activity on screen?",
    "options": ['View','Manifest','Intent','Fragment'],
    "answer_index" : 3,
  },
];