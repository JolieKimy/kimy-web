
export type Article = {
  title: string;
  date: string;
  description: string;
  link?: string;
};

const Projects: Article[] = [
  {
    title: "Figura - Augmented Drawing using Skeleton Tracking",
    date: "07.05.2019",
    description: "Presented at the 2019 edition of the NIFFF, Figura is an art piece developped in collaboration with Mandril as a Bachelor thesis of Mrs. Biloni.",
    link: "https://vimeo.com/350298400"
  }
];

export default Projects;
