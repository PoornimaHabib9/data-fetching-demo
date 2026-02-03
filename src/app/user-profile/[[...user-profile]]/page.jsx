import { UserProfile } from "@clerk/nextjs";

export default function Profile() {
    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold mb-4">User Profile Page</h2>
            <UserProfile path="/user-profile"/>
        </div>
    );
}