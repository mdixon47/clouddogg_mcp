import VerificationStatusDashboard from "@/components/veteran-program/verification-status-dashboard"

export const metadata = {
  title: "Verification Status | CloudDogg Veteran Program",
  description: "Check the status of your veteran verification application with CloudDogg's MCP platform.",
}

export default function VerificationStatusPage() {
  return <VerificationStatusDashboard documents={[
    {
      id: "1",
      name: "DD214.pdf",
      status: "pending",
      uploadDate: new Date().toISOString()
    }
  ]} />
}
