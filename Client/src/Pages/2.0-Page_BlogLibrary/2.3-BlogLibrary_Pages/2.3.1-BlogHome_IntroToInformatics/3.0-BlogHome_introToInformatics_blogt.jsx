
//SASS
import '../../../../Sass/Pages/2.0-SASS_BlogLibrary_Pages/2.2SASS_BlogHome_introToInformatics/1.0-SASS_BlogHome_introToInformatics_blog.scss';

export const BlogHome_introToInformatics_blog = (  ) => {
 

    return(

        <div className="wrapper_introToInformatics_blog">
            
            <section className="BOX_CONTAINER  introToInformatics_box-one" >
 
                <p>

                    La informática es la ciencia que se ocupa del estudio y aplicación del uso de computadoras y otros 
                    dispositivos electrónicos para gestionar y procesar información y datos. Su propósito fundamental es 
                    automatizar tareas, facilitar la toma de decisiones y resolver problemas, mejorando así la eficiencia 
                    en diversos ámbitos. Esta disciplina abarca múltiples áreas, incluyendo programación (el arte de crear
                    software), redes (la interconexión de computadoras), bases de datos (el almacenamiento y gestión de
                    datos), inteligencia artificial (la creación de programas capaces de emular la inteligencia humana) 
                    y muchas otras.


                </p>

                {/* ABOUT SOFTWARE AND DEVELOPMENT */}
                <section className='BLOCK_CONTAINER introToInformatics_block-one' >

                    <div className='FRAME_CONTAINER_ONE introToInformatics_software-development-programming_INFO' >

                        <h2> ALGUNAS AREAS DE MAS INFLUENCIA QUE ABARCA LA INFORMATICA: </h2>

                        <h3> Programación y Desarrollo de Software </h3>

                        <p>
                            La programación es el proceso de escribir instrucciones que las computadoras pueden seguir para
                            realizar tareas específicas. Existen diversos lenguajes de programación que permiten a los
                            desarrolladores escribir software:

                            <ul className="programming_softwareDevelopment_list" >

                                <li>
                                    <b> Lenguajes de Programación: </b>  Herramientas para escribir software, como Java, Python y C++. 
                                    Cada lenguaje tiene sus propias características y usos. Por ejemplo, Python es conocido 
                                    por su simplicidad y versatilidad, mientras que Java es apreciado por su portabilidad y
                                    robustez.
                                </li>

                                <li>
                                    <b>  Desarrollo de Aplicaciones: </b> Se refiere a la creación de aplicaciones móviles, de 
                                    escritorio y web. Esto implica diseñar la interfaz de usuario, <u> desarrollar la lógica 
                                    del negocio  </u>  y asegurarse de que la aplicación funcione correctamente en diferentes 
                                    dispositivos.
                                </li>

                                <li>
                                    <b> Metodologías de Desarrollo:  </b>   Enfoques para organizar y gestionar el desarrollo de software,
                                    como Scrum y Agile. Estas metodologías ayudan a los equipos a trabajar de manera más 
                                    eficiente y a responder rápidamente a los cambios.
                                </li>
                            </ul>

                        </p>

                    </div>

                    <figure className='FRAME_CONTAINER_TWO introToInformatics_software-development-programming_IMAGES'>
                        <img className='image_one software_one' src="" alt="" />
                        <img  className='image_two software_two' src="" alt="" />
                    </figure>

                    

                </section>
                
                {/* NETWORKS AND COMMUNICATIONS */}
               <section className='BLOCK_CONTAINER introToInformatics_block-two'>

                    <div className='FRAME_CONTAINER_ONE introToInformatics_network-comunications_INFO'>
                        
                        <h3> Redes y Comunicaciones </h3>

                        <p>
                            Las redes de computadoras permiten la interconexión de dispositivos para compartir recursos e 
                            información:
                        </p>

                        <ul>
                            <li>
                                <b> Redes de Computadoras: </b>  Conectan dispositivos como computadoras, impresoras y otros periféricos
                                para que puedan comunicarse entre sí. Las redes pueden ser locales (LAN) o abarcar áreas más 
                                grandes (WAN).
                            </li>

                            <li>
                                <b> Internet y Protocolo TCP/IP:  </b>   El Internet es una red global de computadoras interconectadas, y 
                                el protocolo TCP/IP es el conjunto de reglas que permite la comunicación a través de esta red.
                            </li>

                            <li>
                                <b> Seguridad de Redes:  </b>  Se refiere a las medidas tomadas para proteger la información y prevenir 
                                accesos no autorizados. Esto incluye el uso de <u> firewalls  </u> , encriptación y otras tecnologías de
                                seguridad.
                            </li>
                        </ul>

                    </div>

                     <figure className='FRAME_CONTAINER_TWO introToInformatics_network-comunications_IMAGES'>
                        <img className='image_one redes_one' src="" alt="" />
                        <img  className='image_two' src="" alt="" />
                    </figure>

                </section>
                
                {/* ABOUT DATA BASE */}
                <section className='BLOCK_CONTAINER introToInformatics_block-three'>

                    <div  className='FRAME_CONTAINER_ONE introToInformatics_data-base_INFO'>

                         <h3>Bases de Datos</h3>

                        <p>
                            Las bases de datos son sistemas que permiten almacenar y gestionar grandes volúmenes de datos:
                        </p>

                        <ul>
                            
                            <li>
                                <b> Sistemas de Gestión de Bases de Datos </b> <u> (DBMS) </u> : Software que facilita la creación,
                                actualización y administración de bases de datos. Ejemplos incluyen MySQL, PostgreSQL y 
                                Oracle.
                            </li>

                            <li>
                                <b> Modelado de Datos:  </b>  El proceso de diseñar estructuras de datos para almacenamiento eficiente.
                                Esto incluye definir cómo se organizarán y accederán los datos.
                            </li>

                            <li>
                                <b> Big Data: </b>  Se refiere al manejo y análisis de grandes volúmenes de datos que no pueden ser 
                                gestionados con <u> métodos tradicionales </u> debido a su tamaño, velocidad y complejidad.
                            </li>

                        </ul>

                    </div>

                    <figure className='FRAME_CONTAINER_TWO introToInformatics_data-base_IMAGES'>
                        <img className='image_one database_one' src="" alt="" />
                        <img  className='image_two' src="" alt="" />
                    </figure>
                   

                </section>
                
                {/* ABOUT IA */}
                <section className='BLOCK_CONTAINER introToInformatics_block-four'>

                    <div className='FRAME_CONTAINER_ONE introToInformatics_ia-intelligence_INFO'>

                        <h3> Inteligencia Artificial (IA) y Aprendizaje Automático (Machine Learning) </h3>

                        <p>
                            La IA y el aprendizaje automático buscan emular la inteligencia humana y aprender de los datos:
                        </p>

                        <ul>

                            <li>
                                <b> Algoritmos de IA:  </b>  Técnicas que permiten a las máquinas realizar tareas que normalmente
                                requieren inteligencia humana, como reconocimiento de voz y toma de decisiones.
                            </li>

                            <li>
                                <b>  Redes Neuronales: </b> Modelos inspirados en el cerebro humano para el aprendizaje automático. 
                                Se utilizan en aplicaciones como el reconocimiento de imágenes y el procesamiento del lenguaje 
                                natural.
                            </li>

                            <li>
                                <b> Procesamiento de Lenguaje Natural (NLP): </b>  Permite la interacción entre computadoras y lenguaje 
                                humano, facilitando tareas como la traducción automática y los asistentes virtuales.
                            </li>
                        </ul>
                    
                    </div>
                    
                    <figure className='FRAME_CONTAINER_TWO introToInformatics_ia-intelligence_IMAGES'>
                        <img className='image_one ia_one' src="" alt="" />
                        <img  className='image_two' src="" alt="" />
                    </figure>
                    

                </section>

                
                {/* ABOUT DATA SCIENCE */}
               <section  className='BLOCK_CONTAINER introToInformatics_block-five'>

                    <div className='FRAME_CONTAINER_ONE introToInformatics_database_INFO'>

                         <h3> Ciencia de Datos </h3>

                        <p> La ciencia de datos implica la extracción de información útil a partir de datos: </p>

                        <ul>
                            <li>
                                <b> Análisis de Datos: </b>  El proceso de examinar, limpiar y modelar datos para obtener información
                                valiosa.
                            </li>

                            <li> 
                                <b> Visualización de Datos: </b>  La representación gráfica de datos para facilitar su interpretación y 
                                comprensión. Herramientas como gráficos y diagramas ayudan a visualizar patrones y tendencias. 
                            </li>
                            
                            <li>
                                <b> Minería de Datos:  </b>  La exploración de grandes conjuntos de datos para descubrir patrones
                                ocultos y relaciones significativas.
                            </li>


                        </ul>
                    
                    </div>

                   <figure className='FRAME_CONTAINER_TWO introToInformatics_data-science_IMAGES'>
                        <img className='image_one dataScience_one' src="" alt="" />
                        <img  className='image_two' src="" alt="" />
                    </figure>


               </section>
                    
                {/* ABOUT OPERATING SYSTEM */}
               <section  className='BLOCK_CONTAINER introToInformatics_block-six'>

                    <div className='FRAME_CONTAINER_ONE introToInformatics_operatingsystem_INFO'>
                         
                         <h3> Sistemas Operativos </h3>

                        <p> Los sistemas operativos gestionan el hardware y software de una computadora: </p>

                        <ul>
                            <li>
                                <b> Funciones de los Sistemas Operativos: </b>  Incluyen la gestión de recursos de hardware,
                                la ejecución de aplicaciones y la provisión de una interfaz de usuario.
                            </li>

                            <li>
                                <b> Tipos de Sistemas Operativos: </b>  Ejemplos incluyen Windows, macOS, Linux y Unix. Cada uno 
                                tiene sus propias características y usos en diferentes entornos.
                            </li>
                        </ul>
                    
                    </div>
                   
                    <figure className='FRAME_CONTAINER_TWO introToInformatics_operatingsystem_IMAGES'>
                        <img className='image_one op_one' src="" alt="" />
                        <img  className='image_two' src="" alt="" />
                    </figure>


               </section>

                
                {/* ABOUT INFORMATICS SECURE */}
               <section className='BLOCK_CONTAINER introToInformatics_block-seven'>

                    <div className='FRAME_CONTAINER_ONE introToInformatics_informatics-secure_INFO'>

                         <h3> Seguridad Informática </h3>

                        <p> La seguridad informática se centra en proteger los sistemas y datos contra amenazas: </p>

                        <ul>
                            <li>
                                <b> Ciberseguridad:  </b>  Protección contra  <u> ataques cibernéticos  </u>  que pueden comprometer la 
                                información y los sistemas.
                            </li>

                            <li>
                                <b> Criptografía: </b>  Técnicas para asegurar la información mediante el cifrado, asegurando que 
                                solo las personas autorizadas puedan acceder a los datos.

                            </li>

                            <li>
                                <b> Gestión de Riesgos: </b>  Evaluación y mitigación de riesgos relacionados con la seguridad de la
                                información. Esto incluye identificar posibles amenazas y tomar medidas para minimizarlas.
                            </li>


                        </ul>

                    </div>

                    <figure className='FRAME_CONTAINER_TWO introToInformatics_informatics-secure_IMAGES'>
                        <img className='image_one secure_one' src="" alt="" />
                        <img  className='image_two' src="" alt="" />
                    </figure>

                   

               </section>
                
               {/* ABOUT ROBOTICS */}
                <section className='BLOCK_CONTAINER introToInformatics_block-eight'>

                    <div className='FRAME_CONTAINER_ONE introToInformatics_robotics_INFO'>

                         <h3> Robótica </h3>

                        <p> La robótica implica la creación y control de máquinas que pueden realizar 
                            tareas específicas:
                        </p>

                        <ul>
                            <li>
                                <b> Diseño y Construcción de Robots: </b>  El proceso de crear robots que puedan llevar a cabo tareas
                                específicas, desde ensamblar productos hasta explorar planetas.
                            </li>

                            <li>
                                <b> Control y Automatización: </b>  El uso de algoritmos y sensores para permitir que los robots
                                funcionen de manera autónoma, ajustándose a su entorno y completando tareas sin intervención
                                humana.
                            </li>

                        </ul>
                    
                    </div>

                   
                    <figure className='FRAME_CONTAINER_TWO introToInformatics_robotics_IMAGES'>
                        <img className='image_one robotics_one' src="" alt="" />
                        <img  className='image_two' src="" alt="" />
                    </figure>


                </section>
                

                

            </section>

            
 
        </div>
        
    )


}