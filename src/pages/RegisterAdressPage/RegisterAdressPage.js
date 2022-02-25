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

export default function RegisterAdressPage() {
  const navigate = useNavigate();
  const { form, onChange, cleanFields } = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state:"",
    complement:""
  });

  const onSubmitAddAdress = (event) => {
    event.preventDefault();
    const body = {
      street: form.street,
      number: form.number,
      neighbourhood: form.neighbourhood,
      city: form.city,
      state: form.state,
      complement: form.complement
    };
    axios
      .put(`${BASE_URL}/address`, body, auth)
      .then((res) => {
        cleanFields();
        console.log(res.data);
        window.alert("Endereço criado com sucesso!");
        goToHome(navigate);
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
          <Grid templateRows="1fr 4fr">
            <GridItem>
              <Center>
                <Image
                  marginTop={"24px"}
                  marginBottom={"28px"}
                  h="58px"
                  w="104px"
                  src={logo}
                />
              </Center>
              <Center>
                <Text fontSize="16px">Meu endereço</Text>
              </Center>
            </GridItem>
            <GridItem w="328px">
              <FormControl variant="floating" id="street" isRequired isInvalid>
                <FormLabel htmlFor="street">Logradouro</FormLabel>
                <Input
                  h="56px"
                  id="street"
                  type={"street"}
                  value={form.street}
                  onChange={onChange}
                  name={"street"}
                  placeholder={"Rua/Av."}
                  m="3"
                  required
                />
              </FormControl>
              <br />

              <FormControl variant="floating" id="number" isRequired isInvalid>
                <FormLabel htmlFor="number">Número</FormLabel>
                <Input
                  h="56px"
                  id="number"
                  type={"number"}
                  value={form.number}
                  onChange={onChange}
                  name={"number"}
                  placeholder={"Número"}
                  m="3"
                  required
                />
              </FormControl>
              <br />

              <FormControl variant="floating" id="complement" isInvalid>
                <FormLabel htmlFor="complement">Complemento</FormLabel>
                <Input
                  h="56px"
                  id="complement"
                  type={"complement"}
                  value={form.complement}
                  onChange={onChange}
                  name={"complement"}
                  placeholder={"Apto./Bloco"}
                  m="3"
                />
              </FormControl>
              <br />

              <FormControl
                variant="floating"
                id="neighbourhood"
                isRequired
                isInvalid
              >
                <FormLabel htmlFor="neighbourhood">Bairro</FormLabel>
                <Input
                  h="56px"
                  id="neighbourhood"
                  type={"neighbourhood"}
                  value={form.neighbourhood}
                  onChange={onChange}
                  name={"neighbourhood"}
                  placeholder={"Bairro"}
                  m="3"
                  required
                />
              </FormControl>
              <br />

              <FormControl variant="floating" id="city" isRequired isInvalid>
                <FormLabel htmlFor="city">Cidade</FormLabel>
                <Input
                  h="56px"
                  id="city"
                  type={"city"}
                  value={form.city}
                  onChange={onChange}
                  name={"city"}
                  placeholder={"Cidade"}
                  m="3"
                  required
                />
              </FormControl>
              <br />
              <FormControl variant="floating" id="state" isRequired isInvalid>
                <FormLabel htmlFor="state">Estado</FormLabel>
                <Input
                  h="56px"
                  id="state"
                  type={"state"}
                  name={"state"}
                  value={form.state}
                  onChange={onChange}
                  placeholder={"Estado"}
                  m="3"
                  required
                />
              </FormControl>
              <br />

              <Button
                marginLeft="14px"
                bg="#e86e5a"
                w="328px"
                h="42px"
                type={"submit"}
                onClick={onSubmitAddAdress}
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
