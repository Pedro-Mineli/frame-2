import Titulo from"./titulo";

function index(){
    return <div>
        <Titulo titulo= " Bem-Vindo Turma 6A ao React "/>
        <CapsLock name= "Pedrin" idade="17"/>
        <CapsLock name= "Pedrin" idade="17"/>
        <CapsLock name= "Pedrin" />
        <CapsLock name= "aiai" idade="17"/>
    </div>
}
function CapsLock({name, idade}){
    //console.log(param);
    return <div>{name} {idade? idade: "n tem idade"}</div>
} 
export default index;