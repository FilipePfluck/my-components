import * as RadixAccordion from '@radix-ui/react-accordion'
import * as S from './styles'

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
    <S.Root {...props}>
      {items.map((item) => (
        <S.Item key={item.id} value={item.id}>
          <S.Header>
            <S.Trigger data-testid={`Accordion-trigger-${item.id}`}>
              {item.title}
            </S.Trigger>
          </S.Header>
          <S.Content>
            <div>{item.content}</div>
          </S.Content>
        </S.Item>
      ))}
    </S.Root>
  )
}
