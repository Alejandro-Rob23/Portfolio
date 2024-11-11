"use client";
import { CldImage } from 'next-cloudinary';

import React from "react";
import Link from "next/link";


import "./estilo_revancha.css";

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
    return (
        <>
            <div className="background_revancha">
                <BarraNav />
                <BienVenidos/>
                <ConteNido/>
      
        


<Noticia1/>
<NoticiaColumn2/>
                
               
              
                <Foter />
         
            </div>
        </>
    );
}

export const BarraNav = () => {
    return (
        <>
            <div className="barranav_handle">
                <div className="hora_barra_nav">
                
                    <h4>REVANCHA</h4>
                    
                </div>

                <div className="cuadrodebusqueda_barra_nav">
                <div className="search-box">
      <form  method="get" id="search-form">
         <fieldset>
            <input className="form" type="text" id="search-input" placeholder="Buscar"  />
           
            <i ></i>
         </fieldset>
      </form>
   </div>

                </div>

                <div className="menude_opciones_barranav">
                    <nav className="breadcrumb">
                       
                            
                                <Link className="breaditem"  href="#">Home</Link>
                       
                                
                                <Link className="breaditem"  href="#">Blog</Link>
                           
                           
                            <Link className="breaditem" href="/#">
                                Creators
                                </Link>
                           
                        
                    
                                
                               
                            <Link className="breaditem" href="/#">
                            <button
                                type="button"
                                className='stylebutton'
                             
                            >
                               Port-folio
                            </button>
                                </Link>
                            
                    </nav>
                </div>
               
            </div>
        </>
    );
};


export const BienVenidos = () => {
  return (
    <div className='bienvenidos'>
        <p className='p1'>WELCOME TO  REVANCHA</p>
        <p>The rigth information y <span style={{color:"red"}}>rigth </span> time</p>
        <p>Mexico <span style={{color:"red"}}>city</span> &nbsp;
  </p>
    </div>
  )
}


export const ConteNido  = () => {
    return (
      <>
      
       <div className='contenedorprincipal'>
        
        <span className='imagen1'>
        <CldImage
  width="445"
  height="345"
  src="noticias4_kgpa9c"
  sizes="100vw"
  alt="Description of my image"
/>
        <p className='texto'>News meaning procedure proyects records</p>
        </span>
  
        <div className='box'>
          <span className='item'>
          <CldImage
  width="220"
  height="165"
  src="noticias3_cqs6in"
  sizes="100vw"
  alt="Description of my image"
/>
         <p className='texto'>News meaning procedure proyects records</p>
          </span>
          <span className='item2'>
          <CldImage
  width="220"
  height="165"
  src="noticias1_caz4ti"
  sizes="100vw"
  alt="Description of my image"
/>
         <p className='texto'>News meaning procedure proyects records</p>
          </span>
          <span className='item3'>
          <CldImage
  width="220"
  height="165"
  src="samples/coffee"
  sizes="100vw"
  alt="Description of my image"
/>
<p className='texto'>News meaning procedure proyects records</p>
          </span>
          <span className='item4'>
          <CldImage
   width="220"
  height="165"
  src="samples/breakfast"
  sizes="100vw"
  alt="Description of my image"
/>
            <p className='texto'>News meaning procedure proyects records</p>
            </span>
        </div>
  
   </div>
      </>
    )
  }
  
  
  




  export const Noticia1 = () => {
    return (
      <div className='noticia1-contenedor'>
          
          <div className='noticiaele1' >   
                         <CldImage
                         className='circulo'
    width="500"
    height="250"
    src="samples/landscapes/beach-boat"
    sizes="100vw"
    alt="Description of my image"
  /></div>
          <div className='noticiaele2'>
              <p>
      
                Netflix 
        
                 American Psyco</p>
              <h2>Where to watch movies</h2>
          <p>Jose alejandro robles sanchez
          Jose alejandro robles sanchez
          Jose alejandro robles sanchez
          Jose alejandro robles sanchez
          </p>
          <p><span className='red'> Netflix</span>&nbsp;
  
             4 min read</p>
          </div>
      </div>
    )
  }
  
  export const NoticiaColumn2 = () => {
    return (
        <div className="noticiacolumn2-contenedor">
            <h2>Latest news</h2>
            <div className="contenedor-notices">
                <div className="contenedor2-column">
                <CldImage
                className='circulo'
    width="160"
    height="180"
    src="samples/food/pot-mussels"
    sizes="100vw"
    alt="Description of my image"
  />
                    <p className="noticiacolumn2-contenedor-lleter">
                
               BBC
                     
                       9 hours ago
                    </p>
                    <p className="noticiacolumn2-contletter2">
                    The best fast food  </p>
                    <p className="noticiacolumn2-contenedor-lleter">
                        <span style={{ color: "red" }}>Read</span>&nbsp;
                      
                        time 8 min
                    </p>
                </div>
  
                <div className="contenedor2-column">
                <CldImage
                className='circulo'
    width="160"
    height="180"
    src="samples/imagecon-group"
    sizes="100vw"
    alt="Description of my image"
  />
  
                    <p className="noticiacolumn2-contenedor-lleter">
                        Net
                      
                        17 hours ago
                    </ p>
                    <p className="noticiacolumn2-contletter2">Google teams service for encourage your web sites</p>
                    <p className="noticiacolumn2-contenedor-lleter">
                        <span style={{ color: "red" }}>Read</span>&nbsp;
                       
                        time 6 min
                    </p>
                </div>
  
                <div className="contenedor2-column">
                <CldImage
                className='circulo'
    width="160"
    height="180"
    src="samples/ecommerce/car-interior-design"
    sizes="100vw"
    alt="Description of my image"
  />
  
                    <p className="noticiacolumn2-contenedor-lleter">
                      ;Formula 1
                       
                        3 hours ago
                    </p>
                    <p className="noticiacolumn2-contletter2">He deserves a lot more Verstappen backs Alonso</p>
                    <p className="noticiacolumn2-contenedor-lleter">
                        <span style={{ color: "red" }}>Read</span>&nbsp;
                       
                        time 15 min
                    </p>
                </div>
  
                <div className="contenedor2-column">
                <CldImage
                className='circulo'
    width="160"
    height="180"
    src="samples/ecommerce/leather-bag-gray"
    sizes="100vw"
    alt="Description of my image"
  />
  
                    <p className="noticiacolumn2-contenedor-lleter">
                       BBC
                       
                        titulo provisional
                    </p>
                    <p className="noticiacolumn2-contletter2">Enmienda tag jose  Gar.  </p>
                    <p className="noticiacolumn2-contenedor-lleter">
                        <span style={{ color: "red" }}>Read</span>&nbsp;
                       
                        time 10 min
                    </p>
                </div>
            </div>
           <p className='p2'> see all </p>
        </div>
    );
  };
  






















