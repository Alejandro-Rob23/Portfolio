"use client";
import { CldImage } from 'next-cloudinary';

import Link from "next/link";



import "./style-page.css";
 

export default function Home() {
  return (
   <div className="cuerpo">
<PrincipalElements/>
<SkillS/>
<Projects_1/>
<Projects_2/>
<FoTer/>
   </div>
  );
}







 

  
export const PrincipalElements = () => {
    return (
        <>                
                    <div className="insidebox">      
                        <h1 className="tituloeffect">    Alejandro Robles</h1> 
                        <p>Desarrollador web Full-stack <br/>UX/UI</p>
        
              </div>
          

           
            
        </>
    );
};



export const SkillS = () => {
  return (
    <div className="skills">
        <div className="skill-item">
    
            <p className="tittle-hab">Desarrollador web</p>
        <p>Me gusta mantenerme actualizado conforme 
                            a  nuevas tendencias y constantes cambios en el mundo digital. 
                          </p>
        </div>



        <div className="skill-item">
       
            <p className="skill-tittle">Herramientas</p>
             React, Nodejs, Bootstrap, nextjs, git...<br/>  Elijo 
                            aprender dia a dia para nutrir habilidades blandas y tecnicas, necesarias
                            para enfrentar los retos diarios.
        </div>



        <div className="skill-item">
    
            <p className="skill-tittle">Conocimiento del negocio</p>
            <p>Por que un hoy en dia, un desarrollador debe conocer y entender los objetivos de las personas u organizaciónes con las que colabora.</p>
        </div>
       
    </div>
  )
}
























export const Projects_1 = () => {
    return (
        <>
    
            <div className="cbdproject">
           
            <CldImage
            className='circulo'
  width="160"
  height="200"
  src="Captura_de_pantalla_2024-11-04_02.50.12_jmaq2l"
  sizes="100vw"
  alt="Description of my image"
/>
          
                <div className="column_2">
                    <h4>CBD commerce</h4>
                    <p>
                        Una interfaz simple para poder mostrar la tienda
                        e-commerce de una empresa de cbd
                    </p>
                                          
                        <Link className="link" href="/cbd">See more</Link>
                    
                </div>
            </div>
        </>
    );
};

export const Projects_2 = () => {
    return (
        <>
            <div className="revanchaproject">
            <CldImage
  width="160"
  height="200"
  src="Captura_de_pantalla_2024-11-04_02.50.28_cr5nmr"
  sizes="100vw"
  alt="Description of my image"
/>
           
                
                <div className="column_2">
                    <h5>Revancha</h5>
                    <p>
                        A simple mockup to display different blogs and notes
                        belonging to a news-page on the screen.
                    </p>
                    
                        <Link className="link" href="/revancha">See more</Link>
                    
                </div>
                
            </div>
        </>
    );
};


export const FoTer = () => {
    return (
        <>
            <div className="handle_pagefoter">
                <p>
       
                 
                    <a className="link" href="https://github.com/Alejandro-Rob23">
                        Alejandro-Rob23
                    </a>
                   </p>
                    <p>
               
                    <a className="link" href="www.linkedin.com/in/alejandro-robles-sánchez-2a638b27a">
                        Jose Alejandro Robles Sanchez
                    </a></p>
                    <p>
            
                    <a>
                    joserob496@gmail.com
                    </a></p>
            </div>
          
        </>
    );
};









