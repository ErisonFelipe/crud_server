import Head from 'next/head';
import Script from 'next/script';

function Home() {
    return (
    <div>
        <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
        <title>Portifolio</title>
        </Head>
        <nav className="navbar">        
        <div className="max-width">
            <div className="logo">
                <a href="home.thm">Trendy Man</a>
            </div>
            <ul className="menu">
                <li><a href="home.html" className="menu-btn">Home</a></li>
                <li><a href="#" className="menu-btn">Cadastre-se</a></li>
                <li><a href="#" className="menu-btn">Contatos</a></li>
            </ul>
            <div className="menu-btn">
                <i className="fas fa-bars"></i>
                
            </div>
        </div>
    </nav>
    <section className="top">
        <div className="max-width">
            <div className="top-content">
                <div className="texto1">Temos a solução</div>
                <div className="texto2">que você está buscando</div>
                <div className="texto3">para o seu visual!</div>
                <a href="#">Entrar</a>
            </div>
        </div>
    </section>
    <section className="services">
        <div className="max-width">
            <h2 className="title">Serviços</h2>
            <div className="serv-content">
                <div className="card">
                    <div className="box">
                        <i className="fas fa-code"></i>
                       <div className="text">
                        Cortes de Cabelo
                       </div>
                       <p>
                        Quais são os cortes de cabelo masculino mais estilosos, modernos e atemporais? <br/>
                        Se você está buscando inspiração para a sua próxima visita ao barbeiro? <br/>
                        Aqui encontrará cortes versáteis, sem sugestões excêntricas como detalhes <br/>
                        coloridos ou fios assimétricos,
                        porque esse tipo de penteado é muito passageiro. <br/>
                        Ou seja, vai de “tendência” para “cafona” em questão de meses (às vezes, semanas).<br/>
                        Com os cortes da nossa página, você vai achar sempre o melhor corte para o seu estilo. Pode
                        confiar!
                       </p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <i className="fas fa-laptop-code"></i>
                       <div className="text">
                            Dicas de Roupas
                       </div>
                       <p>
                        Aprender como se vestir bem é, sem dúvida, um grande desafio para qualquer homem. 
                        O problema é que este pode ser um conceito muito relativo e, com tantas referências 
                        diferentes, ele vai variar de acordo com cada personalidade, tipo físico e outros fatores. 
                        Afinal, ainda não inventaram um estilo que agrade e sirva para todos, não é?
                       </p>
                    </div>
                </div>  
                <div className="card">
                    <div className="box">
                        <i className="fas fa-mobile-alt"></i>
                       <div className="text">
                            Outras Dicas
                       </div>
                       <p>
                        Encontre algumas outras dicas para completar seu visual!
                       </p>
                    </div>
                </div>                  
            </div>
        </div>
    </section>
    <footer>
      <span>Create By - <a href="">Erison Felipe</a></span>
    </footer>
    <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" strategy="beforeInteractive"/>
    <Script src="cunstom.js" strategy="afterInteractive"/>
    </div>
    )
  }
  
  export default Home