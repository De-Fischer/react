import { Container } from "./style";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

export function Details() {
   /*quando vai receber estilização usar div se não somente o fragment <></>*/
  return (
    <Container>
      <Header />

      <Button title="Voltar" />
    </Container>   
  )
};