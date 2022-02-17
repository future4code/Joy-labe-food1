import React from "react";
import axios from "axios";
import useForm from "../../hooks/useForm";
import { Center } from "@chakra-ui/react";


export default function SignUpPage(){
    return(
        <div>
            <Center>
            <input
            placeholder="Nome"
            />
            <input
            placeholder="E-mail"
            />
            <input
            placeholder="CPF"
            />
            <input
            placeholder="Senha"
            />
            <input
            placeholder="Confirmar senha"
            />
            <button>Criar</button>
            </Center>
        </div>
    )

}