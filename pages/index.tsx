import Head from 'next/head'
import Image from 'next/image'
import {
  Flex,
  chakra,
  Box,
  Text,
  Divider,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  IconButton,
} from '@chakra-ui/react'
import Comments from '../components/Comments'
import Tinder from '../components/Tinder'
import ClapButton from 'react-clap-button'

const ChakraImage = chakra(Image, {
  shouldForwardProp: (prop) => {
    return ['src', 'width', 'height'].includes(prop)
  },
  baseStyle: {
    borderRadius: 'md',
  },
})

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Adios Ryan</title>
        <meta name="description" content="Gracias and Adios" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex bgColor="brand.500" p={2} align="center">
        <Tinder />
        <Flex maxW={8} align="center">
          <ChakraImage
            src="https://storage.googleapis.com/tc-assets/tc-app-icon.svg"
            layout="responsive"
            width="596px"
            height="596px"
          />
        </Flex>
        <Text color="white" textStyle="headline3" ml={2}>
          Ryan's Tinder Profile
        </Text>
      </Flex>

      <Box maxW="container.md" p={[4, null, 8]} m="auto">
        <Flex direction="column" align="center">
          <Box>
            <Image width={'350px'} height={'350px'} src="/profile.jpg" />
            <Flex align="center">
              <Text textStyle="headline2" mr={2}>
                Ryan Irilli 💖,
              </Text>
              <Text textStyle="headline3" fontWeight="normal" color="gray.500">
                21
              </Text>
            </Flex>{' '}
            <Flex justify="space-between" w={80} my={6}>
              <ClapButton
                count={0}
                countTotal={0}
                maxCount={50}
                isClicked={false}
                iconComponent={(props) => (
                  <IconButton
                    icon={<Tinder />}
                    ariaLabel="hot"
                    borderRadius="full"
                    size="lg"
                    w={16}
                    h={16}
                    bgColor="red.100"
                  />
                )}
              />
              <ClapButton
                count={0}
                countTotal={0}
                maxCount={50}
                isClicked={false}
                iconComponent={(props) => (
                  <IconButton
                    icon={<Tinder w={8} h={8} />}
                    ariaLabel="extremely hot"
                    borderRadius="full"
                    size="lg"
                    w={16}
                    h={16}
                    bgColor="red.100"
                  />
                )}
              />
            </Flex>
          </Box>
        </Flex>

        <Divider my={10} />
        <Box>
          <Text color="gray.700">
            {
              'Fun loveable outgoing dude, wanting to connect ✉️ . I hate flowers, but love doggies 🐶. 🐩 🌭 . I will meet your parents, but only after the 40th date. DM ME!'
            }
          </Text>
        </Box>

        <Table mt={8} size="sm">
          <Thead>
            <Tr>
              <Th>Repo</Th>
              <Th>Commits</Th>
              <Th>Lines added</Th>
              <Th>Lines removed</Th>
            </Tr>
          </Thead>
          <Tbody>
            {[
              {
                repo: 'web-app',
                commits: '259',
                added: '15,482',
                removed: '6,185',
              },
              {
                repo: 'foundation',
                commits: '276',
                added: '39,753',
                removed: '24,805',
              },
              {
                repo: 'graphql',
                commits: '89',
                added: '6,580',
                removed: '4,789',
              },
              {
                repo: 'marketing-site',
                commits: '68',
                added: '6,613',
                removed: '899',
              },
              { repo: 'go-api', commits: '2', added: '93', removed: '37' },
              { repo: 'terraform', commits: '4', added: '950', removed: '446' },
            ].map(({ repo, commits, added, removed }) => {
              return (
                <Tr>
                  <Td>{repo}</Td>
                  <Td>{commits}</Td>
                  <Td color="green.500">{added} ++</Td>
                  <Td color="red.500">{removed} --</Td>
                </Tr>
              )
            })}
          </Tbody>
        </Table>
        <Comments />
      </Box>
    </Box>
  )
}
