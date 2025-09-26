let name = 'Chompunut';
let lastname = 'Rueangrit';



// innerHTML
// document.getElementById('h1-name').innerHTML = name;
document.querySelector('#h1-name').innerHTML = name; //แนะนำตัวนี้

document.querySelector('#btn-1').innerHTML = 'ปุ่มที่ 1' ;
document.querySelector('#btn-2').innerHTML = 'ปุ่มที่ 2';

function changeLastname() {
    confirm('คุณต้องการเปลี่ยนนามสกุลจริงหรือไม่')
    document.querySelector('#h1-lastname').innerHTML = lastname ;
};
function changeButtonName(){
    document.querySelector('#btn-2').innerHTML = 'Button-2';

}
function changeColor1(){
    document.querySelector('#btn-1').classList.remove('btn-primary');
    document.querySelector('#btn-1').classList.add('btn-warning');

}
function changeColor2(){
    document.querySelector('#btn-1').classList.remove('btn-warning');
    document.querySelector('#btn-1').classList.add('btn-primary');
}
function changeColor3(){
    cd('#btn-2','btn-success');
    ca('#btn-2','btn-danger');

}

function changeColor4(){
    cd('#btn-2','btn-danger');
    ca('#btn-2','btn-success');
}

                                                                                  