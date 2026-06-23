import projectDubaiPolice from "@assets/images/project-dubai-police.png";
import projectGlenmore from "@assets/images/project-glenmore.png";
import projectDubaiPoliceGifts from "@assets/images/project-dubai-police-gifts.png";
import projectCorporate from "@assets/images/project-corporate-identity.png";
import projectAdnoc from "@assets/images/project-adnoc.png";
import projectRak from "@assets/images/project-rak-prosecution.png";
import projectEmirates from "@assets/images/project-emirates.png";

export interface ProjectItem {
  title: string;
  client: string;
  category: string;
  image: string;
}

export const projects: ProjectItem[] = [
  {
    title: "Dubai Police Stand at Global Village",
    client: "Dubai Police",
    category: "Exhibitions & Events",
    image: projectDubaiPolice,
  },
  {
    title: "The Glenmore Properties",
    client: "The Glenmore Properties",
    category: "Branding & Corporate Identity",
    image: projectGlenmore,
  },
  {
    title: "Dubai Police Corporate Gifts",
    client: "Dubai Police",
    category: "Corporate Gifts",
    image: projectDubaiPoliceGifts,
  },
  {
    title: "Corporate Identity Design",
    client: "Corporate Client",
    category: "Branding & Creative Design",
    image: projectCorporate,
  },
  {
    title: "ADNOC Promotional Items",
    client: "ADNOC",
    category: "Corporate Gifts",
    image: projectAdnoc,
  },
  {
    title: "Public Prosecution of Ras Al Khaimah",
    client: "RAK Public Prosecution",
    category: "Signage & Outdoor",
    image: projectRak,
  },
  {
    title: "Emirates Corporate Gift Set",
    client: "Emirates",
    category: "Corporate Gifts",
    image: projectEmirates,
  },
];
