import React from "react";

const OtherDetails = () => {
    return (
        <>
            <div className="form-container">
                <h1>Other Details</h1>
                <div className="form-group">
                    <label htmlFor="hobby">Hobby</label>
                    <input type="text" width={100} name="hobby" id="hobby" />
                    <button>Add More</button>
                    <p className="error"></p>
                </div>
                <div className="form-group">
                    <label htmlFor="skills">Skills</label>
                    <input type="text" name="skills" id="skills" />
                    <button>Add More</button>
                    <p className="error"></p>
                </div>
            </div>

        </>
    );
};

export default OtherDetails; 