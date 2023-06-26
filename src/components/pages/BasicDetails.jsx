import React, { useEffect, useRef, useState } from "react";


const BasicDetails = ({ formData, setFormData, moveNext, setMoveNext, validator, handleFormData, page, setPage }
) => {
    const didMount = useRef(false);
    const [errorBasic, setErrorBasic] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dob: "",
    })
    console.log("errorBasic", errorBasic);
    const [isErrorActive, setIsErrorActive] = useState(false);
    const checkIfErrorExists = async() => {
        if (errorBasic.firstName == "" && errorBasic.lastName == "" && errorBasic.email == "" && errorBasic.phone == "" && errorBasic.dob == "") {
            setMoveNext(true)
        } else {
            setMoveNext(false)
        }
    }
    const checkErrors = async () => {
        // Validations for First Name
        if (formData[0].firstName.length === 0) {
            setErrorBasic((prev) => ({ ...prev, firstName: "First Name must be required" }))
        } else if (formData[0].firstName.length < 3) {
            setErrorBasic((prev) => ({ ...prev, firstName: "First Name must be 3 characters" }))
        } else {
            setErrorBasic((prev) => ({ ...prev, firstName: "" }))
        }

        if (formData[0].lastName.length === 0) {
            setErrorBasic((prev) => ({ ...prev, lastName: "LAst Name must be required" }))
        } else if (formData[0].lastName.length < 3) {
            setErrorBasic((prev) => ({ ...prev, lastName: "LAst Name must be 3 characters" }))
        } else {
            setErrorBasic((prev) => ({ ...prev, lastName: "" }))
        }

        if (formData[0].email.length === 0) {
            setErrorBasic((prev) => ({ ...prev, email: "Email must be required" }))
        } else if (!formData[0].email.includes("@")) {
            setErrorBasic((prev) => ({ ...prev, email: "Email must be valid" }))
        } else {
            setErrorBasic((prev) => ({ ...prev, email: "" }))
        }

        // if (formData[0].phone.length !== 10) {
        //     setErrorBasic((prev) => ({ ...prev, phone: "Phone must be 10 digits" }))
        // } else {
        //     setErrorBasic((prev) => ({ ...prev, phone: "" }))
        // }

        // //date of birth must be greater than current date
        // if (formData[0].dob.length === 0) {
        //     setErrorBasic((prev) => ({ ...prev, dob: "Date of birth must be required" }))
        // }
        // else if (formData[0].dob < new Date().toISOString().slice(0, 10)) {
        //     setErrorBasic((prev) => ({ ...prev, dob: "Date of birth must be greater than current date" }))
        // }
        // else {
        //     setErrorBasic((prev) => ({ ...prev, dob: "" }))
        // }
    }
    useEffect(() => {
        if(didMount.current){
            checkIfErrorExists()
        }else{
            didMount.current = true
        }
    }, [errorBasic])
    return (
        <>
            <div className="form-container">
                <h1>Basic Details</h1>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" id="firstName"
                        value={
                            formData.map((item) => {
                                return item.firstName
                            })
                        }
                        onChange={(e) => {
                            // const list = [...formData]
                            // setFormData(
                            //     list.map((item) => {
                            //         return { ...item, firstName: e.target.value }
                            //     })
                            // )
                            handleFormData(e)

                            isErrorActive && checkErrors()
                            // if (e.target.value.length === 0) {
                            //     console.log(e.target.value.length);
                            //     const list = [...error]
                            //     setError(list.map((item) => {
                            //         return { ...item, firstName: "First Name must be required" }
                            //     }))
                            //     setMoveNext(false)
                            // } else {
                            //     const list = [...error]
                            //     setError(list.map((item) => {
                            //         return { ...item, firstName: "" }
                            //     }))
                            //     setMoveNext(true)
                            // }

                        }}
                    />
                    <p className="error">
                        {errorBasic.firstName}
                    </p>
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" id="lastName"
                        value={
                            formData.map((item) => {
                                return item.lastName
                            })
                        }
                        onChange={(e) => {
                            // const list = [...formData]
                            // setFormData(list.map((item) => {
                            //     return { ...item, lastName: e.target.value }
                            // }))
                            isErrorActive && checkErrors()
                            handleFormData(e)


                        }}
                    />
                    <p className="error">
                        {errorBasic.lastName}
                    </p>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email"
                        value={formData.email}
                        onChange={(e) => {
                            // const list = [...formData]
                            // setFormData(list.map((item) => {
                            //     return { ...item, email: e.target.value }
                            // }))
                            isErrorActive && checkErrors()
                            handleFormData(e);


                            // if (e.target.value.length < 1) {
                            //     setError({ ...error, email: "Email must be required" })
                            // }
                            // else if (!e.target.value.includes("@")) {
                            //     setError({ ...error, email: "Email must be required" })
                            // }
                            // else {
                            //     setError({ ...error, email: "" })
                            // }
                        }}
                    />
                    <p className="error">
                        {errorBasic.email}
                    </p>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="number" name="phone" id="phone"
                        value={formData.phone}
                        onChange={(e) => {
                            // const list = [...formData]
                            // setFormData(list.map((item) => {
                            //     return { ...item, phone: e.target.value }
                            // }))
                            handleFormData(e)
                            isErrorActive && checkErrors()



                            // if (e.target.value.length < 1) {
                            //     setError({ ...error, phone: "Phone must be required" })
                            // } else if (e.target.value.length !== 10) {
                            //     setError({ ...error, phone: "Phone must be required 10 digit" })
                            // }
                            // else {
                            //     setError({ ...error, phone: "" })
                            // }
                        }}
                    />
                    <p className="error">
                        {errorBasic.phone}
                    </p>
                </div>
                <div className="form-group">
                    <label htmlFor="dob">Date of Birth</label>
                    <input type="date" name="dob" id="dob"
                        value={formData.dob}
                        onChange={(e) => {
                            // const list = [...formData]
                            // setFormData(list.map((item) => {
                            //     return { ...item, dob: e.target.value }
                            // }))
                            isErrorActive && checkErrors()
                            handleFormData(e)


                            // if (e.target.value.length < 1) {
                            //     setError({ ...error, dob: "Date of Birth must be required" })
                            // }
                            // else if (e.target.value < new Date().toISOString()) {
                            //     setError({ ...error, dob: "Date of Birth must be required" })
                            // }
                            // else {
                            //     setError({ ...error, dob: "" })
                            // }
                        }}
                    />
                    <p className="error">
                        {errorBasic.dob}
                    </p>

                </div>

                <div className="radio-group">
                    <label htmlFor="gender">Gender</label><br></br>
                    <label htmlFor="male">Male</label>
                    <input type="radio" name="gender" id="male" value={'male'}
                        onChange={(e) => {
                            // const list = [...formData]
                            // setFormData(list.map((item) => {
                            //     return { ...item, gender: e.target.value }
                            // }))
                            isErrorActive && checkErrors()
                            handleFormData(e)

                        }}
                    />
                    <label htmlFor="female">Female</label>
                    <input type="radio" name="gender" id="female"
                        value={'female'}
                        onChange={(e) => {
                            // const list = [...formData]
                            // setFormData(list.map((item) => {
                            //     return { ...item, gender: e.target.value }
                            // }))
                            isErrorActive && checkErrors()
                            handleFormData(e)

                        }}
                    />
                    <label htmlFor="other">Other</label>
                    <input type="radio" name="gender" id="other"
                        value={'other'}
                        onChange={(e) => {
                            // const list = [...formData]
                            // setFormData(list.map((item) => {
                            //     return { ...item, gender: e.target.value }
                            // }))
                            isErrorActive && checkErrors()
                            handleFormData(e)

                        }}
                    />
                    <p className="error"></p>
                </div>
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
                            async () => {
                               await checkErrors();
                                await setIsErrorActive(true)
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

        </>
    );
};
export default BasicDetails;