export default function Profile(props) {
  return (
    <div>
      <h4>{props.profileName}</h4>
      <img src={props.profilePicture} alt={props.profileName} />
    </div>
  );
}
