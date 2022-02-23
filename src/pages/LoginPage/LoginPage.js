import React, { useEffect, useState } from "react";
import axios from "axios";
import useForm from "../../hooks/useForm";
import { BASE_URL } from "../../constants/BASE_URL";
import { setToken, getToken } from "../../constants/localStorage";
import {
  Button,
  Center,
  ChakraProvider,
  extendTheme,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Image,
  Input,
  Text,
  textDecoration,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { goToHome, goToSignUpPage } from "../../Routes/Coordinator";
import logo from "../../assets/logo-laranja.png";
import Loading from "../../constants/Loading";

const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px) translateX(-10px)",
};

export const theme = extendTheme({
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label":
              {
                ...activeLabelStyles,
              },
            label: {
              top: "-9px",
              left: "10px",
              zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
              pointerEvents: "none",
              color: "#d0d0d0",
              mx: 3,
              px: 1,
              my: 2,
            },
          },
        },
      },
    },
  },
});

export default function LoginPage() {
  const navigate = useNavigate();
  const [noToken, setNoToken] = useState(true);

  const { form, onChange, cleanFields } = useForm({
    email: "",
    password: "",
  });

  const onSubmitLogin = (event) => {
    event.preventDefault();
    const body = {
      email: form.email,
      password: form.password,
    };
    axios
      .post(`${BASE_URL}/login`, body)
      .then((res) => {
        cleanFields();
        setToken(res.data.token);
        console.log(res.data.token);
        goToHome(navigate);
      })
      .catch((err) => {
        console.log(err);
        alert("Crie um cadastro!");
      });
  };

  useEffect(() => {
    const token = getToken();
    if (token !== null) {
      setNoToken(false);
      setTimeout(() => {
        goToHome(navigate)
      }, 1000);
    }
  }, []);

  return (
    <Center>
      {noToken ? (
        <ChakraProvider theme={theme}>
          <Grid templateRows="repeat(3, 1fr)">
            <GridItem>
              <Center>
                <Image marginTop="88px" h="58px" w="104px" src={logo} />
              </Center>
              <Center>
                <Text fontSize="xl">Entrar</Text>
              </Center>
            </GridItem>
            <GridItem w="328px">
              <FormControl variant="floating" id="email" isRequired isInvalid>
                <FormLabel htmlFor="email">E-mail</FormLabel>
                <Input
                  h="56px"
                  id="email"
                  type={"email"}
                  value={form.email}
                  onChange={onChange}
                  name={"email"}
                  placeholder={"email@email.com"}
                  pattern={"^w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$"}
                  m="3"
                  required
                />
              </FormControl>
              <br />
              <FormControl
                variant="floating"
                id="password"
                isRequired
                isInvalid
              >
                <FormLabel htmlFor="senha">Senha</FormLabel>
                <Input
                  h="56px"
                  id="password"
                  type={"password"}
                  value={form.password}
                  onChange={onChange}
                  name={"password"}
                  placeholder={"Mínimo 6 caracteres"}
                  m="3"
                  pattern={"^.{6,}"}
                  title={"A senha deve conter no mínimo 6 caracteres"}
                  required
                />
              </FormControl>
              <br />

              <Button
                onClick={onSubmitLogin}
                marginLeft="14px"
                bg="#e86e5a"
                w="328px"
                h="42px"
              >
                Entrar
              </Button>
            </GridItem>
            <Center>
              <Text marginRight="15px" fontSize="xl">
                Não possui cadastro?
              </Text>
              <Text
                fontSize="xl"
                _hover={{ cursor: "pointer" }}
                textDecoration={"underline"}
                onClick={() => goToSignUpPage(navigate)}
              >
                Clique aqui!
              </Text>
            </Center>
          </Grid>
        </ChakraProvider>
      ) : (
        <Loading />
      )}
    </Center>
  );
}
