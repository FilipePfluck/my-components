import { FormControl } from '@/components/Forms/FormControl'
import { Tabs, TabContent } from '..'
import { Input } from '@/components/Forms/Input'
import { Button } from '@/components/Button'
import { MdLock, MdMail } from 'react-icons/md'
import { Flex, styled } from '@/styled-system/jsx'
import { cva } from '@/styled-system/css'

const list = [
  { label: 'User', value: 'user' },
  { label: 'Admin', value: 'admin' },
]

const Text = styled(
  'p',
  cva({
    base: {
      textStyle: 'bodyMd',
      color: 'gray.800',
      mb: '2',
    },
  }),
)

const Form = () => {
  return (
    <Flex direction="column" gap="2">
      <FormControl
        id="userSignInEmail"
        label="Email"
        messageContainerHeight="auto"
      >
        <Input icon={<MdMail />} placeholder="joedoe@example.com" />
      </FormControl>
      <FormControl
        id="userSignInPassword"
        label="Password"
        messageContainerHeight="auto"
      >
        <Input icon={<MdLock />} />
      </FormControl>
      <Button full>Sign in</Button>
    </Flex>
  )
}

export const SigninTabs = () => {
  return (
    <Tabs list={list} defaultValue="user">
      <TabContent value="user">
        <Text>You are signing in as a user</Text>
        <Form />
      </TabContent>
      <TabContent value="admin">
        <Text>You are signing in as an admin</Text>
        <Form />
      </TabContent>
    </Tabs>
  )
}
