import ProtectedRoute from "../../../../utils/ProtectedRoute"

function AdminLayout({ children }) {
    return (
        <ProtectedRoute roles={["admin"]}>
            {children}
        </ProtectedRoute>
    )
}

export default AdminLayout