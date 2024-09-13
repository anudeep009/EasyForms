import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";

axios.defaults.withCredentials = true;

export default function JobsForm() {
  const [education, setEducation] = useState([{ institution: "", degree: "", year: "" }]);
  const [experience, setExperience] = useState([{ company: "", position: "", duration: "", description: "" }]);
  const [skills, setSkills] = useState([""]);

  const { register, handleSubmit, formState: { errors } } = useForm();

  // Handlers for dynamically adding education, experience, and skills
  const addEducation = () => setEducation([...education, { institution: "", degree: "", year: "" }]);
  const addExperience = () => setExperience([...experience, { company: "", position: "", duration: "", description: "" }]);
  const addSkill = () => setSkills([...skills, ""]);

  const onSubmit = async (data) => {
    const formData = {
      ...data,
      education,
      experience,
      skills,
    };

    console.log("Submitting Form Data:", formData);

    const token = Cookies.get("accessToken");  // Assuming the JWT token is stored in cookies

    try {
      const response = await axios.post(
        "http://localhost:8002/api/users/Jobsform",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,  // Adding JWT token in headers
          },
        }
      );

      if (response.status === 200) {
        alert("Form submitted successfully!");
      } else {
        alert("Failed to submit form.");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        alert(error.response.data.message || "Failed to submit form.");
      } else {
        alert("Failed to submit form. Please try again.");
      }
    }
  };

  return (
    <>
      <h1 className="text-xl md:text-3xl mb-5 mt-20 font-bold leading-tight text-yellow-300 flex justify-center">
        Job Application Form
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 max-w-2xl mx-auto p-4 bg-gradient-to-br from-gray-900 to-black text-white">
        
        {/* Personal Information Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-teal-400">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-teal-400">First Name</label>
              <input
                type="text"
                id="firstName"
                {...register("firstName", { required: "First Name is required" })}
                className="mt-1 block w-full p-2 border border-gray-700 bg-gray-900 rounded-md text-white"
              />
              {errors.firstName && <span className="text-red-400 text-xs">{errors.firstName.message}</span>}
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-teal-400">Last Name</label>
              <input
                type="text"
                id="lastName"
                {...register("lastName", { required: "Last Name is required" })}
                className="mt-1 block w-full p-2 border border-gray-700 bg-gray-900 rounded-md text-white"
              />
              {errors.lastName && <span className="text-red-400 text-xs">{errors.lastName.message}</span>}
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-teal-400">Email</label>
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email is required" })}
              className="mt-1 block w-full p-2 border border-gray-700 bg-gray-900 rounded-md text-white"
            />
            {errors.email && <span className="text-red-400 text-xs">{errors.email.message}</span>}
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-teal-400">Phone Number</label>
            <input
              type="tel"
              id="phone"
              {...register("phoneNumber", { required: "Phone number is required" })}
              className="mt-1 block w-full p-2 border border-gray-700 bg-gray-900 rounded-md text-white"
            />
            {errors.phoneNumber && <span className="text-red-400 text-xs">{errors.phoneNumber.message}</span>}
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-teal-400">Address</label>
            <textarea
              id="address"
              {...register("address")}
              className="mt-1 block w-full p-2 border border-gray-700 bg-gray-900 rounded-md text-white"
            />
          </div>
        </div>

        {/* Education Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-teal-400">Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="space-y-4">
              <div>
                <label htmlFor={`institution-${index}`} className="block text-sm font-medium text-teal-400">Institution</label>
                <input
                  type="text"
                  id={`institution-${index}`}
                  value={edu.institution}
                  onChange={(e) => {
                    const newEducation = [...education];
                    newEducation[index].institution = e.target.value;
                    setEducation(newEducation);
                  }}
                  className="mt-1 block w-full p-2 border border-gray-700 bg-gray-900 rounded-md text-white"
                />
              </div>
              <div>
                <label htmlFor={`degree-${index}`} className="block text-sm font-medium text-teal-400">Degree</label>
                <input
                  type="text"
                  id={`degree-${index}`}
                  value={edu.degree}
                  onChange={(e) => {
                    const newEducation = [...education];
                    newEducation[index].degree = e.target.value;
                    setEducation(newEducation);
                  }}
                  className="mt-1 block w-full p-2 border border-gray-700 bg-gray-900 rounded-md text-white"
                />
              </div>
              <div>
                <label htmlFor={`year-${index}`} className="block text-sm font-medium text-teal-400">Year</label>
                <input
                  type="text"
                  id={`year-${index}`}
                  value={edu.year}
                  onChange={(e) => {
                    const newEducation = [...education];
                    newEducation[index].year = e.target.value;
                    setEducation(newEducation);
                  }}
                  className="mt-1 block w-full p-2 border border-gray-700 bg-gray-900 rounded-md text-white"
                />
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={addEducation}
            className="mt-4 w-full py-2 px-4 border border-teal-400 text-teal-400 rounded-md hover:bg-gray-700 transition"
          >
            Add Education
          </button>
        </div>

        {/* Experience Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-teal-400">Work Experience</h2>
          {experience.map((exp, index) => (
            <div key={index} className="space-y-4">
              <div>
                <label htmlFor={`company-${index}`} className="block text-sm font-medium text-teal-400">Company</label>
                <input
                  type="text"
                  id={`company-${index}`}
                  value={exp.company}
                  onChange={(e) => {
                    const newExperience = [...experience];
                    newExperience[index].company = e.target.value;
                    setExperience(newExperience);
                  }}
                  className="mt-1 block w-full p-2 border border-gray-700 bg-gray-900 rounded-md text-white"
                />
              </div>
              <div>
                <label htmlFor={`position-${index}`} className="block text-sm font-medium text-teal-400">Position</label>
                <input
                  type="text"
                  id={`position-${index}`}
                  value={exp.position}
                  onChange={(e) => {
                    const newExperience = [...experience];
                    newExperience[index].position = e.target.value;
                    setExperience(newExperience);
                  }}
                  className="mt-1 block w-full p-2 border border-gray-700 bg-gray-900 rounded-md text-white"
                />
              </div>
              <div>
                <label htmlFor={`duration-${index}`} className="block text-sm font-medium text-teal-400">Duration</label>
                <input
                  type="text"
                  id={`duration-${index}`}
                  value={exp.duration}
                  onChange={(e) => {
                    const newExperience = [...experience];
                    newExperience[index].duration = e.target.value;
                    setExperience(newExperience);
                  }}
                  className="mt-1 block w-full p-2 border border-gray-700 bg-gray-900 rounded-md text-white"
                />
              </div>
              <div>
                <label htmlFor={`description-${index}`} className="block text-sm font-medium text-teal-400">Description</label>
                <textarea
                  id={`description-${index}`}
                  value={exp.description}
                  onChange={(e) => {
                    const newExperience = [...experience];
                    newExperience[index].description = e.target.value;
                    setExperience(newExperience);
                  }}
                  className="mt-1 block w-full p-2 border border-gray-700 bg-gray-900 rounded-md text-white"
                />
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={addExperience}
            className="mt-4 w-full py-2 px-4 border border-teal-400 text-teal-400 rounded-md hover:bg-gray-700 transition"
          >
            Add Experience
          </button>
        </div>

        {/* Skills Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-teal-400">Skills</h2>
          {skills.map((skill, index) => (
            <div key={index}>
              <label htmlFor={`skill-${index}`} className="block text-sm font-medium text-teal-400">Skill {index + 1}</label>
              <input
                type="text"
                id={`skill-${index}`}
                value={skill}
                onChange={(e) => {
                  const newSkills = [...skills];
                  newSkills[index] = e.target.value;
                  setSkills(newSkills);
                }}
                className="mt-1 block w-full p-2 border border-gray-700 bg-gray-900 rounded-md text-white"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addSkill}
            className="mt-4 w-full py-2 px-4 border border-teal-400 text-teal-400 rounded-md hover:bg-gray-700 transition"
          >
            Add Skill
          </button>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-teal-400 text-gray-900 rounded-md hover:bg-teal-500 transition"
        >
          Submit
        </button>
      </form>
    </>
  );
}
