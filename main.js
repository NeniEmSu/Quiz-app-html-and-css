function submitAnswers() {
    var total = 5;
    var score = 0;

    var q1 = document.forms.quizForm.q1.value;
    var q2 = document.forms.quizForm.q2.value;
    var q3 = document.forms.quizForm.q3.value;
    var q4 = document.forms.quizForm.q4.value;
    var q5 = document.forms.quizForm.q5.value;


    for (i = 1; i <= total; i++) {
        if (eval('q' + i) == null || eval('q' + i) == '') {
            alert('you missed question ' + i);
            return false;
        }

    }

    var answers = ['a', 'b', 'c', 'd', 'a'];

    for (j = 1; j <= total; j++) {
        if (eval('q' + j) == answers[j - 1]) {
            score++;
        }

    }
    // if (q1 == answers[0]) {
    //     score++
    // }
    // if (q2 == answers[1]) {
    //     score++
    // }
    // if (q3 == answers[2]) {
    //     score++
    // }
    // if (q4 == answers[3]) {
    //     score++
    // }
    // if (q5 == answers[4]) {
    //     score++
    // }


    var results = document.getElementById('results');

    results.innerHTML = '<h3>You scored <span>' + score + '</span> out of <span>' + total + '</span></h3>';
    alert('You scored ' + score + ' out of ' + total);
    return false;

}