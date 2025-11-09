import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Careers() {
  const [careers, setCareers] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    skills: "",
    category: "",
  });

  // Fetch all careers
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/careers")
      .then((res) => setCareers(res.data))
      .catch((err) => console.error("Error fetching careers:", err));
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newCareer = {
        title: formData.title,
        description: formData.description,
        skills: formData.skills.split(",").map((s) => s.trim()),
        category: formData.category,
      };
      const res = await axios.post(
        "http://localhost:5000/api/careers",
        newCareer
      );
      alert("Career added successfully!");
      setCareers([...careers, res.data.career]);
      setFormData({ title: "", description: "", skills: "", category: "" });
    } catch (err) {
      console.error("Error adding career:", err);
      alert("Failed to add career.");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h2 className="text-2xl font-semibold mb-6">Career Management</h2>

      {/* Add Career Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded p-6 mb-10"
      >
        <h3 className="text-lg font-semibold mb-4">Add a New Career</h3>

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="border rounded p-2 mb-3 w-full"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
          className="border rounded p-2 mb-3 w-full"
        />

        <input
          type="text"
          name="skills"
          placeholder="Skills (comma separated)"
          value={formData.skills}
          onChange={handleChange}
          required
          className="border rounded p-2 mb-3 w-full"
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
          className="border rounded p-2 mb-3 w-full"
        />

        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Add Career
        </button>
      </form>

      {/* Career List */}
      <h3 className="text-xl font-semibold mb-6">Explore Careers</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {careers.length === 0 && (
          <p className="text-gray-500">
            No careers available. Add one using the form above.
          </p>
        )}
        {careers.map((c) => (
          <div
            key={c._id}
            className="bg-white rounded shadow p-4 hover:shadow-lg transition"
          >
            <h3 className="font-bold">{c.title}</h3>
            <p className="text-sm text-gray-600 my-2">{c.description}</p>
            <p className="text-xs">
              <strong>Skills:</strong> {c.skills?.join(", ")}
            </p>
            <p className="text-xs">
              <strong>Category:</strong> {c.category}
            </p>
            {c.resources?.length > 0 && (
              <div className="mt-3">
                <strong className="text-sm">Resources</strong>
                <ul className="text-xs list-disc ml-4">
                  {c.resources.map((r, i) => (
                    <li key={i}>
                      <a
                        href={r.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-indigo-600"
                      >
                        {r.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
