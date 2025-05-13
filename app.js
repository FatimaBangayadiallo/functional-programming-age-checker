//1 selecting the elements

const ageInput = document.getElementById('age');
const demo = document.querySelector('.demo');
const form = document.querySelector('.form');



// 1 sanitize the the input
 const getInput = () =>{
    let inputValue = ageInput.value.trim();
     if(inputValue === ""){
        return null; //return null to cathc is later
     }
    return Number(inputValue);
 }
 //3 demo 
  const demoSuccess = function(){
       return demo.classList.add('success');
  }
  const demoFailde = function(){
    return demo.classList.add('failed');
  }

 //2 check categorie
 const checkCategorie = (age) =>{
    if(isNaN(age) || age <0  || age === null){
        return {message:'Please enter a valid age', status: 'failed'}
         
    }
    if(age <=12){
        return {message:'Please you are a child.', status: 'success'}
        
    }
    if(age <= 17){
        return {message:'You are a teenager', status:'success'}
    }
    if(age <=59){
        return {message:'You are an adult',status:'success'}   
      }
   return{message:'You are a wise man', status:'success'};
 };

 //4 output -show message and style
 const displayMessage = function({message, status}){
    demo.textContent = message;
    demo.className ='demo ' //reset previous class
    demo.classList.add(status);


    //here for the input
    ageInput.className = "age";
    ageInput.classList.add(status);
 }

 function run(){
    const allValues = getInput();
    const logic = checkCategorie(allValues);
    if(logic){
        displayMessage(logic);
        ageInput.value = "";
    }

 }



//event listener
const ageChecker = function(e){
    e.preventDefault();
    run();
};

form.addEventListener('submit', ageChecker);


/**
 * 
 * ✅ Add a little fade-in animation to the message

✅ Try creating a new mini-project like:

BMI calculator

Simple quiz app

Random quote generator


 */