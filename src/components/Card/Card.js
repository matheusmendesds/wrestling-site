export default function Card({cardname,cardstyle,cardcompany,cardgender,cardImage}){
    return(
        <div className="m-1">
            <h3 className=" rounded w-max ">name:{cardname}</h3>
    
            <p> 
                <span>Style:</span>{cardstyle}
            </p>
            <p>
                <span>Gender:</span>{cardgender}
            </p>
            <p>
                <span>Company:</span>{cardcompany}
            </p>
        </div>
    )
}
