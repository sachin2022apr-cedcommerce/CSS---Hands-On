    function product() {
        let id = document.getElementById("PId").value;  
        let name = document.getElementById("PName").value; 
        let price = document.getElementById("PPrice").value; 

        var table = document.getElementById("myTable");
        var row = table.insertRow(myTable.rows.length-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = id;
        cell2.innerHTML = name;
        cell3.innerHTML = price;
 
    }
    
