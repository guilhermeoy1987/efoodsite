import styled from 'styled-components'

import { breackpoints, cores } from '../../styles'
import { ButtonContainer, ButtonLink } from '../Button/styles'

type WidthProps = {
  maxWidth?: string
}

// 🟩 ADICIONADO: Container principal do carrinho/checkout
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1000;

  &.is-open {
    display: flex;
  }

  &.close-button {
    position: relative;
  }
`

// 🟩 ADICIONADO: Fundo escurecido atrás do painel lateral
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`

// ... dentro do seu arquivo styles.ts

export const Aside = styled.aside`
  /* O padding-top (40px) cria o espaço necessário para o título não sumir */
  padding: 40px 16px 16px 16px;
  font-weight: 700;
  color: ${cores.corSecundaria};
  background-color: ${cores.corPrincipal};
  z-index: 1001;
  position: fixed;
  top: 0;
  right: 0;
  width: 360px;
  height: 100vh; /* Ocupa 100% da altura da tela */
  overflow-y: auto; /* Permite rolar se o formulário for maior */
  display: flex;
  flex-direction: column; /* Necessário para o marginTop: auto funcionar */
  box-sizing: border-box; /* Garante que o padding não aumente o tamanho total */

  @media (max-width: ${breackpoints.tablet}) {
    width: 80%;
  }

  /* Adicione isso para garantir que o flexbox respeite o conteúdo */
  box-sizing: border-box;

  h3 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin-bottom: 20px;
  }

  ${ButtonContainer} {
    max-width: 100%;
    height: auto; // Alterado de 24px para auto
    padding: 4px 0;
  }

  ${ButtonLink} {
    height: 24px;
    color: ${cores.corPrincipal};
    background-color: ${cores.corSecundaria};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${breackpoints.tablet}) {
    width: 70%; /* Ocupa uma parte maior em telas menores */
    max-width: none;
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  label {
    font-size: 14px;
    margin-bottom: 8px;
    margin-top: 8px;
  }
`

export const Input = styled.input<WidthProps>`
  width: 100%;
  height: 32px;
  padding-left: 10px;
  background-color: ${cores.corSecundaria};
  border: 1px solid ${cores.corSecundaria};
  outline: none;

  &.erro {
    border: 1px solid red;
  }

  @media (min-width: ${breackpoints.tablet}) {
    width: ${(props) => props.maxWidth || '100%'};
  }
`

export const Row = styled.div`
  display: flex;
  margin-top: 8px;
  justify-content: space-between;
  gap: 31px;

  & > div {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: ${breackpoints.tablet}) {
    display: block;
    width: 100%;
  }
`

export const ContainerParagrafo = styled.div`
  width: 344px;
  height: 100%;
  max-height: 186px;
`

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`
export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.corSecundaria};
  padding: 8px;
  position: relative;
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
    color: ${cores.corPrincipal};
  }

  span {
    font-size: 14px;
    font-weight: 400;
    color: ${cores.corPrincipal};
  }

  button {
    // Certifique-se de ter um ícone de lixeira aqui
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`

export const Prices = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 700;
  color: ${cores.corSecundaria};
  margin-top: 40px;
  margin-bottom: 16px;
`
