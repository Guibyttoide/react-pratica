export const BotaoCustomizado1 = ({texto, cor, background}) => {
  return (
    <button style={{color: cor, background: background}}>
      {texto}
    </button>
  )
}

export const BotaoCustomizado2 = (props) => {
  return (
    <button style={{color: props.cor, background: props.background}}>
      {props.texto}
    </button>
  )
}