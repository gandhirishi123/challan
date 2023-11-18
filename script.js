document.getElementById('sb').addEventListener('click', create2pages )
function create2pages(){
    
    for(i=0;i<2;i++){
    fun1();
    printContent()
}}
function fun1() {
   
    var a = document.getElementById('sname').value
    var b = parseFloat(document.getElementById('pm').value)
    var c = document.getElementById('cm').value
    var d = parseInt(document.getElementById('mm').value)
    var e = parseInt(document.getElementById('vm').value)
    var h = parseInt((c * d) + e)
    var f = parseInt(((c * d) + e) * 18 / 100)
    var g = parseInt((c * d) + e + f)
    var i = document.getElementById('cn').value
    var j = document.getElementById('cname').value
    var k = document.getElementById('cadd').value
    var m = document.getElementById('cno').value
    var now = new Date();
    var day = now.getDate().toString().padStart(2, "0");
    var month = (now.getMonth() + 1).toString().padStart(2, "0");
    var year = now.getFullYear().toString().slice(-2);
    var dateString = day + '/' + month + '/' + year;
   
    console.log(e)
    
    document.getElementById('Challan').innerHTML += `
    <br>
    <p>|| श्री ||</p>
    <div>
    <p>DELIVERY CHALLAN CUM<br>
    PROFORMA INVOICE
    </p>
    </div>
    <h1>HEMANT TRADERS</h1>
    <h4>1281, SADASHIV PETH, VERTEX ARCADE,<br> SHOP 5,PUNE-411030 <br> <br>
        PH (020)24467833 /24473403/24497533 <br>
        M:9422080922 <br> EMAIL:hemanttraders111@yahoo.in <br> <br>
        GSTIN-27AAVPG7824M1ZX
    </h4>
    <br><br>
    <h4>#${i}/BWD &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DATE ${dateString} </h4>
    <h2> M/S ${j} <br></h2>
    <h4>${k}</h4>
    <h5>${m}</h5>
    <p>RECEIVED THE BELOW MENTIONED IN GOOD ORDER AND CONDITION</p>
    <table border="1">
    <thead>
    <tr class="border border-secondary">
        <th class="border border-secondary" style="text-align: center;">Particulars</th>
        <th class="border border-secondary" style="text-align: center;">Width</th>
        <th class="border border-secondary" style="text-align: center;">Qty</th>
        <th class="border border-secondary" style="text-align: center;">Basic Rs</th>
    </tr>
    </thead>
    <tbody>
    <tr class="border border-secondary">
        <td class="border border-secondary">${a}</td>
        <td class="border border-secondary">${b}"</td>
        <td class="border border-secondary">${c}</td>
        <td class="border border-secondary">${h}</td>
    </tr>
    <tr class="border border-secondary">
        <td></td>
        <td></td>
        <td>+GST</td>
        <td>${f}</td>
    </tr>
    <tr class="border border-secondary">
        <td>Total Rs</td>
        <td></td>
        <td></td>
        <td>${g}</td>
    </tr>
    <tbody>
    </table>
    <br><h6>आम्ही कोणत्याही प्रकारच्या रोलची हमी देत नाही.<br>
            मशीनवर लोड करण्यापूर्वी रोल तपासला पाहिजे.<br><br>
            CONDITIONS:
        ANY COMPLAINTS IF ANY ,WILL BE ENTERTAINED WITHIN 24 HOURS ONLY AFTER THE DELIVERY.<br><br>
        COMPUTER GENERATED DOCUMENT AND DOESN'T REQUIRE ANY SIGNATURE

        </h6>
        <br><br>
        <hr style:style="color: black;">
       
    `  

}
