import React from "react";

interface Accordion {
    heading: string;
    subtext: string;
}

interface AccordionGroupProps {
    accordions: Accordion[];
}

export default function AccordionGroup(props: AccordionGroupProps) {
    return <div>accordion-group</div>;
}
