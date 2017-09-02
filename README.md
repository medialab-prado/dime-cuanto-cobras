# Dime cuánto cobras y te diré dónde vivir

##### Proyecto para el V taller de periodismo de datos "La España vacía" del Medialab Prado

## Índice

* [Entradilla](#entradilla)
* [Introducción](#introducción)
* [Fuentes de datos](#fuentes-de-datos)
  * [Precio del alquiler](#precio-del-alquiler)
  * [Salario medio](#salario-medio)
* [Propuesta de producto final](#propuesta-de-producto-final)
  * [Mapa interactivo](#mapa-interactivo)
  * [Gráficos](#gráficos)
* [Pistas de conclusión](#pistas-de-conclusión)
* [Expertos](#expertos)
* [Referencias](#referencias)
* [Equipo](#equipo)

## Entradilla

El precio del alquiler en Madrid y Barcelona ha crecido en el último año a un ritmo mucho mayor que los salarios, de forma que encontrar vivienda se ha convertido en un arduo desafío. Gentrificación, pisos turísticos, especulación. ¿Qué hay detrás de la subida de los precios?

## Introducción

Estos últimos tres años, el precio del alquiler ha subido de manera fulgurante en las grandes ciudades españolas. El año pasado, se observó en Madrid y Barcelona un aumento del precio alrededor de 10%, alcanzando una media histórica de 17,9€/m2 en la ciudad catalana y 14,2€/m2 en la capital española, según los datos de Idealista.

<a href="https://public.tableau.com/views/PreciosdealquilerenEspaa/Dashboard1?:embed=y&:display_count=yes" target="_blank"><img width="965" alt="evolucion precio alquiler" src="https://user-images.githubusercontent.com/22743273/27278493-db39e568-54e1-11e7-8109-4529060fabfe.png"></a>
Fuente de datos: [Informes de precios de Idealista](https://www.idealista.com/informes-precio-vivienda)

Se puede ver [el gráfico interactivo en Tableau Public](https://public.tableau.com/views/PreciosdealquilerenEspaa/Dashboard1?:embed=y&:display_count=yes)

## Fuentes de datos

### Precio del alquiler

Nuestra fuente de datos principal será Idealista. Tenemos datos trimestrales de los precios de alquiler en euros por metro cuadrado en toda España [aquí](datasets/evolucion-precios-alquiler-toda-espana.xlsx) y un detalle de los barrios centricos de Madrid [aquí](http://cloud.tercerob.com/public.php?service=files&t=c58035dcbc7ff3034e67988c51305bd5). Van desglosados por rango de superficies y precios, tambien el numero de anuncios para ver la fiabilidad.

### Salario medio

La [encuesta de estructura salarial](http://www.ine.es/prensa/np977.pdf) del INE ofrece datos del salario medio, mediano y modal por comunidad autónoma, sexo, sector y ocupación. Lamentablemente, la última encuesta data de 2014 (se hace cada 4 años). Los datos se pueden buscar a través de [esta herramienta](http://www.ine.es/jaxi/Tabla.htm?path=/t22/p133/a2014/l0/&file=07001.px&L=0).

"El salario bruto anual medio no es una buena medida resumen del salario anual que plasme las diferencias entre distintos colectivos y actividades, ya que una característica de las funciones de distribución salarial es que figuran muchos más trabajadores en los valores bajos que en los salarios más elevados. Esto da lugar a que el salario medio sea superior tanto al salario mediano como al salario más frecuente (modal). **Hay pocos trabajadores con salarios muy altos pero influyen notablemente en el salario medio.** " *INE*

Efectivamente, el salario medio español en 2014 se sitúa en **22.858,17€** mientras que el salario más habitual es solamente de **16.490,8€** anuales. Se puede observar que el salario modal (más frecuente) no ha subido casi desde 2009.

<a href="https://public.tableau.com/views/SalariosEspaa/Dashboard1?:embed=y&:display_count=yes" target="_blank"><img width="965" alt="salario modal anual" src="https://user-images.githubusercontent.com/22743273/27278571-0a3af7c6-54e2-11e7-910e-67853fd61cc2.png"></a>

Fuente de datos: [Salario anual medio, mediano, modal, a tiempo completo y a tiempo parcial, por periodo (INE)](http://www.ine.es/jaxiT3/Tabla.htm?t=10882&L=0)

Hay que tomar en cuenta que las comunidades autónomas de Madrid y Barcelona presentan unas ganancias medias anuales superiores a la media nacional (Madrid en segunda posición después del País Vasco y Barcelona en cuarta posición después de Navarra).

<a href="http://www.ine.es/jaxi/Datos.htm?path=/t22/p133/a2014/l0/&file=07001.px" target="_blank"><img width="965" alt="mapa salario medio" src="https://cloud.githubusercontent.com/assets/22743273/24798394/0045b3bc-1b96-11e7-8443-2b17458fc4fc.png"></a>

## Propuesta de producto final

Para más facilidad, la estructura del artículo se está realizando [aquí](https://docs.google.com/document/d/1yB8g9sqOvWyTZV378DynSljo_v_2K6dbymr_HGnI4I4/edit?usp=sharing)

### Mapa interactivo

Haremos varias preguntas al usuario y el mapa se pintará dependiendo de sus respuestas:
1. Elige la ciudad
2. ¿Quieres vivir solo o compartir?
3. ¿Cuánto cobráis juntos?
3. Que tamaño de piso quieres?
4. Observa la evolución por año

El usuario podrá ver el porcentaje del sueldo de la unidad familiar que tendrá que gastar en alquiler en cada barrio (ex: 45% en Malasaña, 25% en Villaverde, etc.) Después, podrá observar la evolución de precios en el mapa cambiando la fecha de búsqueda.

### Gráficos

#### Porcentaje medio del salario dedicado al alquiler en Madrid y Barcelona y su evolución en el tiempo (area chart)
Para esto, se necesita tener los datos salariales por distrito y aún no lo tenemos.

#### Evolución de los precios de alquiler comparada con la evolución del salario medio (lines)
Podemos usar datos nacionales o por comunidad (tenemos los dos), porque al final, lo interesante en este gráfico es ver que los precios de alquiler han crecido más y mucho más rápido que los salarios.

#### Gasto “ideal” de un salario (entre alquiler, comida, ocio…), etc. (stacked bar)
Haremos una barra que separa en sueldo en varios gastos "ideales" (ex: 30% en alquiler, 15% en alimentación, 10% en ocio, etc.). Dependiendo del alquiler que habrá elegido (ex:45%) irá cambiando la barra, disminuyendo el porcentaje dedicado a la comida, los ahorros, etc. Es una muy buena manera de poner en imágen lo que influye el precio del alquiler en la vida cotidiana.

Tipo de gasto | Porcentaje | Salario de 1400€ |Frecuencia
--- | --- | --- | ---
Alquiler | 30% | 420€ | Fijo
Gastos del hogar | 6% | 84€ | Fijo
Alimentación | 15% | 210€ | Variable
Transporte | 10% | 140€ | Variable
Ropa y calzado | 5% | 70€ | Variable
Salud | 3% | 42€ | Variable
Ocio | 5% | 70€ | Supérfluo
Vacaciones | 8% | 112€ | Supérfluo
Alcohol y tabaco | 3% | 42€ | Supérfluo
Ahorros | 15% | 210€| Supérfluo

["¿Cómo gastan el dinero los españoles?" El País](http://economia.elpais.com/economia/2016/06/20/actualidad/1466421723_914789.html)

#### Rango de gente más tocado por el precio alto de alquiler (por edad) (treemap)

#### Evolución del porcentaje de hogares por regimen de tenencia (propriedad, alquiler, alquiler bajo precio del mercado)
En 2015 en Barcelona, 20,9% de los hogares son alquileres y en Madrid 22,9%.
<a href="http://www.ine.es/jaxiT3/Tabla.htm?t=9997&L=0" target="_blank"> <img width="965" alt="hogar por regimen de tenencia" src="https://cloud.githubusercontent.com/assets/22743273/24807828/08325a7a-1bba-11e7-9a9a-978251ea0838.png"> </a>

Se puede ver aquí el número de hogares alquilados en las dos ciudades (en miles de viviendas):
<a href="http://www.ine.es/jaxi/Datos.htm?path=/t20/p274/serie/prov/p08/l0/&file=02005.px" target="_blank"> <img width="360" alt="número de hogares en alquiler" src="https://cloud.githubusercontent.com/assets/22743273/24827402/21bdc396-1c49-11e7-8f07-4dd260569b92.png"> </a>

#### Porcentaje de inquilinos que comparten piso y evolución del número de pisos compartidos, así como la evolución de la edad de los que comparten pisos
[Artículo del Confidencial con respeto a este tema](http://www.elconfidencial.com/vivienda/2016-08-18/habitaciones-pisos-compartidos-alquiler-vivienda-madrid-barcelona_1248223/)

#### Número de pisos ofrecidos por sitios web de alquiler (Fotocasa + Idealista) comparado con el número de pisos ofrecidos por Airbnb en el tiempo


##### Gasto medio en alquiler por persona en Madrid y Barcelona

Los últimos datos del INE (2015) muestran que el gasto medio de un inquilino es de **535€** en la Comunidad de Madrid y **534€** en Cataluña.
<a href="http://www.ine.es/jaxiT3/Tabla.htm?t=9997&L=0" target="_blank"> <img width="965" alt="gasto medio por persona" src="https://cloud.githubusercontent.com/assets/22743273/24807776/da8a396c-1bb9-11e7-8a77-b1e4f89c9c62.png"> </a>

## Pistas de conclusión

### Crecimiento de la demanda
  * Aumento de la población en grandes ciudades (donde se encuentra trabajo)
  * Reducción de compra de piso para primera vivienda (por razones económicas y por cambio de mentalidad)
### Precarización de las condiciones laborales de la población joven
### Proliferación de los pisos turísticos (Airbnb)
Algunos consideran que la presencia de pisos turísticos es la razón principal de la subida de precios en Madrid y Barcelona, otros dicen que no está relacionado. Vamos a definir los argumentos de los dos lados:
- **Airbnb tiene la culpa**
  - la subida de precios coincide con el éxito del fenomeno Airbnb
  - algunos dueños alquilan con Airbnb porque es más rentable = menos viviendas para alquilar al año
  - los precios de Airbnb hacen subir todos los precios de vivienda (hasta la compra-venta)
  - el objetivo de los alquileres en los barrios céntricos ya no es el público joven y recién independizado sino los turistas
  - hay agencias y empresas que se dedican a adquirir edificios de viviendas en alquiler para desalojar a los inquilinos residentes y poner los pisos en webs de vivienda turistica (Airbnb, HomeAway, Wimdu...)
  - lleva un efecto de gentrificación: nueva gente llega a un barrio y cambia sus costumbres, hace subir los precios, etc.
  
- **Airbnb no tiene la culpa**
  - algunos de los barrios que muestran una subida fuerte de precios no son nada turísticos
  - son mercados diferentes, el dinamismo del mercado de alquiler no se ha ralentizado con la llegada de Airbnb

##### Una cosa interesante que he notado es que varios artículos ponen en sus títulos que la subida de los alquileres se debe a los pisos turísticos pero en el artículo mismo, no relacionan los dos fenómenos y no explican cómo los pisos turísticos han podido afectar al mercado del alquiler
- [La presión turística dispara el precio del alquiler en Barcelona hasta el máximo histórico](http://www.eldiario.es/catalunya/barcelona/turistica-dispara-alquiler-Barcelona-historico_0_543846331.html)
- [El efecto Airbnb en los precios del alquiler en Madrid y Barcelona](https://www.gurusblog.com/archives/efecto-airbnb-los-precios-del-alquiler-madrid-barcelona/27/03/2017/)


### Compra de viviendas para alquilar como negocio de inversión lucrativo

## Expertos

## Referencias

- [**"Unaffordable country"**](https://www.theguardian.com/society/ng-interactive/2015/sep/02/unaffordable-country-where-can-you-afford-to-buy-a-house) </br>
Mapa interactivo del Reino Unido por The Guardian: precios de venta por provincia dependiendo del sueldo anual.

- [**"Where can I affor to live?"**](http://www.bbc.com/news/business-23234033) </br>
Mapa interactivo del Reino Unido y los precios de alquiler por provincia.

- [**"Tube map of affordability"**](http://england.shelter.org.uk/support_us/campaigns/tube_map_affordability) </br>
Metro de Londres donde han borrado las estaciones en las zonas que ya no son accesibles al inquilino medio.

- [**"Radiografía de Airbnb"**](http://datos.elespanol.com/proyectos/airbnb/) </br>
Análisis de todos los anuncios de Airbnb que desvela el negocio de algunas agencias que aprovechan el vacío legal para arrendar. El 91% de los pisos en Madrid y el 64% en Barcelona están fuera de la ley.

- [**"El alquiler enloquece y supera las cotas precrisis"**](http://www.elconfidencial.com/vivienda/2017-02-06/alquiler-enloquece-maximos-historicos-precios-inflacion-vallecas_1326376/) </br>
Muy buen artículo que resume nuestro tema en cuanto a precio de alquiler, hablando de la subida de precios con gráficos y explicando las razones de esta subida con entrevistas de expertos.

- [**"Precios medios de alquiler en los distritos de Madrid"**](http://public.tableau.com/views/Idealista-PreciosAlquilerenDistritosdeMadrid/Idealista-PreciosMediosdelAlquilerenlosDistritosdeMadrid?:embed=y&:showVizHome=no&:display_count=y&:display_static_image=y&:bootstrapWhenNotified=true) </br>
Gráficos interactivos hechos por Idealista con Tableau Public.

- [**"Salario mínimo para vivir dignamente"**](http://www.publico.es/public/salari-minim-per-viure-dignament.html) </br>
Artículo propuesto por uno de los mentores para cambiar el enfoque de la investigación en el caso de que no encontremos datos salariales.

- [**"Pagas la renta justa por el piso adecuado?"**](http://www.elconfidencial.com/vivienda/2016-05-07/vives-en-un-piso-caro-o-barato_1193950/) </br>
Visualización interactiva MUY buena para saber si tu alquiler es alto o bajo en función de la calle donde vives.

- [**"Madrileño, dime tu parada de metro más cercana y te diré el precio del alquiler"**](http://www.elconfidencial.com/vivienda/2016-08-16/precio-alquiler-vivienda-madrid-por-linea-parada-metro_1246170/) </br>
El alquiler de las viviendas en función de las paradas de metro en Madrid.

- [**"Gasto medio por persona en la Comunidad de Madrid - INE"**](http://www.ine.es/infografias/gastosepf/desktop/gastos.html?t=1&lang=es)

## Equipo

- [Alberto Miedes](http://amiedes.com) - desarrollador
- [Ana Torres](https://tresletras.wordpress.com/) - periodista
- [Flora Fosset](http://fosset.co) - periodista y visualización
- [Miguel Tinte](https://twitter.com/matinteg/) - programador
- [María Luisa Ocaña](https://www.linkedin.com/in/maria-luisa-oca%C3%B1a-6a9103a/) - periodista
