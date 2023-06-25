const EducationDetails = () => {

    const addMoreEducationDetails = () => {
        //add more education details


    }
    return (
        <div className="form-container">
            <h1>Education Details</h1>
            <div className="form-group">
                <label htmlFor="course">Course Name</label>
                <input type="text" width={100} name="course" id="course" />
                <p className="error"></p>
            </div>
            <div className="form-group">
                <label htmlFor="year">Passing Year</label>
                <input type="text" name="year" id="year" />
                <p className="error"></p>
            </div>
            <div className="form-group">
                <label htmlFor="score">score</label>
                <input type="text" name="score" id="score" />
                <p className="error"></p>
            </div>
            <button
                className="btn"
                onClick={() => {
                    addMoreEducationDetails();
                }}
            >Add More</button>
        </div>


    );
};

export default EducationDetails;