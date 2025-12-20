import RobotProfileImage from "../assets/robot.png";
import UserProfileImage from "../assets/user.png";

// Conditional rendering based on sender
export function ChatMsg({ message, sender }) {
  const isRobot = sender === "robot";
  return (
    <div
      className={`flex ${isRobot ? "justify-start" : "justify-end"
        } items-end gap-2`}
    >
      {sender === "robot" && (
        <img
          src={RobotProfileImage}
          className="w-8 h-8 rounded-full border border-gray-200"
        />
      )}

      <div
        className={`max-w-[80%] p-3 rounded-2xl text-sm ${isRobot
            ? "bg-white border border-gray-200 text-gray-800 rounded-bl-none"
            : "bg-blue-600 text-white rounded-br-none"
          }`}
      >
        {message}
      </div>

      {sender === "user" && (
        <img
          src={UserProfileImage}
          className="w-8 h-8 rounded-full border border-gray-200"
        />
      )}
    </div>
  );
}