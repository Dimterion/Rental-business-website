import "./profile.css";

export default function Profile(props) {
  return (
    <div className="profile-container">
      <h4 className="profile-name">{props.profileName}</h4>
      <img
        className="profile-picture"
        src={props.profilePicture}
        alt={props.profileName}
      />
    </div>
  );
}
