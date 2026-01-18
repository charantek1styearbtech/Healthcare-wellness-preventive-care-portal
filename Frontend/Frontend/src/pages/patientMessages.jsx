import MainLayout from "../components/layout/MainLayout";
import "./PatientMessages.css";

const PatientMessages = () => {
  return (
    <MainLayout>
      <div className="messages-page">
        <h2 className="messages-title">Messages from Provider</h2>

        <div className="message-card">
          <div className="message-header">
            <span className="doctor-name">Dr. Smith</span>
            <span className="message-date">18 Jan 2026</span>
          </div>

          <p className="message-text">
            Please increase your daily step count to <strong>6,000</strong> for
            better cardiovascular health. Also ensure proper hydration.
          </p>
        </div>

        <div className="message-card">
          <div className="message-header">
            <span className="doctor-name">Dr. Smith</span>
            <span className="message-date">12 Jan 2026</span>
          </div>

          <p className="message-text">
            Your sleep duration has improved. Try maintaining a consistent sleep
            schedule.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default PatientMessages;
