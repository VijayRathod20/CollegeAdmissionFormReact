import React from "react";

const AttachmentDetails = (
    { formData, setFormData, handleFormData, moveNext, setMoveNext,
        page, setPage
    }
) => {
    return (
        <>
            <div className="form-container">
                <h1>Other Details</h1>
                <div className="form-group">
                    <label htmlFor="ssc">10th MarkSheet</label>
                    <input type="file" width={100} name="ssc" id="ssc" />
                    <p className="error"></p>
                </div>
                <div className="form-group">
                    <label htmlFor="hsc">12th MarkSheet</label>
                    <input type="file" name="hsc" id="hsc" />
                    <p className="error"></p>
                </div>
                <div className="form-group">
                    <label htmlFor="zip">ZipCode</label>
                    <input type="text" name="zip" id="zip"
                        value={formData.zip}
                        onChange={(e) => {
                            handleFormData(e);
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
        </>
    );
}

export default AttachmentDetails;