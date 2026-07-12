"use client";
import { useParams } from "next/navigation";

function EditJob() {
    const { id } = useParams();


    return (
        <div>EditJob</div>
    )
}

export default EditJob