import Titulo from"./titulo";

function index(){
    return <div>
        <Titulo titulo= " Bem-Vindo Turma 6A ao React "/>
        <CapsLock name= "Pedrin" idade="17" cor="red"/>
        <CapsLock name= "Pedrin" idade="17"cor="blue"/>
        <CapsLock name= "Pedrin"  cor="pink "/>
        <CapsLock name= "aiai" idade="17" cor=" green"/>
    </div>
}
function CapsLock({name, idade,cor}){
    //console.log(param);
    return <div style={{color:cor}}>{name} {idade? idade: "n tem idade"}</div>
} 
export default index;