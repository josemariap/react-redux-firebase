import Head from 'next/head';
import Navegacion from './Navegacion';
//Temas: https://bootswatch.com/
//usamos en esta app:Yety  https://bootswatch.com/4/yeti/bootstrap.min.css
//Hay que crear un master page para el uso de estos estilos, lo llamamos Master.js
//El Head es de next
//Bootstrap lo hace responsive con:  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

const MasterPage = (props) => {
   return( 
    <div>
        <Head>
            <title>Bitcoin App</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/> 
            <link rel="stylesheet" href="https://bootswatch.com/4/yeti/bootstrap.min.css"  />
        </Head>

        <Navegacion />
        
        <div className="container mt-4">
             {props.children}
        </div>
       
    </div>
   )
}

export default MasterPage;