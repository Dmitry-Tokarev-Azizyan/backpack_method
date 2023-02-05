
const weight_1 = document.getElementById('weight_1'); // Значение массы
const weight_2 = document.getElementById('weight_2');
const weight_3 = document.getElementById('weight_3');
const weight_4 = document.getElementById('weight_4');
const weight_5 = document.getElementById('weight_5');

const max_1 = document.getElementById('MAX_1');// Значение прочности
const max_2 = document.getElementById('MAX_2');
const max_3 = document.getElementById('MAX_3');
const max_4 = document.getElementById('MAX_4');
const max_5 = document.getElementById('MAX_5');

//Диапазон массы доступ по DOM дереву 


const maximum_mass_1 = document.getElementById('maximum_mass_1');
const maximum_mass_2 = document.getElementById('maximum_mass_2');
const maximum_mass_3 = document.getElementById('maximum_mass_3');
const maximum_mass_4 = document.getElementById('maximum_mass_4');
const maximum_mass_5 = document.getElementById('maximum_mass_5');
const maximum_mass_6 = document.getElementById('maximum_mass_6');
const maximum_mass_7 = document.getElementById('maximum_mass_7');
const maximum_mass_8 = document.getElementById('maximum_mass_8');
const maximum_mass_9 = document.getElementById('maximum_mass_9');
const maximum_mass_10 = document.getElementById('maximum_mass_10');
const maximum_mass_11 = document.getElementById('maximum_mass_11');
const maximum_mass_12 = document.getElementById('maximum_mass_12');
const maximum_mass_13 = document.getElementById('maximum_mass_13');
const maximum_mass_14 = document.getElementById('maximum_mass_14');
const maximum_mass_15 = document.getElementById('maximum_mass_15');
const maximum_mass_16 = document.getElementById('maximum_mass_16');
const maximum_mass_17 = document.getElementById('maximum_mass_17');

//Первый уровень чисел

const numberFirstOneLevel_1 = document.getElementById(`numberFirstOneLevel_1`);
const numberFirstOneLevel_2 = document.getElementById(`numberFirstOneLevel_2`);
const numberFirstOneLevel_3 = document.getElementById(`numberFirstOneLevel_3`);
const numberFirstOneLevel_4 = document.getElementById(`numberFirstOneLevel_4`);
const numberFirstOneLevel_5 = document.getElementById(`numberFirstOneLevel_5`);
const numberFirstOneLevel_6 = document.getElementById(`numberFirstOneLevel_6`);
const numberFirstOneLevel_7 = document.getElementById(`numberFirstOneLevel_7`);
const numberFirstOneLevel_8 = document.getElementById(`numberFirstOneLevel_8`);
const numberFirstOneLevel_9 = document.getElementById(`numberFirstOneLevel_9`);
const numberFirstOneLevel_10 = document.getElementById(`numberFirstOneLevel_10`);
const numberFirstOneLevel_11 = document.getElementById(`numberFirstOneLevel_11`);
const numberFirstOneLevel_12 = document.getElementById(`numberFirstOneLevel_12`);
const numberFirstOneLevel_13 = document.getElementById(`numberFirstOneLevel_13`);
const numberFirstOneLevel_14 = document.getElementById(`numberFirstOneLevel_14`);
const numberFirstOneLevel_15 = document.getElementById(`numberFirstOneLevel_15`);
const numberFirstOneLevel_16= document.getElementById(`numberFirstOneLevel_16`);
const numberFirstOneLevel_17 = document.getElementById(`numberFirstOneLevel_17`);
const numberFirstOneLevel_18 = document.getElementById(`numberFirstOneLevel_18`);
const numberFirstOneLevel_19 = document.getElementById(`numberFirstOneLevel_19`);

