export const User=(prop)=>{
    return(
        prop.age ? <h1> {prop.name}</h1> : <h1> Not a human</h1>  
    )
}