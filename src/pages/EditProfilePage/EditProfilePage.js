import React from "react";
import axios from "axios";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/BASE_URL";
import { goToHome, goToProfilePage } from "../../Routes/Coordinator";
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
import back from "../../assets/back.svg";
import logo from "../../assets/logo-laranja.png";
import { auth } from "../../constants/auth";

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

export default function EditProfilePage(){
    const navigate = useNavigate();
    const { form, onChange, cleanFields } = useForm({
      name: "",
      email: "",
      cpf: "",
    });
  
    const onSubmitEditProfile = (event) => {
      event.preventDefault();
      const body = {
        name: form.name,
        email: form.email,
        cpf: form.cpf,
      };
      axios
        .put(`${BASE_URL}/profile`, body, auth)
        .then((res) => {
          cleanFields();
          console.log(res.data);
          window.alert("Perfil editado com sucesso!");
          goToProfilePage(navigate);
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
            margin={"10px"}
            onClick={() => goToProfilePage(navigate)}
          />
        </Grid>
        <hr />
        <Center>
          <ChakraProvider theme={theme}>
            <Grid templateRows="1fr 8fr">
              <GridItem>
                <Center>
                  <Text fontSize="16px" mt="24px">Editar</Text>
                </Center>
              </GridItem>
              <GridItem w="328px">
                <FormControl variant="floating" id="name" isRequired isInvalid>
                  <FormLabel htmlFor="name">Nome</FormLabel>
                  <Input
                    h="56px"
                    id="name"
                    type={"name"}
                    value={form.name}
                    onChange={onChange}
                    name={"name"}
                    placeholder={"Nome"}
                    m="3"
                    required
                  />
                </FormControl>
                <br />
  
                <FormControl variant="floating" id="email" isRequired isInvalid>
                  <FormLabel htmlFor="email">E-mail</FormLabel>
                  <Input
                    h="56px"
                    id="email"
                    type={"email"}
                    value={form.email}
                    onChange={onChange}
                    name={"email"}
                    placeholder={"E-mail"}
                    m="3"
                    required
                  />
                </FormControl>
                <br />
  
                <FormControl variant="floating" id="cpf" isInvalid>
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
                  />
                </FormControl>
                <br />
  
                <Button
                  // marginLeft="14px"
                  bg="#e86e5a"
                  w="328px"
                  h="42px"
                  type={"submit"}
                  onClick={onSubmitEditProfile}
                >
                  Salvar
                </Button>
              </GridItem>
            </Grid>
          </ChakraProvider>
        </Center>
      </Container>
    );
  
}
