import React, { useState, useEffect } from 'react';

const EducationForms = () => {
    const [educations, setEducations] = useState([
        { course: '', year: '', score: '' }
    ]);
    const [editIndex, setEditIndex] = useState(-1);
    console.log(educations);

    useEffect(() => {
        const storedEducations = localStorage.getItem('educations');
        if (storedEducations) {
            setEducations(JSON.parse(storedEducations));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('educations', JSON.stringify(educations));
    }, [educations]);

    const handleCourseChange = (index, event) => {
        const newEducations = [...educations];
        newEducations[index].course = event.target.value;
        setEducations(newEducations);
    };

    const handleYearChange = (index, event) => {
        const newEducations = [...educations];
        newEducations[index].year = event.target.value;
        setEducations(newEducations);
    };

    const handleScoreChange = (index, event) => {
        const newEducations = [...educations];
        newEducations[index].score = event.target.value;
        setEducations(newEducations);
    };

    const handleAddMore = () => {
        setEducations([...educations, { course: '', year: '', score: '' }]);
    };

    const handleRemove = (index) => {
        const newEducations = [...educations];
        newEducations.splice(index, 1);
        setEducations(newEducations);
    };

    const handleEdit = (index) => {
        setEditIndex(index);
    };

    const handleSave = (index) => {
        setEditIndex(-1);
    };

    return (
        <div>
            <div>
                {educations.map((education, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            placeholder="Course Name"
                            value={education.course}
                            onChange={(event) => handleCourseChange(index, event)}
                            disabled={editIndex === index ? false : true}
                        />
                        <input
                            type="text"
                            placeholder="Passing Year"
                            value={education.year}
                            onChange={(event) => handleYearChange(index, event)}
                            disabled={editIndex === index ? false : true}
                        />
                        <input
                            type="text"
                            placeholder="Score"
                            value={education.score}
                            onChange={(event) => handleScoreChange(index, event)}
                            disabled={editIndex === index ? false : true}
                        />
                        {index > 0 && (
                            <button onClick={() => handleRemove(index)}>Remove</button>
                        )}
                        {editIndex === index ? (
                            <button onClick={() => handleSave(index)}>Save</button>
                        ) : (
                            <button onClick={() => handleEdit(index)}>Edit</button>
                        )}
                    </div>
                ))}
                <button onClick={handleAddMore}>Add More</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Course Name</th>
                        <th>Passing Year</th>
                        <th>Score</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {educations.map((education, index) => (
                        <tr key={index}>
                            <td>{education.course}</td>
                            <td>{education.year}</td>
                            <td>{education.score}</td>
                            <td>
                                {editIndex === index ? (
                                    <button onClick={() => handleSave(index)}>Save</button>
                                ) : (
                                    <button onClick={() => handleEdit(index)}>Edit</button>
                                )}
                                <button onClick={() => handleRemove(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EducationForms;

