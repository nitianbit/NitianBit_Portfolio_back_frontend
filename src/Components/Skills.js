import React from 'react'
import { useState } from 'react'
import {Form, Button} from 'react-bootstrap'
import axios from 'axios'
import '../Assets/form.css'
import '../Assets/style.css'
import '../Assets/drop.css'

export default function Skills() {
    const [data, setSkill] = useState({
        skillClass:"",
        name: ""
    })
    const [status, setStatus] = useState(-1)
    const url = process.env.skillUrl || "http://localhost:8080/resume/addSharedSkills"
 
    const onChange = (e) =>{
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setSkill(newData)
    }

    const onSubmit = (e) =>{
        e.preventDefault()
        axios.put(url,data)
        .then(res=>{
            if(res.data)
            setStatus(1)
            else
            setStatus(0)
        })
    }

  return (
    ( status ==1 ? <h3>Data Successfully addedd</h3>
    : status == 0? <h3>Error on Data Adding. Please try Again !!</h3>:
 <div className='container'>
       <Form onSubmit={onSubmit} className='container'>
        <h2>Skills Details</h2>
        <Form.Group className='mb-3 form'>
            <Form.Label>Skill Class Name </Form.Label><br/>
            <Form.Control onChange={onChange} style={{width:'300px'}} id="skillClass" value ={data.skillClass} type="text" placeholder='Enter Skill Name'></Form.Control>
        </Form.Group>
        <Form.Group className='mb-3 form'>
            <Form.Label>Skill Name </Form.Label><br/>
            <Form.Control onChange={onChange} style={{width:'300px'}} id="name" value ={data.name} type="text" placeholder='Enter Skill Class Name'></Form.Control>
        </Form.Group>
        <Button type='submit' className='drop'>Submit</Button>
        </Form>  
    </div>)
  )
}
