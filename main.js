// xữ lý nút tăng  cho món ăn cua
function cong1(){
    var c = document.getElementById("kq1").value;
    document.getElementById("kq1").value= parseInt(c)+1;
    
}
// xữ lý nút giãm cho món ăn
function tru1(){
    var c = document.getElementById("kq1").value;
    if(c==0){
        document.getElementById("kq1").value=0;
    }
    else{
    document.getElementById("kq1").value= parseInt(c)-1;
    }
}
// xữ lý cho món ăn súp lơ hải sản
// xữ lý nút tăng  cho món ăn cua
function cong2(){
    var c2 = document.getElementById("kq2").value;
    document.getElementById("kq2").value= parseInt(c2)+1;
}
// xữ lý nút giãm cho món ăn
function tru2(){
    var c2 = document.getElementById("kq2").value;
    if(c2==0){
        document.getElementById("kq2").value=0;
    }
    else{
    document.getElementById("kq2").value= parseInt(c2)-1;
    }
}
// xữ lý nước uống
function cong3(){
    var c3 = document.getElementById("kq3").value;
    document.getElementById("kq3").value= parseInt(c3)+1;
}
// xữ lý nút giãm cho món ăn
function tru3(){
    var c3 = document.getElementById("kq3").value;
    if(c3==0){
        document.getElementById("kq3").value=0;
    }
    else{
    document.getElementById("kq3").value= parseInt(c3)-1;
    }
}
// xữ lý nút thành tiền cho món ăn
function btnThanhTien(){

    var cangcua = document.getElementById("kq1").value;
       var suplo= document.getElementById("kq2").value;
       var tradao = document.getElementById("kq3").value;
     var ketqua = document.getElementById("kq4").value=(cangcua*120)+ (suplo*220) +(tradao*24) + " 000đ";
    
}
var btn1 = document.getElementById("lau102");
var modallau = document.getElementById("list-content-2modal");
var btn2 = document.getElementById("sanvuon1");
var modalsanvuon = document.getElementById("list-content-3modal");
// xữ lý modal hiện ẩn cho từng lầu và bàn
btn1.onclick = function(){
   
    modallau.style.display="block"; 
    btn1.style.backgroundColor="blue";
    modalsanvuon.style.display="none";
    btn2.style.backgroundColor="#33FFFF";
    listModal4lau2.style.display="none";
    btn3.style.backgroundColor="#33FFFF";
}
// xữ lý cho sân vườn trong quãn lý nhà hàng
btn2.onclick = function(){
 modalsanvuon.style.display="block";
 modallau.style.display="none"; 
 btn2.style.backgroundColor="blue";
 btn1.style.backgroundColor="#33FFFF";
 listModal4lau2.style.display="none";
 btn3.style.backgroundColor="#33FFFF";
}

// xữ lý cho đơn hàng thức ăn
// xữ lý nút tăng số lượng món ăn
function cong1sv(){
    var tangsv1 = document.getElementById("kq1sv").value;
    document.getElementById("kq1sv").value= parseInt(tangsv1)+1; 
}
// xữ lý giãm số lương món ăn
function tru1sv(){
    var giamsv1 = document.getElementById("kq1sv").value;
    if(giamsv1==0){
        giamsv1 = document.getElementById("kq1sv").value=0;
    }else{
        document.getElementById("kq1sv").value= parseInt(giamsv1)-1;
    }
}
// xữ lý cho món ăn thứ 2
function cong2sv(){
    var tangsv2 = document.getElementById("kq2sv").value;
    document.getElementById("kq2sv").value= parseInt(tangsv2)+1; 
}
// xữ lý giãm số lương món ăn
function tru2sv(){
    var giamsv2 = document.getElementById("kq2sv").value;
    if(giamsv2==0){
        giamsv2 = document.getElementById("kq2sv").value=0;
    }else{
        document.getElementById("kq2sv").value= parseInt(giamsv2)-1;
    }
}
function cong3sv(){
    var tangsv3 = document.getElementById("kq3sv").value;
    document.getElementById("kq3sv").value= parseInt(tangsv3)+1; 
}
// xữ lý giãm số lương món ăn
function tru3sv(){
    var giamsv3 = document.getElementById("kq3sv").value;
    if(giamsv3==0){
        giamsv3 = document.getElementById("kq3sv").value=0;
    }else{
        document.getElementById("kq3sv").value= parseInt(giamsv3)-1;
    }
}
function btnThanhTiensv(){
    var ketqua1sv = document.getElementById("kq1sv").value;
    var ketqua2sv = document.getElementById("kq2sv").value;
    var ketqua3sv = document.getElementById("kq3sv").value;
   var ketquasv = document.getElementById("kq4sv").value= (ketqua1sv*138) + (ketqua2sv*179) + (ketqua3sv*30) + " 000đ";
     
}


// xữ lý đơn hàng cho món ăn
  var btn3 = document.getElementById("lau202");
  var listModal4lau2 = document.getElementById("list-content-4modal");
  btn3.onclick = function(){
    listModal4lau2.style.display="block";
   modallau.style.display="none";
   modalsanvuon.style.display="none";   
   btn1.style.backgroundColor="#33FFFF";
   btn2.style.backgroundColor="#33FFFF";
   btn3.style.backgroundColor="blue";
  }
function cong1lau2(){
  var tang1lau2 = document.getElementById("kq1lau2").value;
  document.getElementById("kq1lau2").value= parseInt(tang1lau2)+1;
}
function tru1lau2(){
    var giam1lau2 = document.getElementById("kq1lau2").value;
    if(giam1lau2 == 0){
        giam1lau2 = document.getElementById("kq1lau2").value= 0;
    }
    else{
        document.getElementById("kq1lau2").value= parseInt(giam1lau2)-1;
    }
}
function cong2lau2(){
    var tang2lau2 = document.getElementById("kq2lau2").value;
    document.getElementById("kq2lau2").value= parseInt(tang2lau2)+1;

}
function tru2lau2(){
    var giam2lau2 = document.getElementById("kq2lau2").value;
    if(giam2lau2 == 0){
        giam2lau2 = document.getElementById("kq2lau2").value = 0;
    }
    else{
        document.getElementById("kq2lau2").value= parseInt(giam2lau2)-1;
    }
}

// xữ lý cho món ăn thứ 3()
function cong3lau2(){
    var tang3lau2 = document.getElementById("kq3lau2").value;
    document.getElementById("kq3lau2").value= parseInt(tang3lau2)+1;
}
function tru3lau2(){
    var giam3lau2 = document.getElementById("kq3lau2").value;
    if(giam3lau2 == 0){
        giam3lau2 = document.getElementById("kq3lau2").value = 0;
    }
    else{
        document.getElementById("kq3lau2").value= parseInt(giam3lau2)-1;
    }
}
// xữ lý thành tiền cho món ăn ở lầu 2
 function btntongtienlau2(){
    var kqsusi = document.getElementById("kq1lau2").value;
    var kqsup = document.getElementById("kq2lau2").value;
    var kqsinhto = document.getElementById("kq3lau2").value;
    var ketqualau2 = document.getElementById("kq4lau2").value = (kqsusi * 440) + (kqsup * 220) + ( kqsinhto * 50) + " 000đ";
    
 }