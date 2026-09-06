import practiceAreasData from "./practiceAreas.json";

export interface PracticeAreaStat {
  value: string;
  label: string;
}

export interface PracticeAreaServiceItem {
  title: string;
  description?: string;
}

export interface PracticeArea {
  id: string;
  uniqueKey: string;
  slug: string;
  title: string;
  bannerTitle?: string;
  overviewHeading?: string;
  overviewParagraphs?: string[];
  overviewImage?: string;
  shortDescription: string;
  description: string;
  icon: string;
  href: string;
  image?: string;
  stat?: PracticeAreaStat;
  services?: string[];
  detailedServices?: PracticeAreaServiceItem[];
  keyHighlights?: string[];
}

export const practiceAreas: PracticeArea[] = practiceAreasData as PracticeArea[];

export function getAllPracticeAreas(): PracticeArea[] {
  return practiceAreas;
}

export function getPracticeAreaBySlug(slug: string): PracticeArea | undefined {
  return practiceAreas.find((item) => item.slug === slug);
}

export function getPracticeAreaById(id: string): PracticeArea | undefined {
  return practiceAreas.find((item) => item.id === id);
}

export function getPracticeAreaRows(): [PracticeArea, PracticeArea][] {
  const rows: [PracticeArea, PracticeArea][] = [];
  const half = Math.ceil(practiceAreas.length / 2);
  const leftCol = practiceAreas.slice(0, half);
  const rightCol = practiceAreas.slice(half);

  for (let i = 0; i < half; i++) {
    if (leftCol[i] && rightCol[i]) {
      rows.push([leftCol[i], rightCol[i]]);
    }
  }

  return rows;
}
