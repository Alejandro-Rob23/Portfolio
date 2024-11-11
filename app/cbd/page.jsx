"use client";
import { CldImage } from 'next-cloudinary';
import React from "react";
import Link from "next/link";

import "./estilos_cbd.css";

export default function Page() {
    return ( 
        
            <div className="fondo_cbd">
                <OpcItems />

          
            

                <Message />

           
<MessageV2/>
<ItemsInfo/>
<ImageCircle/>
                <FoTePie />
            </div>
        
    );
}






export const OpcItems = () => {
    return (
        <>
            <div className="nav_pipe">

                
                <h2 className="logo_barra">           
                Echofy</h2>

           

                <div id="lista_barra_princ">
                    
                        <Link className="blanco" href="/">
                            Home
                        </Link>
                   
                     
                  
                        <Link className="blanco" href="/">
                            Service
                        </Link>
                    
                   
 
 <Link className="blanco" href="/cbd/cart">Productos</Link>
                  

                   
                        <Link  href="/">
                            <button className='botones'
                                type="button"
                               
                            >
                               Port-folio
                            </button>
                        </Link>
                    
                </div>
            </div>
        </>
    );
};








export const Message = () => {
    return (
        <>
          <CldImage
      className='imgfondo'
      width="1350"
      height="600"
      src="samples/landscapes/nature-mountains"
      sizes="100vw"
      
      alt="Description of my image"
    />
            <div className="mensaje_box">
          
                <h1 className="mensajetitulo">Personal
                Finance
                Reminded</h1>
                <p > In hac habitasse platea dictumst. Maecenas libero lectus, rutrum at nisi ac, cursus rutrum justo.
                </p>
                <button  className='botones' type="button" >
                    Lets talk
                </button>
                &nbsp;&nbsp;&nbsp;
                <span> <button  className='botones' type="button" >
                    Read more
                </button>
           
</span>
             
            </div>
        </>
    );
};


export const MessageV2 = () => {
    return (
        <div className="container-messagev2">
            <div>
            <CldImage
             className='circulo'
  width="360"
  height="500"
  src="eco2_mdscll"
  sizes="100vw"
  alt="Description of my image"
/> 
            </div>
            <div style={{ width: "500px", padding: "50px" }}>
                <p style={{ color: "green" }}>
                 About Echofy
                </p>
                <h2>Environmental Sustainable Forever Green </h2>
                <h5>
                    
                    Safe Environment
                </h5>
                <p className="small">
                    Alternative innovation after ethical to network
                    environmental whiteboard transparent growth natural done
                </p>

                <h5>
               
                    Economic Benifits
                </h5>
                <p  className="small">
                    Alternative innovation after ethical to network
                    environmental whiteboard transparent growth natural done
                </p>
                <button  className='botones' type="button" >
                    More about
                </button>
            </div>
        </div>
    );
};



export const ItemsInfo = () => {
  return (
<div className="info-container">

<div className="border-effect">
    
<div className="item-info" >
<CldImage
 className='circulo'
  width="160"
  height="180"
  src="eco4_pdzkag"
  sizes="100vw"
  alt="Description of my image"
/> 


 

    <p className="titulo-iteminfo">Cultivos orgánicos</p>
    <p style={{fontSize:"small"}}>productos con ingredientes organicos. 
    <br/>
    Continue Reading...</p> 


</div>
</div>

&nbsp;
<div className="border-effect">
<div className="item-info" >
    
<CldImage
 className='circulo'
  width="160"
  height="180"
  src="eco7_oupqmp"
  sizes="100vw"
  alt="Description of my image"
/> 
<p className="titulo-iteminfo">Hierva buena</p>
    <p style={{fontSize:"small"}} >Ayuda a reducir la hinchazón y afectan los niveles de hormonas en el cuerpo.<br/>
    Continue Reading...</p> 
</div>
</div>

&nbsp;
<div className="border-effect">
<div className="item-info" >
<CldImage
 className='circulo'
  width="160"
  height="180"
  src="eco2_w4vghw"
  sizes="100vw"
  alt="Description of my image"
/> 
<p className="titulo-iteminfo">Gordolobo</p>
    <p style={{fontSize:"small"}}>Para el tratamiento de problemas respiratorios, incluyendo asma y bronquitis .<br/>
Continue Reading...</p> 
    
</div>
</div>


</div>
  )
}



export const ImageCircle = () => {
  return (
    <>    <h3 className="tittle-imagecircle">Featured Collections</h3>
    <div className="imagecircle">
        
        <div className="itemcircle">       <CldImage
         className='circulo2'
  width="160"
  height="160"
  src="samples/cup-on-a-table"
  sizes="100vw"
  alt="Description of my image"
/> <br/>Cbd/Healt</div>
        <div className="itemcircle">       <CldImage
         className='circulo2'
  width="160"
  height="160"
  src="samples/coffee"
  sizes="100vw"
  alt="Description of my image"
/> <br/>Naturista</div>
        <div className="itemcircle">
        <CldImage
         className='circulo2'
  width="160"
  height="160"
  src="samples/balloons"
  sizes="100vw"
  alt="Description of my image"
/>
            
            
             <br/>Experiencias</div>
        <div className="itemcircle">       <CldImage
        className='circulo2'
  width="160"
  height="160"
  src="samples/ecommerce/leather-bag-gray"
  sizes="100vw"
  alt="Description of my image"
/>

 <br/>Informacion</div>
    </div></>

  )
}





















export const FoTePie = () => {
    return (
        <>
            <footer className="foter_page_cbd">
                <div className="imgfoter">
                <CldImage
  width="1370"
  height="550"
  src="eco8_pahbwq"
  sizes="100vw"
  alt="Description of my image"
/> 
                </div>
               


                <div className="box-container-cbd">
                    <div className="box-item">
                        
                        <h4>
                 
                            Echofy</h4>
                        <p>Proactively restore timely alignments after client environmentals

                        </p>
                        <p>
                            Contact
                        </p>
                        <p>
               123 (4567) 890
                        </p>
                        <p>
                      
 example@gmail.com
                        </p>
                    </div>
                    <div className="box-item">
                        <ul className="nolista">
                            <li><h4>Company</h4></li>
                            <li className="hover-effect">home</li>
                            <li className="hover-effect">about us</li>
                            <li className="hover-effect">our service</li>
                            <li className="hover-effect">Meet our team</li>
                            <li className="hover-effect">Latest blog</li>
                        </ul>
                    </div>
                    <div className="box-item">  
                        <ul className="nolista">
                            <li> <h4>Quick links</h4></li>
                            <li className="hover-effect">Testimoniak</li>
                            <li className="hover-effect">contact us</li>
                            <li className="hover-effect">Donations</li>
                            <li className="hover-effect">FAQ</li>
                            <li className="hover-effect">Careers</li>
                        </ul>
                        </div>
                        <div  className="box-item" >
                            <h4>Newsletter</h4>
                            <h6>Suscribe our Newsletter</h6>
                            
      </div>
                    


                </div>
              
                <p className="copyfoter">
             © Copyrights 2024 Echofy All rights reserved by Dream IT.
             </p>

            </footer>
        </>
    );
};
