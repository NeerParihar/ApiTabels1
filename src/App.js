import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const App=()=>{
  let[pid,updatepid]=useState("");
  let[data,updatedata]=useState([]);
  useEffect(function(){
    async function getData(){
      
      //updatedata(res.data);

    }
    getData();
  })
  async function show(){
    var res=await axios.get("http://restapittt.herokuapp.com/products/");
    updatedata(res.data);
  }
  const change=(e)=>{
    updatepid(e.target.value);
  }
  
  return(
    <>
      <h1>App Component is Running</h1><br/>
      <input type="number" value={pid} onChange={change} /><br/><br/>
      <button className="btn btn-dark text-info" onClick={()=>{
        async function search(){
          var res=await axios.get(`http://restapittt.herokuapp.com/products/${pid}`);
          updatedata([res.data]);
        }
        search();
      }}>Search</button> <button className="btn btn-dark text-info" onClick={show}>Show All Entries</button>
      <table className='table table-bordered table-center'>
        <thead className="bg-dark text-info">
          <tr>
            <th>PRODUCT ID</th>
            <th>PRODUCT NAME</th>
            <th>PRODUCT PRICE</th>
            <th>PRODUCT CATEGORY</th>
            <th>PRODUCT COMPANY</th>


          </tr>
        </thead>
        <tbody>
          {
            data.map((v)=>{
              return(
                <>
                <tr>
                  <td>{v.id}</td>
                  <td>{v.name}</td>
                  <td>{v.price}</td>
                  <td>{v.cat}</td>
                  <td>{v.cmp}</td>
                </tr>
                </>
              )

            })
          }
        </tbody>

      </table>
      
    </>
  )
}
export default App;