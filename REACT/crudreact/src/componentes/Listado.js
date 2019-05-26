import React, { Component } from 'react';
import Post from './Post';

class Listado extends Component {

    mostrarPosts = () => {
        const posts = this.props.posts;
        if(posts === 0) return null;

        return(
            <React.Fragment>
                {Object.keys(posts).map(key => (
                    <Post
                      key = {key}
                      info = {this.props.posts[key]}
                      borrarPost = {this.props.borrarPost}
                    />
                ))}
            </React.Fragment>
        )
        
    }
    
    render() { 
        return ( 
           <table className="table">
               <thead>
                   <tr>
                       <th scope="col">ID</th>
                       <th scope="col">Título</th>
                       <th scope="col">Operación</th>     
                   </tr>
               </thead>
               <tbody>
                  {this.mostrarPosts()}
               </tbody>
           </table>
         );
    }
}
 
export default Listado;