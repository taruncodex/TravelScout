import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.state?.userId; // Get user ID from navigation state

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        if (!userId) {
          navigate("/sign-in");
          return;
        }

        const response = await fetch(`https://travelscout.onrender.com/user/${userId}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
        navigate("/");
      }
    };

    fetchUserProfile();
  }, [userId, navigate]);

  if (!user) {
    return <p className="text-center text-gray-500 mt-10">Loading...</p>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Profile</h2>
      <div className="text-center">
        <img
          src={user.avatar || "https://via.placeholder.com/150"}
          alt="Profile"
          className="w-24 h-24 mx-auto rounded-full"
        />
        <h3 className="mt-2 text-lg font-semibold">{user.name}</h3>
        <p className="text-gray-600">{user.email}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
