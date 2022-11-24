import { getConnection } from "../database/connection"
import { queries } from "../querys"
const express = require("express");
// const ejs = require("ejs");
const bodyParser = require("body-parser");


export const getUsuarios = async (req, res)=>{
    try{ const pool = await getConnection()
        const result = await pool.request().query(queries.getAllUsuarios)
        res.json(result.recordset)
    }catch(error){
        res.status(500)
        res.send(error.msg)
    }
}


 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getRecetas = async (req, res)=>{
    try{ const pool = await getConnection()
     const result = await pool.request().query(queries.getAllRecetas)
     res.json(result.recordset)
     }catch(error){
         res.status(500)
         res.send(error.msg)
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 export const getRutinas = async (req, res)=>{
     try{ 
         const pool = await getConnection()
         const result = await pool.request().query(queries.getAllRutinas)
         res.json(result.recordset)
         }catch(error){
             res.status(500)
             res.send(error.msg)
         }
 }
