import React from "react";
import axios from "axios";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/BASE_URL";
import { goToEditAdressPage, goToHome, goToLoginPage } from "../../Routes/Coordinator";
import {
  Center,
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
  extendTheme,
  Grid,
  GridItem,
  Image,
  Text,
  Button,
  Container,
} from "@chakra-ui/react";
import back from "../../assets/back.svg"
import logo from "../../assets/logo-laranja.png";

const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px) translateX(-10px)",
};
export const theme = extendTheme({
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            right:"12px",
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

export default function SignUpPage() {
  const navigate = useNavigate();
  const { form, onChange, cleanFields } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  const onSubmitSignUp = (event) => {
    event.preventDefault();
    const body = {
      name: form.name,
      email: form.email,
      cpf: form.cpf,
      password: form.password,
    };
    axios
      .post(`${BASE_URL}/signup`, body)
      .then((res) => {
        cleanFields()
        console.log(res.data.user);
        window.alert("Cadastro efetuado com sucesso!")
        goToEditAdressPage(navigate)
      })
      .catch((err) => {
        window.alert(err.response.data.message);
      });
  };

  return (
    <Container padding={0}>
      <Grid>
        <Image
        src={back}
        margin={'10px'}
        onClick={()=> goToLoginPage(navigate)}       
        />
      </Grid>
      <hr/>
      <Center>
        <ChakraProvider theme={theme}>
          <Grid templateRows="1fr 4fr">
            <GridItem>
              <Center>
                <Image 
                  marginTop={"24px"} 
                  marginBottom={'28px'} 
                  h="58px" w="104px" 
                  src={logo}
                  />
              </Center>
              <Center>
                <Text fontSize="16px">Cadastrar</Text>
              </Center>
            </GridItem>
            <GridItem w="328px">
              <FormControl  variant="floating" id="name" isRequired isInvalid>
                <FormLabel htmlFor="name">Nome</FormLabel>
                <Input
                  h="56px"
                  id="name"
                  type={"name"}
                  value={form.name}
                  onChange={onChange}
                  name={"name"}
                  placeholder={"Nome e sobrenome"}
                  m="3"
                  required
                />
              </FormControl><br/>

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
                  m="3"
                  pattern={"^w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$"}
                  required
                />
              </FormControl><br/>

              <FormControl variant="floating" id="cpf" isRequired isInvalid>
                <FormLabel htmlFor="cpf">CPF</FormLabel>
                <Input
                  h="56px"
                  id="cpf"
                  type={"cpf"}
                  value={form.cpf}
                  onChange={onChange}
                  name={"cpf"}
                  placeholder={"000.000.000-00"}
                  m="3"
                  required
                />
              </FormControl><br/>

              <FormControl variant="floating" id="password" isRequired isInvalid>
                <FormLabel htmlFor="password">Senha</FormLabel>
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
              </FormControl><br/>

              <FormControl variant="floating" id="senha" isRequired isInvalid>
                <FormLabel htmlFor="password">Confirmar</FormLabel>
                <Input
                  h="56px"
                  id="password"
                  type={"password"}
                  name={"password"}
                  placeholder={"Confirme a senha anterior"}
                  m="3"
                  pattern={"^.{6,}"}
                  title={"A senha deve conter no mínimo 6 caracteres"}
                  required
                />
              </FormControl><br/>

              <Button
                bg="#e86e5a"
                w="328px"
                h="42px"
                type={"submit"}
                onClick={onSubmitSignUp}
              >
                Entrar
              </Button>
            </GridItem>
          </Grid>
        </ChakraProvider>
      </Center>
    </Container>
  );
}
