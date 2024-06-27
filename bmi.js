// var w = parseFloat(prompt("input your weight"));
// var h = parseFloat(prompt("input your height"));
// var heightSquare = h * h
// var bmi = w / heightSquare;

// if(isNaN(h) || isNaN(w)){
//     alert("weight and height must be number")
// }else if(bmi < 18.5){
//     alert("your bmi is within underweight: " + bmi)
// }else if(bmi > 18.5 && bmi < 29.9){
//     alert("your bmi is overweight: " + bmi)
// }else{
//     alert("ERROR enter the correct data")
// }

function calculate(){
    const weight = document.querySelector('.weight').value;
    const height = document.querySelector('.height').value;
    const text = document.querySelector('.btn2')
    let result = 0;
    const res = document.querySelector('.number-res')
    result = Math.round(weight / height ** 2)
    res.textContent = `${result}`

    if(result < 18.5){
        text.textContent = "UNDERWEIGHT"
        
    }else if(result > 18.5 && result < 29.9){
        text.textContent = "OVERWEIGHT"
    }else{
        Swal.fire({
            icon: "error",
            title:"ERROR enter the correct data",
          });
    }
}
