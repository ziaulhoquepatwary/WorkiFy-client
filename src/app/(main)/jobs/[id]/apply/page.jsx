"use client";

import React, { use } from "react";
import Loading from "@/app/loading";
import { authClient } from "@/lib/auth-client";
import ApplyFormClient from "./ApplyFormClient";

function JobApplyPage({ params: paramsPromise }) {
    const { id } = use(paramsPromise);
    const { data: session, isPending } = authClient.useSession();

    // console.log(session);

    const currentUser = {
        name: session?.user?.name,
        email: session?.user?.email,
        phone: session?.user?.phoneNumber
    };

    if (isPending) return <Loading />;

    return (
        <div className="p-4 md:p-8 min-h-screen bg-white dark:bg-[#0f291e] text-[#1c4a36] dark:text-[#e4f5ee] flex justify-center items-center">
            <ApplyFormClient jobId={id} user={currentUser} />
        </div>
    )
}

export default JobApplyPage