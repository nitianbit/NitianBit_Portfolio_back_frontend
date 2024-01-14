import React from 'react'
import { useState } from 'react'
import {Form, Button} from 'react-bootstrap'
import axios from 'axios'
import '../Assets/form.css'
import '../Assets/style.css'
import '../Assets/drop.css'

export default function Projects() {
    const [data, setSkill] = useState({
        images:"",
        startDate: "",
        endDate: "",
        title: "",
        link:""
    })
    const [status, setStatus] = useState(-1)
    const url = process.env.projectUrl || "http://localhost:8080/resume/addProject"
 
    const onChange = (e) =>{
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setSkill(newData)
    }

    const onSubmit = (e) =>{
        e.preventDefault()
        console.log(url)
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
 <div  >
       <Form onSubmit={onSubmit} className='container'>
        <h2>Project Details</h2>
        <Form.Group className='mb-3 form'>
            <Form.Label>Image Url </Form.Label><br/>
            <Form.Control onChange={onChange} style={{width:'300px'}} id="images" value ={data.images} type="text" placeholder='Enter Thumbnail Url'></Form.Control>
        </Form.Group>
        <Form.Group className='mb-3 form'>
            <Form.Label>Start Date of Project </Form.Label><br/>
            <Form.Control onChange={onChange} style={{width:'300px'}} id="startDate" value ={data.startDate} type="date" placeholder='Enter Start Date'></Form.Control>
        </Form.Group>
        <Form.Group className='mb-3 form'>
            <Form.Label>End Date of Project </Form.Label><br/>
            <Form.Control onChange={onChange} style={{width:'300px'}} id="endDate" value ={data.endDate} type="date" placeholder='Enter End Date'></Form.Control>
        </Form.Group>
        <Form.Group className='mb-3 form'>
            <Form.Label>Title of Project </Form.Label><br/>
            <Form.Control onChange={onChange} style={{width:'300px'}} id="title" value ={data.title} type="text" placeholder='Enter Title of Project'></Form.Control>
        </Form.Group>
        <Form.Group className='mb-3 form'>
            <Form.Label>Link of Project </Form.Label><br/>
            <Form.Control onChange={onChange} style={{width:'300px'}} id="link" value ={data.link} type="text" placeholder='Enter Link of Project'></Form.Control>
        </Form.Group>
        <Button type='submit' className='drop'>Submit</Button>
        </Form>  
    </div>)
  )
}
