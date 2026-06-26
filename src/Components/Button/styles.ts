import styled, { css } from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

// CORREÇÃO AQUI: Adicionamos o disabled na tipagem das Props do Styled Components
type Props = {
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}

const BaseStyles = css<Props>`
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;

  /* Lógica de inversão de cores */
  background-color: ${(props) =>
    props.variant === 'primary' ? cores.salmao : cores.salmaoClaro};

  color: ${(props) =>
    props.variant === 'primary' ? cores.salmaoClaro : cores.salmao};

  border: 1px solid ${cores.salmao};

  /* EFEITO VISUAL: Estilização para quando o botão estiver disabled (isLoading) */
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`

export const ButtonContainer = styled.button<Props>`
  ${BaseStyles}
`

export const ButtonLink = styled(Link)<Props>`
  ${BaseStyles}
}
`
