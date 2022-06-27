import Box from '../../components/Box';
import Banner from '../../assets/images/ilustra-banner.png';
import Header from '../../components/Header';
import "../../styles/global.css";

function Home() {

  const sendEmail = () =>{
    alert("Email enviado com sucesso!");
  };
  return (
    <div className="App">
    <Header />
    <main>
    <Box background="claro">
      <div>
        <h1>Educação Financeira é tudo de bom</h1>
        <p>Vem comigo que te mostro por onde começar</p>
        <button className="button" onClick={sendEmail}>quero saber mais </button>
        <img src={Banner} alt="banner" />
      </div>
    </Box>
    <Box background='escuro'>
    <p>Teste</p>
    </Box>
    </main>
    </div>
  );
}

export default Home;
