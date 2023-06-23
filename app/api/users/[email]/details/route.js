
import User from "@models/user";
import { connectToDB } from "@utlis/db";


export const GET = async (request, { params }) => {
    try {
        await connectToDB();
         console.log(params);
        const details = await User.findOne({ email: params.email });

        return new Response(JSON.stringify(details), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch details created by user", { status: 500 })
    }
} 