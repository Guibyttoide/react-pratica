export const CartaoPerfil = (props) => {
  return (
      <div style={{ display: 'flex', alignItems: 'center', color: 'white', gap: '15px' }}>
        <img src={props.foto} alt={props.nome} style={{ maxHeight: '80px', maxWidth: '80px' }} />
        <div>
          <h2 style={{ lineHeight: '1.3', margin: '0' }}>{props.nome || 'N/A'}</h2>
          <p style={{ lineHeight: '1', margin: '0' }}>{props.profissao || 'N/A'}</p>
        </div>
      </div>
  );
};
