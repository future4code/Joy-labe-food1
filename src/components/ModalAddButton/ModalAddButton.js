import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Text, useDisclosure } from "@chakra-ui/react"
import React, { useState } from "react"


const ModalAddButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [quantity, setQuantity] = useState(0)

  const handleChange = (event) => {
    setQuantity(event.target.value)
  }

  return (
    <Modal
      blockScrollOnMount={true}
      isOpen={isOpen}
      onClose={onClose}
      bg={"rgba(0, 0, 0, 0.5);"}
    >
      <ModalOverlay bg={"rgba(0, 0, 0, 0.5);"} />
      <ModalContent maxW={"328px"} maxH={"216px"} borderRadius={"0"}>
        <ModalHeader
          w={"296px"}
          h={"18px"}
          m={" 6px 0 0 16px"}
          fontSize={"16px"}
          letterSpacing={"-0.39"}
          textAlign={"center"}
        >
          Selecione a quantidade desejada
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Select
            w={"296px"}
            h={"56px"}
            m={"9px 16px 0"}
            p={"16px"}
            borderRadius={"4px"}
            border={"solid 1px #b8b8b8"}
            value={quantity}
            onChange={handleChange}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Select>
        </ModalBody>
        <ModalFooter>
          <Text
            color="#4a90e2"
            onClick={onClose}
            textTransform={"uppercase"}
            w={"183px"}
            h={"19px"}
            margin={"7px 16px 16px"}
            fontSize={"16px"}
            letterSpacing={"0.39px"}
            textAlign={"right"}
            isTruncated
          >
            Adicionar ao carrinho
          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ModalAddButton