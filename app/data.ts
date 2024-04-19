export interface Quest {
  id: number;
  question: string;
  answers: string[];
  correctAnswer: string;
}
interface Quiz {
  totalQuestions: number;
  questions: Quest[];
}

export const quiz: Quiz = {
  totalQuestions: 4,
  questions: [
    {
      id: 1,
      question: 'Какой язык работает в браузере?',
      answers: ['Java', 'C', 'Python', 'JavaScript'],
      correctAnswer: 'javascript',
    },
    {
      id: 2,
      question: 'Что означает CSS?',
      answers: [
        'Central Style Sheets',
        'Cascading Style Sheets',
        'Cascading Simple Sheets',
        'Cars SUVs Sailboats',
      ],
      correctAnswer: 'cascadingstylesheets',
    },
    {
      id: 3,
      question: 'Что означает HTML?',
      answers: [
        'Hypertext Markup Language',
        'Hypertext Markdown Language',
        'Hyperloop Machine Language',
        'Helicopters Terminals Motorboats Lamborginis',
      ],
      correctAnswer: 'hypertextmarkdownlanguage',
    },
    {
      id: 4,
      question: 'Какой язык работает в браузере?',
      // answers: [''],
      correctAnswer: 'javascript',
    },
    {
      id: 5,
      question: 'Что означает HTML?',
      answers: [
        'Hypertext Markup Language',
        'Hypertext Markdown Language',
        'Hyperloop Machine Language',
        'Helicopters Terminals Motorboats Lamborginis',
      ],
      correctAnswer: 'hypertextmarkuplanguage',
    },
    {
      id: 6,
      question: 'В каком году был создан JavaScript?',
      answers: ['1996', '1995', '1994', 'все ответы неверные'],
      correctAnswer: '1995',
    },
  ],
};
