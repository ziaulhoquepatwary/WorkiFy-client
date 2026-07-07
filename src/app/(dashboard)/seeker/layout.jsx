import ProtectedRoute from "../../../../utils/ProtectedRoute"

function SeekerLayout({ children }) {
    return (
        <ProtectedRoute roles={["seeker"]}>
            {children}
        </ProtectedRoute>
    )
}

export default SeekerLayout