import React, { useState } from 'react';

const EducationDetails = ({ formData, setFormData, handleFormData, moveNext, setMoveNext,
    page, setPage,
}) => {

    const [educationDetails, setEducationDetails] = useState([{
        course: "",
        year: "",
        institute: "",
        score: "",
    }]);

    const handleAddMore = () => {
        setEducationDetails([...educationDetails, {
            course: "",
            year: "",
            institute: "",
            score: "",
        }]);
    };

    const handleRemove = (index) => {
        const values = [...educationDetails];
        values.splice(index, 1);
        setEducationDetails(values);
    };

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...educationDetails];
        list[index][name] = value;
        setEducationDetails(list);
    }

    console.log("education details", educationDetails);


    return (
        <>
            <h1>Education Details</h1>
            {
                educationDetails.map((item, index) => {
                    return <div className="form-container" key={index}>

                        <div className="form-group">
                            <label htmlFor="course">Course Name</label>
                            <input type="text" width={100} name="course" id="course"
                                value={item.course}
                                onChange={(e) => {
                                    handleInputChange(e, index);
                                    //add education details to form data
                                    const array = [...formData];
                                    array.map((data) => {
                                        data.educationDetails = educationDetails;
                                        setFormData(array);
                                    });
                                }
                                }
                            />
                            <p className="error"></p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="year">Passing Year</label>
                            <input type="text" name="year" id="year"
                                value={item.year}
                                onChange={(e) => {
                                    handleInputChange(e, index);
                                    const array = [...formData];
                                    array.map((data) => {
                                        data.educationDetails = educationDetails;
                                        setFormData(array);
                                    });

                                }

                                }
                            />
                            <p className="error"></p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="institute">Institute</label>
                            <input type="text" name="institute" id="institute"
                                value={item.institute}

                                onChange={(e) => {
                                    handleInputChange(e, index);
                                    const array = [...formData];
                                    array.map((data) => {
                                        data.educationDetails = educationDetails;
                                        setFormData(array);
                                    });

                                }

                                }
                            />
                            <p className="error"></p>
                        </div>

                        <div className="form-group">
                            <label htmlFor="score">score</label>
                            <input type="text" name="score" id="score"
                                value={item.score}
                                onChange={(e) => {
                                    handleInputChange(e, index);
                                    const array = [...formData];
                                    array.map((data) => {
                                        data.educationDetails = educationDetails;
                                        setFormData(array);
                                    });

                                }

                                }
                            />
                            <p className="error"></p>
                        </div>
                        {index > 0 && (
                            <p onClick={() => handleRemove(index)}>Remove</p>
                        )}

                        <p onClick={handleAddMore}>Add More</p>

                        <div className="footer">
                            <span disabled={page === 0}
                                onClick={
                                    () => {
                                        if (page > 0) {
                                            setPage(page - 1);
                                        }

                                    }
                                }
                            >Prev</span>
                            {/* <button onClick={
                            () => {
                                console.log(formData);
                                if (page < 4) {
                                    setPage(page + 1);
                                }
                                else {
                                    alert("Form Submitted");

                                }
                            }
                        } >
                            {
                                page === 4 ? "Submit" : "Next"
                            }
                        </button> */}

                            {
                                page === 4 ? <button type="submit">Submit</button> : <span onClick={
                                    () => {
                                        if (moveNext) {
                                            if (page < 4) {
                                                setPage(page + 1);
                                            }
                                        }
                                    }
                                } >Next</span>
                            }
                        </div>
                    </div>

                })
            }
        </>


    );
};

export default EducationDetails;