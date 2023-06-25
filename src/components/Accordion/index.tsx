import { styled } from '@/styled-system/jsx'
import {
  accordionContent,
  accordionHeader,
  accordionItem,
  accordionRoot,
  accordionTrigger,
} from '@/styled-system/recipes'
import * as RadixAccordion from '@radix-ui/react-accordion'

const AccordionRoot = styled(RadixAccordion.Root, accordionRoot)

const AccordionItem = styled(RadixAccordion.Item, accordionItem)

const AccordionHeader = styled(RadixAccordion.Header, accordionHeader)

const AccordionTrigger = styled(RadixAccordion.Trigger, accordionTrigger)

const AccordionContent = styled(RadixAccordion.Content, accordionContent)

type RootAccordionProps =
  | RadixAccordion.AccordionSingleProps
  | RadixAccordion.AccordionMultipleProps

type AccordionProps = RootAccordionProps & {
  items: {
    id: string
    title: string
    content: string
  }[]
}

export const Accordion = ({ items, ...props }: AccordionProps) => {
  return (
    <AccordionRoot {...props}>
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionHeader>
            <AccordionTrigger data-testid={`Accordion-trigger-${item.id}`}>
              {item.title}
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
  )
}
