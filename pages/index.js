import Head from 'next/head';
import Script from 'next/script';
import React from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

function Home() {
    const [modalOpen, setModalOpen] = React.useState(false);

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
                <li><a className="menu-btn" onClick={() => setModalOpen(!modalOpen)}>Cadastre-se</a></li>
                <li><a href="#" className="menu-btn">Contatos</a></li>
      <section className="modal">
      <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen} className="max-width">
        <div className=" modal-header">
          <h5 className=" modal-title" id="exampleModalLabel">
            Cadastrar
          </h5>
          <div
            aria-label="Close"
            className="close"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >            
          </div>
        </div>
        <ModalBody>
          <div className="modal-body">
            <div>
            <label >Nome: </label>
            <input type="text" className="form" placeholder="Digite seu nome"/>            
            <label >Sobrenome: </label>
            <input type="text" className="form" placeholder="Digite seu sobrenome"/>
            </div>
            <div>
            <label >Data de Aniversário: </label>
            <input type="date" className="form" placeholder="Digite sua data de nascimento"/>            
            <label >Telefone: </label>
            <input type="tel" className="form" placeholder="Ex: 00 12345678" pattern="[0-9]{2}-[0-9]{8}"/>
            </div>
            <div>
            <label>Email: </label>
            <input type="email" className="form" placeholder="Digite um email válido"/>            
            <label>Senha: </label>
            <input type="password" className="form" placeholder="Crie uma senha"/>
            </div>
            <div>
            <label>Escolha um estado:</label>
            <select className="form">
              <option value="ac">AC</option>
              <option value="al">AL</option>
              <option value="ap">AP</option>
              <option value="am">AM</option>
              <option value="ba">BA</option>
              <option value="ce">CE</option>
              <option value="df">DF</option>
              <option value="es">ES</option>
              <option value="go">GO</option>
              <option value="MA">MA</option>
              <option value="MT">MT</option>
              <option value="ms">MS</option>
              <option value="mg">MG</option>
              <option value="pa">PA</option>
              <option value="pb">PB</option>
              <option value="pr">PR</option>
              <option value="pe">PE</option>
              <option value="pi">PI</option>
              <option value="RJ">RJ</option>
              <option value="RN">RN</option>
              <option value="rs">RS</option>
              <option value="ro">RO</option>
              <option value="rr">RR</option>
              <option value="sc">SC</option>
              <option value="sp">SP</option>
              <option value="se">SE</option>
              <option value="to">TO</option>
            </select>
            </div>            
          </div>
        </ModalBody>
        <ModalFooter>
          <div className="modal-footer">
            <div >
              
          <button  className="button" color="secondary" type="button" onClick={() => setModalOpen(!modalOpen)}>
            Fechar
          </button>
          
          <button className="button" color="primary" type="submit">
          Enviar
          </button>
          
          </div>
          </div>
        </ModalFooter>
      </Modal>
      </section>
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