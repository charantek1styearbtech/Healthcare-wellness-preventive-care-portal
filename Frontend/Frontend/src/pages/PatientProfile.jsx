import { useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import "./PatientProfile.css";

const PatientProfile = () => {
  const [profile, setProfile] = useState({
    name: "David Johnson",
    email: "david@gmail.com",
    phone: "9876543210",
    age: 28,
    gender: "Male",
    height: "175",
    weight: "72",
    emergencyContact: "Sarah Johnson - 9988766554",
  });

  const [message, setMessage] = useState("");
  const token = localStorage.getItem("token");

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      await updatePatientProfile(profile, token);
      setMessage("Profile updated successfully ✅");
    } catch (err) {
      setMessage("Failed to update profile ❌");
    }
  };

  return (
    <MainLayout>
      <div className="profile-page">
        <h2 className="profile-title">My Profile</h2>

        <form className="profile-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div>
              <label>Name</label>
              <input name="name" value={profile.name} onChange={handleChange} />
            </div>

            <div>
              <label>Email</label>
              <input name="email" value={profile.email} disabled />
            </div>

            <div>
              <label>Phone</label>
              <input name="phone" value={profile.phone} onChange={handleChange} />
            </div>

            <div>
              <label>Age</label>
              <input name="age" value={profile.age} onChange={handleChange} />
            </div>

            <div>
              <label>Gender</label>
              <select
                name="gender"
                value={profile.gender}
                onChange={handleChange}
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label>Height (cm)</label>
              <input
                name="height"
                value={profile.height}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Weight (kg)</label>
              <input
                name="weight"
                value={profile.weight}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Emergency Contact</label>
              <input
                name="emergencyContact"
                value={profile.emergencyContact}
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit" className="save-btn">
            Save Changes
          </button>

          {message && <p className="profile-message">{message}</p>}
        </form>
      </div>
    </MainLayout>
  );
};

export default PatientProfile;
