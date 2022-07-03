export type Experience = {
    title: string;
    organisation: string;
    location: string;
    from: Date;
    to: Date;
    description: string;
}

const Experiences: Experience[] = [
    {
        title: "Digital Services Project Leader",
        organisation: "Swatch Ltd.",
        location: "Biel",
        from: new Date(2020, 9),
        to: new Date(),
        description: "Managing the digitisation of business processes by developing web tools in .NET or Javascript based technologies. Implementing Google Cloud solutions."
    },
    {
        title: "Junior Software Engineer",
        organisation: "Swatch Group Services Ltd.",
        location: "Biel",
        from: new Date(2019, 10),
        to: new Date(2020, 9),
        description: "Developing Web and Mobile applications using .NET technologies in a Scrum environment. Implementation of CI/CD using Azure DevOps."
    },
];
export default Experiences;
