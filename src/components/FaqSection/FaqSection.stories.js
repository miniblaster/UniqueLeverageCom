import { FaqSection } from ".";

export default {
  title: "Components/FaqSection",
  component: FaqSection,
  argTypes: {
    property1: {
      options: ["hover", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "hover",
    className: {},
    ellipseClassName: {},
    divClassName: {},
    text: "Text",
    akarIconsChevron: "/img/akar-icons-chevron-right-1.svg",
    img: "/img/akar-icons-chevron-right.svg",
  },
};
