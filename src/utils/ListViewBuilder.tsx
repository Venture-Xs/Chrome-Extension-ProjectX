import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../components/ui/accordion"


  export function ListBuilder(props : { title:string , content:string}) {

    return (
        <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>{props.title}</AccordionTrigger>
        <AccordionContent>
          {props.content}
        </AccordionContent>
      </AccordionItem>
      
    </Accordion>
    );
  }
