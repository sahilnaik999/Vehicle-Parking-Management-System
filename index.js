let func1=()=>{
    let date1=document.getElementById('entry').value;
    let date2=document.getElementById('exit').value;
    // let vehicleselected=document.getElementById('vehicleselect');
    let d1=new Date(date1);
    let d2=new Date(date2);
    let time=Math.round(d2-d1);
    let hours=Math.round(time/(1000*60*60));
    let days=Math.round(time/(1000*60*60*24));
   let price;
   if (hours<=12) {
    price=10;
   }
   else if (hours<=24) {
    price=20;
   } 
   
   else if (hours>24) {
    price=days*20;
   } 
   else {
    price=undefined;
   }
    document.getElementById('result').innerHTML=`&#x20B9;${price}`;
}


 let pdf=()=>{

// let title=document.getElementById('entime').innerText;
let n=document.getElementsByName('names').innertext;
let c=document.getElementsByName('contacts').innertext;
let vt=document.getElementsByName('vehicletypes').innertext;
let vn=document.getElementsByName('vehiclenumbers').innertext;
let et=document.getElementsByName('entrytimes').innertext;

let n1=document.getElementsByName('n1').value;
let c1=document.getElementsByName('c1').value;
let vt1=document.getElementsByName('vt1').value;
let vn1=document.getElementsByName('vn1').value;
let et1=document.getElementsByName('et1').value;


    let doc=new jsPDF();
    doc.setFontSize(22);
    doc.text("slip",20,10);
    doc.setFontSize(18);
    // doc.text("name: "   +n1,10,20);
    doc.text(`name: ${n1}`,10,20);
    // doc.text("contact: "  +c1,10,20);
    // doc.text("vehicletype: " +vt1,10,20);
    // doc.text("Vehicle no: " +vn1,10,20);
    // doc.text("entry time: " +et1,10,20);
    doc.save("slip.pdf");

  
}

