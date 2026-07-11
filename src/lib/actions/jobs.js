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

export const getAllJobsAction = async (filters = {}) => {
    try {
        const params = new URLSearchParams();

        if (filters.search) params.append("search", filters.search);

        if (filters.category && filters.category !== "All Categories") params.append("category", filters.category);

        if (filters.jobType && filters.jobType.length > 0) params.append("jobType", filters.jobType.join(","));

        if (filters.maxSalary) params.append("maxSalary", filters.maxSalary);

        if (filters.page) params.append("page", filters.page);

        const res = await axios.get(`${baseApiUrl}/api/jobs?${params.toString()}`, {
            withCredentials: true
        });

        return res.data;
    } catch (error) {
        console.error("Fetch jobs API error:", error.response?.data || error.message);
        throw error;
    }
};

export const getSingleJobAction = async (jobId) => {
    try {
        const res = await axios.get(`${baseApiUrl}/api/jobs/${jobId}`, {
            withCredentials: true
        });
        return res.data;
    } catch (error) {
        console.error(`Fetch job details error for ID ${jobId}:`, error.response?.data || error.message);
        throw error;
    }
};

export const getMyPostedJobs = async (page = 1, limit = 10) => {
    try {
        const res = await axios.get(
            `${baseApiUrl}/api/jobs/my-posted-jobs?page=${page}&limit=${limit}`,
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