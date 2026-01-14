function calculateBMI() {
    let weight = Number(document.getElementById("weight").value);//js ma sabai string ma hunxa so Number ma convert garna parxa
    let height = Number(document.getElementById('height').value); // value reads user input
    let bmi = weight / (height * height);
    bmi = Number(bmi.toFixed(2));
    let result = "Your BMI is " + bmi;

    if(bmi<18.59){
        result += "<br>You are underweight";
    }else if (bmi>=18.6 && bmi<=24.99){
        result += "<br>You have a normal weight";
    }else if (bmi>=25 && bmi<=29.99){
        result += "<br>You are overweight";
    }else{
        result += "<br>You are obese";
    }
    document.getElementById("result").innerHTML = result;
//Browser finds the <p id="result"> element
//Replaces its inner content only
//The rest of the page is untouched
}
