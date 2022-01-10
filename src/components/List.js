import Item from "./Item"

function List(){
    return(
        <>
            <h1>Lista</h1>
            <ul>
                <li><Item marca="fiat" ano={2001}/></li>
                <li><Item marca="ferrari" ano={2022}/></li>
                <li><Item/></li>
            </ul>
        </>
    )
}

export default List