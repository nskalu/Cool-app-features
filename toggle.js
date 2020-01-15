let counter=1;

document.getElementById("divload").onload = function() {
    debugger;
   //save 3 names
   let surname='Kalu';
   let middlename='Sopuruchi';
   let firstname='Ngozi';

   document.getElementById("txtsurname").value = surname;//1
   document.getElementById("txtmiddlename").value=middlename;//2
   document.getElementById("txtfirstname").value=firstname;//3
   var elem = document.getElementById("txtsurname")
   
};

function Toggle(){
    debugger;

    var elem = document.getElementById("txtsurname")
    elem.style.display = 'block';
    
    if (counter>6)
        counter = 1;
    let surname='Kalu';
    let middlename='Sopuruchi';
    let firstname='Ngozi';
    switch (counter){
        case 1:{
            document.getElementById("txtsurname").value = surname;
            document.getElementById("txtmiddlename").value=firstname;
            document.getElementById("txtfirstname").value=middlename;
            counter+=1;
            
            break;
        }
        case 2:{
            document.getElementById("txtsurname").value = middlename;
            document.getElementById("txtmiddlename").value=surname;
            document.getElementById("txtfirstname").value=firstname;
            counter+=1;
            break;
        }
        case 3:{
            document.getElementById("txtsurname").value = middlename;
            document.getElementById("txtmiddlename").value=firstname;
            document.getElementById("txtfirstname").value=surname;
            counter+=1;
            break;
        }
   
        case 4:{
            document.getElementById("txtsurname").value = firstname;
            document.getElementById("txtmiddlename").value=surname;
            document.getElementById("txtfirstname").value=middlename;
            counter+=1;
            break;
        }
   
        case 5:{
            document.getElementById("txtsurname").value = firstname;
            document.getElementById("txtmiddlename").value=middlename;
            document.getElementById("txtfirstname").value=surname;
            counter+=1;
            break;
        }
    
        case 6:{
            document.getElementById("txtsurname").value = surname;
            document.getElementById("txtmiddlename").value=middlename;
            document.getElementById("txtfirstname").value=firstname;
            counter+=1;
            break;
        }
    }
}