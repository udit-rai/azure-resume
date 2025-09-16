window.addEventListener('DOMContentLoaded', (event) => {
getVisitCount();
});

const functionAPI='';
const getVisitCount = () => {   
 let Count = 30;
 fetch(functionAPI).then(response => response.json()).then(response => 
    {console.log("Success");
 count = response.count;
 document.getElementById("counter").innerText = count;
 }).catch(error => console.log(error));
    return Count;
}

