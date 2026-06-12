import axios from "axios";

const baseApiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getPendingUsersAction = async (role) => {
    try {
        const endpoint = role === "recruiter" ? "getPendingRecruiters" : "getPendingSeekers";

        const res = await axios.get(`${baseApiUrl}/api/admin/${endpoint}`, {
            withCredentials: true
        });

        return res.data;
    } catch (error) {
        console.error(`Fetch pending ${role} error:`, error.response?.data || error.message);
        throw error;
    }
};

export const updateApprovalStatusAction = async (id, approvalStatus) => {
    try {
        const res = await axios.patch(
            `${baseApiUrl}/api/admin/updateStatus/${id}`,
            { approvalStatus },
            { withCredentials: true }
        );
        return res.data;
    } catch (error) {
        console.error("Update status error:", error.response?.data || error.message);
        throw error;
    }
};