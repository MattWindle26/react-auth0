import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <div>
                <h4>Welcome back - {user.given_name + " " + user.family_name}</h4>
                <p>{user.email}</p>
                <img src={user.picture} alt="" />
            </div>
        )
    );
}
 
export default Profile;