import React, { useState } from "react";
import BasicDetails from "./pages/BasicDetails";
import AddressDetails from "./pages/AddressDetails";
import EducationDetails from "./pages/EducationDetails";
import OtherDetails from "./pages/OtherDetails";
import AttachmentDetails from "./pages/AttachmentDetails";


const Form = () => {

    const [page, setPage] = useState(0);
    const [moveNext, setMoveNext] = useState({
        value: false,
    });

    const [formData, setFormData] = useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            dob: "",
        },
    );

    const [error, setError] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dob: "",
    }
    );

    console.log("form data", formData);
    console.log("error", error);



    const validateBasicDetails = () => {

        // if (formData.firstName === "" || formData.firstName === null) {
        //     setError({ ...error, firstName: "Please enter your first name" });

        // }

        // else {
        //     setError({ ...error, firstName: "" });
        //     setMoveNext(true);
        //     setPage(page + 1);

        // }
        // if (formData.lastName === "" || formData.lastName === null) {
        //     setError({ ...error, lastName: "Please enter your last name" });
        // }
        // else {
        //     setError({ ...error, lastName: "" });
        //     setMoveNext(true);
        //     setPage(page + 1);
        // }

        if (formData.firstName === "" ||
            formData.lastName === "" ||
            formData.email === "" ||
            formData.phone === "" ||
            formData.dob === "") {
            setError({
                ...error, firstName: "Please enter your first name",
                lastName: "Please enter your last name",
                email: "Please enter your email",
                phone: "Please enter your phone number",
                dob: "Please enter your date of birth"
            });
        }
        else {
            setError({
                ...error, firstName: "",
                lastName: "",
                email: "",
                phone: "",
                dob: ""
            });
            setMoveNext({ ...moveNext, value: true });
            setPage(page + 1);
        }

    };

    // const handleFormData = (e) => {
    //     e.preventDefault();
    //     console.log("form data", e.target.firstName);
    //     alert("Form Submitted Successfully");
    // };

    const displayPage = () => {
        switch (page) {
            case 0:
                return <BasicDetails formData={formData} setFormData={setFormData} error={error} setError={setError}
                    moveNext={moveNext} setMoveNext={setMoveNext}
                />;
            case 1:
                return <AddressDetails formData={formData} setFormData={setFormData} />;
            case 2:
                return <EducationDetails />;
            case 3:
                return <OtherDetails />;
            case 4:
                return <AttachmentDetails />;
            default:
                return <BasicDetails />;
        }
    };

    return (
        <>
            <form onSubmit={validateBasicDetails}>
                <div className="form">
                    <div className="content">
                        {displayPage()}
                    </div>
                    <div className="footer">
                        <button disabled={page === 0}
                            onClick={
                                () => {

                                    if (page > 0) {
                                        setPage(page - 1);
                                    }

                                }
                            }
                        >Prev</button>
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
                            page === 4 ? <button type="submit">Submit</button> : <p onClick={
                                () => {
                                    validateBasicDetails();
                                    if (moveNext.value === true) {
                                        if (page < 4) {
                                            setPage(page + 1);
                                        }
                                    }
                                }
                            } >Next</p>
                        }
                    </div>
                </div>
            </form>
        </>

    );
};

export default Form;