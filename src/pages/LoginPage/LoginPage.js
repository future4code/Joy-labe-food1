import React from "react";
import axios from "axios";
import useForm from "../../hooks/useForm";
import { BASE_URL } from "../../constants/BASE_URL";
import { setToken, getToken } from "../../constants/localStorage";
import {
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { goToHome, goToSignUpPage } from "../../Routes/Coordinator";
import logo from "../../assets/logo-laranja.png";

export default function LoginPage() {
  const navigate = useNavigate();

  const { form, onChange } = useForm({
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
        setToken(res.data.token);
        console.log(res.data.token);
        if (res.data.user.hasAdress === true) {
          alert("Crie seu cadastro");
        } else {
            goToHome(navigate);
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Crie seu cadastro");
      });
  };

  return (
    <Center>
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
          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input
              h="56px"
              id="email"
              type={"email"}
              value={form.email}
              onChange={onChange}
              name={"email"}
              placeholder={"email"}
              pattern={"^w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$"}
              m="3"
              required
            />
            <FormLabel htmlFor="senha">Senha</FormLabel>
            <Input
              h="56px"
              id="password"
              type={"password"}
              value={form.password}
              onChange={onChange}
              name={"password"}
              placeholder={"password"}
              m="3"
              pattern={"^.{6,}"}
              title={"A senha deve conter no mínimo 6 caracteres"}
              required
            />
            <Button
              onClick={onSubmitLogin}
              marginLeft="14px"
              bg="#e86e5a"
              w="328px"
              h="42px"
            >
              Entrar
            </Button>
          </FormControl>
        </GridItem>
        <Center>
          <Text marginRight="15px" fontSize="xl">
            Não possui cadastro?{" "}
          </Text>
          <Text fontSize="xl" onClick={() => goToSignUpPage(navigate)}>
            {" "}
            Clique aqui!
          </Text>
        </Center>
      </Grid>
    </Center>
  );
}
