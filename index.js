const questions = [
    {
      question: "Como você declara uma variável em JavaScript?",
      answer: [
        "var myVar;",
        "variable myVar;",
        "let myVar;",
      ],
      correct: 2
    },
    {
      question: "Qual é a saída do seguinte código?\nconsole.log(2 + '2' + 2);",
      answer: [
        "222",
        "6",
        "Erro",
      ],
      correct: 0
    },
    {
      question: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      answer: [
        "push()",
        "addToEnd()",
        "append()",
      ],
      correct: 0
    },
    {
      question: "Como você pode verificar o tipo de uma variável em JavaScript?",
      answer: [
        "typeof",
        "typeOf",
        "typeof()",
      ],
      correct: 0
    },
    {
      question: "Qual símbolo é usado para comentários de uma única linha em JavaScript?",
      answer: [
        "//",
        "/* */",
        "#",
      ],
      correct: 0
    },
    {
      question: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      answer: [
        "pop()",
        "removeLast()",
        "deleteLast()",
      ],
      correct: 0
    },
    {
      question: "Qual é a maneira correta de escrever um loop 'for' em JavaScript?",
      answer: [
        "for (var i = 0; i < array.length; i++)",
        "for (i = 0; i < array.length; i++)",
        "for (i = 0; i <= array.length; i++)",
      ],
      correct: 0
    },
    {
      question: "Qual é o operador de igualdade estrita em JavaScript?",
      answer: [
        "==",
        "===",
        "!=",
      ],
      correct: 1
    },
    {
      question: "Qual é o resultado de 3 + 2 + '7' em JavaScript?",
      answer: [
        "12",
        "327",
        "57",
      ],
      correct: 2
    },
    {
      question: "O que o método 'querySelector()' faz em JavaScript?",
      answer: [
        "Seleciona o primeiro elemento que corresponde a um seletor CSS especificado",
        "Seleciona todos os elementos que correspondem a um seletor CSS especificado",
        "Seleciona um elemento pelo seu ID",
      ],
      correct: 0
    },
  ];
  
   const quiz = document.querySelector('#quiz');
   const template = document.querySelector('template');
  
   const corrects = new Set();
  
   for(const item of questions){
     const quizItem = template.content.cloneNode(true);
     quizItem.querySelector('h3').textContent = item.question;
   
    for(let answer of item.answer){
      const dt = quizItem.querySelector('dl dt').cloneNode(true);
      dt.querySelector('span').textContent = answer;
      dt.querySelector('input').setAttribute('name', 'answer-' + questions.indexOf(item));
      dt.querySelector('input').value = item.answer.indexOf(answer);
      // Entering the ID
      dt.querySelector('input').setAttribute('id', 'disableInput');
  
      dt.querySelector('input').onchange = (event) => {
        correctsAnswer(event, item);
      }
  
      quizItem.querySelector('dl').appendChild(dt);
    }
  
    quizItem.querySelector('dl dt').remove();
  
    quiz.appendChild(quizItem);
  }
  
  // The function validates if the selected question is correct
  function correctsAnswer(event, item){
    corrects.delete(item);
    
    if(event.target.value == item.correct){
      corrects.add(item);
    }

    // Validation of total correct questions or not and disabled inputs
    if(questions.length == corrects.size){
      totalCorrectsAnswer();
      disableInput();
      document.querySelector('#h1-text').setAttribute('class', 'allCorrects');
      document.querySelector('#corrects').setAttribute('class', 'allCorrects');

    }else{
      answerCounter();
    }
  }
  
  // the function keeps the adjustments in the footer updated 
  function answerCounter(){
    const totalQuestions = questions.length; 
    const showTotal = document.querySelector('#corrects span');

    showTotal.innerHTML = "<strong>Correct questions</strong> " + corrects.size + ' de ' + totalQuestions;
  }

  // The function updates the message when the student gets all the questions correct
  function totalCorrectsAnswer(){
    const corrects = document.querySelector("#corrects span");
    corrects.innerHTML = "<strong>Congratulations! That's awesome!</strong>";
  }

  // The function don't allow you to mark the inputs after mark all the answers correct
  function disableInput(){
    var disableInputs = document.querySelectorAll('#disableInput');
    disableInputs.forEach(function(input) {
      input.disabled = true;
    });
  }