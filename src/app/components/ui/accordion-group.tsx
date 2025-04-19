import React from "react";

interface Accordion {
    heading: string;
    subtext: string;
}

interface AccordionGroupProps {
    accordions: Accordion[];
}

export default function AccordionGroup({ accordions }: AccordionGroupProps) {
    console.log(accordions);
    return <div>accordion-group</div>;
}
