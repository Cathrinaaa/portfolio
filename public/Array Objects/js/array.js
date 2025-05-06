function showall(){
    //console.log(name);
    const a= document.getElementById('list');
    let namelist = "";

    names.forEach(element => {
        namelist += element + "<br/>";
    });
    a.innerHTML = namelist;
}

function add(){
    const name = document.getElementById('name').value;
    //console.log(name);
    names.push(name);
    showall();
    document.getElementById('name').value="";
}