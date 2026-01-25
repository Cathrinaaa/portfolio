function button(){
    const php= document.getElementById('php').value;

    const dollar= php * 0.017;
    const yuan= php * 0.12;
    const euro= php * 0.016;
    const yen= php * 2.67;

    document.getElementById('dollar').value = dollar;
    document.getElementById('yuan').value = yuan;
    document.getElementById('euro').value = euro;
    document.getElementById('yen').value = yen;

}