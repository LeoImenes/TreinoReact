function Evento(){
    function button(){
        alert("Ola")
    }
    return(
        <div>
            <p>Clique para ativar</p>
            <button onClick={button}>Ativar</button>
        </div>
 )
}

export default Evento