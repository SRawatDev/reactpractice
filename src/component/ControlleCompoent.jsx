import React, { useState } from 'react'
const ControlleCompoent = () => {
    const defaultValue = {
        name: "",
        email: "",
        description: ""
    }
    const [value, setValue] = useState(defaultValue)
    const [data, setData] = useState([])
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValue((pre) => ({ ...pre, [name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setData((pre) => [...pre, value])
        setValue(defaultValue)
    }
    console.log(data)
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={value?.name} onChange={handleInputChange} />
                <br />
                <label htmlFor="email">EMail</label>
                <input type="text" name="email" id="email" value={value?.email} onChange={handleInputChange} />
                <br />
                <label htmlFor="description">Description</label>
                <input type="text" name="description" id="description" value={value?.description} onChange={handleInputChange} />
                <br />
                <button>Submit data</button>
            </form>
        </div>
    )
}

export default ControlleCompoent