// Второй уровень чисел 
const numberSecondLevel_1 = document.getElementById(`numberSecondLevel_1`);
const numberSecondLevel_2 = document.getElementById(`numberSecondLevel_2`);
const numberSecondLevel_3 = document.getElementById(`numberSecondLevel_3`);
const numberSecondLevel_4 = document.getElementById(`numberSecondLevel_4`);
const numberSecondLevel_5 = document.getElementById(`numberSecondLevel_5`);
const numberSecondLevel_6 = document.getElementById(`numberSecondLevel_6`);
const numberSecondLevel_7 = document.getElementById(`numberSecondLevel_7`);
const numberSecondLevel_8 = document.getElementById(`numberSecondLevel_8`);
const numberSecondLevel_9 = document.getElementById(`numberSecondLevel_9`);
const numberSecondLevel_10 = document.getElementById(`numberSecondLevel_10`);
const numberSecondLevel_11 = document.getElementById(`numberSecondLevel_11`);
const numberSecondLevel_12 = document.getElementById(`numberSecondLevel_12`);
const numberSecondLevel_13 = document.getElementById(`numberSecondLevel_13`);
const numberSecondLevel_14 = document.getElementById(`numberSecondLevel_14`);
const numberSecondLevel_15 = document.getElementById(`numberSecondLevel_15`);
const numberSecondLevel_16 = document.getElementById(`numberSecondLevel_16`);
const numberSecondLevel_17 = document.getElementById(`numberSecondLevel_17`);

//Третий уровень 
const numberThirdLevel_1 = document.getElementById(`numberThirdLevel_1`);
const numberThirdLevel_2 = document.getElementById(`numberThirdLevel_2`);
const numberThirdLevel_3 = document.getElementById(`numberThirdLevel_3`);
const numberThirdLevel_4 = document.getElementById(`numberThirdLevel_4`);
const numberThirdLevel_5 = document.getElementById(`numberThirdLevel_5`);
const numberThirdLevel_6 = document.getElementById(`numberThirdLevel_6`);
const numberThirdLevel_7 = document.getElementById(`numberThirdLevel_7`);
const numberThirdLevel_8 = document.getElementById(`numberThirdLevel_8`);
const numberThirdLevel_9 = document.getElementById(`numberThirdLevel_9`);
const numberThirdLevel_10 = document.getElementById(`numberThirdLevel_10`);
const numberThirdLevel_11 = document.getElementById(`numberThirdLevel_11`);
const numberThirdLevel_12 = document.getElementById(`numberThirdLevel_12`);
const numberThirdLevel_13 = document.getElementById(`numberThirdLevel_13`);
const numberThirdLevel_14 = document.getElementById(`numberThirdLevel_14`);
const numberThirdLevel_15 = document.getElementById(`numberThirdLevel_15`);
const numberThirdLevel_16 = document.getElementById(`numberThirdLevel_16`);
const numberThirdLevel_17 = document.getElementById(`numberThirdLevel_17`);

//массив веса
let arrWeight = [weight_1,weight_2,weight_3,weight_4,weight_5];
let arrWeight_value = [];

//Вывод значений веса +массив диапазона массы
const arrMaximum_mass = [
    maximum_mass_1,
    maximum_mass_2,
    maximum_mass_3,
    maximum_mass_4,
    maximum_mass_5,
    maximum_mass_6,
    maximum_mass_7,
    maximum_mass_8,
    maximum_mass_9,
    maximum_mass_10,
    maximum_mass_11,
    maximum_mass_12,
    maximum_mass_13,
    maximum_mass_14,
    maximum_mass_15,
    maximum_mass_16,
    maximum_mass_17];


let arrMaximum_mass_value = [];

//массив прочности
const arrMax = [max_1,max_2,max_3,max_4,max_5];
let arrMax_value = [];

