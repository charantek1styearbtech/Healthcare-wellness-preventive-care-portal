import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Sidebar.css";

const Sidebar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) return null;

  return (
    <aside className="sidebar">
      <ul>
        {/* PATIENT */}
        {user.role === "patient" && (
          <>
            <li>
              <NavLink to="/patient/profile">My Profile</NavLink>
            </li>
            <li>
              <NavLink to="/patient/messages">Messages</NavLink>
            </li>
          </>
        )}

        {/* PROVIDER */}
        {user.role === "provider" && (
          <>
            <li>
              <NavLink to="/provider/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/provider/patients">Patients</NavLink>
            </li>
            <li>
              <NavLink to="/provider/goals">Set Goals</NavLink>
            </li>
            <li>
              <NavLink to="/provider/messages">Messages</NavLink>
            </li>
          </>
        )}
      </ul>

      <button
        className="sidebar-logout"
        onClick={() => {
          logout();
          navigate("/");
        }}
      >
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
