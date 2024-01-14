import React from 'react'
import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import '../Assets/form.css'
import '../Assets/style.css'
import '../Assets/drop.css'

export default function BasicInfo() {
    const [data, setSkill] = useState({
        sectionName: "",
        experience: "",
        projects: "",
        description_header: "",
        image: "",
        description:"",
        about: "",
        skills: ""
    })
    const [status, setStatus] = useState(-1)
    const url = process.env.basicInfoUrl || "http://localhost:8080/resume/addBasicInfo"

    const onChange = (e) => {
        const newData = { ...data }
        newData[e.target.id] = e.target.value
        setSkill(newData)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        axios.put(url, data)
            .then(res => {
                if (res.data)
                    setStatus(1)
                else
                    setStatus(0)
            })
    }

    return (
        (status == 1 ? <h3>Data Successfully addedd</h3>
            : status == 0 ? <h3>Error on Data Adding. Please try Again !!</h3> :
                <div className='container'>
                    <Form onSubmit={onSubmit} className='container'>
                        <h2>Basic Infomation</h2>
                        <Form.Group className='mb-3'>
                            <Form.Label>Section Thumbnail Name</Form.Label><br/>
                            <Form.Control onChange={onChange} id="sectionName" value={data.sectionName} type="text" placeholder='Enter Section Thumbnail Name'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3 form'>
                            <Form.Label>Project Thumbnail Name</Form.Label><br/>
                            <Form.Control onChange={onChange} id="projects" value={data.projects} type="text" placeholder='Enter Thumbnail Name'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3 form'>
                            <Form.Label>Experience Thumbnail Name</Form.Label><br/>
                            <Form.Control onChange={onChange} id="experience" value={data.experience} type="text" placeholder='Enter Thumbnail Experience'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3 form'>
                            <Form.Label>Skills Thumbnail Name</Form.Label><br/>
                            <Form.Control onChange={onChange} id="skills" value={data.skills} type="text" placeholder='Enter Thumbnail Skill'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3 form'>
                            <Form.Label>About Us</Form.Label><br/>
                            <Form.Control onChange={onChange} id="about" value={data.about} type="text" placeholder='Enter Details of Business'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3 form'>
                            <Form.Label>Description Header</Form.Label><br/>
                            <Form.Control onChange={onChange} id="description_header" value={data.description_header} type="text" placeholder='Enter Description Header'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3 form'>
                            <Form.Label>Description</Form.Label><br/>
                            <Form.Control onChange={onChange} id="description" value={data.description} type="text" placeholder='Enter Description'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3 form'>
                            <Form.Label>Image</Form.Label><br/>
                            <Form.Control onChange={onChange} id="image" value={data.image} type="text" placeholder='Enter Section Image URL'></Form.Control>
                        </Form.Group>
                    <Button type='submit' className='drop' >Submit</Button>
                    </Form>
                </div>)
    )
}
