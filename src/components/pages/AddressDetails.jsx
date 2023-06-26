const AddressDetails = ({ formData, setFormData, handleFormData, moveNext, setMoveNext,
    page, setPage
}) => {
    return (
        <div className="form-container">
            <h1>Address Details</h1>
            <div className="form-group">
                <label htmlFor="street">Street Address</label>
                <input type="text" width={100} name="street" id="street"
                    value={formData.map((data) => {
                        return data.street;
                    })}
                    onChange={(e) => {
                        handleFormData(e);
                    }}
                />
                <p className="error"></p>
            </div>
            <div className="form-group">
                <label htmlFor="city">City</label>
                <input type="text" name="city" id="city"
                    value={formData.map((data) => {
                        return data.city;
                    })}
                    onChange={(e) => {
                        handleFormData(e);
                    }}
                />
                <p className="error"></p>
            </div>
            <div className="form-group">
                <label htmlFor="state">State</label>
                <input type="text" name="state" id="state"
                    value={
                        formData.map((data) => {
                            return data.state;
                        })
                    }
                    onChange={(e) => {
                        handleFormData(e);
                    }}
                />
                <p className="error"></p>
            </div>
            <div className="form-group">
                <label htmlFor="zip">ZipCode</label>
                <input type="text" name="zip" id="zip"
                    value={
                        formData.map((data) => {
                            return data.zip;
                        })
                    }
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

    );
};

export default AddressDetails;