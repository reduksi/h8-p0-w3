function dataHandling2(yoi){
    yoi.splice(1, 4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");
    console.log(yoi);
    var date = yoi[3];
    date = date.split('/');
    switch(date[1]){
        case '01':
                console.log('Januari');
        break;
        case '02':
                console.log(+'Februari');
            break;
        case '03':
                console.log('Maret');
            break;
        case '04':
                console.log('April');
            break;
        case '05':
                console.log('Mei');
            break;
        case '06':
                console.log('Juni');
            break;
        case '07':
                console.log('Juli');
            break;
        case '08':
                console.log('Agustus');
            break;
        case '09':
                console.log('September');
            break;
        case '10':
                console.log('Oktober');
            break;
        case '11':date.join('-')
                console.log('November');
            break;
        case '12':
                console.log('Desember');
            break;
        default:
                console.log('Bulan tidak valid');
    }
    
    var sortedDate = date.map(Number);
    sortedDate = sortedDate.sort(function(value1, value2) { return value1 < value2 }).map(String);
    console.log(sortedDate);

    var joinDate = date.join('-');
    console.log(joinDate);
    
    var sliceName = yoi[1];
    sliceName = sliceName.slice(0, 15);
    console.log(sliceName);
}

var data = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(data);