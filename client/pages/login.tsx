import type { GetServerSideProps } from 'next'

import { signIn, getSession } from 'next-auth/react'
import { useForm, SubmitHandler } from 'react-hook-form'

import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react'

import Base from '@/components/Base'
import { avatars } from '@/utils'

interface Inputs {
  email: string
  password: string
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await signIn('api-auth', {
      email: data.email,
      password: data.password,
      callbackUrl: `/dashboard`,
    })
    return
  }

  return (
    <Base>
      <Box position={'relative'}>
        <Container
          as={SimpleGrid}
          maxW={'7xl'}
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 10, lg: 32 }}
          py={{ base: 10, sm: 20, lg: 32 }}
        >
          <Stack spacing={{ base: 10, md: 20 }}>
            <Heading
              lineHeight={1.1}
              fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
            >
              Amazing people{' '}
              <Text
                as={'span'}
                bgGradient="linear(to-r, purple.400,purple.400)"
                bgClip="text"
              >
                &
              </Text>{' '}
              Genius Leaders from the earth
            </Heading>

            <Stack direction={'row'} spacing={4} align={'center'}>
              <AvatarGroup>
                {avatars.map((avatar) => (
                  <Avatar
                    key={avatar.name}
                    name={avatar.name}
                    src={avatar.url}
                    size={{ base: 'md', md: 'lg' }}
                    position={'relative'}
                    zIndex={2}
                    _before={{
                      content: '""',
                      width: 'full',
                      height: 'full',
                      rounded: 'full',
                      transform: 'scale(1.125)',
                      bgGradient: 'linear(to-bl, purple.400,purple.400)',
                      position: 'absolute',
                      zIndex: -1,
                      top: 0,
                      left: 0,
                    }}
                  />
                ))}
              </AvatarGroup>

              <Text
                fontFamily={'heading'}
                fontSize={{ base: '4xl', md: '6xl' }}
              >
                +
              </Text>

              <Flex
                align={'center'}
                justify={'center'}
                fontFamily={'heading'}
                fontSize={{ base: 'sm', md: 'lg' }}
                bg={'gray.800'}
                color={'white'}
                rounded={'full'}
                minWidth={{ base: '44px', md: '60px' }}
                minHeight={{ base: '44px', md: '60px' }}
                position={'relative'}
                _before={{
                  content: '""',
                  width: 'full',
                  height: 'full',
                  rounded: 'full',
                  transform: 'scale(1.125)',
                  bgGradient: 'linear(to-bl, orange.400,yellow.400)',
                  position: 'absolute',
                  zIndex: -1,
                  top: 0,
                  left: 0,
                }}
              >
                YOU
              </Flex>
            </Stack>
          </Stack>

          <Stack
            bg={'gray.50'}
            rounded={'xl'}
            p={{ base: 4, sm: 6, md: 8 }}
            spacing={{ base: 8 }}
            maxW={{ lg: 'lg' }}
          >
            <Stack spacing={4}>
              <Heading
                color={'gray.800'}
                lineHeight={1.1}
                fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
              >
                Login
                <Text
                  as={'span'}
                  bgGradient="linear(to-r, purple.400, purple.400)"
                  bgClip="text"
                >
                  !
                </Text>
              </Heading>

              <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
                We’re looking for amazing engineers just like you! Become a part
                of our rockstar engineering team and skyrocket your career!
              </Text>
            </Stack>
            <Box as={'form'} mt={10} onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={4}>
                <FormControl
                  id="email-login"
                  isInvalid={errors.email ? true : false}
                  isDisabled={isSubmitting}
                >
                  <Input
                    type="email"
                    placeholder="Email"
                    bg={'gray.100'}
                    border={0}
                    color={'gray.500'}
                    _placeholder={{
                      color: 'gray.500',
                    }}
                    {...register('email', { required: 'Email is required' })}
                  />
                  <FormErrorMessage>
                    {errors.email && errors.email.message}
                  </FormErrorMessage>
                </FormControl>

                <FormControl
                  id="password-login"
                  isInvalid={errors.password ? true : false}
                  isDisabled={isSubmitting}
                >
                  <Input
                    type="password"
                    bg={'gray.100'}
                    placeholder="Password"
                    border={0}
                    color={'gray.500'}
                    _placeholder={{
                      color: 'gray.500',
                    }}
                    {...register('password', {
                      required: 'Password is required',
                    })}
                  />
                  <FormErrorMessage>
                    {errors.password && errors.password.message}
                  </FormErrorMessage>
                </FormControl>
              </Stack>

              <Button
                type="submit"
                fontFamily={'heading'}
                mt={8}
                w={'full'}
                colorScheme="purple"
                isLoading={isSubmitting}
              >
                Submit
              </Button>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Base>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)

  if (session) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
    }
  }

  return {
    props: { session },
  }
}
