import React, { useState } from "react";
import BasicDetails from "./pages/BasicDetails";
import AddressDetails from "./pages/AddressDetails";
import EducationDetails from "./pages/EducationDetails";
import OtherDetails from "./pages/OtherDetails";
import AttachmentDetails from "./pages/AttachmentDetails";


const Form = () => {

    const [page, setPage] = useState(0);
    const [moveNext, setMoveNext] = useState(false);

    const [formData, setFormData] = useState(
        [
            {
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                dob: "",
                street: "",
                city: "",
                state: "",
                zip: "",
            }
        ],

    );

    const handleFormData = (e) => {
        const list = [...formData];
        console.log("list", list);
        setFormData(list.map((item) => {
            return { ...item, [e.target.name]: e.target.value }
        }));
    };


    console.log("form data", formData);
    // console.log("error", error);
    console.log("move next", moveNext);



    const displayPage = () => {
        switch (page) {
            case 0:
                return <BasicDetails formData={formData} setFormData={setFormData}
                    moveNext={moveNext} setMoveNext={setMoveNext}
                    handleFormData={handleFormData}
                    page={page}
                    setPage={setPage}
                />;
            case 1:
                return <AddressDetails formData={formData} setFormData={setFormData} handleFormData={handleFormData} moveNext={moveNext} page={page} setPage={setPage} />;
            case 2:
                return <EducationDetails formData={formData} setFormData={setFormData} handleFormData={handleFormData} moveNext={moveNext} page={page} setPage={setPage} />;
            case 3:
                return <OtherDetails formData={formData} setFormData={setFormData} handleFormData={handleFormData} moveNext={moveNext} page={page} setPage={setPage} />;
            case 4:
                return <AttachmentDetails formData={formData} setFormData={setFormData} handleFormData={handleFormData} moveNext={moveNext} page={page} setPage={setPage} />;
            default:
                return <BasicDetails formData={formData} setFormData={setFormData} handleFormData={handleFormData} moveNext={moveNext} page={page} setPage={setPage} />;
        }
    };

    return (
        <>
            <form>
                <div className="form">
                    <div className="content">
                        {displayPage()}
                    </div>
                </div>
            </form>
        </>

    );
};

export default Form;