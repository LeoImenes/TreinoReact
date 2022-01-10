function Form(){
    return(
        <div>
            <h1>Formulario</h1>
            <form>
                <input type="text" placeholder="Nome"></input>
                <input type="number" placeholder="idade"></input>
                <select placeholder="email" name="email">
                <option value="gmail">gmail</option>
                </select>  
            </form>  
        </div>
    )

}
export default Form