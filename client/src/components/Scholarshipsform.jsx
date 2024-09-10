"use client";

import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";

export default function ScholarshipsForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      academicAchievements: [{ award: "", year: "", description: "" }],
      extracurriculars: [{ activity: "", role: "", duration: "", description: "" }],
      references: [{ name: "", contact: "", relation: "" }],
    },
  });

  const { fields: achievementFields, append: appendAchievement } = useFieldArray({
    control,
    name: "academicAchievements",
  });

  const { fields: extracurricularFields, append: appendExtracurricular } = useFieldArray({
    control,
    name: "extracurriculars",
  });

  const { fields: referenceFields, append: appendReference } = useFieldArray({
    control,
    name: "references",
  });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    // Implement further submit logic here
  };

  return (
    <>
    <h1 className="text-xl md:text-3xl mb-5 mt-20 font-bold leading-tight text-yellow-300 flex justify-center">Scholarships Application Form</h1>
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 max-w-2xl mx-auto p-4 bg-gradient-to-br from-gray-900 to-black text-white rounded-lg shadow-md"
    >
      {/* Personal Information Card */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-teal-400">Personal Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-300">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              {...register("firstName", { required: "First Name is required" })}
              className="mt-1 block w-full p-2 border border-gray-600 bg-gray-700 rounded-md shadow-sm"
            />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-300">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              {...register("lastName", { required: "Last Name is required" })}
              className="mt-1 block w-full p-2 border border-gray-600 bg-gray-700 rounded-md shadow-sm"
            />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: "Email is required" })}
            className="mt-1 block w-full p-2 border border-gray-600 bg-gray-700 rounded-md shadow-sm"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            {...register("phone")}
            className="mt-1 block w-full p-2 border border-gray-600 bg-gray-700 rounded-md shadow-sm"
          />
        </div>
      </div>

      {/* Academic Achievements Card */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-teal-400">Academic Achievements</h2>
        {achievementFields.map((field, index) => (
          <div key={field.id} className="space-y-4">
            <div>
              <label htmlFor={`academicAchievements[${index}].award`} className="block text-sm font-medium text-gray-300">
                Award
              </label>
              <input
                type="text"
                id={`academicAchievements[${index}].award`}
                {...register(`academicAchievements[${index}].award`, { required: "Award is required" })}
                className="mt-1 block w-full p-2 border border-gray-600 bg-gray-700 rounded-md shadow-sm"
              />
              {errors.academicAchievements?.[index]?.award && (
                <p className="text-red-500 text-sm">{errors.academicAchievements[index].award.message}</p>
              )}
            </div>
            <div>
              <label htmlFor={`academicAchievements[${index}].year`} className="block text-sm font-medium text-gray-300">
                Year
              </label>
              <input
                type="text"
                id={`academicAchievements[${index}].year`}
                {...register(`academicAchievements[${index}].year`, { required: "Year is required" })}
                className="mt-1 block w-full p-2 border border-gray-600 bg-gray-700 rounded-md shadow-sm"
              />
              {errors.academicAchievements?.[index]?.year && (
                <p className="text-red-500 text-sm">{errors.academicAchievements[index].year.message}</p>
              )}
            </div>
            <div>
              <label htmlFor={`academicAchievements[${index}].description`} className="block text-sm font-medium text-gray-300">
                Description
              </label>
              <textarea
                id={`academicAchievements[${index}].description`}
                {...register(`academicAchievements[${index}].description`)}
                className="mt-1 block w-full p-2 border border-gray-600 bg-gray-700 rounded-md shadow-sm"
              />
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={() => appendAchievement({ award: "", year: "", description: "" })}
          className="mt-4 w-full py-2 px-4 border border-teal-600 text-teal-400 rounded-md hover:bg-teal-900 transition"
        >
          Add Achievement
        </button>
      </div>

      {/* Extracurricular Activities Card */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-teal-400">Extracurricular Activities</h2>
        {extracurricularFields.map((field, index) => (
          <div key={field.id} className="space-y-4">
            <div>
              <label htmlFor={`extracurriculars[${index}].activity`} className="block text-sm font-medium text-gray-300">
                Activity
              </label>
              <input
                type="text"
                id={`extracurriculars[${index}].activity`}
                {...register(`extracurriculars[${index}].activity`, { required: "Activity is required" })}
                className="mt-1 block w-full p-2 border border-gray-600 bg-gray-700 rounded-md shadow-sm"
              />
              {errors.extracurriculars?.[index]?.activity && (
                <p className="text-red-500 text-sm">{errors.extracurriculars[index].activity.message}</p>
              )}
            </div>
            <div>
              <label htmlFor={`extracurriculars[${index}].role`} className="block text-sm font-medium text-gray-300">
                Role
              </label>
              <input
                type="text"
                id={`extracurriculars[${index}].role`}
                {...register(`extracurriculars[${index}].role`, { required: "Role is required" })}
                className="mt-1 block w-full p-2 border border-gray-600 bg-gray-700 rounded-md shadow-sm"
              />
              {errors.extracurriculars?.[index]?.role && (
                <p className="text-red-500 text-sm">{errors.extracurriculars[index].role.message}</p>
              )}
            </div>
            <div>
              <label htmlFor={`extracurriculars[${index}].duration`} className="block text-sm font-medium text-gray-300">
                Duration
              </label>
              <input
                type="text"
                id={`extracurriculars[${index}].duration`}
                {...register(`extracurriculars[${index}].duration`)}
                className="mt-1 block w-full p-2 border border-gray-600 bg-gray-700 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label htmlFor={`extracurriculars[${index}].description`} className="block text-sm font-medium text-gray-300">
                Description
              </label>
              <textarea
                id={`extracurriculars[${index}].description`}
                {...register(`extracurriculars[${index}].description`)}
                className="mt-1 block w-full p-2 border border-gray-600 bg-gray-700 rounded-md shadow-sm"
              />
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={() => appendExtracurricular({ activity: "", role: "", duration: "", description: "" })}
          className="mt-4 w-full py-2 px-4 border border-teal-600 text-teal-400 rounded-md hover:bg-teal-900 transition"
        >
          Add Extracurricular
        </button>
      </div>

      {/* References Card */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-teal-400">References</h2>
        {referenceFields.map((field, index) => (
          <div key={field.id} className="space-y-4">
            <div>
              <label htmlFor={`references[${index}].name`} className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                id={`references[${index}].name`}
                {...register(`references[${index}].name`, { required: "Name is required" })}
                className="mt-1 block w-full p-2 border border-gray-600 bg-gray-700 rounded-md shadow-sm"
              />
              {errors.references?.[index]?.name && (
                <p className="text-red-500 text-sm">{errors.references[index].name.message}</p>
              )}
            </div>
            <div>
              <label htmlFor={`references[${index}].contact`} className="block text-sm font-medium text-gray-300">
                Contact
              </label>
              <input
                type="text"
                id={`references[${index}].contact`}
                {...register(`references[${index}].contact`, { required: "Contact is required" })}
                className="mt-1 block w-full p-2 border border-gray-600 bg-gray-700 rounded-md shadow-sm"
              />
              {errors.references?.[index]?.contact && (
                <p className="text-red-500 text-sm">{errors.references[index].contact.message}</p>
              )}
            </div>
            <div>
              <label htmlFor={`references[${index}].relation`} className="block text-sm font-medium text-gray-300">
                Relation
              </label>
              <input
                type="text"
                id={`references[${index}].relation`}
                {...register(`references[${index}].relation`, { required: "Relation is required" })}
                className="mt-1 block w-full p-2 border border-gray-600 bg-gray-700 rounded-md shadow-sm"
              />
              {errors.references?.[index]?.relation && (
                <p className="text-red-500 text-sm">{errors.references[index].relation.message}</p>
              )}
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={() => appendReference({ name: "", contact: "", relation: "" })}
          className="mt-4 w-full py-2 px-4 border border-teal-600 text-teal-400 rounded-md hover:bg-teal-900 transition"
        >
          Add Reference
        </button>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-2 px-4 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition"
      >
        Submit Application
      </button>
    </form>
    </>
  );
}
