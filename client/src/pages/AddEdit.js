import React,{useState,useEffect} from "react";
import{useParams,Link} from "react-router-dom";
import axios from "axios";
import "../Styles/AddEdit.css";

const initialState = {
    UserName:"",
    BookName:"",
    BookAuthor:"",
    BookEdition:"",
    BookPublication:"",
};

const AddEdit= () =>
{
    const[state,setState] = useState(initialState);

    const{UserName, BookName, BookAuthor, BookEdition, BookPublication} = state;

    const { book_id } = useParams();
    
     useEffect(() => {
        axios
        .get(`http://localhost:5000/api/get/${book_id}`)
        .then((resp)=> setState({ ...resp.data[0] }));
     }, [book_id]);
     
    const handleSubmit = (e) => {
    e.preventDefault();
    if(!UserName || !BookName || !BookAuthor || !BookEdition || !BookPublication){
     alert('Provide Values');
    }
    else {
        if(!book_id)
        {
            axios
            .post("http://localhost:5000/api/post",{
                UserName,
                BookName,
                BookAuthor,
                BookEdition,
                BookPublication,
        })
    .then(() => {
        setState({UserName: "",BookName:"",BookAuthor:"",BookEdition:"",BookPublication:""});

    })
     alert('Contact Added Successfully');
    } else{
        axios
        .put(`http://localhost:5000/api/update/${book_id}`,{
            UserName,
            BookName,
            BookAuthor,
            BookEdition,
            BookPublication,
    })
    .then(() => {
      setState({UserName: "",BookName:"",BookAuthor:"",BookEdition:"",BookPublication:""});
})
     alert('Contact Updated Successfully');
    }
     }
      };

    const handleInputChange = (e) => {
        const{ name,value } = e.target;
        setState({...state, [name] : value});
    };

    return(
        <div style={{marginTop:"100px"}}>
    <form
        style={{
            margin:"auto",
            padding:"15px",
            maxWidth:"400px",
            alignContent:"center",
        }}
        
        onSubmit={handleSubmit}
        >
        <label>UserName</label>
        <input type="text" id= "UserName" name="UserName"  value={UserName || ""} onChange={handleInputChange}/>
        
        <label>Book Name</label>
        <input type="text" id="BookName" name="BookName" value={BookName || ""} onChange={handleInputChange}/>
         
        <label>Book Author</label>
        <input type="text" id="BookAuthor" name="BookAuthor"  value={BookAuthor || ""} onChange={handleInputChange}/>

        <label>Book Edition</label>
        <input type="text" id="BookEdition" name="BookEdition"  value={BookEdition || ""} onChange={handleInputChange}/>
         
        <label>Book Publication</label>
        <input type="text" id="BookPublication" name="BookPublication"  value={BookPublication || ""} onChange={handleInputChange}/>
         
         <input type="submit" value={book_id ? "Update":"Save"} />
         <Link to="/menu">
         <input type="button" value="BACK"/>
         </Link>
        </form>
        </div>
);
};

export default AddEdit;
