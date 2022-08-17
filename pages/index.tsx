import {
  Box,
  Button,
  Center,
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Link,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Stack,
  Text,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import NextLink from "next/link";
import { useState } from "react";

import { generatePassword } from "../utils/generatePassword";

const Home: NextPage = () => {
  const [password, setPassword] = useState("");
  const [options, setOptions] = useState({
    length: 16,
    upperCase: true,
    numbers: true,
    specialCharacters: true,
  });

  return (
    <Center bg="gray.100" h="100vh" w="full" flexDirection="column">
      <Box p={8} bg="gray.50" rounded={4} shadow="md">
        <Heading textAlign="center">Password Generator</Heading>

        <Center bg="gray.600" rounded="md" px={2} h="10" my={6}>
          <Text color="gray.50" fontWeight="bold" fontSize="xl">
            {password}
          </Text>
        </Center>
        <HStack gap={4}>
          <Stack gap={3}>
            <FormControl>
              <Checkbox
                isChecked={options.upperCase}
                onChange={(e) =>
                  setOptions({ ...options, upperCase: e.target.checked })
                }
              >
                With upper case
              </Checkbox>
            </FormControl>

            <FormControl>
              <Checkbox
                isChecked={options.numbers}
                onChange={(e) =>
                  setOptions({ ...options, numbers: e.target.checked })
                }
              >
                With numbers
              </Checkbox>
            </FormControl>

            <FormControl>
              <Checkbox
                isChecked={options.specialCharacters}
                onChange={(e) =>
                  setOptions({
                    ...options,
                    specialCharacters: e.target.checked,
                  })
                }
              >
                With special characters
              </Checkbox>
            </FormControl>
          </Stack>

          <Stack gap={2}>
            <FormControl>
              <FormLabel>Length</FormLabel>
              <NumberInput
                value={options.length}
                min={4}
                max={32}
                onChange={(value) => setOptions({ ...options, length: +value })}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>

            <Button
              colorScheme="blue"
              onClick={() => setPassword(generatePassword(options))}
            >
              Generate password
            </Button>
          </Stack>
        </HStack>
      </Box>

      <Stack
        as="footer"
        textAlign="center"
        fontSize="sm"
        gap={0}
        lineHeight={1}
        mt={4}
      >
        <Text>
          By <strong>Daniel Soares</strong>
        </Text>
        <Text>
          Source code on{" "}
          <NextLink
            href="https://github.com/dsoaress/password-generator"
            passHref
          >
            <Link>Github</Link>
          </NextLink>
        </Text>
      </Stack>
    </Center>
  );
};

export default Home;
