
//darkmode and sonmode

const darkModeIcon = document.querySelector('#icon-darkmode');
const sonDarkIcon = document.querySelector('#icon-sonmode');
const body = document.querySelector('body');
const titleAge = document.querySelector('.title-age')
const titleText = document.querySelector('.title-text')
const container = document.querySelector('.container')
const spanResultYear = document.querySelector('.text_result-year')
const spanResultMonth = document.querySelector('.text_result-month')
const spanResultDay = document.querySelector('.text_result-day')
const spanResultHour = document.querySelector('.text_result-hour')


//function of DarkMode
const darkmode = () => {

    //change to darkmode
    darkModeIcon.classList.add('inactive')
    sonDarkIcon.classList.remove('inactive')
  //change colors
    body.style.background = 'hsl(0, 0%, 4%)'
    titleAge.style.color = 'hsl(259, 90%, 65%)'
    titleText.style.color = 'hsl(0, 0%, 30%)'
    container.style.background = 'hsl(0, 0%, 0%)'
    spanResultYear.style.color = 'hsl(0, 0%, 90%)'
    spanResultMonth.style.color = 'hsl(0, 0%, 90%)'
    spanResultDay.style.color = 'hsl(0, 0%, 90%)'
    spanResultHour.style.color = 'hsl(0, 0%, 90%)'
    container.style.borderColor='hsl(0, 0%, 86%)';
}

//fuction of sunmode
const sunmode = () =>{
     //change to darkmode
     darkModeIcon.classList.remove('inactive')
     sonDarkIcon.classList.add('inactive')
   //change colors
     body.style.background = 'hsl(0, 0%, 94%)'
     titleAge.style.color = 'hsl(259, 100%, 65%)'
     titleText.style.color = 'hsl(0, 0%, 40%)'
     container.style.background = 'hsl(0, 0%, 100%)'
     spanResultYear.style.color = 'hsl(0, 1%, 44%)'
     spanResultMonth.style.color = 'hsl(0, 1%, 44%)'
     spanResultDay.style.color = 'hsl(0, 1%, 44%)'
     spanResultHour.style.color = 'hsl(0, 1%, 44%)'
}

darkModeIcon.addEventListener('click', darkmode);
sonDarkIcon.addEventListener('click', sunmode);


//calculate age

//butoon and inputs
const buttonCalculator = document.querySelector('.button_calculator')
const monthInput = document.querySelector('.input-month')
const yearInput = document.querySelector('.input-year')
const dayInput = document.querySelector('.input-day')

const textErroDay = document.querySelector('.text_error_day');
const textErroMonth = document.querySelector('.text_error_month');
const textErroYear = document.querySelector('.text_error_year');

//text result
const textResultYear = document.querySelector('.text_result_year');
const textResultMonth = document.querySelector('.text_result_month');
const textResultDay = document.querySelector('.text_result_day');
const textFinal = document.querySelector('.masage-span');

const calculate = () =>{

  //dates
    let month = monthInput.valueAsNumber;
    let year =  yearInput.valueAsNumber;
    let day = dayInput.valueAsNumber;
    const fechaActual = new Date();
    let dia = fechaActual.getDate();
    let mes = (fechaActual.getMonth() + 1);
    let anio = fechaActual.getFullYear();
    let jenuary = 0;
    

    //age calculada
    let yearTotal = anio - year;
    let monthTotal = 0;
    let dayTotal = 0;

    if(month > mes || (mes === month && dia < day)){
      yearTotal = yearTotal - 1;  
    }
    if (month < mes) {
      monthTotal =  Math.abs(month - mes)
    }else{
      monthTotal =  Math.abs(mes - month)
    }
    
    if(day < dia){
      dayTotal = Math.abs(day - dia)
    }else{
      dayTotal = Math.abs(dia - day)
    }
    
    

  //DATE INCORRET style and text error
  
  //day
  if(day > 30 || day <= 0){
    textErroDay.innerHTML = 'must be a valid day';
    textErroDay.style.color=  ' hsl(0, 100%, 67%)';
    dayInput.style.border='1px solid  hsl(0, 100%, 67%)';
  }else if(dayInput.value == ''){
    textErroDay.innerHTML='this field is request'
    textErroDay.style.color=  ' hsl(0, 100%, 67%)';
    dayInput.style.border='1px solid  hsl(0, 100%, 67%)';
  }else{
    textErroDay.innerHTML='';
    dayInput.style.border='';
    day = true;
  };

  //month
  if(month > 12 || month <= 0){
    textErroMonth.innerHTML = 'must be a valid month';
    textErroMonth.style.color=  ' hsl(0, 100%, 67%)';
    monthInput.style.border='1px solid  hsl(0, 100%, 67%)';
  }else if(monthInput.value == ''){
    textErroMonth.innerHTML='this field is request'
    textErroMonth.style.color=  ' hsl(0, 100%, 67%)';
    monthInput.style.border='1px solid  hsl(0, 100%, 67%)';
  }else{
    textErroMonth.innerHTML='';
    monthInput.style.border='';
    month = true;
  };

  //year
  if(year > anio){
    textErroYear.innerHTML = 'must be a valid year';
    textErroYear.style.color=  ' hsl(0, 100%, 67%)';
    yearInput.style.border='1px solid  hsl(0, 100%, 67%)';
  }else if(yearInput.value == ''){
    textErroYear.innerHTML='this field is request'
    textErroYear.style.color=  ' hsl(0, 100%, 67%)';
    yearInput.style.border='1px solid  hsl(0, 100%, 67%)';
  }else{
    textErroYear.innerHTML='';
    yearInput.style.border='';
    year = true;
  };
 

  //calcular
  if(day == true && month == true && year == true){
    textResultYear.innerHTML= yearTotal;
    textResultMonth.innerHTML= monthTotal;
    textResultDay.innerHTML= dayTotal
    textFinal.innerHTML = yearTotal
  };
  

}



buttonCalculator.addEventListener('click', calculate);

//button reset

//button reset
const buttonReset = document.querySelector('.button_reset')
const inputs = document.querySelectorAll('.input')

function resetInput(){
  inputs.forEach(input => {
    input.value = "";
  });
  //text error
  textErroDay.innerHTML = '';
  dayInput.style.border='';
  textErroMonth.innerHTML = '';
  monthInput.style.border='';
  textErroYear.innerHTML = '';
  yearInput.style.border='';
};

buttonReset.addEventListener('click', resetInput);

