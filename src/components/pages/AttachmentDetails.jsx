import React from "react";

const AttachmentDetails = () => {
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
            </div>
        </>
    );
}

export default AttachmentDetails;