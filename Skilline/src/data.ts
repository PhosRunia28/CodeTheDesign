import { CardColor } from "./constant";

export const navigationLinks = [
  {
    to: "#",
    linkName: "Home",
  },
  {
    to: "#",
    linkName: "Careers",
  },
  {
    to: "#",
    linkName: "Blog",
  },
  {
    to: "#",
    linkName: "About Us",
  },
];

export const companies = [
  {
    image: "./companies/goggle.svg",
    alt: "goggle",
  },
  {
    image: "./companies/netflix.svg",
    alt: "netflix",
  },
  {
    image: "./companies/airbnb.svg",
    alt: "airbnb",
  },
  {
    image: "./companies/amazon.svg",
    alt: "amazon",
  },
  {
    image: "./companies/facebook.svg",
    alt: "facebook",
  },
  {
    image: "./companies/grab.svg",
    alt: "grab",
  },
];

import { CalendarDays, FileSpreadsheet, Users } from "lucide-react";
export const cardItemAllInOne = [
  {
    icon: FileSpreadsheet,
    title: "Online Billing, Invoicing, & Contracts",
    description:
      "Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts",
    color: CardColor.ACCENT,
  },
  {
    icon: CalendarDays,
    title: "Easy Scheduling & Attendance Tracking",
    description:
      "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",
    color: CardColor.PRIMARY,
  },
  {
    icon: Users,
    title: "Customer Tracking",
    description:
      "Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization ",
    color: CardColor.SECONDARY,
  },
];
