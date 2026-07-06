import ProtectedRoute from "../../../../utils/ProtectedRoute"

function RecruiterLayout({ children }) {
    return (
        <ProtectedRoute roles={["recruiter"]}>
            {children}
        </ProtectedRoute>
    )
}

export default RecruiterLayout