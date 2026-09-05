import { notFound } from "next/navigation";
import { teamMembers, getTeamMemberById } from "@/app/data/team";
import LawyerProfileSection from "@/app/components/lawyers/LawyerProfileSection";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return teamMembers.map((member) => ({
    id: member.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const member = getTeamMemberById(id);

  if (!member) {
    return {
      title: "Lawyer Profile | Basunia & Associate",
    };
  }

  return {
    title: `${member.name} - ${member.role} | Basunia & Associate`,
    description: `Learn more about ${member.name}, ${member.designation || member.role} at Basunia & Associate.`,
  };
}

export default async function LawyerDetailPage({ params }: Props) {
  const { id } = await params;
  const member = getTeamMemberById(id) || teamMembers[0];

  if (!member) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <LawyerProfileSection member={member} />
    </main>
  );
}