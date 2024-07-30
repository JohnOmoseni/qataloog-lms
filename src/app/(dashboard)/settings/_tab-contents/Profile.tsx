import ProfileForm from "@/components/forms/ProfileForm";
import FileUpload from "@/components/FileUpload";

function Profile() {
  const user = {
    name: "John Doe",
    email: "john@doe.com",
    phone: "",
  };

  return (
    <div>
      <FileUpload />
      <ProfileForm user={user} />
    </div>
  );
}

export default Profile;
