function clk(){
    let inp_value = document.getElementById('Number').value;
if(inp_value.slice(-3,-2)==1){
    document.body.style.backgroundColor = 'blue'
    document.getElementById('Write').innerHTML = 'Seher Qrupu'
    document.getElementById('Write').style.color = 'black'
} else if(inp_value.slice(-3,-2)==2){
    document.body.style.backgroundColor = 'orange'
    document.getElementById('Write').innerHTML = 'Gunorta Qrupu'
    document.getElementById('Write').style.color = 'green'
} else if(inp_value.slice(-3,-2)==3){
    document.body.style.backgroundColor = 'yellow'
    document.getElementById('Write').innerHTML = 'Axsam Qrupu'
    document.getElementById('Write').style.color = 'red'
}
}







function moonsun(){
    if(document.body.style.backgroundColor == 'white'){
     document.body.style.backgroundColor = 'black'
     document.getElementById('sun').style.backgroundColor = 'black'
     document.getElementById('sun').style.color = 'white'
     document.getElementById('moon').style.backgroundColor = 'white'
     document.getElementById('moon').style.color = 'white'
    } else{
     document.body.style.backgroundColor = 'white'
     document.getElementById('moon').style.backgroundColor = 'black'
     document.getElementById('moon').style.color = 'white'
     document.getElementById('sun').style.backgroundColor = 'white'
     document.getElementById('sun').style.color = 'white'
    }
}