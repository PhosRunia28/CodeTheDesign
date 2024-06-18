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

export const testimonials = [
  {
    image: "./testimonial1.png",
    title:
      "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. Skilline is exactly what our business has been lacking.",
    author: "Gloria Rose",
    star: 5,
    reviewer: 12,
  },
  {
    image: "./testimonial2.png",
    title:
      "Skilline has completely surpassed our expectations. The service was excellent. Skilline is both attractive and highly adaptable.",
    author: "John Smith",
    star: 4,
    reviewer: 8,
  },
  {
    image: "./testimonial3.png",
    title:
      "I love your system. I will refer everyone I know. It's exactly what I've been looking for. I will let my friends know about this, they could really make use of Skilline!",
    author: "Sarah Brown",
    star: 5,
    reviewer: 15,
  },
  {
    image: "./testimonial4.png",
    title:
      "I have gotten at least 50 times the value from Skilline. I would gladly pay over 600 dollars for Skilline. It's incredible. We can't understand how we've been living without Skilline.",
    author: "Michael Johnson",
    star: 5,
    reviewer: 20,
  },
  {
    image: "./testimonial1.png",
    title:
      "I would like to personally thank you for your outstanding product. I have no idea what to say! Skilline should be nominated for service of the year.",
    author: "Emily Davis",
    star: 4,
    reviewer: 10,
  },
];

export const navigationFooter = [
  {
    to: "#",
    linkName: "Careers",
  },
  {
    to: "#",
    linkName: "Privacy Policy",
  },
  {
    to: "#",
    linkName: "Terms & Condition",
  },
];
