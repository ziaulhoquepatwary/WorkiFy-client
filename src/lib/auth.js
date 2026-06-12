import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { sendEmail } from "./email";


const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db();

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
    },

    database: mongodbAdapter(db, {
        client
    }),

    emailVerification: {
        sendVerificationEmail: async ({ user, url }) => {
            void sendEmail({
                to: user.email,
                subject: "Verify your email address",
                text: `Click the link to verify your email: ${url}`,
            });
        },
        sendOnSignIn: true,
    },

    session: {
        fields: {
            user: ["role", "approvalStatus", "plan", "usageCount", "lastActionDate"]
        }
    },

    user: {
        additionalFields: {
            role: {
                type: "string",
                defaultValue: "" // seeker, recruiter, admin
            },
            approvalStatus: {
                type: "string",
                defaultValue: "pending" // pending, approved, rejected
            },
            phoneNumber: {
                type: "string",
                defaultValue: ""
            },
            bio: {
                type: "string",
                defaultValue: ""
            },
            plan: {
                type: "string",
                defaultValue: "free" // free, pro, premium,
            },
            usageCount: {
                type: "number",
                defaultValue: 0
            },
            lastActionDate: {
                type: "date",
                defaultValue: new Date()
            }
        }
    },

    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
    },
});