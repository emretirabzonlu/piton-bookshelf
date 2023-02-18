import React,{useState,useEffect} from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import axios from "axios";


const BookDetails = ()=>{

    const {booksId } = useParams()    

     const[book, setBook] = useState(null)

     useEffect(() => {
         axios.get(`https://assign-api.piton.com.tr/api/rest/products/${booksId <= 8 ? "1" : booksId <= 11 ? "2" : booksId <=14 ? "3" : "4" }`)
             .then((response) => {
                console.log("BURASI",response.data)
                 console.log(response.data.product.filter((book)=>  book.id == booksId ))
                })
             .catch(() => { })
             
     }, [])

     if (book === null) {
        return null
    }
   
    return(
        <div>
            <Header/>
            <h1>{booksId}</h1>
        </div>

    )
}

export default BookDetails