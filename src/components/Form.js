import React, {useState} from 'react';

    //Define a function that is our componenet, always make sure to declare props parameter so you can use props in your component
    const Form = (props) => {
        //State to hold the data of our form
        const [formData, setFormData] = useState({searchterm: '', });
    //handleChange -updates formData whenwe type ino form
    const handleChange = (e) => {
        //use the event object to detect key and value to update
        setFormData({...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        //prevent page from refreshing on form submission
        e.preventDefault();
        //pass the search term to moviesearch prop, which is an apps getMovie function
        props.moviesearch(formData.searchterm);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type='text'
                name='searchterm'
                onChange={handleChange}
                value={formData.searchterm}
                />
                <input type='submit' value='submit'/>
            </form>
        </div>
    );
};

export default Form;