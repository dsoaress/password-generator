import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import type { NextPage } from "next";
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
    <div>
      <h1>Password Generator</h1>
      <h2>{password}</h2>
      <div>
        <FormControl>
          <FormLabel>Length</FormLabel>
          <NumberInput
            value={options.length}
            min={4}
            max={64}
            onChange={(value) => setOptions({ ...options, length: +value })}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>

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
              setOptions({ ...options, specialCharacters: e.target.checked })
            }
          >
            With special characters
          </Checkbox>
        </FormControl>

        <Button
          colorScheme="blue"
          onClick={() => setPassword(generatePassword(options))}
        >
          Generate password
        </Button>
      </div>
    </div>
  );
};

export default Home;
