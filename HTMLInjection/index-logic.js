let name =  'Chompunut';
let lastname = 'Rueangrit';


qs('#h1-name').innerHTML = name;
qs('#btn-1').innerHTML = 'ปุ่มที่ 1' ;
qs('#btn-2').innerHTML = 'ปุ่มที่ 2' ;

function changeLastname(){
    qs('#h1-lastname').innerHTML = lastname;
};
function changeColor1(){
    cd('#btn-1', 'btn-primary');
    ca('#btn-1', 'btn-warning');
}
function changeColor2(){
    cd('#btn-1', 'btn-warning');
    ca('#btn-1','btn-primary');
}
function changeColor3(){
    cd('#btn-2', 'btn-success');
    ca('#btn-2', 'btn-danger');
}
function changeColor4(){
    cd('#btn-2', 'btn-danger');
    ca('#btn-2', 'btn-success');
}

