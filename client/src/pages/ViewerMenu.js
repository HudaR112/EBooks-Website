import React,{useState,useEffect} from "react";
import axios from "axios";
import "../Styles/ViewerMenu.css";

function MenuViewer()
{
    const [data,setData]=useState([]);

    const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/get");
     setData(response.data);
    };
     useEffect(() => {
        loadData();
    }, []);

    return(
        <div style={{marginTop:"150px"}}>
        <table className="styled-table">
        <thead>
            <tr>
                <th style={{textAlign:"center"}}>ID</th>
                <th style={{textAlign:"center"}}>UserName</th>
                <th style={{textAlign:"center"}}>Book Name</th>
                <th style={{textAlign:"center"}}>Author</th>
                <th style={{textAlign:"center"}}>Edition</th>
                <th style={{textAlign:"center"}}>Publication</th>
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
                    </tr>
                );
            
  })}
        </tbody> 
        </table>
        </div> 
);
};

export default MenuViewer;