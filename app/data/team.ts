import teamData from "./team.json";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  designation?: string;
  image: string;
  email?: string;
  phone?: string;
  experience?: string;
  specialization?: string;
  slug?: string;
}

export const teamMembers: TeamMember[] = teamData as TeamMember[];

export function getTeamMemberById(id: string): TeamMember | undefined {
  return teamMembers.find((member) => member.id === id);
}

export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  return teamMembers.find((member) => member.slug === slug);
}
