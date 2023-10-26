import { Container, Links, Content } from "./style";

import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  /*quando vai receber estilização usar div se não somente o fragment <></>*/
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>
            Estudando React
          </h1>

          <p>
          O React permite construir interfaces de usuário 
          a partir de peças individuais chamadas componentes. 
          Crie seus próprios componentes React como , e . 
          Em seguida, combine-os em telas, páginas e aplicativos inteiros.
          Quer você trabalhe sozinho ou com milhares de outros desenvolvedores, 
          usar o React parece o mesmo. 
          Ele foi projetado para permitir que você combine perfeitamente 
          componentes escritos por pessoas, equipes e organizações independentes.
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="https://react-icons.github.io/react-icons/">
                  https://react-icons.github.io/react-icons/
                </a>
              </li>
              <li>
                <a href="https://react.dev/">https://react.dev/</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
