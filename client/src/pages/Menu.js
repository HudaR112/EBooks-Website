import React,{useState,useEffect} from "react";
import{Link} from "react-router-dom";
import axios from "axios";
import "../Styles/Menu.css";

function Menu()
{
    const [data,setData]=useState([]);

    const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/get");
     setData(response.data);
    };

    useEffect(() => {
        loadData();
    }, []);

    const deleteBook = (book_id) => {  
        if(window.confirm("Are you sure you want to delete the book?")  )
        {
        axios.delete(`http://localhost:5000/delete/${book_id}`).then((response) => {
          setData(
            data.filter((val) => {
              return val.book_id !== book_id;
            })
          );
          alert('User successfully Deleted!');
        });
        setTimeout(() => loadData(), 500);
    }
};

    return(
        <div style={{marginTop:"150px"}}>
            <Link to="/addBook">
            <button className="btn btnContact"><b>ADD BOOK</b></button>
            </Link>
            
        <table className="styled-table">
        <thead>
            <tr>
                <th style={{textAlign:"center"}}>ID</th>
                <th style={{textAlign:"center"}}>UserName</th>
                <th style={{textAlign:"center"}}>Book Name</th>
                <th style={{textAlign:"center"}}>Author</th>
                <th style={{textAlign:"center"}}>Edition</th>
                <th style={{textAlign:"center"}}>Publication</th>
                <th style={{textAlign:"center"}}>Action</th>
            </tr>
        </thead> 
     <tbody>

            { data.map((item,index)=>{
                return (
                    <tr key={item.book_id}>
                        <th>{index+1}</th>    
                        <td>{item.UserName}</td>
                        <td>{item.BookName}</td>
                        <td>{item.BookAuthor}</td>
                        <td>{item.BookEdition}</td>
                        <td>{item.BookPublication}</td>
                        <td>
                        <button className="btn btnDelete" onClick={()=>deleteBook(item.book_id)}><b>Delete</b></button>
                        <Link to={`/update/${item.book_id}`}>
                        <button className="btn btnEdit"><b>Edit</b></button>
                        </Link>    
                        </td>
                    </tr>
                );
            
  })}
        </tbody> 
        </table>
        </div> 
);
};

export default Menu;