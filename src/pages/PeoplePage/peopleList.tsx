import { FaChrome, FaEnvelopeOpen, FaGlobe } from "react-icons/fa";

//Contains all people/organisations working on the project. If you want to add/edit/delete anyone's information
//you simply have to change it here.
export const academics = [
  {
    personName: "Dr Timothy Neate",
    organisationName: "Senior Lecturer",
    imagePath: "./peopleIcons/tdjn2022_miami.jpeg",
    furtherInfo: "",
    projectRoles: ["Role 1", "Role 2"],
    primaryWebLink: "https://keats.kcl.ac.uk/?redirect=0",
    secondaryWebLink: "https://keats.kcl.ac.uk/?redirect=0",
    primaryIcon: <FaEnvelopeOpen size="60px" />,
    secondaryIcon: <FaGlobe size="60px" />,
  },
  {
    personName: "Humphrey Curtis",
    organisationName: "PhD Researcher",
    imagePath: "./peopleIcons/curtis.png",
    furtherInfo: "",
    projectRoles: ["Role 1", "Role 2"],
    primaryWebLink: "https://keats.kcl.ac.uk/?redirect=0",
    secondaryWebLink: "https://keats.kcl.ac.uk/?redirect=0",
    primaryIcon: <FaEnvelopeOpen size="40px" />,
    secondaryIcon: <FaGlobe size="40px" />,
  },
  {
    personName: "Joshua Susak",
    organisationName: "Informatics Student",
    imagePath: "./peopleIcons/dogy.png",
    furtherInfo: "",
    projectRoles: ["Role 1", "Role 2"],
    primaryWebLink: "https://keats.kcl.ac.uk/?redirect=0",
    secondaryWebLink: "https://keats.kcl.ac.uk/?redirect=0",
    primaryIcon: <FaEnvelopeOpen size="40px" />,
    secondaryIcon: <FaGlobe size="40px" />,
  },
];

export const otherContributors = [
  {
    personName: "Dr Sally McVicker",
    organisationName: "Aphasia Re-Connect",
    imagePath:
      "https://aphasiareconnect.org/wp-content/uploads/2019/02/handsLogo_round.png",

    furtherInfo:
      "Founded Aphasia Re-Connect in 2017. Continues to co-ordinate the team at Aphasia Re-Connect, whilst also covering a Clinical Academic Role at City, University of London. Dr McVicker trained as a speech and language therapist having gained her doctorate in Anthropology from the University of Durham. She has over thirty years’ experience of working with people living with the communication disability, aphasia.",

    projectRoles: ["Workshop Activities"],
    primaryWebLink: "https://keats.kcl.ac.uk/?redirect=0",
    secondaryWebLink: "",
    primaryIcon: <FaChrome size="40px" />,
    secondaryIcon: <FaGlobe size="40px" />,
  },
];
