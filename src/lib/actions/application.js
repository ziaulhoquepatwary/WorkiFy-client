import axios from "axios";

const baseApiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export const applyToJobAction = async (applicationData) => {
    try {
        const res = await axios.post(
            `${baseApiUrl}/api/application`,
            applicationData,
            { withCredentials: true }
        );
        return res.data;
    } catch (error) {
        console.error("Apply Job API Error:", error.response?.data || error.message);
        throw error;
    }
};

export const getMyApplications = async (page = 1, limit = 10) => {
    try {
        const res = await axios.get(
            `${baseApiUrl}/api/applications/my-application?page=${page}&limit=${limit}`,
            {
                withCredentials: true
            }
        );

        return res.data;
    } catch (error) {
        console.error("API error response:", error.response?.data || error.message);
        throw error;
    }
};

export const getSingleApplication = async (applicationId) => {
    try {
        const res = await axios.get(
            `${baseApiUrl}/api/application/${applicationId}`,
            {
                withCredentials: true
            }
        );

        return res.data;
    } catch (error) {
        console.error("API error response:", error.response?.data || error.message);
        throw error;
    }
};

export const deleteApplication = async (applicationId) => {
    try {
        const res = await axios.delete(
            `${baseApiUrl}/api/application/${applicationId}`,
            {
                withCredentials: true
            }
        );

        return res.data;
    } catch (error) {
        console.error("API error response:", error.response?.data || error.message);
        throw error;
    }
};