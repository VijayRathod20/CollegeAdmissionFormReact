import React from "react";


const BasicDetails = ({ formData, setFormData, error, setError, moveNext, setMoveNext }
) => {
    return (
        <>
            <div className="form-container">
                <h1>Basic Details</h1>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" id="firstName"
                        value={formData.firstName}
                        onChange={(e) => {
                            setFormData({ ...formData, firstName: e.target.value })
                            if (e.target.value.length < 1) {
                                setError({ ...error, firstName: "First Name must be require" })
                                setMoveNext({ ...moveNext, value: false })
                            } else {
                                setError({ ...error, firstName: "" })
                            }
                        }}
                    />
                    <p className="error">{
                        error.firstName ? error.firstName : ""
                    }</p>
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" id="lastName"
                        value={formData.lastName}
                        onChange={(e) => {
                            setFormData({ ...formData, lastName: e.target.value })
                            if (e.target.value.length < 1) {
                                setError({ ...error, lastName: "Last Name must be required" })
                            } else {
                                setError({ ...error, lastName: "" })
                            }

                        }}
                    />
                    <p className="error">
                        {
                            error.lastName ? error.lastName : ""
                        }
                    </p>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email"
                        value={formData.email}
                        onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value })
                            if (e.target.value.length < 1) {
                                setError({ ...error, email: "Email must be required" })
                            }
                            else if (!e.target.value.includes("@")) {
                                setError({ ...error, email: "Email must be required" })
                            }
                            else {
                                setError({ ...error, email: "" })
                            }
                        }}
                    />
                    <p className="error">
                        {
                            error.email ? error.email : ""
                        }
                    </p>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name="phone" id="phone"
                        value={formData.phone}
                        onChange={(e) => {
                            setFormData({ ...formData, phone: e.target.value })
                            if (e.target.value.length < 1) {
                                setError({ ...error, phone: "Phone must be required" })
                            } else if (e.target.value.length !== 10) {
                                setError({ ...error, phone: "Phone must be required 10 digit" })
                            }
                            else {
                                setError({ ...error, phone: "" })
                            }
                        }}
                    />
                    <p className="error">{
                        error.phone ? error.phone : ""
                    }</p>
                </div>
                <div className="form-group">
                    <label htmlFor="dob">Date of Birth</label>
                    <input type="date" name="dob" id="dob"
                        value={formData.dob}
                        onChange={(e) => {
                            setFormData({ ...formData, dob: e.target.value })
                            if (e.target.value.length < 1) {
                                setError({ ...error, dob: "Date of Birth must be required" })
                            }
                            else if (e.target.value < new Date().toISOString()) {
                                setError({ ...error, dob: "Date of Birth must be required" })
                            }
                            else {
                                setError({ ...error, dob: "" })
                            }
                        }}
                    />
                    <p className="error">{
                        error.dob ? error.dob : ""
                    }</p>
                </div>

                <div className="radio-group">
                    <label htmlFor="gender">Gender</label><br></br>
                    <label htmlFor="male">Male</label>
                    <input type="radio" name="gender" id="male" value={'male'}
                        onChange={(e) => {
                            setFormData({ ...formData, gender: e.target.value })
                        }}
                    />
                    <label htmlFor="female">Female</label>
                    <input type="radio" name="gender" id="female"
                        value={'female'}
                        onChange={(e) => {
                            setFormData({ ...formData, gender: e.target.value })
                        }}
                    />
                    <label htmlFor="other">Other</label>
                    <input type="radio" name="gender" id="other"
                        value={'other'}
                        onChange={(e) => {
                            setFormData({ ...formData, gender: e.target.value })
                        }}
                    />
                    <p className="error"></p>
                </div>
            </div>

        </>
    );
};

export default BasicDetails;