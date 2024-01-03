import Profile from "../../components/Profile";
function ProfilePage() {
  //  we can put some sort of logic here , if typed profile id doesnt much the
  //  user profile Id , navigate user back to homemainpage

  return (
    <div className="bg-slate-300 pt-2 h-screen ">
      <Profile></Profile>
    </div>
  );
}

export default ProfilePage;
