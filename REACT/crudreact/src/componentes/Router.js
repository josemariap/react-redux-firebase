import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Navegacion from './Navegacion';
import Posts from './Posts';
import SinglePost from './SinglePost';
import Formulario from './Formulario';
import Editar from './Editar';
import uuid from 'uuid';
import swal from 'sweetalert2'
//ESTA PROYECTO AGREGA sweetalert2 PARA LAS ALERTAS: npm install --save-dev sweetalert2
//Forma de uso: https://sweetalert2.github.io/

class Router extends Component {
    state = {  
       posts:[] 
    }

    componentDidMount(){
        this.getAllPosts();
    }

    getAllPosts = () => {
       const url = `https://jsonplaceholder.typicode.com/posts`;
       axios.get(url)
            .then(res => {
               console.log(res.data)
               this.setState({
                   posts: res.data
                }
               )
            })
    }

    borrarPost = (id) => {
      const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
      axios.delete(url)
           .then(res => {
              if(res.status === 200){
                 const posts = [...this.state.posts]
                 let resultado = posts.filter(post => (
                      post.id !== id
                 ))
                 this.setState({
                    posts: resultado
                 })
              }
           })
   }

   crearPost = (post) => {
      const url = `https://jsonplaceholder.typicode.com/posts`;
      axios.post(url, {post})//post es el request body con el json del post
           .then(res => {
              console.log(res);
              if(res.status === 201){
                  //SWEETALERT2
               swal.fire(
                  'Good job! New Post add!',
                  'You clicked the button!',
                  'success'
                  )//END SWEETALERT2

               let postId = {id: uuid()} //generamos id unico ya que la api nos da siempre el mismo, este no sirve para hacer put en la api
               const nuevoPost = Object.assign({}, res.data.post, postId); //me arma un json con la estructura correcta uniendo post y id
               const posts = [...this.state.posts]
               posts.push(nuevoPost);
               this.setState({
                  posts: posts
                }
               )
            }
           })    
 
   }

   editarPost = (postActualizado) => {
      //FIX: si edito un post que creo yo mismo en el form, va a dar error ya que el put de la api no lo tomará con el id autogenrado
      const {id} = postActualizado;
      const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
      axios.put(url, {postActualizado})
           .then(res => {
              if(res.status === 200) {
                swal.fire(
                  'Update post',
                  'Save new update post',
                  'success'
                 )
                 let postId = res.data.id;
                 const posts = [...this.state.posts] 
                 const postEditarIndex = posts.findIndex(post => postId === post.id);//obtengo el indice del que quiero actualizar segun el id buscado
                 posts[postEditarIndex] = postActualizado;
                 this.setState({
                    posts: posts
                 })
                 
              }
           })
   }

    render() { 
        return ( 
        <BrowserRouter>
           <div className="container">
             <div className="row justify-content-center">
              <Header />
              <Navegacion />
             </div>   
              
            <Switch>

               <Route exact path="/" render= { () => {
                  return(
                     <Posts 
                        posts = {this.state.posts}
                        borrarPost = {this.borrarPost}
                     />
                  )
               }}     
               />

               <Route exact path="/post/:postId"  render= { (props) => {
                   let idPost = props.location.pathname.replace('/post/', '')  //id es String, por eso se castea
                   let posts = this.state.posts;
                   let filtro;
                   filtro = posts.filter(post => (
                      post.id == idPost
                   ))
                   return(
                      <SinglePost
                        post = {filtro[0]}
                      />
                   )
                }
               }
               />

               <Route exact path="/crear" render= { () => {
                  return(
                     <Formulario
                       crearPost={this.crearPost}
                     />
                  )
               }}     
               />

               <Route exact path="/editar/:postId"  render= { (props) => {
                   let idPost = props.location.pathname.replace('/editar/', '')
                   let posts = this.state.posts;
                   let filtro;
                   filtro = posts.filter(post => (
                      post.id == idPost
                   ))
                   return(
                      <Editar
                        post = {filtro[0]}
                        editarPost = {this.editarPost}
                      />
                   )
                }
               }
               />
         
            </Switch> 
           </div>
         </BrowserRouter>
         );
    }
}
 
export default Router;