import * as S from './styles'

type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  disabled?: boolean
  children: React.ReactNode
  variant?: 'primary' | 'secondary' // Propriedade de cor
}

const Button = ({
  type,
  title,
  to,
  onClick,
  disabled, // CORREÇÃO 1: Adicionar o 'disabled' aqui na desestruturação!
  children,
  variant = 'primary'
}: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <S.ButtonContainer
        type={type}
        title={title}
        onClick={onClick}
        variant={variant}
        disabled={disabled} // CORREÇÃO 2: Repassar o 'disabled' para o styled component!
      >
        {children}
      </S.ButtonContainer>
    )
  }

  return (
    <S.ButtonLink to={to as string} title={title} variant={variant}>
      {children}
    </S.ButtonLink>
  )
}

export default Button
