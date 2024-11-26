import { BotaoCustomizado1, BotaoCustomizado2 } from './BotoesCustomizados';
import { CartaoPerfil } from './CartaoPerfil';
import { Contador } from './Contador';

function App() {
  return (
    <main>
      <CartaoPerfil nome="Guilherme Bergamo" profissao="Front-end" foto="https://avatars.githubusercontent.com/u/102548238?v=4" />

      <div style={{ display: 'flex', gap: '15px', marginTop: "15px" }}>
        <BotaoCustomizado1 texto="Perfil" cor="black" background="lightgreen" />
        <BotaoCustomizado2 texto="Configurações" cor="black" background="lightblue" />
      </div>
      <Contador />
    </main>
  );
}

export default App;
