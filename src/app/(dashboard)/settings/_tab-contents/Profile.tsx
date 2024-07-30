import { Button } from "@/components/CustomButton";
import { fallback_img, remove } from "@/constants/icons";
import ProfileForm from "@/components/forms/ProfileForm";
import Image from "next/image";

function Profile() {
  const user = {
    name: "John Doe",
    email: "john@doe.com",
    phone: "08168481612",
  };

  return (
    <div>
      <div className="sm:row-flex-start flex flex-col gap-6">
        <div className="clip-circle group relative h-52 w-52 overflow-hidden rounded-full border border-border-variant shadow-inner max-sm:mx-auto">
          <Image src={fallback_img} alt="profile" fill priority className="" />
        </div>
        <div className="flex-column gap-3">
          <Button title="Upload new picture" />
          <Button title="Remove" btnType="outline" src={remove} />
        </div>
      </div>

      <ProfileForm user={user} />
    </div>
  );
}

export default Profile;
