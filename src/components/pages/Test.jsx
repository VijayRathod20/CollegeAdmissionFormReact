import React, { useState } from 'react';

const EducationForm = () => {
  const [educations, setEducations] = useState([
    { course: '', year: '', score: '' }
  ]);

  console.log(educations);

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

  return (
    <div>
      {educations.map((education, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Course Name"
            value={education.course}
            onChange={(event) => handleCourseChange(index, event)}
          />
          <input
            type="text"
            placeholder="Passing Year"
            value={education.year}
            onChange={(event) => handleYearChange(index, event)}
          />
          <input
            type="text"
            placeholder="Score"
            value={education.score}
            onChange={(event) => handleScoreChange(index, event)}
          />
          {index > 0 && (
            <button onClick={() => handleRemove(index)}>Remove</button>
          )}
        </div>
      ))}
      <button onClick={handleAddMore}>Add More</button>
    </div>
  );
};

export default EducationForm;
