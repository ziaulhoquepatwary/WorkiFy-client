import axios from "axios";

const baseApiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export const createJob = async (newJobData) => {
    try {
        const res = await axios.post(`${baseApiUrl}/api/jobs`,
            newJobData,
            {
                withCredentials: true
            }
        )

        return res.data;
    } catch (error) {
        console.error("API error response:", error.response?.data || error.message);
        throw error;
    }
}