//первый массив проверки выявления массы 
 const arrFirstLevel_dom = [
    numberFirstOneLevel_1,
    numberFirstOneLevel_2,
    numberFirstOneLevel_3,
    numberFirstOneLevel_4,
    numberFirstOneLevel_5,
    numberFirstOneLevel_6,
    numberFirstOneLevel_7,
    numberFirstOneLevel_8,
    numberFirstOneLevel_9,
    numberFirstOneLevel_10,
    numberFirstOneLevel_11,
    numberFirstOneLevel_12,
    numberFirstOneLevel_13,
    numberFirstOneLevel_14,
    numberFirstOneLevel_15,
    numberFirstOneLevel_16,
    numberFirstOneLevel_17
];
 let arrFirstLevel = [];


 //второй уровень выявления массы
 const arrSecondLevel_dom = [
    numberSecondLevel_1,
    numberSecondLevel_2,
    numberSecondLevel_3,
    numberSecondLevel_4,
    numberSecondLevel_5,
    numberSecondLevel_6,
    numberSecondLevel_7,
    numberSecondLevel_8,
    numberSecondLevel_9,
    numberSecondLevel_10,
    numberSecondLevel_11,
    numberSecondLevel_12,
    numberSecondLevel_13,
    numberSecondLevel_14,
    numberSecondLevel_15,
    numberSecondLevel_16,
    numberSecondLevel_17
 ];

 let arrSecondLevel = [];

 //Третий массив выявления массы 
const arrThirdLevel_dom = [    
    numberThirdLevel_1,
    numberThirdLevel_2,
    numberThirdLevel_3,
    numberThirdLevel_4,
    numberThirdLevel_5,
    numberThirdLevel_6,
    numberThirdLevel_7,
    numberThirdLevel_8,
    numberThirdLevel_9,
    numberThirdLevel_10,
    numberThirdLevel_11,
    numberThirdLevel_12,
    numberThirdLevel_13,
    numberThirdLevel_14,
    numberThirdLevel_15,
    numberThirdLevel_16,
    numberThirdLevel_17
];

let arrThirdLevel = [];

 //магические цифры
let minWeight; // Минимальное значение 
let y = 0; // Временная переменная указывает 0.1 в плюс 