export const Foter = () => {
  return (
    <div className='foter222'>
        <div className='cont-foter1'>
            <p style={{ color: "red", width:"150px" }}>
        Boletin
        </p>
        <p className='small'>ecommer pertenceinte a netflis inc ecommer pertenceinte a netflis inc </p>
        <div style={{ color: "red" }} className="iconosfoter">
                   
                </div>
   
        </div>

    <div className='container-foter'>
        <div>
            <ul >
                <li  className='fuerte'>Bussines</li>
                <li>Startup</li>
                <li>Employer</li>
                <li>Succes</li>
                <li>Markets</li>
                
            </ul>
        </div>
        <div>
        <ul>
                <li className='fuerte'>Tech</li>
                <li>Inovvate</li>
                <li>Gadget</li>
                <li>Future techs</li>
                <li>Cites</li>
                
            </ul>
        </div>
        <div>
        <ul>
                <li className='fuerte'>Travel</li>
                <li>Food</li>
                <li>Drinks</li>
                <li>Places</li>
                <li>Experience</li>
                
            </ul>
        </div>
        <div>
        <ul>
                <li className='fuerte'>Sports</li>
                <li>Skate</li>
                <li>Bmx</li>
                <li>Football</li>
                <li>Tenis</li>
                
            </ul>
        </div>
        <div>
        <ul>
                <li className='fuerte'>Features</li>
                <li>As equals</li>
                <li>Events</li>
                <li>Merch</li>
                <li>Music</li>
                
            </ul>
        </div>
        <div>
        <ul>
                <li className='fuerte'>Entreta</li>
                <li>Movies</li>
                <li>Music</li>
                <li>Artist</li>
                <li>Viral</li>
                
            </ul>
        </div>
        <div>
        <ul>
                <li className='fuerte'>Weather</li>
                <li>Climate</li>
                <li>Storm Tracker</li>
                <li>Eartquake</li>
                <li>Sun</li>
                
            </ul>
        </div>
        <div>
        <ul>
                <li className='fuerte'>More</li>
                <li>Design</li>
                <li>Mentorship</li>
                <li>Investment</li>
                <li>Support us</li>
                
            </ul>
        </div>
    </div>  
    
      </div>
  )

}








