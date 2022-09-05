const question = document.querySelector('#question');
const choices = array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let available = []

let questions = [
    {
        question: 'What was Bryans character name in Malcom in the Middle?',
        choice1: 'Hal Wilkerson',
        choice2: 'The one who knocks',
        choice3: 'Willy Wonka',
        choice4: 'Lenny',
        answer: 1,
    },
    {
        question: 'What was Bryans character name in Trumbo?',
        choice1: 'Billy the Stone',
        choice2: 'Ronald Mcdonald',
        choice3: 'Dalton',
        choice4: 'Miss Frizzle',
        answer: 3,
    },
    {
        question: 'What was Bryans character name in Argo?',
        choice1: 'Dr. Phil',
        choice2: 'Jack ODonnel',
        choice3: 'Randy Hook',
        choice4: 'Brad Pitt',
        answer: 2,
    },
    {
        question: 'What was Bryans character name in Chicago Hope?',
        choice1: 'Peter Pan',
        choice2: 'Skeeter',
        choice3: 'Plato',
        choice4: 'Jesus',
        answer: 4,
    },
    {
        question: 'What was Bryans character name in The X-Files?',
        choice1: 'Larry The Cable Guy',
        choice2: 'Bruce',
        choice3: 'Scott Daniels',
        choice4: 'Patrick Crump',
        answer: 4,
    },
    {
        question: 'What was Bryans character name in Time under Fire?',
        choice1: 'Sam',
        choice2: 'Donny',
        choice3: 'Captain Kirk',
        choice4: 'Braddok',
        answer: 4,
    },
    {
        question: 'What was Bryans character name in The Lincoln Lawayer?',
        choice1: 'Detective Lankford',
        choice2: 'Detective James Bond',
        choice3: 'Detective Randy Jackson',
        choice4: 'Detective Feel Good',
        answer: 1,
    },
    {
        question: 'What was Bryans character name in Red Tails?',
        choice1: 'Sgt. Don Hammer',
        choice2: 'Colonel William Mortamus',
        choice3: 'Officer Aaron Paul',
        choice4: 'Billy The Bill Billyson',
        answer: 2,
    },
    {
        question: 'What was Bryans character name in Archer?',
        choice1: 'Captain Phillips',
        choice2: 'Tom Cruise',
        choice3: 'Commander Tony Drake',
        choice4: 'Tom Janks',
        answer: 3,
    },
    {
        question: 'What was Bryans character name in The Infiltrator?',
        choice1: 'Steve Knobs',
        choice2: 'Billy Wesley',
        choice3: 'Robert Mazur',
        choice4: 'The Zebra',
        answer: 3,
    },
]