export interface Business {
  name: string; niche: string; tagline: string;
  phone: string; phoneRaw: string; email: string; website: string;
  address: { city: string; state: string; stateCode: string; zip: string };
  hours: { weekdays: string; saturday: string; sunday: string };
  owner: { name: string; title: string; photo: string };
  yearEstablished: number; experience: number; jobsCompleted: number; satisfaction: number;
  social: { facebook: string; instagram: string; yelp: string };
  formspreeId: string;
  serviceArea: string;
  licenseNumber: string;
  analyticsId: string;
}

export const business: Business = {
  name: "Fresno Epoxy Flooring Experts",
  niche: "epoxy flooring",
  tagline: "Durable, beautiful epoxy floors installed by Fresno's most trusted coating specialists",
  phone: "(559) 234-4405",
  phoneRaw: "5592344405",
  email: "info@epoxy-flooring-fresno.com",
  website: "https://epoxy-flooring-fresno.com",
  address: { city: "Fresno", state: "California", stateCode: "CA", zip: "93722" },
  hours: { weekdays: "Mon-Fri 7am-5pm", saturday: "Sat 8am-3pm", sunday: "Closed" },
  owner: { name: "Dan", title: "Owner & Lead Installer", photo: "/owner.jpg" },
  yearEstablished: 2014,
  experience: 11,
  jobsCompleted: 620,
  satisfaction: 98,
  social: { facebook: "", instagram: "", yelp: "" },
  formspreeId: "",
  analyticsId: "site_d69f2dc4",
  serviceArea: "Fresno, Clovis, Madera, Visalia, Tulare, Sanger, Selma",
  licenseNumber: "#1082347",
};
