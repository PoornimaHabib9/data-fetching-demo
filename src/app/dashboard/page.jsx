import { currentUser } from "@clerk/nextjs/server";

export default async function Dashboard() {
    const userObj = await currentUser();
    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold mb-4">Welcome to your Dashboard {userObj?.firstName}</h2>
            <p>Welcome to your dashboard! Here you can manage your account and view your activities.</p>
        </div>
    );
}