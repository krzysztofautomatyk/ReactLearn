
function ProfilePicture() {

    const imageUrl = './src/assets/profilePic.png';

    const handleClick = (e) => e.target.style.display = 'none';

  return <img onClick={(e) =>handleClick(e)}  src={imageUrl} alt="Profile picture" ></img>;
}
export default ProfilePicture;