function result(){
// заплнение массива массы
for(let i=0; i<arrWeight.length; i++){
    arrWeight_value[i] = arrWeight[i].value;
    arrWeight_value[i] = Number(arrWeight_value[i]);
    //  выявления минимального значения массы 
    if(arrWeight_value[i]<arrWeight_value[i-1]){
    minWeight = arrWeight_value[i];
    }
}
// заполнение массива прочности 
for(let i=0; i<arrMax.length; i++){
arrMax_value[i] = arrMax[i].value;
arrMax_value[i] = Number(arrMax_value[i]);
}

// диапазон массы + 0.1
for(let i=0;i<arrMaximum_mass.length;i++){
arrMaximum_mass_value[i] = minWeight+y;
y=y+0.100000000000;
arrMaximum_mass_value[i]=Number(arrMaximum_mass_value[i]).toFixed(1);
arrMaximum_mass[i].value = arrMaximum_mass_value[i];
}


// первый расчет 

for(i=0;i<arrFirstLevel_dom.length; i++){
              arrFirstLevel[i] = 0;  
    if(arrMaximum_mass_value[i]>=arrWeight_value [0]){
        arrFirstLevel[i] =  arrMax_value[0];
    }

    
arrFirstLevel_dom[i].value=arrFirstLevel[i];
}

// второй расчет 

for(i=0; i<arrSecondLevel_dom.length; i++){

    arrSecondLevel[i] = 0;  
     
    if(arrMaximum_mass_value[i]>=arrWeight_value[0]){
        arrSecondLevel[i] = arrMax_value[0];
    }

    if(arrMaximum_mass_value[i]>=arrWeight_value[1]&&arrSecondLevel[i] < arrMax_value[0]){
        arrSecondLevel[i] =  arrMax_value[1];
    }
    if(arrMaximum_mass_value[i]>=arrWeight_value[1]&&arrMax_value[1] > arrMax_value[0]){
        arrSecondLevel[i] =  arrMax_value[1];
    }

    if(arrMaximum_mass_value[i]>=(arrWeight_value[0]+arrWeight_value[1])){
        arrSecondLevel[i] = (arrMax_value[0]+arrMax_value[1]);
    }

    arrSecondLevel_dom[i].value=arrSecondLevel[i];
}

//третий расчет 

for(i=0; i<arrThirdLevel_dom.length; i++){
//ноль
            arrThirdLevel[i] = 0;  
//первый
if(arrMaximum_mass_value[i]>=arrWeight_value[0]){
    arrThirdLevel[i] = arrMax_value[0];
}
//второй 
//на пустоту 
if(arrMaximum_mass_value[i]>=arrWeight_value[1]&&arrSecondLevel[i] < arrMax_value[0]){
    arrThirdLevel[i] =  arrMax_value[1];
}
if(arrMaximum_mass_value[i]>=arrWeight_value[1]&&arrMax_value[1] > arrMax_value[0]){
    arrThirdLevel[i] =  arrMax_value[1];
}
//третий
//на пустоту 
if(arrMaximum_mass_value[i]>=arrWeight_value[2]&&(arrThirdLevel[i] < arrMax_value[0]&&arrThirdLevel[i] < arrMax_value[1])){
    arrThirdLevel[i] =  arrMax_value[2];
}
//меньше больше
if(arrMaximum_mass_value[i]>=arrWeight_value[2]&&arrMax_value[2] > arrMax_value[0]||arrMax_value[2] > arrMax_value[1]){
    //третий проверяем
   if(arrMaximum_mass_value[i]>=arrWeight_value[2]&&arrMax_value[2] > arrMax_value[0]){
    arrThirdLevel[i] =  arrMax_value[2];
   }
   if(arrMaximum_mass_value[i]>=arrWeight_value[2]&&arrMax_value[2] > arrMax_value[1]){
    arrThirdLevel[i] =  arrMax_value[2];
   }
   // второй проверяем
   if(arrMaximum_mass_value[i]>=arrWeight_value[1]&&arrMax_value[1] > arrMax_value[0]){
    arrThirdLevel[i] =  arrMax_value[1];
   }
   if(arrMaximum_mass_value[i]>=arrWeight_value[1]&&arrMax_value[1] > arrMax_value[2]){
    arrThirdLevel[i] =  arrMax_value[1];
   }
  // первый проверяем 
  if(arrMaximum_mass_value[i]>=arrWeight_value[0]&&arrMax_value[0] > arrMax_value[1]){
    arrThirdLevel[i] =  arrMax_value[0];
   }
   if(arrMaximum_mass_value[i]>=arrWeight_value[0]&&arrMax_value[0] > arrMax_value[2]){
    arrThirdLevel[i] =  arrMax_value[0];
   }
}

//сумма 
/*
if(arrMaximum_mass_value[i]>=(arrWeight_value[0]+arrWeight_value[1])){ //1,5
    arrThirdLevel[i] = (arrMax_value[0]+arrMax_value[1]);
    
}
*/

/*
if(arrMaximum_mass_value[i]>=(arrWeight_value[0]+arrWeight_value[2])){ // 1,3
    arrThirdLevel[i] = (arrMax_value[0]+arrMax_value[2]);
}
*/

/*
if(arrMaximum_mass_value[i]>=(arrWeight_value[1]+arrWeight_value[2])){//1.2
    arrThirdLevel[i] = (arrMax_value[1]+arrMax_value[2]);
}
*/

if(arrMaximum_mass_value[i]>=(arrWeight_value[0]+arrWeight_value[1]+arrWeight_value[2])){ //2
    arrThirdLevel[i] = (arrMax_value[0]+arrMax_value[1]+arrMax_value[2]);
}

arrThirdLevel_dom[i].value=arrThirdLevel[i];
}



   

/*
console.log(arrWeight_value);
console.log(minWeight);
console.log(arrMaximum_mass_value);
console.log(arrMaximum_mass_value.length);
console.log(arrMax_value);
*/



console.log(arrMaximum_mass_value);
console.log(arrSecondLevel);
console.log(arrThirdLevel);

}
