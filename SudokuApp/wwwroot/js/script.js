function Change(id){
var string = id.name[0];
var column = id.name[1];
var all_input = document.getElementsByTagName('input');
for(i=0; i < all_input.length; i++ ){
  if(all_input[i].name[0] == string || all_input[i].name[1] == column && all_input[i].name != id.name ){
    all_input[i].style.backgroundColor = '#66ebff';
    id.style.backgroundColor = " #00cdd4"
  }
}

}
function After(id){
var string = id.name[0];
var column = id.name[1];
var all_input = document.getElementsByTagName('input');
for(i=0; i < all_input.length; i++ ){
  if(all_input[i].name[0] == string || all_input[i].name[1] == column && all_input[i].name != id.name ){
    all_input[i].style.backgroundColor = '#ffffff';
    id.style.backgroundColor = " #ffffff"
  }
}

}
