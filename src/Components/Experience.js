import React from 'react'
import { useState } from 'react'
import {Form, Button} from 'react-bootstrap'
import axios from 'axios'
import '../Assets/form.css'
import '../Assets/style.css'
import '../Assets/drop.css'

export default function Experience() {
    const [data, setSkill] = useState({
        company:"",
        title:"",
        years:"",
        technologies:"",
        mainTech:""
    })
    const [status, setStatus] = useState(-1)
    const url = process.env.REACT_APP_EXPERIENCEURL || "http://localhost:8080/resume/addExperience"
 
    const onChange = (e) =>{
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setSkill(newData)
    }

    const createArrayFromString = (str) =>{
        let temp = ""
        let tech = []
        for(let i =0;i<str.length;i++)
        {
            if(str[i] == ',' || str[i] == ' ')
            {
                if(temp != "")
                {
                    tech.push(temp);
                    temp=""
                }
            }
            else
            temp +=str[i]
        }
        if(temp!="")
        tech.push(temp)
        return tech
    }
    const onSubmit = async (e) =>{
        e.preventDefault()
        let tech = createArrayFromString(data.technologies)
        let mainTech = createArrayFromString(data.mainTech)
        
        data.technologies = tech
        data.mainTech = mainTech
        await axios.put(url, data)
        .then(res=>{
            console.log(res)
            if(res.data)
            setStatus(1)
            else
            setStatus(0)
        })
    }

  return (
    (
        status ==1 ? <h3>Data Successfully addedd</h3>
    : status == 0? <h3>Error on Data Adding. Please try Again !!</h3>:
 <div className='container'>
       <Form onSubmit={onSubmit} className='container'>
        <h2>Experience Details</h2>
        <Form.Group className='mb-3 form'>
            <Form.Label>Comapny </Form.Label> <br/> 
            <Form.Control onChange={onChange} style={{width:'600px'}} id="company"  value ={data.company} type="text" placeholder='Enter Company'></Form.Control>
        </Form.Group>
        <Form.Group className='mb-3 form'>
            <Form.Label>Title </Form.Label> <br/> 
            <Form.Control onChange={onChange} style={{width:'600px'}} id="title"  value ={data.title} type="text" placeholder='Enter Title of Experience'></Form.Control>
        </Form.Group>
        <Form.Group className='mb-3 form'>
            <Form.Label>Years </Form.Label> <br/> 
            <Form.Control onChange={onChange} style={{width:'600px'}} id="years"  value ={data.years} type="text" placeholder='Enter Years of Experience or Range of Date'></Form.Control>
        </Form.Group>
        <Form.Group className='mb-3 form'>
            <Form.Label>Technologies </Form.Label> <br/> 
            <Form.Control onChange={onChange} style={{width:'600px'}} id="technologies"  value ={data.technologies} type="text" placeholder='Enter Technologies comma seperated'></Form.Control>
        </Form.Group>
        <Form.Group className='mb-3 form'>
            <Form.Label>Main Technologies </Form.Label><br/>
            <Form.Control onChange={onChange} style={{width:'600px'}} id="mainTech" value ={data.mainTech} type="text" placeholder='Enter Main Technologies comma seperated'></Form.Control>
        </Form.Group>
        <Button type='submit' className='drop' >Submit</Button>
        </Form>  
    </div>
    )
  )
}
