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
        link:"",
        githubLink:"",
        skillClass:"",
        name:"",
        description: ""
    })
    const [status, setStatus] = useState(-1)
    const url = process.env.REACT_APP_PROJECTURL
 
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
            if(str[i] == ',')
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

    const onSubmit = (e) =>{
        e.preventDefault()
        console.log(url)
        const newSkillClass = createArrayFromString(data.skillClass)
        const newName = createArrayFromString(data.name)
        const images = createArrayFromString(data.images)

        data.skillClass= newSkillClass
        data.name = newName
        data.images = images

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
            <Form.Label>Description of Project </Form.Label><br/>
            <Form.Control onChange={onChange} style={{width:'300px'}} id="description" value ={data.description} type="text" placeholder='Enter Description of Project'></Form.Control>
        </Form.Group>
        <Form.Group className='mb-3 form'>
            <Form.Label>Link of Project </Form.Label><br/>
            <Form.Control onChange={onChange} style={{width:'300px'}} id="link" value ={data.link} type="text" placeholder='Enter Link of Project'></Form.Control>
        </Form.Group>
        <Form.Group className='mb-3 form'>
            <Form.Label>Github Link of Project </Form.Label><br/>
            <Form.Control onChange={onChange} style={{width:'300px'}} id="githubLink" value ={data.githubLink} type="text" placeholder='Enter Github Link of Project'></Form.Control>
        </Form.Group>
        <Form.Group className='mb-3 form'>
            <Form.Label>Skill Class Name </Form.Label><br/>
            <Form.Control onChange={onChange} style={{width:'300px'}} id="skillClass" value ={data.skillClass} type="text" placeholder='Enter Skill Class with comma seprated'></Form.Control>
        </Form.Group>
        <Form.Group className='mb-3 form'>
            <Form.Label>Name of Skill</Form.Label><br/>
            <Form.Control onChange={onChange} style={{width:'300px'}} id="name" value ={data.name} type="text" placeholder='Enter skill Name'></Form.Control>
        </Form.Group>
        <Button type='submit' className='drop'>Submit</Button>
        </Form>  
    </div>)
  )
}
