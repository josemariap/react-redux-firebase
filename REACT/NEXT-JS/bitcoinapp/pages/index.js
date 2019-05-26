import MasterPage from '../componentes/Master';
import Precio from '../componentes/Precio';
import Noticias from '../componentes/Noticias';
import Eventos from '../componentes/Eventos';
import fetch from 'isomorphic-unfetch';
//Temas: https://bootswatch.com/
//usamos en esta app:Yety template  https://bootswatch.com/4/yeti/bootstrap.min.css
//Hay que crear un master page para el uso de estos estilos, lo llamamos Master.js

//Pegarle a la api del lado del servidor debemos instalar: npm install --save-dev isomorphic-unfetch  ya que el fetch es solo del lado del cliente

const Index = (props) => (
  <MasterPage>
     <div className="row">
       <div className="col-12">
          <h2>Precio del Bitcoin</h2>
          <Precio
             precio = {props.precioBitcoin}
          />
       </div>

       <div className="col-md-8">
          <h2 className="my-4">Noticias Sobre Bitcoin</h2>
          <Noticias
             noticias = {props.noticiasBitcoin}
          />
       </div>

       <div className="col-md-4">
          <h2 className="my-4">Próximos Eventos Bitcoin</h2>
          <Eventos 
             eventos = {props.eventosBitcoin}
          />
       </div>
     </div>
  </MasterPage>     
);
//Solo en SSR cuando este primer componente Index cargue, se ejecuta este metodo autom. y lo que retorna esta disponible en la props del index
Index.getInitialProps = async () => {
   const precio = await fetch("https://api.coinmarketcap.com/v2/ticker/1/");//api info de bitcoin
   const resPrecio = await precio.json();

   const noticias = await fetch("https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=2910dd47c07c4e048cad8ff2bb431e55&language=es");//api con info noticias
   const resNoticias = await noticias.json();

   const eventos = await fetch("https://www.eventbriteapi.com/v3/events/search/?q=Bitcoin&sort_by=date&location.address=Argentina&token=EVF2SH7TLJ7FVS4MZRYE");
   const resEventos = await eventos.json();

   return{
      precioBitcoin: resPrecio.data.quotes.USD,
      noticiasBitcoin: resNoticias.articles,
      eventosBitcoin: resEventos.events
   }//esto return se carga en las props del index
}

export default Index;