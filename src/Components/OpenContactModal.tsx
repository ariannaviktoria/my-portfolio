import { Button, useDisclosure } from "@nextui-org/react"
import ContactPage from "./ContactPage";


function OpenContactModal() {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
          <Button onPress={onOpen} color="warning" variant="bordered">Contact</Button>
            <ContactPage isOpen={isOpen} onClose={onOpenChange} />
    </>
  )
}

export default OpenContactModal