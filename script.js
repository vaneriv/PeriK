document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.element');
    const selectButton = document.getElementById('select-button');
    const uniteButton = document.getElementById('unite-button');
    const showPopupButton = document.createElement('button');
    showPopupButton.id = 'show-popup-button';
    showPopupButton.textContent = 'Mostrar Información';
    document.querySelector('.taskbar').appendChild(showPopupButton);

    let selectedElements = [];

    // Asegúrate de ocultar la ventana emergente y la superposición al cargar la página
    const popupOverlay = document.querySelector('.popup-overlay');
    const popup = document.querySelector('.popup');
    popup.style.display = 'none';
    popupOverlay.style.display = 'none';

    elements.forEach(element => {
        element.addEventListener('click', () => {
            if (selectedElements.length < 2 && !element.classList.contains('selected')) {
                element.classList.add('selected');
                selectedElements.push(element);
            }
        });

        const nameButton = element.querySelector('.label .name');
        nameButton.addEventListener('click', (event) => {
            event.stopPropagation();
            showPopup(element);
        });
    });

    selectButton.addEventListener('click', () => {
        selectedElements.forEach(element => element.classList.remove('selected'));
        selectedElements = [];
    });

    uniteButton.addEventListener('click', () => {
        if (selectedElements.length === 2) {
            const [element1, element2] = selectedElements;
            element1.classList.add('unite-animation');
            element2.classList.add('unite-animation');

            setTimeout(() => {
                element1.querySelector('.label').textContent += ' + ' + element2.querySelector('.label').textContent;
                element2.remove();
                element1.classList.remove('unite-animation');
                selectedElements = [];
            }, 500);
        }
    });

    showPopupButton.addEventListener('click', () => {
        if (selectedElements.length === 1) {
            showPopup(selectedElements[0]);
        } else {
            alert('Por favor, selecciona un único elemento para mostrar información.');
        }
    });

    popupOverlay.addEventListener('click', () => {
        popup.style.display = 'none';
        popupOverlay.style.display = 'none';
    });

    function showPopup(element) {
        const popupContent = document.getElementById('popup-content');
        const elementName = element.querySelector('.label .name').textContent;

        if (elementName === 'Hidrógeno') {
            popupContent.innerHTML = `
                <h2>HIDRÓGENO</h2>
                <p><strong>¿QUÉ ES EL HIDRÓGENO?</strong></p>
                <p>El hidrógeno es el primer elemento de la tabla periódica. Es el elemento químico más ligero que existe, su átomo está formado por un protón y un electrón y es estable en forma de molécula diatómica (H2). En condiciones normales se encuentra en estado gaseoso, y es insípido, incoloro e inodoro. En la Tierra es muy abundante, constituye aproximadamente el 75 % de la materia del Universo, pero se encuentra combinado con otros elementos como el oxígeno formando moléculas de agua, o al carbono, formando compuestos orgánicos. Por tanto, no es un combustible que pueda tomarse directamente de la naturaleza, sino que es un vector energético (como la electricidad) y por ello se tiene que “fabricar.”</p>
                <p><strong>¿CÓMO SE PRODUCE EL HIDRÓGENO?</strong></p>
                <p>Existen distintos métodos de producción de hidrógeno. Se puede producir a partir de distintas materias primas, distintas fuentes de energía y por distintos procedimientos. Según sean la materia prima y la fuente energética utilizada para producirlo se podrá hablar de procesos 100% renovables, 100% fósiles o híbridos en un determinado porcentaje. El hidrógeno puede ser producido localmente, en grandes instalaciones centrales o en pequeñas unidades distribuidas ubicadas en o cerca del punto de uso. Esto significa que todas las zonas, incluso áreas remotas, puedan convertirse en productores de energía. Cuando el hidrógeno es producido usando fuentes de energía renovables y se aprovecha para la alimentación eléctrica de las pilas de combustible de alta eficiencia, los beneficios medioambientales del hidrógeno son aún mayores. Además, el hidrógeno puede ser producido y almacenado utilizando los excedentes de energía producida por las energías renovables, como la solar, la eólica, la hidráulica, …. Un kilogramo de hidrógeno puede liberar más energía que un kilogramo de cualquier otro combustible (casi el triple que la gasolina o el gas natural), y para liberar esa energía no emite nada de dióxido de carbono, tan sólo vapor de agua, por lo que el impacto ambiental es nulo.</p>
                <p><strong>¿CÓMO SE ALMACENA EL HIDRÓGENO?</strong></p>
                <p>Una de las aplicaciones más importantes del hidrógeno es su uso como almacenamiento de energía, éste es un punto clave para su introducción en el mercado y uno de los principales valor y ventaja que tiene como vector energético. El hidrógeno se caracteriza por tener una alta densidad energética por unidad de masa pero su mayor problema es que ocupa mucho volumen.</p>
                <p><strong>¿QUÉ APLICACIONES TIENE EL HIDRÓGENO?</strong></p>
                <p>El hidrógeno se ha utilizado con seguridad durante muchas décadas en una amplia gama de aplicaciones, incluyendo las industrias de la alimentación, metal, vidrio y química. La industria mundial del hidrógeno está bien establecida y produce más de 50 millones de toneladas de hidrógeno al año. Con respecto a la energía, el hidrógeno puede ser utilizado como combustible para el transporte, y para generar electricidad mediante pilas de combustible. Un kilogramo de hidrógeno libera más energía que cualquier otro combustible (casi el triple de la gasolina o gas natural), y para liberar esa energía no emite dióxido de carbono, sólo vapor de agua, por lo que el impacto ambiental es nulo. Un vehículo de motor de combustión interna de hidrógeno (MCI) utiliza un motor de combustión interna convencional modificado para la combustión de hidrógeno gaseoso. Los vehículos de MCI de hidrógeno son un 30% más eficientes comparados con los vehículos de gasolina, y funcionan bien en todas las condiciones climáticas, incluso a bajas temperaturas.</p>
            `;
        } else if (elementName === 'Helio') {
            popupContent.innerHTML = `
                <h2>HELIO</h2>
                <p><strong>¿QUÉ ES EL HELIO?</strong></p>
                <p>El helio es un gas noble que pertenece a la tabla periódica con el símbolo He y el número atómico 2. Es el segundo elemento más ligero y abundante en el universo, después del hidrógeno. Aunque no es muy común en la atmósfera terrestre, es esencial para muchas aplicaciones tecnológicas y científicas.</p>
                <p><strong>PROPIEDADES DEL HELIO:</strong></p>
                <ul>
                    <li>Incoloro, inodoro e insípido: El helio no tiene color, sabor ni olor, lo que lo hace bastante inerte en términos de reacción con otros elementos.</li>
                    <li>No inflamable: A diferencia del hidrógeno, que es altamente inflamable, el helio no arde, lo que lo hace más seguro en ciertas aplicaciones, como en globos o dirigibles.</li>
                    <li>Bajo punto de ebullición: Tiene el punto de ebullición más bajo de todos los elementos, alrededor de -268.93 °C (4.2 K), lo que significa que se encuentra en estado gaseoso en la mayoría de las condiciones de temperatura y presión en la Tierra.</li>
                    <li>Gas noble: Esto significa que tiene una capa de electrones completa en su nivel más externo, lo que lo hace extremadamente estable y poco reactivo con otros elementos.</li>
                </ul>
                <p><strong>FUENTES DE HELIO:</strong></p>
                <p>El helio se obtiene principalmente de depósitos naturales de gas natural, en donde se encuentra en pequeñas concentraciones. El helio se libera durante la extracción de gas natural, especialmente en lugares como los Estados Unidos, Qatar y Rusia.</p>
                <p><strong>USOS DEL HELIO:</strong></p>
                <ul>
                    <li>Aplicaciones científicas y médicas: El helio se usa en criogenia, especialmente en la refrigeración de imanes superconductores en máquinas como los resonadores magnéticos (RMN) y los imanes de aceleradores de partículas. También se usa para mantener temperaturas extremadamente bajas en experimentos científicos.</li>
                    <li>Llenado de globos y dirigibles: Debido a que el helio no es inflamable, se utiliza para inflar globos y dirigibles en lugar de hidrógeno, que sí es inflamable.</li>
                    <li>Mezcla de gases para buceo: El helio se utiliza en la mezcla de gases para buzos en profundidades extremas, debido a que reduce los efectos de la narcósis por nitrógeno.</li>
                    <li>Industria espacial: El helio se usa como gas de presión en los sistemas de combustible de cohetes y para purgar sistemas de oxígeno.</li>
                </ul>
                <p><strong>POR QUÉ ES IMPORTANTE EL HELIO</strong></p>
                <p>Aunque es un elemento que abunda en el universo, en la Tierra es relativamente escaso. Su utilización en tecnologías avanzadas, como la investigación espacial y médica, hace que sea un recurso valioso y que se deba cuidar, ya que las reservas de helio en la Tierra están en disminución.</p>
            `;
        } else if (elementName === 'Litio') {
            popupContent.innerHTML = `
                <h2>Litio</h2>
                <p><strong>¿QUÉ ES EL LITIO?</strong></p>
                <p>El litio es un elemento químico con el símbolo Li y el número atómico 3. Es el metal más ligero y pertenece al grupo de los metales alcalinos. Es un metal blando, plateado y altamente reactivo, sobre todo con el agua y el aire. En la naturaleza, no se encuentra libre debido a su reactividad, sino en compuestos como la espodumena y la salmuera.</p>
                <p><strong>¿CÓMO SE PRODUCE?</strong></p>
                <p>El litio se obtiene principalmente de dos formas:</p>
                <ol>
                    <li>De minerales sólidos (como la espodumena y lepidolita):
                        <ul>
                            <li>Extracción: Los minerales se extraen de minas a cielo abierto o subterráneas.</li>
                            <li>Procesamiento: Los minerales se trituran y se someten a procesos químicos para extraer el litio.</li>
                        </ul>
                    </li>
                    <li>De salmueras (como las encontradas en salares):
                        <ul>
                            <li>Evaporación: Las salmueras se bombean a estanques de evaporación donde el agua se evapora, dejando atrás sales concentradas de litio.</li>
                            <li>Purificación: Las sales se procesan para obtener litio de alta pureza.</li>
                        </ul>
                    </li>
                </ol>
                <p><strong>¿PARA QUÉ SE UTILIZA?</strong></p>
                <p>El litio tiene una amplia gama de aplicaciones, incluyendo:</p>
                <ul>
                    <li>Baterías: Es un componente clave en las baterías recargables de iones de litio utilizadas en dispositivos electrónicos, vehículos eléctricos y almacenamiento de energía.</li>
                    <li>Industria del vidrio y la cerámica: Se utiliza para mejorar la resistencia y durabilidad del vidrio y la cerámica.</li>
                    <li>Medicina: Se usa en el tratamiento de trastornos bipolares y otras condiciones psiquiátricas.</li>
                </ul>
            `;
        } else if (elementName === 'Berilio') {
            popupContent.innerHTML = `
                <h2>BERILIO</h2>
                <p><strong>¿QUÉ ES EL BERILIO?</strong></p>
                <p>El berilio es un elemento químico con número atómico 4 y símbolo Be. Es un metal alcalinotérreo de color gris plateado, ligero, muy duro y quebradizo. Tiene una densidad baja, un alto punto de fusión y es tóxico si se inhala. Es conocido por ser muy ligero pero resistente, y se encuentra en la naturaleza principalmente en minerales como la berilina y la crisoberila.</p>
                <p><strong>¿CÓMO SE PRODUCE?</strong></p>
                <p>El berilio no se encuentra en estado puro en la naturaleza, sino en minerales. Para obtenerlo:</p>
                <ol>
                    <li>Extracción: Se extrae principalmente de un mineral llamado berilo (Be₃ Al₂ (Si₆ O₁₈).</li>
                    <li>Purificación: El mineral se tritura y se trata con productos químicos como ácido sulfúrico o fluoruro de hidrógeno.</li>
                    <li>Electrólisis o reducción química: Luego se obtiene el berilio metálico a través de procesos como la reducción del fluoruro de berilio con magnesio o mediante electrólisis.</li>
                </ol>
                <p><strong>¿CÓMO SE ALMACENA?</strong></p>
                <p>Debido a su toxicidad (puede causar una enfermedad llamada beriliosis si se inhalan sus partículas), el berilio debe almacenarse con medidas de seguridad estrictas:</p>
                <ul>
                    <li>En contenedores cerrados herméticamente, resistentes a la corrosión.</li>
                    <li>En áreas ventiladas, evitando el contacto con ácidos.</li>
                    <li>Usando protección personal (guantes, mascarillas) al manipularlo. Además, se almacena lejos de fuentes de calor o materiales con los que pueda reaccionar.</li>
                </ul>
                <p><strong>¿QUÉ APLICACIONES TIENE?</strong></p>
                <p>El berilio tiene usos muy especializados debido a sus propiedades únicas:</p>
                <ul>
                    <li>Aeroespacial y defensa: En componentes de satélites, misiles y aviones por su ligereza y resistencia.</li>
                    <li>Reactores nucleares: Actúa como moderador de neutrones.</li>
                    <li>Industria electrónica: Aleado con cobre (aleación cobre-berilio) para fabricar herramientas, resortes y contactos eléctricos de alta conductividad.</li>
                    <li>Radiografía médica y equipos científicos: En ventanas de rayos X por su transparencia a radiación.</li>
                    <li>Joyería: Algunos minerales que contienen berilio, como el esmeralda, se usan como gemas.</li>
                </ul>
            `;
        } else if (elementName === 'Boro') {
            popupContent.innerHTML = `
                <h2>BORO</h2>
                <p><strong>¿QUÉ ES EL BORO?</strong></p>
                <p>El boro es un elemento químico con número atómico 5 y símbolo B. Es un metaloide, es decir, tiene propiedades intermedias entre metales y no metales. En su forma pura es un sólido oscuro, quebradizo y duro. No se encuentra libre en la naturaleza, pero sí en compuestos como boratos y ácido bórico. Es esencial en pequeñas cantidades para plantas y tiene múltiples usos industriales.</p>
                <p><strong>¿CÓMO SE PRODUCE?</strong></p>
                <p>El boro se obtiene a partir de minerales como:</p>
                <ul>
                    <li>Bórax (Na₂ B₄O₇ · 10H₂O)</li>
                    <li>Kernita (Na₂ B₄O₇ · 4H₂O)</li>
                </ul>
                <p>Proceso de producción:</p>
                <ol>
                    <li>Extracción del mineral y purificación.</li>
                    <li>Conversión a trióxido de boro (B₂O₃).</li>
                    <li>Reducción química con magnesio o aluminio para obtener boro elemental. También puede obtenerse mediante procesos más avanzados para obtener boro ultrapuro para la industria electrónica.</li>
                </ol>
                <p><strong>¿CÓMO SE ALMACENA?</strong></p>
                <p>El boro se almacena de manera sencilla, ya que no es tan reactivo ni volátil:</p>
                <ul>
                    <li>En recipientes herméticos y secos, ya que puede absorber humedad.</li>
                    <li>Lejos de ácidos fuertes, que pueden reaccionar con él.</li>
                    <li>En forma sólida, no es tóxico, pero se recomienda evitar la inhalación de polvo.</li>
                </ul>
                <p><strong>¿QUÉ APLICACIONES TIENE?</strong></p>
                <p>El boro tiene aplicaciones muy variadas por sus propiedades únicas:</p>
                <ul>
                    <li>Vidrios y cerámicas: Se usa en la fabricación de vidrio resistente al calor (vidrio de borosilicato, como el Pyrex).</li>
                    <li>Detergentes y productos de limpieza: El bórax es un componente común.</li>
                    <li>Agricultura: Fertilizantes con boro, ya que es nutriente esencial para plantas.</li>
                    <li>Medicina: Antisépticos y en tratamientos para infecciones oculares (ácido bórico).</li>
                    <li>Industria nuclear: El boro absorbe neutrones, usado como controlador en reactores nucleares.</li>
                    <li>Electrónica: Como dopante en semiconductores (especialmente silicio).</li>
                    <li>Materiales resistentes: En fibra de boro para materiales compuestos de alta resistencia (industria aeroespacial y deportiva).</li>
                </ul>
            `;
        } else if (elementName === 'Carbono') {
            popupContent.innerHTML = `
                <h2>CARBONO</h2>
                <p><strong>¿QUÉ ES EL CARBONO?</strong></p>
                <p>El carbono es un elemento químico con número atómico 6 y símbolo C. Es un no metal esencial para la vida, ya que es la base de todas las moléculas orgánicas. En la naturaleza se encuentra en varias formas (alótropos), como:</p>
                <ul>
                    <li>Grafito (suave y conductor)</li>
                    <li>Diamante (duro y aislante)</li>
                    <li>Fullerenos y grafeno (estructuras recientes y muy avanzadas)</li>
                </ul>
                <p>También forma parte de compuestos como dióxido de carbono (CO₂) y carbonatos. Es uno de los elementos más abundantes del universo y fundamental para la química orgánica.</p>
                <p><strong>¿CÓMO SE PRODUCE?</strong></p>
                <p>El carbono se puede obtener de varias formas:</p>
                <ol>
                    <li>Naturalmente: Se encuentra en minas de carbón, depósitos de grafito, y como componente del petróleo y gas natural.</li>
                    <li>Industrialmente:
                        <ul>
                            <li>Carbón vegetal: Se produce calentando madera sin oxígeno (pirólisis).</li>
                            <li>Grafito sintético: Mediante el calentamiento de coque (residuo del petróleo) a altas temperaturas.</li>
                            <li>Diamante sintético: Alta presión y temperatura sobre grafito o mediante métodos químicos (CVD).</li>
                        </ul>
                    </li>
                </ol>
                <p><strong>¿CÓMO SE ALMACENA?</strong></p>
                <p>El carbono es bastante estable y seguro de almacenar:</p>
                <ul>
                    <li>En ambientes secos, especialmente si está en polvo fino.</li>
                    <li>Lejos de fuentes de ignición, ya que algunas formas pueden arder (como el carbón).</li>
                    <li>En recipientes cerrados si está en forma de polvo o en productos químicos (ej: disuelto).</li>
                </ul>
                <p><strong>¿QUÉ APLICACIONES TIENE?</strong></p>
                <p>El carbono tiene muchísimas aplicaciones en distintas formas:</p>
                <ul>
                    <li>Combustibles: Carbón, petróleo y gas natural (compuestos de carbono) son fuentes de energía.</li>
                    <li>Materiales:
                        <ul>
                            <li>Grafito: Lápices, lubricantes, electrodos.</li>
                            <li>Diamante: Joyería y herramientas de corte.</li>
                            <li>Fibra de carbono: Material ligero y resistente (usado en autos, aviones, deportes).</li>
                        </ul>
                    </li>
                    <li>Electrónica:
                        <ul>
                            <li>Grafeno: Material conductor ultra delgado (en desarrollo).</li>
                            <li>Electrodos en baterías y supercondensadores.</li>
                        </ul>
                    </li>
                    <li>Industria química: Base de plásticos, medicamentos, colorantes, etc.</li>
                    <li>Biología y medicina: El carbono es parte del ADN, proteínas, azúcares y más. Sin carbono, no hay vida.</li>
                </ul>
            `;
        } else if (elementName === 'Nitrógeno') {
            popupContent.innerHTML = `
                <h2>NITRÓGENO</h2>
                <p><strong>Datos Generales:</strong></p>
                <ul>
                    <li>Nombre del elemento: Nitrógeno</li>
                    <li>Símbolo químico: N</li>
                    <li>Número atómico: 7</li>
                    <li>Masa atómica: 14.01 u</li>
                    <li>Grupo en la tabla periódica: 15 (grupo del nitrógeno)</li>
                    <li>Período: 2</li>
                    <li>Estado de la materia a temperatura ambiente: Gas</li>
                    <li>Color: Incoloro</li>
                    <li>Olor: Inodoro</li>
                </ul>
                <p><strong>Historia del Nitrógeno:</strong></p>
                <p>El nitrógeno fue descubierto por Daniel Rutherford en 1772. Él lo llamó "aire nocivo" porque notó que no era respirable. El nombre "nitrógeno" viene del griego "nitron" (nitrato) y "genes" (formador), porque se encuentra en compuestos como el nitrato.</p>
                <p><strong>Abundancia:</strong></p>
                <ul>
                    <li>En la atmósfera: Forma el 78% del aire que respiramos.</li>
                    <li>En la corteza terrestre: Está presente en minerales y compuestos.</li>
                    <li>En los seres vivos: Es fundamental para formar proteínas y ADN.</li>
                </ul>
                <p><strong>Propiedades Físicas y Químicas:</strong></p>
                <ul>
                    <li>Punto de fusión: -210 °C</li>
                    <li>Punto de ebullición: -196 °C</li>
                    <li>Es un gas inerte a temperatura ambiente (no reacciona fácilmente).</li>
                    <li>Se encuentra en la naturaleza como molécula diatómica (N₂).</li>
                </ul>
                <p><strong>Usos del Nitrógeno:</strong></p>
                <ul>
                    <li><strong>Industrial:</strong>
                        <ul>
                            <li>Se usa en la fabricación de fertilizantes (como el amoníaco, NH₃).</li>
                            <li>Importante en la industria de explosivos (nitroglicerina, TNT).</li>
                            <li>Se emplea en la producción de acero inoxidable.</li>
                        </ul>
                    </li>
                    <li><strong>Médico y alimenticio:</strong>
                        <ul>
                            <li>Nitrógeno líquido se usa para conservar alimentos y en criocirugía.</li>
                            <li>Se emplea en atmósferas controladas para almacenar alimentos o medicinas.</li>
                        </ul>
                    </li>
                    <li><strong>Tecnología:</strong>
                        <ul>
                            <li>Se usa en semiconductores y en la fabricación de componentes electrónicos.</li>
                        </ul>
                    </li>
                </ul>
                <p><strong>Importancia Biológica:</strong></p>
                <ul>
                    <li>Es parte esencial de aminoácidos, que forman las proteínas.</li>
                    <li>Está en los ácidos nucleicos (ADN y ARN), que contienen la información genética.</li>
                    <li>Las plantas obtienen nitrógeno del suelo mediante el ciclo del nitrógeno, con ayuda de bacterias.</li>
                </ul>
                <p><strong>Ciclo del Nitrógeno:</strong></p>
                <p>El nitrógeno pasa del aire al suelo y de ahí a los seres vivos. Bacterias fijadoras lo transforman en compuestos útiles para las plantas. Luego, vuelve al aire a través de otros procesos bacterianos.</p>
                <p><strong>Curiosidades:</strong></p>
                <ul>
                    <li>Aunque respiramos nitrógeno, no lo usamos directamente; nuestro cuerpo lo obtiene de los alimentos.</li>
                    <li>El nitrógeno líquido se ve como una niebla blanca y se usa en efectos especiales en películas.</li>
                </ul>
            `;
        } else if (elementName === 'Oxígeno') {
            popupContent.innerHTML = `
                <h2>OXÍGENO</h2>
                <p><strong>Datos Generales:</strong></p>
                <ul>
                    <li>Nombre del elemento: Oxígeno</li>
                    <li>Símbolo químico: O</li>
                    <li>Número atómico: 8</li>
                    <li>Masa atómica: 16.00 u</li>
                    <li>Grupo en la tabla periódica: 16 (grupo del oxígeno o anfígenos)</li>
                    <li>Período: 2</li>
                    <li>Estado a temperatura ambiente: Gas</li>
                    <li>Color: Incoloro</li>
                    <li>Olor: Inodoro</li>
                </ul>
                <p><strong>Historia del Oxígeno:</strong></p>
                <ul>
                    <li>Descubierto por Joseph Priestley en 1774, aunque también se le atribuye a Carl Wilhelm Scheele, quien lo descubrió independientemente alrededor del mismo tiempo.</li>
                    <li>El nombre "oxígeno" proviene del griego "oxys" (ácido) y "genes" (formador), porque se pensaba que formaba todos los ácidos (aunque no es del todo cierto).</li>
                </ul>
                <p><strong>Abundancia:</strong></p>
                <ul>
                    <li>Es el elemento más abundante en la corteza terrestre (~46% en peso).</li>
                    <li>Forma el 21% del aire atmosférico.</li>
                    <li>Presente en el agua (H₂O), minerales, y en los seres vivos.</li>
                    <li>Es el elemento más abundante en el cuerpo humano.</li>
                </ul>
                <p><strong>Propiedades Físicas y Químicas:</strong></p>
                <ul>
                    <li>Punto de fusión: -218 °C</li>
                    <li>Punto de ebullición: -183 °C</li>
                    <li>Se encuentra como molécula diatómica (O₂).</li>
                            <li>Se usa en terapia respiratoria y en hospitales.</li>
                            <li>Es esencial para respiradores artificiales y tanques de oxígeno.</li>
                        </ul>
                    </li>
                    <li><strong>Aeronáutica y submarinos:</strong>
                        <ul>
                            <li>Oxígeno puro es vital para astronautas y buceadores.</li>
                        </ul>
                    </li>
                    <li><strong>Tratamiento de aguas:</strong>
                        <ul>
                            <li>Utilizado en plantas de tratamiento para purificar agua.</li>
                        </ul>
                    </li>
                </ul>
                <p><strong>Importancia Biológica:</strong></p>
                <ul>
                    <li>Es esencial para la respiración celular: las células lo usan para obtener energía de los alimentos.</li>
                    <li>Las plantas producen oxígeno durante la fotosíntesis.</li>
                    <li>Es parte de moléculas vitales como agua (H₂O) y compuestos orgánicos.</li>
                </ul>
                <p><strong>Ciclo del Oxígeno:</strong></p>
                <p>Se mantiene en equilibrio a través de la respiración (que lo consume) y la fotosíntesis (que lo produce). Este ciclo conecta a plantas, animales y el ambiente.</p>
                <p><strong>Curiosidades:</strong></p>
                <ul>
                    <li>El oxígeno líquido es de color azul pálido y se usa como combustible en cohetes.</li>
                    <li>El ozono (O₃), una forma del oxígeno, forma una capa que protege a la Tierra de los rayos ultravioleta.</li>
                    <li>Es tan importante que sin oxígeno, la mayoría de los seres vivos no podrían sobrevivir más de unos minutos.</li>
                </ul>
            `;
        } else if (elementName === 'Flúor') {
            popupContent.innerHTML = `
                <h2>FLÚOR</h2>
                <p><strong>¿QUÉ ES EL FLÚOR?</strong></p>
                <p>El flúor es un elemento químico de símbolo F y número atómico 9. Es un gas a temperatura ambiente, de color amarillo pálido, y tiene un olor muy penetrante e irritante. Pertenece al grupo de los halógenos (grupo 17 de la tabla periódica) y es el elemento más reactivo de todos. Tiene una alta capacidad para formar compuestos, sobre todo con metales y con hidrógeno (como el ácido fluorhídrico).</p>
                <p><strong>¿CÓMO SE PRODUCE?</strong></p>
                <p>El flúor no se encuentra libre en la naturaleza debido a su alta reactividad. Siempre está combinado en minerales como:</p>
                <ul>
                    <li>Fluorita (CaF₂)</li>
                    <li>Criolita (Na₃AlF₆)</li>
                </ul>
                <p>Para obtener flúor puro, se realiza un proceso llamado electrólisis del fluoruro de hidrógeno (HF) mezclado con sales de potasio (KF), a alta temperatura. En este proceso se separa el flúor gaseoso del hidrógeno.</p>
                <p><strong>¿CÓMO SE ALMACENA?</strong></p>
                <p>El flúor es muy peligroso, por lo que requiere medidas de seguridad extremas.</p>
                <ul>
                    <li>Se almacena en tanques especiales de acero o recipientes de aleaciones resistentes a la corrosión.</li>
                    <li>Generalmente se mantiene a presión controlada, y a veces se enfría para que esté en forma líquida.</li>
                    <li>Siempre se maneja en sistemas cerrados y seguros, con protección contra fugas.</li>
                </ul>
                <p><strong>¿QUÉ APLICACIONES TIENE?</strong></p>
                <p>El flúor tiene muchas aplicaciones importantes, a pesar de ser tóxico:</p>
                <ul>
                    <li><strong>Dentales:</strong>
                        <ul>
                            <li>En forma de fluoruros (como el fluoruro de sodio) se usa en pastas dentales y en el agua potable para prevenir caries.</li>
                        </ul>
                    </li>
                    <li><strong>Industria química:</strong>
                        <ul>
                            <li>Se usa para fabricar Teflón (un material antiadherente).</li>
                            <li>Produce freones (antiguos gases refrigerantes, ya menos usados).</li>
                            <li>Se emplea para fabricar ácido fluorhídrico (HF), muy usado en metalurgia y limpieza de vidrios.</li>
                        </ul>
                    </li>
                    <li><strong>Energía nuclear:</strong>
                        <ul>
                            <li>Se utiliza en la preparación de hexafluoruro de uranio (UF₆), que sirve para enriquecer el uranio en plantas nucleares.</li>
                        </ul>
                    </li>
                    <li><strong>Medicamentos:</strong>
                        <ul>
                            <li>Algunos fármacos incluyen flúor en su estructura para mejorar su efectividad (ej: ciertos antibióticos y antidepresivos).</li>
                        </ul>
                    </li>
                </ul>
                <p><strong>Curiosidades:</strong></p>
                <ul>
                    <li>El flúor fue el último de los halógenos en ser aislado debido a su peligrosidad.</li>
                    <li>Su descubrimiento fue tan complicado que se le llamó "el infierno de los químicos".</li>
                    <li>A pesar de ser tóxico en exceso, en pequeñas cantidades protege los dientes.</li>
                </ul>
            `;
        } else if (elementName === 'Neón') {
            popupContent.innerHTML = `
                <h2>NEÓN</h2>
                <p><strong>Datos Generales:</strong></p>
                <ul>
                    <li>Símbolo químico: Ne</li>
                    <li>Número atómico: 10</li>
                    <li>Masa atómica: 20.18 u</li>
                    <li>Grupo: 18 (Gases nobles)</li>
                    <li>Periodo: 2</li>
                    <li>Estado físico a temperatura ambiente: Gas</li>
                    <li>Color: Incoloro</li>
                    <li>Densidad: 0.9002 g/L a 0 °C y 1 atm</li>
                    <li>Punto de fusión: -248.6 °C</li>
                    <li>Punto de ebullición: -246.1 °C</li>
                </ul>
                <p><strong>Descubrimiento:</strong></p>
                <ul>
                    <li>Descubridores: Sir William Ramsay y Morris Travers</li>
                    <li>Año: 1898</li>
                    <li>Lugar: Inglaterra</li>
                    <li>El neón fue descubierto al estudiar el aire líquido, separando sus componentes. Tras eliminar oxígeno y nitrógeno, encontraron un gas nuevo: el Neón.</li>
                </ul>
                <p><strong>Propiedades Físicas y Químicas:</strong></p>
                <ul>
                    <li>Es un gas inerte, lo que significa que no reacciona fácilmente con otras sustancias.</li>
                    <li>No tiene olor ni color.</li>
                    <li>Brilla con un color rojo-anaranjado cuando se le aplica electricidad.</li>
                    <li>Es muy estable químicamente debido a que su capa de electrones está completa.</li>
                    <li>No forma compuestos en condiciones normales.</li>
                </ul>
                <p><strong>Usos del Neón:</strong></p>
                <ul>
                    <li>Letreros luminosos ("luces de neón"): Aunque se llama así, otros gases también se usan; el neón da color rojo brillante.</li>
                    <li>Lámparas fluorescentes y tubos de descarga.</li>
                    <li>En láseres de helio-neón.</li>
                    <li>En refrigeración (como refrigerante en sistemas criogénicos).</li>
                    <li>Usado en indicadores de alto voltaje y equipos electrónicos.</li>
                </ul>
                <p><strong>Abundancia y Obtención:</strong></p>
                <ul>
                    <li>Se encuentra en pequeñas cantidades en la atmósfera terrestre (aproximadamente 0.0018%).</li>
                    <li>Se obtiene mediante la destilación fraccionada del aire líquido, separando el neón de otros gases.</li>
                </ul>
                <p><strong>Curiosidades:</strong></p>
                <ul>
                    <li>Su nombre viene del griego "neos", que significa nuevo.</li>
                    <li>Es más liviano que el aire.</li>
                    <li>Aunque es muy escaso en la Tierra, es muy abundante en el universo, especialmente en las estrellas.</li>
                </ul>
            `;
        } else if (elementName === 'Sodio') {
            popupContent.innerHTML = `
                <h2>SODIO</h2>
                <p><strong>¿QUÉ ES?</strong></p>
                <p>El sodio es un elemento químico metálico de símbolo Na (del latín Natrium) y número atómico 11.</p>
                <p>Es un metal alcalino (grupo 1 de la tabla periódica), de color plateado y muy blando (puede cortarse con un cuchillo).</p>
                <p>Es muy reactivo, sobre todo con el agua, y por eso no se encuentra libre en la naturaleza, sino formando compuestos como la sal común (cloruro de sodio, NaCl).</p>
                <p>Es esencial para la vida, ya que ayuda a regular funciones vitales como el equilibrio de líquidos en el cuerpo.</p>
                <p><strong>¿CÓMO SE PRODUCE?</strong></p>
                <p>El sodio no se encuentra puro en la naturaleza. Se produce industrialmente mediante un proceso llamado electrólisis del cloruro de sodio fundido (sal común):</p>
                <ul>
                    <li>Se funde sal a alta temperatura (más de 800 °C).</li>
                    <li>Luego se aplica una corriente eléctrica que separa el sodio (Na) del cloro (Cl₂).</li>
                    <li>El sodio se recoge como un líquido metálico.</li>
                </ul>
                <p>Este proceso se realiza en instalaciones especiales porque el sodio es muy reactivo y peligroso si no se maneja correctamente.</p>
                <p><strong>¿CÓMO SE ALMACENA?</strong></p>
                <p>El sodio reacciona violentamente con el agua y la humedad del aire, produciendo hidróxido de sodio (NaOH) y gas hidrógeno (H₂), que puede explotar.</p>
                <p>Por eso, se almacena:</p>
                <ul>
                    <li>Sumergido en aceite mineral o en queroseno para evitar el contacto con el aire y la humedad.</li>
                    <li>En recipientes herméticos y en lugares frescos y bien ventilados.</li>
                </ul>
                <p><strong>¿QUÉ APLICACIONES TIENE?</strong></p>
                <p>El sodio tiene muchas aplicaciones importantes:</p>
                <ul>
                    <li><strong>Industria química:</strong>
                        <ul>
                            <li>Producción de hidróxido de sodio (sosa cáustica).</li>
                            <li>Fabricación de compuestos orgánicos y colorantes.</li>
                        </ul>
                    </li>
                    <li><strong>Metalurgia:</strong>
                        <ul>
                            <li>Se usa para reducir metales como el titanio y el zirconio.</li>
                        </ul>
                    </li>
                    <li><strong>Iluminación:</strong>
                        <ul>
                            <li>En lámparas de vapor de sodio (luz amarilla), comunes en alumbrado público.</li>
                        </ul>
                    </li>
                    <li><strong>Refrigerantes:</strong>
                        <ul>
                            <li>En algunos reactores nucleares, se usa sodio líquido como refrigerante.</li>
                        </ul>
                    </li>
                    <li><strong>Medicina:</strong>
                        <ul>
                            <li>Sales de sodio (como el bicarbonato de sodio) se usan para problemas digestivos.</li>
                        </ul>
                    </li>
                    <li><strong>Alimentos:</strong>
                        <ul>
                            <li>El sodio, en forma de sal de mesa (NaCl), es esencial en la dieta humana, pero debe consumirse con moderación.</li>
                        </ul>
                    </li>
                </ul>
            `;
        } else if (elementName === 'Magnesio') {
            popupContent.innerHTML = `
                <h2>MAGNESIO</h2>
                <p><strong>Datos Generales:</strong></p>
                <ul>
                    <li>Símbolo químico: Mg</li>
                    <li>Número atómico: 12</li>
                    <li>Masa atómica: 24.305 u</li>
                    <li>Grupo: 2 (Metales alcalinotérreos)</li>
                    <li>Periodo: 3</li>
                    <li>Estado físico a temperatura ambiente: Sólido</li>
                    <li>Color: Blanco plateado</li>
                    <li>Densidad: 1.738 g/cm³</li>
                    <li>Punto de fusión: 650 °C</li>
                    <li>Punto de ebullición: 1,090 °C</li>
                </ul>
                <p><strong>Descubrimiento:</strong></p>
                <ul>
                    <li>Descubridor: Sir Humphry Davy</li>
                    <li>Año de descubrimiento: 1808</li>
                    <li>Método: Davy descubrió el magnesio mediante electrólisis de una mezcla de magnesio y mercurio.</li>
                </ul>
                <p><strong>Propiedades Físicas y Químicas:</strong></p>
                <ul>
                    <li>Aspecto físico: Metal ligero de color blanco plateado, relativamente blando y con bajo peso.</li>
                    <li>Reactividad: Forma óxido de magnesio (MgO) al reaccionar con oxígeno, y reacciona lentamente con agua.</li>
                    <li>Ecuación de reacción con agua: Mg(s) + 2H₂O(l) → Mg(OH)₂(aq) + H₂(g)</li>
                    <li>Comportamiento en la combustión: Produce una luz blanca intensa al quemarse.</li>
                    <li>Solubilidad: Insoluble en agua, pero soluble en ácidos.</li>
                </ul>
                <p><strong>Abundancia y Distribución en la Tierra:</strong></p>
                <ul>
                    <li>Es el octavo elemento más abundante en la corteza terrestre (~2% de su peso).</li>
                    <li>Se encuentra en minerales como magnesita, dolomita y en agua de mar.</li>
                </ul>
                <p><strong>Métodos de Obtención:</strong></p>
                <ul>
                    <li>Electrólisis de sales fundidas: MgCl₂(l) → Mg(l) + Cl₂(g)</li>
                    <li>Reducción de óxidos de magnesio con metales más reactivos.</li>
                </ul>
                <p><strong>Usos del Magnesio:</strong></p>
                <ul>
                    <li>Industria de aleaciones metálicas: Fabricación de componentes ligeros para aviones y coches de carreras.</li>
                    <li>Producción de compuestos químicos: MgO como material refractario y antiácido.</li>
                    <li>Industria de la energía: Uso en baterías y celdas solares.</li>
                    <li>Fuegos artificiales y bengalas: Luz blanca intensa.</li>
                    <li>Medicina: Tratamiento de deficiencias de magnesio y antiácidos.</li>
                    <li>Agricultura: Fertilizantes para corregir deficiencias de magnesio en suelos.</li>
                </ul>
                <p><strong>Papel Biológico del Magnesio:</strong></p>
                <ul>
                    <li>Reacciones enzimáticas: Participa en más de 300 reacciones enzimáticas.</li>
                    <li>Salud ósea: Ayuda en la formación de huesos y absorción de calcio.</li>
                    <li>Equilibrio de electrolitos: Contribuye al funcionamiento adecuado de músculos y corazón.</li>
                </ul>
                <p><strong>Curiosidades:</strong></p>
                <ul>
                    <li>Es abundante en el universo y juega un papel importante en las reacciones nucleares de las estrellas.</li>
                    <li>La luz blanca intensa del magnesio se usó en fotografía e iluminación nocturna en el pasado.</li>
                </ul>
            `;
        } else if (elementName === 'Aluminio') {
            popupContent.innerHTML = `
                <h2>ALUMINIO</h2>
                <p><strong>Identificación del Elemento:</strong></p>
                <ul>
                    <li>Nombre: Aluminio</li>
                    <li>Símbolo químico: Al</li>
                    <li>Número atómico: 13</li>
                    <li>Masa atómica: 26.98 u</li>
                    <li>Configuración electrónica: 1s² 2s² 2p⁶ 3s² 3p¹</li>
                    <li>Grupo: 13 (IIIA)</li>
                    <li>Periodo: 3</li>
                    <li>Bloque: p</li>
                    <li>Valencia más común: +3</li>
                </ul>
                <p><strong>Propiedades Físicas:</strong></p>
                <ul>
                    <li>Estado físico a temperatura ambiente: Sólido</li>
                    <li>Color: Plateado, blanco brillante</li>
                    <li>Densidad: 2.70 g/cm³</li>
                    <li>Punto de fusión: 660.3 °C</li>
                    <li>Punto de ebullición: 2,470 °C</li>
                    <li>Dureza: Suave (2-2.9 en la escala de Mohs)</li>
                    <li>Maleabilidad: Muy alta</li>
                    <li>Ductilidad: Alta</li>
                    <li>Conductividad eléctrica: Buena</li>
                    <li>Conductividad térmica: Alta</li>
                </ul>
                <p><strong>Propiedades Químicas:</strong></p>
                <ul>
                    <li>Forma una capa de óxido de aluminio (Al₂O₃) que lo protege contra la corrosión.</li>
                    <li>Es anfótero: reacciona con ácidos y bases.</li>
                    <li>Reacciona lentamente con agua caliente, pero no con agua fría.</li>
                    <li>Resiste la oxidación en aire seco.</li>
                </ul>
                <p><strong>Abundancia y Obtención:</strong></p>
                <ul>
                    <li>Es el tercer elemento más abundante en la corteza terrestre (~8% en peso).</li>
                    <li>No se encuentra puro en la naturaleza, sino en minerales como la bauxita.</li>
                    <li>Proceso de obtención:
                        <ul>
                            <li>Bayer: extracción de alúmina (Al₂O₃) de la bauxita.</li>
                            <li>Hall-Héroult: electrólisis de la alúmina fundida para obtener aluminio puro.</li>
                        </ul>
                    </li>
                </ul>
                <p><strong>Usos del Aluminio:</strong></p>
                <ul>
                    <li>Transporte: aviones, trenes, autos, bicicletas.</li>
                    <li>Construcción: marcos de ventanas, puertas, techos.</li>
                    <li>Envases: latas de bebidas, papel aluminio.</li>
                    <li>Electricidad: cables eléctricos.</li>
                    <li>Tecnología: carcasas de computadoras, celulares.</li>
                    <li>Utensilios domésticos: ollas, sartenes.</li>
                    <li>Industria aeroespacial y militar.</li>
                    <li>Medicina: envases de medicamentos, prótesis.</li>
                </ul>
                <p><strong>Historia del Aluminio:</strong></p>
                <ul>
                    <li>Descubierto por Hans Christian Ørsted en 1825.</li>
                    <li>Era más caro que el oro en el siglo XIX.</li>
                    <li>El proceso Hall-Héroult (1886) permitió su producción a gran escala.</li>
                </ul>
                <p><strong>Reciclaje e Impacto Ambiental:</strong></p>
                <ul>
                    <li>100% reciclable sin perder calidad.</li>
                    <li>Reciclar consume 95% menos energía que producirlo desde la bauxita.</li>
                    <li>Reduce la contaminación y la explotación minera.</li>
                </ul>
                <p><strong>Curiosidades:</strong></p>
                <ul>
                    <li>El papel aluminio tiene menos de 0.02 mm de espesor.</li>
                    <li>La Torre Eiffel tiene partes de aluminio.</li>
                    <li>Se usa en cohetes espaciales por su resistencia y ligereza.</li>
                </ul>
            `;
        } else if (elementName === 'Silicio') {
            popupContent.innerHTML = `
                <h2>SILICIO</h2>
                <p><strong>Datos Generales:</strong></p>
                <ul>
                    <li>Nombre: Silicio</li>
                    <li>Símbolo químico: Si</li>
                    <li>Número atómico: 14</li>
                    <li>Masa atómica: 28.09 u</li>
                    <li>Configuración electrónica: 1s² 2s² 2p⁶ 3s² 3p²</li>
                    <li>Grupo: 14 (IVA)</li>
                    <li>Periodo: 3</li>
                    <li>Bloque: p</li>
                    <li>Tipo de elemento: Metaloide</li>
                </ul>
                <p><strong>Propiedades Físicas:</strong></p>
                <ul>
                    <li>Estado físico: Sólido</li>
                    <li>Color: Gris oscuro con brillo metálico</li>
                    <li>Densidad: 2.33 g/cm³</li>
                    <li>Punto de fusión: 1,410 °C</li>
                    <li>Punto de ebullición: 2,355 °C</li>
                    <li>Dureza: 6.5–7 en la escala de Mohs</li>
                    <li>Fragilidad: Quebradizo</li>
                    <li>Conductividad eléctrica: Semiconductor</li>
                </ul>
                <p><strong>Propiedades Químicas:</strong></p>
                <ul>
                    <li>Reactividad: Poco reactivo a temperatura ambiente</li>
                    <li>Oxidación: Forma óxido de silicio (SiO₂)</li>
                    <li>Resistente a ácidos, excepto al ácido fluorhídrico (HF)</li>
                    <li>Forma silicatos al combinarse con oxígeno y otros elementos</li>
                </ul>
                <p><strong>Abundancia en la Naturaleza:</strong></p>
                <ul>
                    <li>Segundo elemento más abundante en la corteza terrestre (27.7%)</li>
                    <li>Presente en sílice (SiO₂) y silicatos</li>
                </ul>
                <p><strong>Obtención del Silicio:</strong></p>
                <ul>
                    <li>Se obtiene a partir de la sílice mediante calentamiento con carbono en hornos eléctricos</li>
                    <li>Se purifica para obtener silicio de grado electrónico</li>
                </ul>
                <p><strong>Usos del Silicio:</strong></p>
                <ul>
                    <li><strong>Tecnología:</strong> Chips, microprocesadores, celdas solares</li>
                    <li><strong>Construcción:</strong> Vidrio, cemento, cerámica</li>
                    <li><strong>Metalurgia:</strong> Aleaciones como ferrosilicio</li>
                    <li><strong>Medicina:</strong> Implantes, lentes de contacto, prótesis</li>
                </ul>
                <p><strong>Historia del Silicio:</strong></p>
                <ul>
                    <li>Descubierto en 1824 por Jöns Jakob Berzelius</li>
                    <li>Base de la revolución tecnológica con la creación del transistor en 1947</li>
                </ul>
                <p><strong>Impacto Ambiental y Reciclaje:</strong></p>
                <ul>
                    <li>No tóxico, pero la extracción de arena puede causar daño ambiental</li>
                    <li>Productos electrónicos con silicio pueden reciclarse parcialmente</li>
                </ul>
                <p><strong>Curiosidades:</strong></p>
                <ul>
                    <li>El cuarzo es una forma cristalina del dióxido de silicio</li>
                    <li>Es esencial para la industria informática</li>
                </ul>
            `;
        } else if (elementName === 'Fósforo') {
            popupContent.innerHTML = `
                <h2>FÓSFORO</h2>
                <p><strong>1. Datos Generales</strong></p>
                <ul>
                    <li>Nombre: Fósforo</li>
                    <li>Símbolo químico: P</li>
                    <li>Número atómico: 15</li>
                    <li>Masa atómica: 30.97 u</li>
                    <li>Configuración electrónica: 1s² 2s² 2p⁶ 3s² 3p³</li>
                    <li>Ubicación en la tabla periódica:
                        <ul>
                            <li>Grupo: 15 (VA)</li>
                            <li>Periodo: 3</li>
                            <li>Bloque: p</li>
                        </ul>
                    </li>
                    <li>Valencias comunes: -3, +3, +5</li>
                    <li>Tipo de elemento: No metal</li>
                </ul>
                <p><strong>2. Propiedades Físicas</strong></p>
                <ul>
                    <li>Estado físico: Sólido (a temperatura ambiente)</li>
                    <li>Color: Varía: blanco, rojo o negro (según su forma)</li>
                    <li>Densidad: 1.82 a 2.34 g/cm³ (según la forma)</li>
                    <li>Punto de fusión: 44 °C (blanco) – 590 °C (rojo)</li>
                    <li>Punto de ebullición: 280 °C (blanco) – 1,000 °C aprox. (rojo)</li>
                    <li>Olor: El fósforo blanco tiene olor fuerte y desagradable</li>
                    <li>Solubilidad: Insoluble en agua, soluble en disolventes orgánicos (fósforo blanco)</li>
                </ul>
                <p><strong>3. Formas del Fósforo (Alótropos)</strong></p>
                <ul>
                    <li><strong>Fósforo blanco:</strong> Muy reactivo, altamente inflamable, tóxico. Brilla en la oscuridad (fosforescencia) al exponerse al aire.</li>
                    <li><strong>Fósforo rojo:</strong> Más estable, menos tóxico. Usado en cerillos (fósforos), productos pirotécnicos.</li>
                    <li><strong>Fósforo negro:</strong> Forma más estable, parecida al grafito, poco reactiva.</li>
                </ul>
                <p><strong>4. Propiedades Químicas</strong></p>
                <ul>
                    <li>Reactividad: Muy reactivo, especialmente el fósforo blanco (se inflama al contacto con aire).</li>
                    <li>Combustión: Produce una llama blanca brillante y forma óxidos de fósforo (P₂O₅).</li>
                    <li>Reacciona con metales formando fosfuros.</li>
                    <li>Forma ácido fosfórico (H₃PO₄) al reaccionar con agua y oxígeno.</li>
                    <li>Forma sales llamadas fosfatos (presentes en fertilizantes y organismos vivos).</li>
                </ul>
                <p><strong>5. Abundancia y Obtención</strong></p>
                <ul>
                    <li>No se encuentra libre en la naturaleza.</li>
                    <li>Está presente en minerales como la apatita (fosfato de calcio).</li>
                    <li>También se encuentra en seres vivos: huesos, ADN, ARN, ATP.</li>
                    <li>Obtención industrial:
                        <ul>
                            <li>Se obtiene calentando fosfatos de calcio con carbono y sílice en hornos.</li>
                            <li>Se recoge el fósforo blanco como vapor, que luego se condensa.</li>
                        </ul>
                    </li>
                </ul>
                <p><strong>6. Usos del Fósforo</strong></p>
                <ul>
                    <li><strong>Agricultura:</strong> Fabricación de fertilizantes (fosfatos) para las plantas.</li>
                    <li><strong>Agricultura:</strong> Fabricación de fertilizantes (fosfatos) para las plantas.</li>
                    <li><strong>Cerillos / fósforos:</strong> Fósforo rojo en la cabeza del cerillo.</li>
                    <li><strong>Explosivos y pirotecnia:</strong> En bengalas, fuegos artificiales.</li>
                    <li><strong>Industria alimentaria:</strong> Como aditivo (ácido fosfórico) en bebidas como refrescos.</li>
                    <li><strong>Producción de acero:</strong> Ayuda a endurecer el acero en ciertas aplicaciones.</li>
                    <li><strong>Productos de limpieza:</strong> Fosfatos usados en detergentes (aunque ahora se restringen).</li>
                    <li><strong>Biología / medicina:</strong> Elemento esencial en el ADN, ARN y ATP de todos los seres vivos.</li>
                </ul>
                <p><strong>7. Importancia Biológica</strong></p>
                <ul>
                    <li>Es esencial para la vida:
                        <ul>
                            <li>Forma parte del ADN y ARN, las moléculas que contienen la información genética.</li>
                            <li>Presente en el ATP, la molécula que da energía a las células.</li>
                            <li>Necesario para huesos y dientes, como fosfato de calcio.</li>
                            <li>Involucrado en la regulación celular y energética.</li>
                        </ul>
                    </li>
                </ul>
                <p><strong>8. Historia del Descubrimiento</strong></p>
                <ul>
                    <li>Descubridor: Hennig Brand (1669), alquimista alemán.</li>
                    <li>Lo descubrió destilando orina mientras buscaba el “elixir de la vida”.</li>
                    <li>Fue el primer elemento químico descubierto en tiempos modernos.</li>
                    <li>Su nombre proviene del griego "phosphoros", que significa "portador de luz", por su capacidad de brillar en la oscuridad.</li>
                </ul>
                <p><strong>9. Peligros y Precauciones</strong></p>
                <ul>
                    <li><strong>Fósforo blanco:</strong> Tóxico, inflamable, peligroso al contacto con piel o aire. Se guarda bajo agua o aceite para evitar su ignición espontánea.</li>
                    <li><strong>Fósforo rojo:</strong> Menos tóxico y más seguro, pero debe manejarse con cuidado.</li>
                    <li><strong>Intoxicación por fósforo:</strong> Puede causar problemas digestivos, hepáticos y renales. Se debe evitar su ingestión o inhalación en cantidades altas.</li>
                </ul>
                <p><strong>10. Curiosidades</strong></p>
                <ul>
                    <li>Las cerillas (fósforos) deben su nombre al fósforo, que permite que se enciendan.</li>
                    <li>El fósforo blanco fue usado en bombas incendiarias durante guerras, por su alta inflamabilidad.</li>
                    <li>Algunos animales marinos y hongos bioluminiscentes usan compuestos de fósforo para brillar.</li>
                    <li>El ácido fosfórico está presente en muchos refrescos (como la Coca-Cola).</li>
                </ul>
                <p><strong>Resumen de Importancia</strong></p>
                <p>El fósforo es un elemento vital para la vida y para el desarrollo de la agricultura moderna, ya que permite la producción de fertilizantes que mejoran las cosechas. Además, su papel en la tecnología, medicina y biología lo convierte en uno de los elementos más importantes para los seres humanos.</p>
            `;
        } else if (elementName === 'Azufre') {
            popupContent.innerHTML = `
                <h2>AZUFRE</h2>
                <p><strong>1. Datos Generales</strong></p>
                <ul>
                    <li>Nombre: Azufre</li>
                    <li>Símbolo químico: S</li>
                    <li>Número atómico: 16</li>
                    <li>Masa atómica: 32.06 u</li>
                    <li>Configuración electrónica: 1s² 2s² 2p⁶ 3s² 3p⁴</li>
                    <li>Ubicación en la tabla periódica:
                        <ul>
                            <li>Grupo: 16 (VIA) – Grupo de los calcógenos</li>
                            <li>Periodo: 3</li>
                            <li>Bloque: p</li>
                        </ul>
                    </li>
                    <li>Valencias comunes: -2, +2, +4, +6</li>
                    <li>Tipo de elemento: No metal</li>
                </ul>
                <p><strong>2. Propiedades Físicas</strong></p>
                <ul>
                    <li>Estado físico: Sólido (a temperatura ambiente)</li>
                    <li>Color: Amarillo brillante</li>
                    <li>Olor: El azufre puro no tiene olor</li>
                    <li>Densidad: 2.07 g/cm³</li>
                    <li>Punto de fusión: 115 °C</li>
                    <li>Punto de ebullición: 444 °C</li>
                    <li>Solubilidad: Insoluble en agua, soluble en disolventes orgánicos como el benceno</li>
                    <li>Forma cristalina: Romboédrica (forma natural más común)</li>
                </ul>
                <p><strong>3. Propiedades Químicas</strong></p>
                <ul>
                    <li>Reactividad: Reacciona fácilmente con metales y oxígeno.</li>
                    <li>Combustión: Cuando se quema, produce dióxido de azufre (SO₂) con un olor fuerte y picante (a huevo podrido).</li>
                    <li>Oxidación: Puede formar óxidos como SO₂ y trióxido de azufre (SO₃).</li>
                    <li>Forma ácido sulfúrico (H₂SO₄), un ácido muy importante y corrosivo.</li>
                    <li>Reacciona con hidrógeno para formar sulfuro de hidrógeno (H₂S), gas tóxico y de olor desagradable.</li>
                    <li>Forma sales llamadas sulfitos, sulfatos y sulfuros, comunes en minerales y compuestos industriales.</li>
                </ul>
                <p><strong>4. Abundancia y Obtención</strong></p>
                <ul>
                    <li>Es un elemento abundante en la naturaleza:
                        <ul>
                            <li>En volcanes, manantiales, minas.</li>
                            <li>En forma de sulfuros metálicos (pirita, galena) y sulfatos (yeso).</li>
                            <li>También está presente en seres vivos (en proteínas).</li>
                        </ul>
                    </li>
                    <li>Obtención industrial:
                        <ul>
                            <li>Se extrae del gas natural y del petróleo, eliminando compuestos sulfurosos.</li>
                            <li>También por el proceso Frasch, extrayéndolo de depósitos subterráneos con vapor.</li>
                        </ul>
                    </li>
                </ul>
                <p><strong>5. Usos del Azufre</strong></p>
                <ul>
                    <li><strong>Industria química:</strong> Fabricación de ácido sulfúrico (H₂SO₄).</li>
                    <li><strong>Agricultura:</strong> En fertilizantes, fungicidas y pesticidas.</li>
                    <li><strong>Fabricación de papel:</strong> Blanqueado de papel con compuestos de azufre.</li>
                    <li><strong>Fuegos artificiales:</strong> Produce humo y efectos al quemarse.</li>
                    <li><strong>Caucho vulcanizado:</strong> Azufre se usa para hacer caucho más resistente.</li>
                    <li><strong>Medicina:</strong> Usado en cremas para la piel (acné, sarna), antibacteriano.</li>
                    <li><strong>Preservantes alimentarios:</strong> Sulfitos usados para conservar frutas secas y vino.</li>
                </ul>
                <p><strong>6. Importancia Biológica</strong></p>
                <ul>
                    <li>El azufre es esencial para la vida:
                        <ul>
                            <li>Presente en aminoácidos como cisteína y metionina.</li>
                            <li>Parte de vitaminas y enzimas que regulan procesos corporales.</li>
                            <li>Necesario para el crecimiento de plantas (nutriente esencial del suelo).</li>
                        </ul>
                    </li>
                </ul>
                <p><strong>7. Historia del Descubrimiento</strong></p>
                <ul>
                    <li>Conocido desde la antigüedad: usado por egipcios, griegos y romanos.</li>
                    <li>Se usaba en rituales religiosos, medicina, pólvora y desinfección.</li>
                    <li>Su nombre viene del latín “sulphur”.</li>
                    <li>En la Biblia se menciona como “azufre ardiente” en descripciones del infierno.</li>
                </ul>
                <p><strong>8. Impacto Ambiental</strong></p>
                <ul>
                    <li>Los compuestos de azufre, como SO₂, son contaminantes del aire.</li>
                    <li>Pueden causar lluvia ácida, dañando suelos, ríos y vegetación.</li>
                    <li>Se controla su emisión en fábricas y vehículos.</li>
                    <li>El ácido sulfúrico puede causar daños si se libera en el ambiente.</li>
                </ul>
                <p><strong>9. Curiosidades del Azufre</strong></p>
                <ul>
                    <li>El olor a huevo podrido proviene de gases sulfurosos como el H₂S.</li>
                    <li>En la medicina antigua se le llamaba “piedra del fuego” por su combustión.</li>
                    <li>Las fuentes termales con olor fuerte contienen compuestos sulfurosos.</li>
                    <li>En los volcanes activos, se pueden ver cristales de azufre alrededor de los cráteres.</li>
                </ul>
                <p><strong>10. Resumen de Importancia</strong></p>
                <p>El azufre es un elemento vital tanto para la industria como para la naturaleza. Permite la fabricación de productos esenciales como fertilizantes, medicamentos, ácido sulfúrico y caucho. Además, cumple funciones importantes en la salud de los seres vivos y en los procesos ecológicos del suelo.</p>
            `;
         } else if (elementName === 'Cloro') {
                popupContent.innerHTML = `
                    <h2>CLORO</h2>
                    <p><strong>1. Datos Generales</strong></p>
                    <ul>
                        <li>Nombre: Cloro</li>
                        <li>Símbolo químico: Cl</li>
                        <li>Número atómico: 17</li>
                        <li>Masa atómica: 35.45 u</li>
                        <li>Configuración electrónica: 1s² 2s² 2p⁶ 3s² 3p⁵</li>
                        <li>Ubicación en la tabla periódica:
                            <ul>
                                <li>Grupo: 17 (VIIA) – Halógenos</li>
                                <li>Periodo: 3</li>
                                <li>Bloque: p</li>
                            </ul>
                        </li>
                        <li>Valencias comunes: -1 (más frecuente), +1, +3, +5, +7</li>
                        <li>Tipo de elemento: No metal</li>
                    </ul>
                    <p><strong>2. Propiedades Físicas</strong></p>
                    <ul>
                        <li>Estado físico: Gas (a temperatura ambiente)</li>
                        <li>Color: Amarillo verdoso</li>
                        <li>Olor: Fuerte, picante e irritante</li>
                        <li>Densidad: 3.2 g/L (como gas)</li>
                        <li>Punto de fusión: -101 °C</li>
                        <li>Punto de ebullición: -34 °C</li>
                        <li>Solubilidad: Soluble en agua, forma ácido clorhídrico (HCl)</li>
                        <li>Estado natural: Siempre combinado, nunca libre</li>
                    </ul>
                    <p><strong>3. Propiedades Químicas</strong></p>
                    <ul>
                        <li>Altamente reactivo: uno de los elementos más reactivos.</li>
                        <li>Forma compuestos con casi todos los elementos.</li>
                        <li>Reacciona con metales para formar sales llamadas cloruros (ej. NaCl).</li>
                        <li>En agua forma ácido clorhídrico (HCl), un ácido fuerte.</li>
                        <li>Reacciona con compuestos orgánicos: se usa para hacer plásticos como el PVC.</li>
                        <li>Es un potente agente oxidante, capaz de destruir bacterias y microorganismos.</li>
                    </ul>
                    <p><strong>4. Abundancia y Obtención</strong></p>
                    <ul>
                        <li>No se encuentra libre en la naturaleza.</li>
                        <li>Presente en forma de cloruros en agua de mar y rocas (NaCl).</li>
                        <li>Obtención industrial:
                            <ul>
                                <li>Por electrólisis de salmuera (agua con sal - NaCl).</li>
                                <li>Se recoge, purifica y almacena con cuidado por su toxicidad.</li>
                            </ul>
                        </li>
                    </ul>
                    <p><strong>5. Usos del Cloro</strong></p>
                    <ul>
                        <li><strong>Desinfectante:</strong> En piscinas, agua potable, limpieza de superficies.</li>
                        <li><strong>Industria química:</strong> Fabricación de PVC, productos de limpieza, plaguicidas.</li>
                        <li><strong>Purificación de agua:</strong> Mata bacterias y virus en plantas de tratamiento de agua.</li>
                        <li><strong>Medicina:</strong> En la producción de medicamentos y antisépticos.</li>
                        <li><strong>Industria alimentaria:</strong> Desinfecta equipos, envases y algunos alimentos.</li>
                        <li><strong>Papel y textiles:</strong> Blanqueado con compuestos de cloro.</li>
                    </ul>
                    <p><strong>6. Importancia Biológica</strong></p>
                    <ul>
                        <li>Tóxico en altas concentraciones, pero pequeñas cantidades de iones cloruro (Cl⁻) son esenciales:</li>
                        <li>Ayudan a mantener el equilibrio de líquidos en el cuerpo humano.</li>
                        <li>Forman parte de los jugos gástricos (HCl) en el estómago, necesarios para la digestión.</li>
                    </ul>
                    <p><strong>7. Historia del Descubrimiento</strong></p>
                    <ul>
                        <li>Descubierto en 1774 por Carl Wilhelm Scheele.</li>
                        <li>En 1810, Humphry Davy demostró que era un elemento químico.</li>
                        <li>Su nombre viene del griego “chloros”, que significa “verde pálido”.</li>
                    </ul>
                    <p><strong>8. Seguridad y Peligros</strong></p>
                    <ul>
                        <li>El cloro en estado gaseoso es tóxico e irritante.</li>
                        <li>Puede causar problemas respiratorios, irritación en ojos y piel.</li>
                        <li>Exposición alta puede ser letal.</li>
                        <li>Se usó como arma química en la Primera Guerra Mundial.</li>
                        <li>Debe manipularse con extremo cuidado y almacenarse en cilindros especiales.</li>
                    </ul>
                    <p><strong>9. Impacto Ambiental</strong></p>
                    <ul>
                        <li>El uso excesivo de cloro puede afectar ríos y lagos.</li>
                        <li>Los CFCs (clorofluorocarbonos) dañan la capa de ozono.</li>
                        <li>Se buscan alternativas ecológicas para reducir su impacto.</li>
                    </ul>
                    <p><strong>10. Curiosidades</strong></p>
                    <ul>
                        <li>El cloruro de sodio (NaCl) es la sal de mesa.</li>
                        <li>El cloro es el ingrediente activo en lejía o lavandina.</li>
                        <li>Aunque es venenoso, salva vidas desinfectando el agua potable.</li>
                        <li>Se ha usado en películas para representar ambientes tóxicos.</li>
                    </ul>
                    <p><strong>Resumen de Importancia</strong></p>
                    <p>El cloro es clave para la salud pública gracias a su capacidad de desinfección. Es fundamental en la industria para fabricar materiales, productos de limpieza, medicinas y plásticos. A pesar de ser tóxico, usado con precaución, salva vidas.</p>
                `;
          } else if (elementName === 'Argón') {
                    popupContent.innerHTML = `
                        <h2>ARGÓN</h2>
                        <p><strong>1. Propiedades Físicas</strong></p>
                        <ul>
                            <li>Punto de fusión: -189.3°C</li>
                            <li>Punto de ebullición: -185.7°C</li>
                            <li>Densidad: 1.784 g/L (a 0°C y 1 atm)</li>
                            <li>Masa molar: 39.948 g/mol</li>
                            <li>Conductividad térmica: 0.017 W·m⁻¹·K⁻¹ (a 0°C)</li>
                        </ul>
                        <p><strong>2. Estructura Atómica</strong></p>
                        <ul>
                            <li>Configuración electrónica: [Ne] 3s² 3p⁶</li>
                            <li>Alta estabilidad debido a su capa externa completa.</li>
                            <li>Comparado con otros gases nobles, su tamaño atómico es relativamente grande.</li>
                        </ul>
                        <p><strong>3. Propiedades Químicas</strong></p>
                        <ul>
                            <li>Inerte químicamente.</li>
                            <li>En condiciones extremas puede formar compuestos como el fluoruro de argón (ArF), aunque son raros y poco estables.</li>
                        </ul>
                        <p><strong>4. Abundancia en la Tierra</strong></p>
                        <ul>
                            <li>Constituye el 0.93% del aire.</li>
                            <li>Se encuentra en pequeñas cantidades en el agua y minerales.</li>
                        </ul>
                        <p><strong>5. Historia y Descubrimiento</strong></p>
                        <ul>
                            <li>Descubierto en 1894 por William Ramsay y Morris Travers.</li>
                            <li>Su nombre proviene del griego “argos” (perezoso), debido a su inercia química.</li>
                        </ul>
                        <p><strong>6. Usos del Argón</strong></p>
                        <ul>
                            <li>Soldadura TIG.</li>
                            <li>Lámparas fluorescentes.</li>
                            <li>Criogenia.</li>
                            <li>Preservación de alimentos.</li>
                            <li>Investigación científica.</li>
                        </ul>
                        <p><strong>7. Impacto Ambiental</strong></p>
                        <ul>
                            <li>No es un gas de efecto invernadero.</li>
                            <li>Su manejo adecuado es importante debido a su costo de producción.</li>
                        </ul>
                    `;
                } else if (elementName === 'Potasio') {
                    popupContent.innerHTML = `
                        <h2>POTASIO</h2>
                        <p><strong>1. Propiedades Físicas</strong></p>
                        <ul>
                            <li>Punto de fusión: 63.5°C</li>
                            <li>Punto de ebullición: 759°C</li>
                            <li>Densidad: 0.862 g/cm³ (a 20°C)</li>
                            <li>Masa molar: 39.098 g/mol</li>
                            <li>Color: Plata metálica brillante</li>
                        </ul>
                        <p><strong>2. Estructura Atómica</strong></p>
                        <ul>
                            <li>Configuración electrónica: [Ar] 4s¹</li>
                            <li>Un electrón en su capa externa, altamente reactivo.</li>
                            <li>Tiende a formar un catión K⁺ perdiendo su electrón externo.</li>
                        </ul>
                        <p><strong>3. Propiedades Químicas</strong></p>
                        <ul>
                            <li>Reacciona violentamente con el agua, formando KOH e hidrógeno.</li>
                            <li>Altamente reactivo con halógenos para formar sales como KCl.</li>
                            <li>Debe almacenarse en aceite para evitar la reacción con el aire.</li>
                        </ul>
                        <p><strong>4. Abundancia en la Tierra</strong></p>
                        <ul>
                            <li>Es el quinto elemento más abundante en la corteza terrestre.</li>
                            <li>Se encuentra en minerales como la silvita (KCl) y langbeinita.</li>
                        </ul>
                        <p><strong>5. Historia y Descubrimiento</strong></p>
                        <ul>
                            <li>Descubierto por Humphry Davy en 1807 mediante electrólisis.</li>
                            <li>El nombre proviene de "potash" (ceniza de plantas).</li>
                        </ul>
                        <p><strong>6. Usos del Potasio</strong></p>
                        <ul>
                            <li>Fertilizantes (esencial para el crecimiento de las plantas).</li>
                            <li>Producción de jabones y detergentes (KOH, K₂CO₃).</li>
                            <li>Explorado para baterías de iones de potasio.</li>
                            <li>Regulador de la presión arterial y función nerviosa en humanos.</li>
                        </ul>
                        <p><strong>7. Impacto Ambiental</strong></p>
                        <ul>
                            <li>Importante para la agricultura, pero su exceso puede contaminar el agua.</li>
                            <li>Esencial en los ecosistemas por su papel en el ciclo de nutrientes.</li>
                        </ul>
                    `;
                } else if (elementName === 'Calcio') {
                    popupContent.innerHTML = `
                        <h2>CALCIO</h2>
                        <p><strong>1. Propiedades Físicas</strong></p>
                        <ul>
                            <li>Punto de fusión: 842°C</li>
                            <li>Punto de ebullición: 1484°C</li>
                            <li>Densidad: 1.54 g/cm³ (a 20°C)</li>
                            <li>Masa molar: 40.078 g/mol</li>
                            <li>Color: Blanco plateado</li>
                        </ul>
                        <p><strong>2. Estructura Atómica</strong></p>
                        <ul>
                            <li>Configuración electrónica: [Ar] 4s²</li>
                            <li>Forma un catión Ca²⁺ perdiendo dos electrones.</li>
                            <li>Menos reactivo que los metales alcalinos, pero aún reactivo.</li>
                        </ul>
                        <p><strong>3. Propiedades Químicas</strong></p>
                        <ul>
                            <li>Reacciona con agua formando hidróxido de calcio y liberando hidrógeno.</li>
                            <li>Forma compuestos como el carbonato de calcio (CaCO₃).</li>
                        </ul>
                        <p><strong>4. Abundancia en la Tierra</strong></p>
                        <ul>
                            <li>Quinto elemento más abundante en la corteza terrestre.</li>
                            <li>Presente en minerales como calcita, mármol y piedra caliza.</li>
                        </ul>
                        <p><strong>5. Usos del Calcio</strong></p>
                        <ul>
                            <li>Fabricación de cemento y cal.</li>
                            <li>Suplementos nutricionales.</li>
                            <li>Aleaciones metálicas y purificación del agua.</li>
                            <li>Fertilizantes y tratamiento de suelos.</li>
                        </ul>
                    `;

                  }  else if (elementName === 'Escandio') {
                        popupContent.innerHTML = `
                            <h2>ESCANDIO</h2>
                            <p><strong>1. Propiedades Generales</strong></p>
                            <ul>
                                <li>Símbolo químico: Sc</li>
                                <li>Número atómico: 21</li>
                                <li>Masa atómica: 44.955 u</li>
                                <li>Configuración electrónica: [Ar] 3d¹ 4s²</li>
                                <li>Grupo: 3</li>
                                <li>Período: 4</li>
                                <li>Bloque: d (es un metal de transición)</li>
                                <li>Estado físico: Sólido</li>
                                <li>Color: Blanco plateado</li>
                            </ul>
                            <p><strong>2. Características</strong></p>
                            <ul>
                                <li>El escandio es un metal ligero, de aspecto plateado, y relativamente suave.</li>
                                <li>Punto de fusión: 1,541°C</li>
                                <li>Punto de ebullición: 2,400°C</li>
                                <li>Es un metal reactivo que se oxida fácilmente al aire.</li>
                                <li>No es muy abundante en la corteza terrestre, pero se encuentra en minerales como la escandia y la thortveitita.</li>
                            </ul>
                            <p><strong>3. Usos</strong></p>
                            <ul>
                                <li>Fabricación de aleaciones para la industria aeroespacial.</li>
                                <li>Lámparas de halogenuros metálicos.</li>
                                <li>Mejora la resistencia y estabilidad de aleaciones con aluminio para la aviación y automoción.</li>
                            </ul>
                            <p><strong>4. Abundancia y Fuentes</strong></p>
                            <ul>
                                <li>Se encuentra en pequeñas cantidades en minerales como la escandia y la thortveitita.</li>
                                <li>Puede ser obtenido como subproducto de la minería de otros metales, como el uranio y el torio.</li>
                            </ul>
                            <p><strong>5. Historia</strong></p>
                            <ul>
                                <li>Descubierto en 1879 por Lars Fredrik Nilson, quien lo aisló a partir de minerales de tierras raras.</li>
                                <li>El nombre proviene de Escandinavia, región donde se realizaron investigaciones iniciales sobre este elemento.</li>
                            </ul>
                        `;
                    
                   } else if (elementName === 'Titanio') {
                            popupContent.innerHTML = `
                                <h2>TITANIO</h2>
                                <p><strong>1. Propiedades Generales</strong></p>
                                <ul>
                                    <li>Símbolo químico: Ti</li>
                                    <li>Número atómico: 22</li>
                                    <li>Masa atómica: 47.867 u</li>
                                    <li>Configuración electrónica: [Ar] 3d² 4s²</li>
                                    <li>Grupo: 4</li>
                                    <li>Período: 4</li>
                                    <li>Bloque: d (metal de transición)</li>
                                    <li>Estado físico: Sólido</li>
                                    <li>Color: Plateado, con un tono metálico brillante</li>
                                </ul>
                                <p><strong>2. Características</strong></p>
                                <ul>
                                    <li>Metal de transición fuerte y ligero con un aspecto metálico brillante.</li>
                                    <li>Excelente resistencia a la corrosión, ideal para ambientes agresivos.</li>
                                    <li>No magnético, con un punto de fusión alto de 1,668°C.</li>
                                    <li>Resistente al agua salada y otros agentes químicos.</li>
                                </ul>
                                <p><strong>3. Usos</strong></p>
                                <ul>
                                    <li><strong>Aeroespacial:</strong> Utilizado en la fabricación de aviones, cohetes y naves espaciales.</li>
                                    <li><strong>Medicina:</strong> Usado en prótesis médicas y dispositivos quirúrgicos debido a su biocompatibilidad.</li>
                                    <li><strong>Industria Química:</strong> Ideal para tuberías, intercambiadores de calor, reactores y equipos en ambientes corrosivos.</li>
                                    <li><strong>Deportes:</strong> Fabricación de bicicletas, palos de golf y otros equipos deportivos de alto rendimiento.</li>
                                    <li><strong>Joyería:</strong> Usado en anillos y relojes debido a su resistencia a los arañazos y su aspecto brillante.</li>
                                </ul>
                                <p><strong>4. Abundancia y Fuentes</strong></p>
                                <ul>
                                    <li>Es el noveno elemento más abundante en la corteza terrestre (aproximadamente 0.6%).</li>
                                    <li>Se encuentra principalmente en minerales como la ilmenita (FeTiO₃) y el rutilo (TiO₂).</li>
                                </ul>
                                <p><strong>5. Historia</strong></p>
                                <ul>
                                    <li>Descubierto en 1791 por William Gregor en el mineral rutilo.</li>
                                    <li>Fue aislado en su forma metálica en 1910 por el químico alemán Matthey.</li>
                                    <li>Su nombre proviene de los titanes de la mitología griega, conocidos por su fuerza.</li>
                                </ul>
                                <p><strong>6. Propiedades Mecánicas</strong></p>
                                <ul>
                                    <li>Alta relación resistencia/peso, muy fuerte para su peso.</li>
                                    <li>Más ligero que el acero y más fuerte que el aluminio, ideal para aplicaciones con materiales ligeros pero fuertes.</li>
                                </ul>
                                <p><strong>7. Desafíos en su Producción</strong></p>
                                <ul>
                                    <li>Su extracción y purificación es costosa debido a la estabilidad de sus compuestos en la naturaleza.</li>
                                    <li>El proceso Kroll, desarrollado en 1940, es el método principal para la producción de titanio metálico.</li>
                                </ul>
                                <p><strong>Resumen:</strong> El titanio es un metal fuerte, ligero, resistente a la corrosión y biocompatible, ampliamente utilizado en aeroespacial, medicina, química, deportes y joyería, aunque su producción sigue siendo costosa debido a las dificultades de extracción.</p>
                            `;
                
     
                    } else if (elementName === 'Vanadio') {
                                popupContent.innerHTML = `
                                    <h2>VANADIO</h2>
                                    <p><strong>1. Propiedades Generales</strong></p>
                                    <ul>
                                        <li>Símbolo químico: V</li>
                                        <li>Número atómico: 23</li>
                                        <li>Masa atómica: 50.9415 u</li>
                                        <li>Configuración electrónica: [Ar] 3d³ 4s²</li>
                                        <li>Grupo: 5</li>
                                        <li>Período: 4</li>
                                        <li>Bloque: d (metal de transición)</li>
                                        <li>Estado físico: Sólido</li>
                                        <li>Color: Gris plateado</li>
                                    </ul>
                                    <p><strong>2. Características</strong></p>
                                    <ul>
                                        <li>Metal duro, gris plateado, muy resistente a la corrosión.</li>
                                        <li>Punto de fusión: 1,926 °C, punto de ebullición: 3,380 °C.</li>
                                        <li>Dúctil, puede moldearse o estirarse sin romperse.</li>
                                        <li>Se oxida fácilmente, pero forma una capa protectora de óxido.</li>
                                        <li>Alta resistencia a la fatiga y abrasión.</li>
                                    </ul>
                                    <p><strong>3. Usos</strong></p>
                                    <ul>
                                        <li><strong>Aleaciones de acero:</strong> Utilizado en la producción de acero de alta resistencia para herramientas, maquinaria y vehículos.</li>
                                        <li><strong>Baterías de vanadio:</strong> Usado en baterías de flujo de vanadio con ciclo de vida largo y gran capacidad de almacenamiento de energía.</li>
                                        <li><strong>Industria química:</strong> Catalizador en reacciones químicas, como la producción de ácido sulfúrico y fabricación de plásticos.</li>
                                        <li><strong>Aleaciones de titanio:</strong> Mejora la resistencia y estabilidad térmica del titanio.</li>
                                        <li><strong>Industria aeroespacial y energética:</strong> Utilizado en aleaciones con tungsteno y otros metales para mejorar las propiedades a altas temperaturas.</li>
                                    </ul>
                                    <p><strong>4. Abundancia y Fuentes</strong></p>
                                    <ul>
                                        <li>Representa aproximadamente el 0.02% de la corteza terrestre.</li>
                                        <li>Se encuentra en minerales como la vanadinita, carnotita y magnetita.</li>
                                        <li>Obtenido como subproducto de la minería de otros metales como el uranio, tungsteno y níquel.</li>
                                    </ul>
                                    <p><strong>5. Historia</strong></p>
                                    <ul>
                                        <li>Descubierto en 1801 por Andrés Manuel del Río a partir de un mineral mexicano.</li>
                                        <li>Identificado como nuevo elemento por Nils Gabriel Sefström en 1830.</li>
                                        <li>El nombre proviene de Vanadis, la diosa nórdica del amor y la belleza, por los colores brillantes de sus compuestos.</li>
                                    </ul>
                                    <p><strong>6. Propiedades Químicas</strong></p>
                                    <ul>
                                        <li>Forma una amplia variedad de compuestos en los estados de oxidación +2, +3, +4 y +5.</li>
                                        <li>Compuestos de vanadio son conocidos por sus colores brillantes (verde, amarillo, azul, rojo, etc.).</li>
                                    </ul>
                                    <p><strong>7. Propiedades Mecánicas</strong></p>
                                    <ul>
                                        <li>Metal fuerte con alta resistencia al desgaste y gran dureza.</li>
                                        <li>Mejora las propiedades mecánicas de las aleaciones de acero, haciéndolas más resistentes a la corrosión y la fatiga.</li>
                                    </ul>
                                    <p><strong>Resumen:</strong> El vanadio es un metal de transición esencial en la producción de aleaciones de acero de alta resistencia, en baterías de flujo y como catalizador en la industria química. A pesar de su relativa escasez, su resistencia y durabilidad lo hacen fundamental en aplicaciones industriales clave.</p>
                                `;
                                       
                      }  else if (elementName === 'Cromo') {
                                    popupContent.innerHTML = `
                                        <h2>CROMO</h2>
                                        <p><strong>1. Propiedades Generales</strong></p>
                                        <ul>
                                            <li>Símbolo químico: Cr</li>
                                            <li>Número atómico: 24</li>
                                            <li>Masa atómica: 52.00 u</li>
                                            <li>Configuración electrónica: [Ar] 3d⁵ 4s¹</li>
                                            <li>Grupo: 6</li>
                                            <li>Período: 4</li>
                                            <li>Bloque: d (metal de transición)</li>
                                            <li>Estado físico: Sólido</li>
                                            <li>Color: Gris plateado</li>
                                        </ul>
                                        <p><strong>2. Características</strong></p>
                                        <ul>
                                            <li>Metal duro, brillante, resistente a la corrosión.</li>
                                            <li>Punto de fusión: 1,890 °C, punto de ebullición: 2,672 °C.</li>
                                            <li>Duro y quebradizo, no fácilmente deformable, pero resistente al desgaste.</li>
                                            <li>Oxida rápidamente, pero forma una capa protectora de óxido.</li>
                                            <li>Propiedades refractarias, resistente a altas temperaturas.</li>
                                        </ul>
                                        <p><strong>3. Usos</strong></p>
                                        <ul>
                                            <li><strong>Fabricación de acero inoxidable:</strong> Utilizado en la producción de acero inoxidable, común en utensilios de cocina y estructuras industriales.</li>
                                            <li><strong>Aleaciones:</strong> Se usa en aleaciones con hierro, aluminio y níquel para mejorar propiedades mecánicas y resistencia a la corrosión.</li>
                                            <li><strong>Recubrimientos y galvanización:</strong> Recubre metales para protegerlos de la corrosión y mejorar su apariencia.</li>
                                            <li><strong>Industria química:</strong> Usado como catalizador y reactivo en la fabricación de productos químicos y pigmentos.</li>
                                            <li><strong>Pigmentos y tintes:</strong> Produce pigmentos duraderos para pinturas, cerámicas y tintes.</li>
                                        </ul>
                                        <p><strong>4. Abundancia y Fuentes</strong></p>
                                        <ul>
                                            <li>Representa aproximadamente el 0.02% de la corteza terrestre.</li>
                                            <li>Se encuentra en minerales como la crocoíta, cromita y ferro-cromita.</li>
                                            <li>Extraído principalmente de Sudáfrica, Kazajistán, Turquía e India.</li>
                                        </ul>
                                        <p><strong>5. Historia</strong></p>
                                        <ul>
                                            <li>Descubierto en 1797 por Louis-Nicolas Vauquelin a partir de crocoíta.</li>
                                            <li>El nombre proviene de "chroma", la palabra griega para color, debido a los colores brillantes de sus compuestos.</li>
                                        </ul>
                                        <p><strong>6. Propiedades Químicas</strong></p>
                                        <ul>
                                            <li>Estados de oxidación comunes: +2, +3, +6. El estado +3 es el más estable.</li>
                                            <li>Compuestos de cromo son conocidos por sus colores brillantes, como verde, amarillo y rojo.</li>
                                            <li>El cromo hexavalente (Cr⁶⁺) es tóxico y carcinógeno, restringido en muchos países.</li>
                                        </ul>
                                        <p><strong>7. Propiedades Mecánicas</strong></p>
                                        <ul>
                                            <li>Alta dureza, uno de los metales más duros.</li>
                                            <li>Resistente al desgaste, usado en maquinaria industrial y piezas de automóviles.</li>
                                        </ul>
                                        <p><strong>Resumen:</strong> El cromo es un metal esencial en la fabricación de acero inoxidable y aleaciones resistentes. Se utiliza también en recubrimientos, pigmentos y como catalizador en la industria química. Aunque sus compuestos hexavalentes son peligrosos, el cromo sigue siendo crucial para muchas aplicaciones industriales.</p>
                                    `;
                                
                        }  else if (elementName === 'Manganeso') {
                                        popupContent.innerHTML = `
                                            <h2>MANGANESO</h2>
                                            <p><strong>1. Propiedades Generales</strong></p>
                                            <ul>
                                                <li>Símbolo químico: Mn</li>
                                                <li>Número atómico: 25</li>
                                                <li>Masa atómica: 54.938044 u</li>
                                                <li>Configuración electrónica: [Ar] 3d⁵ 4s²</li>
                                                <li>Grupo: 7</li>
                                                <li>Período: 4</li>
                                                <li>Bloque: d (metal de transición)</li>
                                                <li>Estado físico: Sólido</li>
                                                <li>Color: Gris plateado</li>
                                            </ul>
                                            <p><strong>2. Características</strong></p>
                                            <ul>
                                                <li>Metal duro, gris plateado, frágil en su forma pura.</li>
                                                <li>Punto de fusión: 1,246 °C, punto de ebullición: 2,062 °C.</li>
                                                <li>Químicamente reactivo, se oxida fácilmente, pero forma una capa protectora de óxido.</li>
                                                <li>En forma de aleación, es más resistente y duradero.</li>
                                            </ul>
                                            <p><strong>3. Usos</strong></p>
                                            <ul>
                                                <li><strong>Fabricación de acero:</strong> Usado para la producción de acero y hierro, mejorando la dureza y resistencia del acero.</li>
                                                <li><strong>Baterías:</strong> Componente importante en baterías recargables, como las de ion de litio y alcalinas.</li>
                                                <li><strong>Industria química:</strong> Usado en la fabricación de compuestos como el dióxido de manganeso (MnO₂) y en fertilizantes.</li>
                                                <li><strong>Aleaciones de aluminio:</strong> Mejora la resistencia a la corrosión y al desgaste de las aleaciones de aluminio.</li>
                                                <li><strong>Purificación del aire:</strong> Los compuestos de manganeso se usan en filtros de aire para eliminar impurezas.</li>
                                            </ul>
                                            <p><strong>4. Abundancia y Fuentes</strong></p>
                                            <ul>
                                                <li>Representa aproximadamente el 0.1% de la corteza terrestre.</li>
                                                <li>Se encuentra en minerales como pirolusita (MnO₂), hausmannita (Mn₃O₄) y manganita (MnO(OH)).</li>
                                                <li>Los principales productores son Sudáfrica, Australia, China y Gabón.</li>
                                            </ul>
                                            <p><strong>5. Historia</strong></p>
                                            <ul>
                                                <li>Descubierto en 1774 por Carl Wilhelm Scheele, aunque ya se conocía desde tiempos antiguos.</li>
                                                <li>Su nombre proviene de "manganesium", que significa "magia" o "poder".</li>
                                                <li>En la antigüedad, se usaban sus compuestos como pigmentos en cerámica y vidrio.</li>
                                            </ul>
                                            <p><strong>6. Propiedades Químicas</strong></p>
                                            <ul>
                                                <li>Muy reactivo, se oxida fácilmente en el aire formando compuestos en varios estados de oxidación.</li>
                                                <li>Estados de oxidación comunes: +2, +3, +4, +6, +7. El +2 es el más estable en soluciones acuosas.</li>
                                                <li>Es un buen agente desoxidante, útil en la fabricación de aleaciones de acero.</li>
                                                <li>Compuestos comunes: Dióxido de manganeso (MnO₂) y permanganato de potasio (KMnO₄).</li>
                                            </ul>
                                            <p><strong>7. Propiedades Mecánicas</strong></p>
                                            <ul>
                                                <li>En su forma pura, es frágil y de baja dureza, pero mejora considerablemente cuando se combina con otros metales.</li>
                                                <li>Crucial en la fabricación de acero de alta resistencia y aleaciones resistentes al desgaste y la corrosión.</li>
                                            </ul>
                                            <p><strong>Resumen:</strong> El manganeso es un metal esencial utilizado principalmente en la fabricación de aleaciones de acero debido a sus propiedades de desoxidación y mejora de la resistencia. Además, tiene aplicaciones en la industria química, en la fabricación de baterías y como catalizador en procesos industriales. Aunque es abundante en la naturaleza, su producción es fundamental para muchas aplicaciones tecnológicas y de ingeniería.</p>
                                        `;
                                   
                          }  else if (elementName === 'Hierro') {
                                            popupContent.innerHTML = `
                                                <h2>HIERRO</h2>
                                                <p><strong>1. Propiedades Generales</strong></p>
                                                <ul>
                                                    <li>Símbolo químico: Fe</li>
                                                    <li>Número atómico: 26</li>
                                                    <li>Masa atómica: 55.845 u</li>
                                                    <li>Configuración electrónica: [Ar] 3d⁶ 4s²</li>
                                                    <li>Grupo: 8</li>
                                                    <li>Período: 4</li>
                                                    <li>Bloque: d (metal de transición)</li>
                                                    <li>Estado físico: Sólido</li>
                                                    <li>Color: Gris plateado</li>
                                                </ul>
                                                <p><strong>2. Características</strong></p>
                                                <ul>
                                                    <li>El hierro es un metal común de color gris plateado que se oxida fácilmente, formando óxido de hierro (herrumbre).</li>
                                                    <li>Punto de fusión: 1,538 °C, punto de ebullición: 2,862 °C.</li>
                                                    <li>Es maleable y dúctil, lo que significa que se puede moldear o estirar sin romperse.</li>
                                                    <li>Excelente conductividad térmica y eléctrica, aunque no tan buena como otros metales como el cobre.</li>
                                                    <li>Es ferromagnético, lo que lo hace útil en motores eléctricos y generadores.</li>
                                                </ul>
                                                <p><strong>3. Usos</strong></p>
                                                <ul>
                                                    <li><strong>Acero:</strong> Utilizado en la fabricación de acero, crucial para construcción, maquinaria, vehículos, etc.</li>
                                                    <li><strong>Fabricación de maquinaria:</strong> El hierro y sus aleaciones se usan en maquinaria pesada y componentes industriales.</li>
                                                    <li><strong>Industria de la construcción:</strong> Usado en la construcción de estructuras metálicas como vigas y columnas.</li>
                                                    <li><strong>Imanes:</strong> Gracias a sus propiedades magnéticas, se usa en imanes, motores eléctricos y transformadores.</li>
                                                    <li><strong>Industria química:</strong> Usado en productos como óxido de hierro (III) y hierro galvanizado para protección contra corrosión.</li>
                                                    <li><strong>Tecnología de baterías:</strong> Algunas baterías recargables usan hierro, como las baterías de hierro-níquel.</li>
                                                </ul>
                                                <p><strong>4. Abundancia y Fuentes</strong></p>
                                                <ul>
                                                    <li>El hierro es el cuarto elemento más abundante en la corteza terrestre, representando aproximadamente el 5% de la misma.</li>
                                                    <li>Se encuentra principalmente en minerales como hematita (Fe₂O₃), magnetita (Fe₃O₄) y limonita (FeO(OH)·nH₂O).</li>
                                                    <li>Los principales productores de hierro son China, Australia, Brasil e India.</li>
                                                </ul>
                                                <p><strong>5. Historia</strong></p>
                                                <ul>
                                                    <li>Su uso comenzó en la Edad del Hierro (aproximadamente 1200 a.C.).</li>
                                                    <li>Conocido por egipcios, griegos y romanos, pero su uso fue limitado hasta avances en metalurgia.</li>
                                                    <li>La Revolución Industrial impulsó su uso debido a las nuevas técnicas de fabricación masiva.</li>
                                                </ul>
                                                <p><strong>6. Propiedades Químicas</strong></p>
                                                <ul>
                                                    <li>Estados de oxidación comunes: +2 y +3. El Fe²⁺ es un buen agente reductor y el Fe³⁺ un buen agente oxidante.</li>
                                                    <li>Se oxida al aire formando óxido de hierro (herrumbre), lo que puede deteriorar el metal si no se detiene el proceso.</li>
                                                    <li>El hierro galvanizado (recubierto con zinc) se usa para proteger contra la corrosión.</li>
                                                </ul>
                                                <p><strong>7. Propiedades Mecánicas</strong></p>
                                                <ul>
                                                    <li>El hierro puro es relativamente blando y frágil, pero sus aleaciones como el acero son muy fuertes y resistentes.</li>
                                                    <li>El hierro fundido es resistente a la compresión, ideal para fabricar bloques de motor, tuberías y maquinaria pesada.</li>
                                                </ul>
                                                <p><strong>Resumen:</strong> El hierro es uno de los metales más importantes y utilizados en la historia de la humanidad debido a su abundancia, propiedades mecánicas y versatilidad. Se utiliza principalmente en la fabricación de acero para construcción, maquinaria, vehículos y muchos otros productos. Además, sus propiedades magnéticas lo hacen valioso en aplicaciones tecnológicas como motores e imanes.</p>
                                            `;
                                        
                          }else if (elementName === 'Cobalto') {
                                                popupContent.innerHTML = `
                                                    <h2>COBALTO</h2>
                                                    <p><strong>1. ¿Qué es el Cobalto?</strong></p>
                                                    <p>El cobalto es un elemento químico de la tabla periódica con el símbolo Co y el número atómico 27. Es un metal de transición, duro, de color blanco plateado con un ligero tono azulado. Se encuentra en minerales como la cobaltita, glaucodot, y smaltita, y es utilizado en aleaciones, baterías y procesos biológicos.</p>
                                                    
                                                    <p><strong>2. ¿Cómo se produce el Cobalto?</strong></p>
                                                    <ul>
                                                        <li><strong>Extracción de minerales:</strong> Se extraen los minerales que contienen cobalto.</li>
                                                        <li><strong>Procesamiento:</strong> El mineral se procesa mediante métodos como la lixiviación con ácido, donde se disuelven los metales y se separan.</li>
                                                        <li><strong>Refinación:</strong> El cobalto se refina para obtenerlo en su forma pura o en aleaciones, dependiendo del uso final.</li>
                                                        <li>El cobalto también se obtiene de fuentes secundarias, como el reciclaje de baterías y aleaciones.</li>
                                                    </ul>
                                                    
                                                    <p><strong>3. ¿Cómo se almacena el Cobalto?</strong></p>
                                                    <ul>
                                                        <li><strong>Formas sólidas:</strong> Se almacena como lingotes o polvo en lugares secos y frescos, protegidos de la humedad.</li>
                                                        <li><strong>Aleaciones:</strong> Almacenado en condiciones específicas según el tipo de aleación (por ejemplo, acero inoxidable o baterías).</li>
                                                        <li><strong>Baterías:</strong> Las baterías de iones de litio con cobalto deben almacenarse bajo estrictos controles de temperatura y condiciones para evitar su degradación.</li>
                                                    </ul>
                                                    
                                                    <p><strong>4. ¿Qué aplicaciones tiene el Cobalto?</strong></p>
                                                    <ul>
                                                        <li><strong>Baterías recargables:</strong> Componente clave en las baterías de iones de litio para teléfonos, computadoras portátiles y vehículos eléctricos.</li>
                                                        <li><strong>Aleaciones de alto rendimiento:</strong> Usado en aleaciones resistentes al calor y la corrosión, como en motores de aviones y turbinas.</li>
                                                        <li><strong>Catalizadores:</strong> Utilizado como catalizador en la industria petroquímica para la producción de combustibles y productos químicos.</li>
                                                        <li><strong>Imanes:</strong> El cobalto es usado en imanes potentes en dispositivos electrónicos y motores.</li>
                                                        <li><strong>Pigmentos:</strong> Se emplea en la fabricación de pigmentos azules y verdes para pintura, cerámica y vidrio.</li>
                                                    </ul>
                                            
                                                    <p><strong>5. Información importante sobre el Cobalto:</strong></p>
                                                    <ul>
                                                        <li><strong>Toxicidad:</strong> El cobalto es esencial para la salud humana en pequeñas cantidades, pero la exposición a grandes dosis puede ser tóxica, afectando los pulmones y siendo un posible carcinógeno.</li>
                                                        <li><strong>Reciclaje:</strong> Dado que es un recurso escaso, el reciclaje de baterías y productos que lo contienen es crucial para reducir la demanda de extracción minera.</li>
                                                        <li><strong>Abundancia y distribución:</strong> El cobalto es relativamente raro y se extrae principalmente en países como la República Democrática del Congo, China y Rusia.</li>
                                                    </ul>
                                                `;
                                           
                                            
                            }  else if (elementName === 'Níquel') {
                                                    popupContent.innerHTML = `
                                                        <h2>NÍQUEL</h2>
                                                        <p><strong>Propiedades del Níquel</strong></p>
                                                        <ul>
                                                            <li><strong>Propiedades físicas:</strong>
                                                                <ul>
                                                                    <li>Densidad de 8.9 g/cm³.</li>
                                                                    <li>Punto de fusión de 1455 °C y punto de ebullición de 2730 °C, resistente a altas temperaturas.</li>
                                                                    <li>Excelente resistencia a la corrosión en ambientes ácidos y alcalinos, especialmente en aleaciones.</li>
                                                                    <li>Magnético a bajas temperaturas, útil en ciertos tipos de imanes.</li>
                                                                </ul>
                                                            </li>
                                                            <li><strong>Propiedades químicas:</strong>
                                                                <ul>
                                                                    <li>Forma una capa pasivante en su superficie, protegiéndolo de la corrosión.</li>
                                                                    <li>Reacciona con ácidos concentrados como el ácido clorhídrico y sulfúrico.</li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                        
                                                        <p><strong>Fuentes de Níquel:</strong></p>
                                                        <ul>
                                                            <li>Pentlandita (Fe,Ni)_9S_8: Mineral más común para la extracción.</li>
                                                            <li>Limonita (Fe,Ni)_O(OH): Mineral de óxido hidratado que contiene níquel.</li>
                                                            <li>Garnierita: Mineral de silicato que contiene níquel.</li>
                                                            <li>También se encuentra en el agua de mar y meteoritos.</li>
                                                        </ul>
                                                        
                                                        <p><strong>Producción y Extracción:</strong></p>
                                                        <ul>
                                                            <li><strong>Indonesia:</strong> El mayor productor mundial de níquel, especialmente en forma de laterita.</li>
                                                            <li><strong>Filipinas:</strong> Gran productor, especialmente en minerales de laterita.</li>
                                                            <li><strong>Rusia:</strong> Produce níquel a partir de minerales de sulfuro.</li>
                                                            <li><strong>Canadá:</strong> Importantes minas, como la mina de Sudbury.</li>
                                                        </ul>
                                                        
                                                        <p><strong>Procesos de extracción:</strong></p>
                                                        <ul>
                                                            <li><strong>Extracción de laterita:</strong> Mediante lixiviación ácida.</li>
                                                            <li><strong>Extracción de sulfuros:</strong> Mediante fundición y refinación.</li>
                                                        </ul>
                                                
                                                        <p><strong>Usos del Níquel:</strong></p>
                                                        <ul>
                                                            <li><strong>Aleaciones de Níquel:</strong>
                                                                <ul>
                                                                    <li><strong>Acero inoxidable:</strong> Entre el 8-12% de níquel mejora resistencia a la corrosión.</li>
                                                                    <li><strong>Aleaciones de alta temperatura:</strong> Usadas en la industria aeroespacial, motores a reacción, etc.</li>
                                                                    <li><strong>Superaleaciones:</strong> Usadas en reactores nucleares, turbinas a gas, componentes de cohetes.</li>
                                                                </ul>
                                                            </li>
                                                            <li><strong>Electrónica y baterías:</strong>
                                                                <ul>
                                                                    <li>Baterías de níquel-hidruro metálico (Ni-MH) en vehículos híbridos, como el Toyota Prius.</li>
                                                                    <li>Baterías recargables de níquel-cadmio (Ni-Cd) en herramientas eléctricas, aunque su uso ha disminuido por preocupaciones ambientales.</li>
                                                                </ul>
                                                            </li>
                                                            <li><strong>Industria petroquímica:</strong>
                                                                <ul>
                                                                    <li>Usado como catalizador en la hidrogenación de aceites y grasas.</li>
                                                                </ul>
                                                            </li>
                                                            <li><strong>Monedas:</strong> Usado en monedas como el "nickel" (5 centavos) en EE.UU.</li>
                                                            <li><strong>Recubrimientos metálicos:</strong> Electrodeposición para proteger metales contra corrosión y desgaste.</li>
                                                        </ul>
                                                
                                                        <p><strong>Efectos del Níquel en la Salud:</strong></p>
                                                        <ul>
                                                            <li>Es un alergénico que puede causar dermatitis de contacto.</li>
                                                            <li>Puede afectar los pulmones si se inhala el polvo de níquel durante su procesamiento.</li>
                                                            <li>Exposición excesiva puede ser perjudicial, aunque es esencial en pequeñas cantidades para funciones biológicas.</li>
                                                        </ul>
                                                
                                                        <p><strong>Toxicidad:</strong></p>
                                                        <ul>
                                                            <li>Puede ser tóxico si se ingiere en grandes cantidades o si se inhala polvo de níquel.</li>
                                                            <li>Algunos compuestos de níquel, especialmente los que contienen sulfuros, son carcinógenos.</li>
                                                        </ul>
                                                
                                                        <p><strong>Reciclaje del Níquel:</strong></p>
                                                        <ul>
                                                            <li>El níquel es uno de los metales más reciclados debido a su valor económico y la escasez del recurso natural.</li>
                                                        </ul>
                                                
                                                        <p><strong>Impacto Ambiental:</strong></p>
                                                        <ul>
                                                            <li>La minería de níquel puede causar contaminación del agua y degradación del suelo debido al uso de ácidos y metales pesados.</li>
                                                            <li>Las emisiones de dióxido de azufre durante la fundición de níquel contribuyen a la contaminación atmosférica.</li>
                                                        </ul>
                                                    `;
                             } else if (elementName === 'Cobre') {
                                                        popupContent.innerHTML = `
                                                            <h2>COBRE</h2>
                                                            <p><strong>1. ¿Qué es el Cobre?</strong></p>
                                                            <p>El cobre es un elemento químico de la tabla periódica con el símbolo Cu y el número atómico 29. Es un metal de transición, de color rojo-anaranjado brillante, conocido por ser uno de los mejores conductores de electricidad y calor. Ha sido utilizado desde la antigüedad en la fabricación de herramientas, joyas y utensilios.</p>
                                                            
                                                            <p><strong>2. ¿Cómo se produce el Cobre?</strong></p>
                                                            <ul>
                                                                <li><strong>Extracción del mineral:</strong> Se extraen minerales de cobre de minas a cielo abierto o subterráneas.</li>
                                                                <li><strong>Concentración:</strong> El mineral se somete a flotación para separar el cobre de otros materiales.</li>
                                                                <li><strong>Fundición:</strong> El mineral concentrado se funde en un horno para obtener cobre impuro (cobre blister).</li>
                                                                <li><strong>Refinación:</strong> El cobre blister se refina mediante electrólisis para obtener cobre puro (99.99%).</li>
                                                            </ul>
                                                            <p>En algunos casos, también se obtiene cobre a partir del reciclaje de productos que contienen cobre.</p>
                                                    
                                                            <p><strong>3. ¿Cómo se almacena el Cobre?</strong></p>
                                                            <ul>
                                                                <li><strong>Lingotes:</strong> Cobre refinado almacenado en forma de lingotes.</li>
                                                                <li><strong>Bobinas y alambres:</strong> En aplicaciones industriales, se almacena en forma de bobinas de alambre para cables y conductores.</li>
                                                                <li><strong>Aleaciones:</strong> También se almacena en aleaciones, como el bronce y el latón.</li>
                                                            </ul>
                                                    
                                                            <p><strong>4. ¿Qué aplicaciones tiene el Cobre?</strong></p>
                                                            <ul>
                                                                <li><strong>Electrónica y electricidad:</strong>
                                                                    <ul>
                                                                        <li>Cables eléctricos, componentes electrónicos, transformadores y motores.</li>
                                                                    </ul>
                                                                </li>
                                                                <li><strong>Construcción:</strong>
                                                                    <ul>
                                                                        <li>Tuberías de agua, techos y recubrimientos, y en la fabricación de monedas.</li>
                                                                    </ul>
                                                                </li>
                                                                <li><strong>Aleaciones:</strong>
                                                                    <ul>
                                                                        <li>Latón (cobre y zinc) y bronce (cobre y estaño) para monedas, joyería, instrumentos musicales y componentes mecánicos.</li>
                                                                    </ul>
                                                                </li>
                                                                <li><strong>Industria química:</strong>
                                                                    <ul>
                                                                        <li>Se utiliza en procesos químicos como catalizador y en sistemas de control de emisiones.</li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                    
                                                            <p><strong>5. Información importante sobre el Cobre:</strong></p>
                                                            <ul>
                                                                <li>El cobre es uno de los mejores conductores de electricidad y calor.</li>
                                                                <li>Alta resistencia a la corrosión, ideal para aplicaciones al aire libre.</li>
                                                                <li>El cobre es el 25º elemento más abundante en la corteza terrestre, con principales productores en Chile, Perú, China, EE. UU. y Zambia.</li>
                                                                <li>El cobre es altamente reciclable y su reciclaje reduce el impacto ambiental.</li>
                                                            </ul>
                                                    
                                                            <p><strong>6. Historia y Usos Culturales:</strong></p>
                                                            <p>El cobre es uno de los primeros metales utilizados por los seres humanos, con una historia que se remonta a más de 10,000 años. Fue fundamental en la Edad del Bronce y en la creación de herramientas, armas y joyas en las primeras civilizaciones.</p>
                                                    
                                                            <p><strong>Impacto ambiental y Toxicidad:</strong></p>
                                                            <ul>
                                                                <li>La minería de cobre puede generar residuos y contaminación, pero el reciclaje mitiga estos efectos.</li>
                                                                <li>El cobre es esencial para la salud humana, pero una exposición excesiva puede causar toxicidad y problemas de salud.</li>
                                                            </ul>
                                                        `;
                             }else if (elementName === 'Zinc') {
                                                            popupContent.innerHTML = `
                                                                <h2>ZINC</h2>
                                                                <p><strong>1. ¿Qué es el Zinc?</strong></p>
                                                                <p>El zinc es un elemento químico de la tabla periódica con el símbolo Zn y el número atómico 30. Es un metal de transición, de color gris azulado, conocido por sus propiedades anticorrosivas. Se encuentra en la naturaleza en minerales como la blenda (ZnS) y la calamina (ZnCO₃).</p>
                                                        
                                                                <p><strong>2. ¿Cómo se produce el Zinc?</strong></p>
                                                                <ul>
                                                                    <li><strong>Extracción del mineral:</strong> El mineral de zinc se extrae de minas subterráneas o a cielo abierto.</li>
                                                                    <li><strong>Concentración:</strong> El mineral se somete a un proceso de flotación para separar el zinc de otros materiales.</li>
                                                                    <li><strong>Tostado:</strong> El mineral concentrado se somete a tostado a altas temperaturas, produciendo óxido de zinc (ZnO).</li>
                                                                    <li><strong>Reducción:</strong> El óxido de zinc se reduce a zinc metálico mediante reducción con carbón o electrólisis.</li>
                                                                </ul>
                                                                <p>También se obtiene zinc a partir del reciclaje de productos que lo contienen.</p>
                                                        
                                                                <p><strong>3. ¿Cómo se almacena el Zinc?</strong></p>
                                                                <ul>
                                                                    <li><strong>Lingotes o barras:</strong> El zinc se almacena generalmente en estas formas para evitar la corrosión.</li>
                                                                    <li><strong>Aleaciones:</strong> Cuando se utiliza como recubrimiento, el zinc se encuentra en aleaciones como el galvanizado, donde se aplica sobre otros metales como el hierro y el acero.</li>
                                                                </ul>
                                                        
                                                                <p><strong>4. ¿Qué aplicaciones tiene el Zinc?</strong></p>
                                                                <ul>
                                                                    <li><strong>Galvanización:</strong> El zinc se usa para galvanizar metales como el acero y el hierro, protegiéndolos de la oxidación y corrosión.</li>
                                                                    <li><strong>Aleaciones:</strong> En la fabricación de aleaciones como el latón y el zamak, que se utilizan en monedas, componentes automotrices y piezas de maquinaria.</li>
                                                                    <li><strong>Baterías:</strong> El zinc se usa en baterías, como las de zinc-carbono para dispositivos electrónicos.</li>
                                                                    <li><strong>Producción de productos químicos:</strong> Se usa en la fabricación de óxido de zinc, que se utiliza en cosméticos, protectores solares, productos farmacéuticos y caucho.</li>
                                                                    <li><strong>Industria de la construcción:</strong> Se utiliza en la fabricación de tejas, techos y fachadas, así como en componentes de ventanas y puertas.</li>
                                                                    <li><strong>Fertilizantes:</strong> El sulfato de zinc se utiliza como fertilizante para corregir deficiencias de zinc en los suelos agrícolas.</li>
                                                                </ul>
                                                        
                                                                <p><strong>5. Información importante sobre el Zinc:</strong></p>
                                                                <ul>
                                                                    <li>El zinc tiene una alta resistencia a la corrosión, lo que lo hace útil en procesos como la galvanización.</li>
                                                                    <li>Es relativamente maleable, pero se vuelve más quebradizo a bajas temperaturas.</li>
                                                                    <li>Su punto de fusión es de 419 °C, facilitando su fundición y moldeado.</li>
                                                                    <li>El zinc es el 24º elemento más abundante en la corteza terrestre, y China es el mayor productor mundial.</li>
                                                                    <li>Es altamente reciclable, lo que ayuda a reducir la necesidad de nuevas extracciones.</li>
                                                                </ul>
                                                        
                                                                <p><strong>6. Historia y Usos Culturales:</strong></p>
                                                                <p>El zinc ha sido conocido desde tiempos antiguos, aunque se aisló como elemento puro en el siglo 18. Las civilizaciones antiguas usaban aleaciones de zinc para fabricar herramientas, joyas y monedas. En la Edad Media, se utilizaba en la fabricación de latón, una aleación apreciada por su durabilidad y apariencia dorada.</p>
                                                        
                                                                <p><strong>Impacto ambiental y Toxicidad:</strong></p>
                                                                <ul>
                                                                    <li>La minería del zinc puede generar residuos tóxicos, pero su reciclaje ayuda a reducir el impacto ambiental.</li>
                                                                    <li>El zinc es esencial para la salud humana en pequeñas cantidades, pero la exposición excesiva puede ser tóxica, causando náuseas, vómitos y dolor abdominal.</li>
                                                                </ul>
                                                            `;
                                                    
                              } else if (elementName === 'Galio') {
                                                                popupContent.innerHTML = `
                                                                    <h2>GALIO</h2>
                                                                    <p><strong>1. ¿Qué es el Galio?</strong></p>
                                                                    <p>El galio es un elemento químico de la tabla periódica con el símbolo Ga y el número atómico 31. Es un metal blando, plateado, con un punto de fusión sorprendentemente bajo de 29.76 °C, lo que le permite ser líquido a temperatura ambiente en condiciones especiales. Es un elemento raro en la corteza terrestre y se utiliza principalmente en la industria electrónica.</p>
                                                            
                                                                    <p><strong>2. ¿Cómo se produce el Galio?</strong></p>
                                                                    <ul>
                                                                        <li><strong>Fuente primaria:</strong> El galio se extrae principalmente como subproducto del procesamiento de minerales de bauxita (aluminio) y blenda (zinc).</li>
                                                                        <li><strong>Refinación:</strong> A través de procesos químicos, se separa el galio de otros metales, usando métodos como reducción química o tratamiento electrolítico.</li>
                                                                        <li><strong>Reciclaje:</strong> El galio también se obtiene a partir del reciclaje de productos electrónicos, como los dispositivos semiconductores.</li>
                                                                    </ul>
                                                            
                                                                    <p><strong>3. ¿Cómo se almacena el Galio?</strong></p>
                                                                    <p>El galio se almacena en forma de líquido o en bloques sólidos en envases herméticos, para evitar la oxidación y la contaminación. Dado que es un metal relativamente reactivo, debe guardarse en un lugar fresco y seco, lejos de aluminio y otros metales, ya que puede fragilizar estos materiales.</p>
                                                            
                                                                    <p><strong>4. ¿Qué aplicaciones tiene el Galio?</strong></p>
                                                                    <ul>
                                                                        <li><strong>Semiconductores:</strong> Se usa en la fabricación de semiconductores, especialmente el arseniuro de galio (GaAs), que se emplea en diodos, transistores y láseres para componentes electrónicos y dispositivos de alta frecuencia.</li>
                                                                        <li><strong>Pantallas y LED:</strong> El galio es esencial en la fabricación de pantallas LED eficientes y duraderas, como las usadas en televisores, teléfonos y señales de tráfico.</li>
                                                                        <li><strong>Láseres de galio:</strong> Se utiliza en la fabricación de láseres de diodo para dispositivos como lectores de CD y DVD.</li>
                                                                        <li><strong>Energía solar:</strong> El arseniuro de galio se utiliza en células solares de alta eficiencia, ideales para satélites y aplicaciones espaciales.</li>
                                                                        <li><strong>Electrónica de potencia:</strong> Se utiliza en transistores de alta frecuencia y diodos de conmutación rápida para aplicaciones de energía renovable y comunicación de alta velocidad.</li>
                                                                        <li><strong>Medicina:</strong> El galio se emplea en radioterapia y pruebas de gammagrafía, especialmente el galio-67, para detectar anomalías en huesos y tejidos blandos.</li>
                                                                    </ul>
                                                            
                                                                    <p><strong>5. Información importante sobre el Galio:</strong></p>
                                                                    <ul>
                                                                        <li>El galio tiene un punto de fusión bajo (29.76 °C), lo que le permite ser líquido a temperatura ambiente.</li>
                                                                        <li>Es un metal blando y maleable con un alto punto de ebullición de 2204 °C.</li>
                                                                        <li>El galio se encuentra en pequeñas cantidades en la corteza terrestre, principalmente en minerales como la bauxita y la blenda.</li>
                                                                        <li>Es un metal raro y se dilata al solidificarse, lo que lo hace inusual.</li>
                                                                    </ul>
                                                            
                                                                    <p><strong>6. Historia y Usos Culturales:</strong></p>
                                                                    <p>Descubierto en 1875 por el químico Paul-Émile Lecoq de Boisbaudran en Francia, el galio fue nombrado en honor a Galacia, la región natal de Lecoq. Su uso comercial y tecnológico creció significativamente en la década de 1950, especialmente con el desarrollo de la electrónica de alta frecuencia y los semiconductores.</p>
                                                            
                                                                    <p><strong>Toxicidad y Reactividad:</strong></p>
                                                                    <ul>
                                                                        <li>El galio es relativamente no tóxico, aunque debe evitarse la inhalación o ingestión en grandes cantidades.</li>
                                                                        <li>Puede disolver ciertos metales, como el aluminio, y fragilizar estos materiales, lo que puede causar fallos estructurales en componentes metálicos.</li>
                                                                    </ul>
                                                                `;
                                                            
                                            
                              }else if (elementName === 'Germanio') {
                                                                    popupContent.innerHTML = `
                                                                        <h2>GERMANIO</h2>
                                                                        <p><strong>1. ¿Qué es el Germanio?</strong></p>
                                                                        <p>El germanio es un elemento químico de la tabla periódica con el símbolo Ge y el número atómico 32. Es un metaloide con propiedades intermedias entre los metales y los no metales. A temperatura ambiente, es un sólido gris plateado con alta conductividad eléctrica, lo que lo hace importante en la electrónica moderna. Fue descubierto en 1886 por Clemens Winkler.</p>
                                                                
                                                                        <p><strong>2. ¿Cómo se produce el Germanio?</strong></p>
                                                                        <ul>
                                                                            <li><strong>Fuente primaria:</strong> El germanio se extrae principalmente de minerales como la argirodita (Ag₃GeS₃), el géminita y la germanita, que contienen germanio. También se encuentra en algunos minerales de zinc y cobre.</li>
                                                                            <li><strong>Refinación:</strong> Se separa el germanio mediante procesos de reducción química o destilación para purificarlo y obtenerlo en su forma elemental.</li>
                                                                            <li><strong>Purificación:</strong> El germanio de alta pureza se obtiene mediante purificación por zona o electrólisis para su uso en componentes electrónicos.</li>
                                                                        </ul>
                                                                
                                                                        <p><strong>3. ¿Cómo se almacena el Germanio?</strong></p>
                                                                        <p>El germanio se almacena generalmente en forma de lingotes o polvo. Dado que es un material reactivo, puede oxidarse lentamente en el aire, por lo que debe guardarse en condiciones secas y herméticas. El germanio de alta pureza se mantiene en contenedores especiales para evitar contaminantes.</p>
                                                                
                                                                        <p><strong>4. ¿Qué aplicaciones tiene el Germanio?</strong></p>
                                                                        <ul>
                                                                            <li><strong>Semiconductores:</strong> El germanio se utiliza en la fabricación de semiconductores y en combinación con silicio en dispositivos electrónicos avanzados, incluidos transistores y diodos para aplicaciones de radiofrecuencia (RF) y telecomunicaciones.</li>
                                                                            <li><strong>Fibra óptica y tecnología de comunicaciones:</strong> El óxido de germanio (GeO₂) es crucial en la fabricación de fibra óptica de alta calidad, utilizada en sistemas de telecomunicaciones y transmisión de datos a larga distancia.</li>
                                                                            <li><strong>Dispositivos de infrarrojos:</strong> El germanio es utilizado para fabricar lentes y ventanas en cámaras infrarrojas y dispositivos de visión nocturna, además de ser empleado en sensores de imágenes y radiografías de alta precisión.</li>
                                                                            <li><strong>Celdas solares de alta eficiencia:</strong> El germanio es clave en la fabricación de células solares de alta eficiencia, especialmente en satélites y aplicaciones espaciales donde se requieren condiciones extremas.</li>
                                                                            <li><strong>Aleaciones y catalizadores:</strong> El germanio se usa en aleaciones metálicas, particularmente en la industria del acero, y en algunos catalizadores para procesos industriales como la refinación de petróleo.</li>
                                                                        </ul>
                                                                
                                                                        <p><strong>5. Información importante sobre el Germanio:</strong></p>
                                                                        <ul>
                                                                            <li>El germanio es un metaloide, quebradizo a temperatura ambiente, con un punto de fusión de 938.25 °C.</li>
                                                                            <li>Tiene una conductividad eléctrica moderada, lo que lo hace útil en la fabricación de dispositivos electrónicos y semiconductores.</li>
                                                                            <li>El germanio se dilata al solidificarse, lo que lo hace menos propenso a agrietarse durante el enfriamiento.</li>
                                                                            <li>Su abundancia en la corteza terrestre es baja (aproximadamente 0.0000003%) y se encuentra principalmente en minerales que contienen plata, zinc y cobre.</li>
                                                                        </ul>
                                                                
                                                                        <p><strong>6. Historia y Usos Culturales:</strong></p>
                                                                        <p>El germanio fue descubierto en 1886 por Clemens Winkler, quien lo aisló a partir de la argirodita. A lo largo de los años, el germanio pasó de ser un material poco conocido a convertirse en un componente clave en la tecnología de semiconductores, especialmente después de la Segunda Guerra Mundial. Su capacidad para ser utilizado en circuitos electrónicos de alta frecuencia revolucionó las tecnologías de comunicación y computación.</p>
                                                                
                                                                        <p><strong>Toxicidad y Impacto Ambiental:</strong></p>
                                                                        <ul>
                                                                            <li>El germanio es de baja toxicidad en su forma elemental, pero sus compuestos pueden ser tóxicos en grandes cantidades, especialmente por inhalación o ingestión.</li>
                                                                            <li>El reciclaje de componentes electrónicos que contienen germanio ayuda a reducir la necesidad de nuevas extracciones y mitiga el impacto ambiental de su producción.</li>
                                                                        </ul>
                                                                    `;
                               } else if (elementName === 'Arsénico') {
                                                                        popupContent.innerHTML = `
                                                                            <h2>ARSÉNICO</h2>
                                                                            <p><strong>1. ¿Qué es el Arsénico?</strong></p>
                                                                            <p>El arsénico es un elemento químico de la tabla periódica con el símbolo As y el número atómico 33. Es un metaloide, lo que significa que tiene propiedades intermedias entre los metales y los no metales. Es conocido por su alta toxicidad y la capacidad de formar compuestos peligrosos. Se presenta en polvo gris o blanco y en formas alotrópicas, una metálica brillante y una amorfa en polvo.</p>
                                                                    
                                                                            <p><strong>2. ¿Cómo se produce el Arsénico?</strong></p>
                                                                            <ul>
                                                                                <li><strong>Extracción de minerales:</strong> El arsénico se encuentra principalmente en la arsenopirita (FeAsS), pero también en minerales como enargita, löllingita y oropimente.</li>
                                                                                <li><strong>Proceso de refinación:</strong> Se calienta el mineral para liberar el arsénico en forma de gas o óxido, y luego se condensa para formar productos comerciales.</li>
                                                                                <li><strong>Subproducto en la minería:</strong> En la minería de cobre y zinc, el arsénico puede liberarse durante la fundición de estos metales, generando emisiones de gas arsénico o residuos sólidos.</li>
                                                                            </ul>
                                                                    
                                                                            <p><strong>3. ¿Cómo se almacena el Arsénico?</strong></p>
                                                                            <p>El arsénico debe almacenarse con precaución debido a su alta toxicidad. Se guarda en forma de compuestos sólidos o polvo en contenedores sellados, preferentemente herméticos, para evitar la liberación de vapores o polvo tóxico. Debe mantenerse alejado de fuentes de calor o humedad y en áreas ventiladas si se usa industrialmente.</p>
                                                                    
                                                                            <p><strong>4. ¿Qué aplicaciones tiene el Arsénico?</strong></p>
                                                                            <ul>
                                                                                <li><strong>Semiconductores:</strong> El arseniuro de galio (GaAs) es clave en la fabricación de semiconductores, usados en dispositivos como diodos, transistores y componentes de comunicaciones.</li>
                                                                                <li><strong>Preservación de madera:</strong> El arsenato de cobre cromado (CCA) se usa para preservar la madera, protegiéndola de hongos e insectos, aunque su uso está siendo restringido debido a su toxicidad.</li>
                                                                                <li><strong>Pesticidas y herbicidas:</strong> El arsénico fue utilizado en el pasado como pesticida y herbicida, pero su uso ha disminuido debido a sus efectos tóxicos.</li>
                                                                                <li><strong>Aleaciones de metales:</strong> Se usa en aleaciones de plomo para mejorar la resistencia a la corrosión, especialmente en baterías, cables y otros productos eléctricos.</li>
                                                                                <li><strong>Tratamientos de aguas:</strong> El arsénico en algunos compuestos se utilizó en el tratamiento de aguas, aunque hoy se buscan alternativas más seguras debido a su toxicidad.</li>
                                                                                <li><strong>Medicina:</strong> Aunque su uso ha disminuido, el arsénico se ha utilizado en medicina tradicional y en la quimioterapia para tratar ciertos tipos de cáncer, como el trióxido de arsénico.</li>
                                                                            </ul>
                                                                    
                                                                            <p><strong>5. Información importante sobre el Arsénico:</strong></p>
                                                                            <ul>
                                                                                <li>El arsénico es un metaloide con propiedades intermedias entre los metales y los no metales, y es un buen conductor de electricidad en su forma sólida.</li>
                                                                                <li>Se presenta en varias formas alotrópicas: una forma amarilla inestable y una forma gris metálica más estable.</li>
                                                                                <li>Es altamente tóxico, acumulándose en los tejidos orgánicos y siendo una de las sustancias más peligrosas para los humanos.</li>
                                                                                <li>Su abundancia en la corteza terrestre es baja, con una concentración de aproximadamente 0.00005%, y se encuentra principalmente en minerales como la arsenopirita.</li>
                                                                            </ul>
                                                                    
                                                                            <p><strong>6. Historia y Usos Culturales:</strong></p>
                                                                            <p>El arsénico ha sido conocido desde la antigüedad, utilizado por los alquimistas en diversos experimentos y tratamientos. Durante el Renacimiento, se usaba como veneno debido a su capacidad para matar en pequeñas dosis. En el siglo XIX, comenzó a utilizarse en la industria para la producción de pigmentos y compuestos metálicos.</p>
                                                                    
                                                                            <p><strong>Toxicidad y Impacto Ambiental:</strong></p>
                                                                            <ul>
                                                                                <li>El arsénico es muy tóxico, especialmente en su forma inorgánica, y la exposición crónica puede causar cáncer, daño hepático y problemas en los sistemas nervioso y cardiovascular.</li>
                                                                                <li>La contaminación del agua potable por arsénico es una preocupación global, debido a la minería y a la presencia natural de arsénico en algunas áreas.</li>
                                                                                <li>El arsénico es un contaminante ambiental que puede afectar gravemente a los ecosistemas, dañando la vida acuática y las plantas, y contribuyendo a la contaminación de suelos y aguas superficiales.</li>
                                                                            </ul>
                                                                        `;
                                                                    
                                } else if (elementName === 'Selenio') {
                                                                            popupContent.innerHTML = `
                                                                                <h2>SELENIO</h2>
                                                                                <p><strong>1. ¿Qué es el Selenio?</strong></p>
                                                                                <p>El selenio es un elemento químico de la tabla periódica con el símbolo Se y el número atómico 34. Es un no metal con propiedades similares al azufre, pero con características que le otorgan una mayor capacidad antioxidante en ciertos compuestos. Se encuentra comúnmente en la naturaleza en forma de compuestos como el selenato y el selenito, y se utiliza en diversas aplicaciones industriales y médicas.</p>
                                                                        
                                                                                <p><strong>2. ¿Cómo se produce el Selenio?</strong></p>
                                                                                <ul>
                                                                                    <li><strong>Extracción de minerales:</strong> El selenio se encuentra principalmente en minerales como la selenita y la selenopirita, que contienen metales como el cobre y el plomo, con una concentración generalmente baja.</li>
                                                                                    <li><strong>Refinación de metales:</strong> Durante la refinación de metales base como cobre y plomo, el selenio se libera en el proceso de fundición y se separa por destilación o precipitación química.</li>
                                                                                    <li><strong>Purificación:</strong> Una vez separado, el selenio se purifica y se transforma en su forma elemental o en compuestos como el selenito de sodio y el selenato de sodio, que tienen aplicaciones específicas.</li>
                                                                                </ul>
                                                                        
                                                                                <p><strong>3. ¿Cómo se almacena el Selenio?</strong></p>
                                                                                <p>El selenio debe almacenarse en condiciones controladas para evitar su oxidación. Algunas de las precauciones incluyen:</p>
                                                                                <ul>
                                                                                    <li>Almacenamiento en lugares frescos, secos y bien ventilados, evitando la exposición a humedad y aire.</li>
                                                                                    <li>Se almacena en barras, polvos o compuestos dependiendo de su forma y uso, y las formas elementales se mantienen en envases sellados.</li>
                                                                                    <li>Precaución para evitar la exposición al polvo o vapores de selenio, especialmente en aplicaciones industriales.</li>
                                                                                </ul>
                                                                        
                                                                                <p><strong>4. ¿Qué aplicaciones tiene el Selenio?</strong></p>
                                                                                <ul>
                                                                                    <li><strong>Electrónica y semiconductores:</strong> El selenio se utiliza en celdas solares de película delgada, que son más ligeras y flexibles que las celdas solares tradicionales, y en la producción de rectificadores y fotoceldas.</li>
                                                                                    <li><strong>Fabricación de vidrios:</strong> Se usa para producir vidrios de colores, como rojos y naranjas, y en vidrios de protección solar. Ayuda a mejorar la resistencia a la temperatura y la corrosión del vidrio.</li>
                                                                                    <li><strong>Antioxidantes y salud:</strong> El selenio es un antioxidante esencial en el cuerpo humano, protegiendo las células del daño causado por los radicales libres. Se utiliza en suplementos y productos farmacéuticos para tratar deficiencias y mejorar la salud.</li>
                                                                                    <li><strong>Industria química:</strong> El selenio se usa en la fabricación de pigmentos, aleaciones y productos desinfectantes y fungicidas, especialmente en la agricultura.</li>
                                                                                    <li><strong>Agricultura:</strong> Se usa como suplemento nutricional en la alimentación del ganado, para prevenir enfermedades por deficiencia de selenio.</li>
                                                                                </ul>
                                                                        
                                                                                <p><strong>5. Información importante sobre el Selenio:</strong></p>
                                                                                <ul>
                                                                                    <li>El selenio es un no metal con propiedades metaloides, tiene propiedades intermedias entre los metales y los no metales, y es un buen conductor de electricidad en su forma cristalina.</li>
                                                                                    <li>Es altamente reactivo con el oxígeno y se utiliza en aplicaciones fotovoltaicas debido a su capacidad para convertir luz en energía eléctrica.</li>
                                                                                    <li>Se encuentra en la corteza terrestre en concentraciones bajas, aproximadamente 0.0002%, y se obtiene principalmente de minerales de cobre, plomo y zinc.</li>
                                                                                </ul>
                                                                        
                                                                                <p><strong>Toxicidad:</strong></p>
                                                                                <ul>
                                                                                    <li>El selenio es esencial en pequeñas cantidades, pero en niveles altos puede ser tóxico, causando selenosis con síntomas como náuseas, dolores abdominales, y problemas neurológicos.</li>
                                                                                    <li>La exposición laboral al polvo o gas de selenio puede ser peligrosa, por lo que se deben tomar precauciones en ciertos entornos industriales.</li>
                                                                                </ul>
                                                                        
                                                                                <p><strong>Impacto ambiental:</strong></p>
                                                                                <ul>
                                                                                    <li>A pesar de sus beneficios industriales, el selenio debe manejarse con cuidado debido a su toxicidad ambiental, especialmente en grandes concentraciones.</li>
                                                                                    <li>La minería y el procesamiento de selenio pueden generar residuos que contribuyen a la contaminación de suelos y cuerpos de agua.</li>
                                                                                </ul>
                                                                        
                                                                                <p><strong>6. Historia y Usos Culturales:</strong></p>
                                                                                <p>El selenio fue descubierto en 1817 por Jöns Jacob Berzelius, quien lo nombró por su similitud con el azufre (de "selene", que significa "luna" en griego). Inicialmente identificado como tóxico, el selenio comenzó a ser utilizado en la industria electrónica y fotovoltaica en el siglo XX, y su capacidad antioxidante lo hizo importante en medicina y nutrición.</p>
                                                                            `;
                                                                        
                                                                                                              
                                }else if (elementName === 'Bromo') {
                                                                                popupContent.innerHTML = `
                                                                                    <h2>BROMO</h2>
                                                                                    <p><strong>1. ¿Qué es el Bromo?</strong></p>
                                                                                    <p>El bromo es un elemento químico de la tabla periódica con el símbolo Br y el número atómico 35. Es un halógeno y un no metal que se encuentra en forma de líquido rojo oscuro o gas a temperatura ambiente. Es altamente reactivo, especialmente con metales y otros no metales, y se considera un elemento tóxico y corrosivo. El bromo es el único elemento no metálico que es un líquido a temperatura y presión normales.</p>
                                                                            
                                                                                    <p><strong>2. ¿Cómo se produce el Bromo?</strong></p>
                                                                                    <ul>
                                                                                        <li><strong>Extracción de salmuera:</strong> El bromo se extrae de salmueras subterráneas que contienen bromuros como bromuro de sodio (NaBr) y bromuro de potasio (KBr), principalmente en regiones cercanas a océanos o lagos salados.</li>
                                                                                        <li><strong>Proceso de extracción:</strong> El bromuro en la salmuera se oxida usando cloro gaseoso (Cl₂), produciendo bromo gaseoso (Br₂), que luego se recoge y se condensa a líquido.</li>
                                                                                        <li><strong>Purificación:</strong> El gas bromo se purifica mediante enfriamiento y rectificación para obtener bromo de alta calidad.</li>
                                                                                    </ul>
                                                                            
                                                                                    <p><strong>3. ¿Cómo se almacena el Bromo?</strong></p>
                                                                                    <p>El bromo debe almacenarse con extremo cuidado debido a su alta reactividad y toxicidad:</p>
                                                                                    <ul>
                                                                                        <li><strong>Contenedores resistentes:</strong> Se almacena en recipientes de vidrio o acero inoxidable recubiertos para evitar la corrosión y en recipientes herméticos para prevenir la liberación del gas bromo.</li>
                                                                                        <li><strong>Condiciones de almacenamiento:</strong> Debe almacenarse en áreas bien ventiladas, alejadas de fuentes de calor, materiales inflamables y sustancias reactivas. La temperatura debe ser controlada.</li>
                                                                                        <li><strong>Precauciones:</strong> Los trabajadores deben usar equipo de protección personal, como guantes, gafas de seguridad, mascarillas y ropa adecuada.</li>
                                                                                    </ul>
                                                                            
                                                                                    <p><strong>4. ¿Qué aplicaciones tiene el Bromo?</strong></p>
                                                                                    <ul>
                                                                                        <li><strong>Fabricación de productos químicos:</strong> El bromo se utiliza para producir compuestos como bromuro de metilo, utilizado en fumigación agrícola, y bromuros de metales para la industria fotográfica y electrónica.</li>
                                                                                        <li><strong>Antiinflamatorios y retardantes de llama:</strong> Se usa en plásticos, textiles y materiales de construcción para reducir su inflamabilidad.</li>
                                                                                        <li><strong>Agentes desinfectantes:</strong> El bromo se utiliza en la purificación de agua y en tratamientos de agua en piscinas para eliminar microorganismos.</li>
                                                                                        <li><strong>Industria farmacéutica:</strong> El bromuro de potasio (KBr) fue usado históricamente como sedante y anticonvulsivo, aunque su uso ha disminuido.</li>
                                                                                        <li><strong>Fabricación de tintes y colorantes:</strong> Se utiliza en la industria textil para crear colores brillantes en tejidos.</li>
                                                                                        <li><strong>Extracción de petróleo:</strong> En la perforación de pozos de petróleo, el bromo ayuda a controlar la presión del pozo y estabilizar los lodos de perforación.</li>
                                                                                    </ul>
                                                                            
                                                                                    <p><strong>5. Información importante sobre el Bromo:</strong></p>
                                                                                    <ul>
                                                                                        <li>El bromo es un líquido volátil que se evapora fácilmente y tiene un color rojo oscuro cuando está en forma líquida a temperatura ambiente.</li>
                                                                                        <li>Es un reactivo fuerte, especialmente con materiales orgánicos, y puede reaccionar violentamente con hidrógeno y metales.</li>
                                                                                        <li>Es soluble en agua y en disolventes orgánicos como el alcohol y el éter.</li>
                                                                                    </ul>
                                                                            
                                                                                    <p><strong>Abundancia:</strong></p>
                                                                                    <ul>
                                                                                        <li>El bromo es relativamente raro en la corteza terrestre, encontrándose principalmente en forma de bromuros en agua de mar y depósitos de sal. Su concentración en la corteza terrestre es de aproximadamente 0.00001%.</li>
                                                                                        <li>Las principales fuentes comerciales de bromo son las salmuertas y los depósitos de sal marina.</li>
                                                                                    </ul>
                                                                            
                                                                                    <p><strong>Toxicidad:</strong></p>
                                                                                    <ul>
                                                                                        <li>El bromo es tóxico para los seres humanos. La inhalación de vapores o el contacto con la piel puede causar irritación, y la exposición prolongada puede dañar los pulmones y el sistema nervioso.</li>
                                                                                        <li>En concentraciones altas, puede ser letal. Los síntomas de intoxicación por bromo incluyen náuseas, dolor de cabeza, dificultad para respirar y daño en los riñones y el hígado.</li>
                                                                                    </ul>
                                                                            
                                                                                    <p><strong>Impacto ambiental:</strong></p>
                                                                                    <ul>
                                                                                        <li>El bromo y sus compuestos pueden ser perjudiciales para los ecosistemas acuáticos, especialmente si se liberan en grandes cantidades en cuerpos de agua.</li>
                                                                                        <li>El uso de bromo en productos químicos y fumigantes también puede afectar el suelo y el agua, por lo que se deben seguir regulaciones estrictas para su manejo adecuado.</li>
                                                                                    </ul>
                                                                            
                                                                                    <p><strong>6. Historia y Usos Culturales:</strong></p>
                                                                                    <p>El bromo fue descubierto en 1826 por Antoine Jérôme Balard, quien lo aisló por primera vez a partir de agua de mar. El nombre bromo proviene de la palabra griega "bromos", que significa "mal olor", debido a su fuerte olor a gas.</p>
                                                                                    <p>Históricamente, el bromo fue utilizado en la industria fotográfica y en la producción de placas y películas fotográficas, ya que sus compuestos reaccionan a la luz. También fue usado en la fabricación de productos químicos para la industria textil.</p>
                                                                                `;
                                                                           
                                 } else if (elementName === 'Kriptón') {
                                                                                    popupContent.innerHTML = `
                                                                                        <h2>KRIPTÓN</h2>
                                                                                        <p><strong>Símbolo químico:</strong> Kr</p>
                                                                                        <p><strong>Número atómico:</strong> 36</p>
                                                                                        <p><strong>Grupo:</strong> 18 (gases nobles)</p>
                                                                                        <p><strong>Periodo:</strong> 4</p>
                                                                                        <p><strong>Masa atómica:</strong> 83.798 u</p>
                                                                                        <p><strong>Estado a temperatura y presión normales:</strong> Gas</p>
                                                                                        <p><strong>Color:</strong> Incoloro, pero emite un brillo blanco cuando se encuentra en estado excitado.</p>
                                                                                        
                                                                                        <p><strong>Propiedades:</strong></p>
                                                                                        <ul>
                                                                                            <li>Es un gas noble, lo que significa que es químicamente inerte y no reacciona fácilmente con otros elementos.</li>
                                                                                            <li>Es uno de los gases nobles más raros en la atmósfera terrestre.</li>
                                                                                            <li>Aunque es inerte, forma algunos compuestos con elementos como el flúor.</li>
                                                                                        </ul>
                                                                                
                                                                                        <p><strong>Características Físicas:</strong></p>
                                                                                        <ul>
                                                                                            <li><strong>Punto de ebullición:</strong> -153.22 °C</li>
                                                                                            <li><strong>Punto de fusión:</strong> -157.36 °C</li>
                                                                                            <li><strong>Densidad:</strong> 3.749 g/L a 0 °C y 1 atmósfera</li>
                                                                                        </ul>
                                                                                
                                                                                        <p><strong>Usos:</strong></p>
                                                                                        <ul>
                                                                                            <li><strong>Iluminación:</strong> Se utiliza en la fabricación de lámparas de descarga de alta intensidad, como las lámparas de neón y xenón.</li>
                                                                                            <li><strong>Láseres:</strong> Se emplea en ciertos tipos de láseres, especialmente en la medicina y la investigación científica.</li>
                                                                                            <li><strong>Aerografía:</strong> A veces, se utiliza para mejorar la calidad de las imágenes en algunas técnicas de aerografía.</li>
                                                                                        </ul>
                                                                                
                                                                                        <p><strong>Abundancia y fuentes:</strong></p>
                                                                                        <ul>
                                                                                            <li>El kriptón es extremadamente raro, constituyendo solo 1 parte por millón en la atmósfera.</li>
                                                                                            <li>Se obtiene principalmente del aire a través de destilación fraccionada del aire líquido.</li>
                                                                                        </ul>
                                                                                
                                                                                        <p><strong>Descubrimiento:</strong></p>
                                                                                        <ul>
                                                                                            <li>Fue descubierto en 1898 por William Ramsay y Morris Travers en el Reino Unido.</li>
                                                                                        </ul>
                                                                                
                                                                                        <p><strong>Aplicaciones adicionales:</strong></p>
                                                                                        <ul>
                                                                                            <li>A menudo se utiliza en investigaciones científicas para estudiar la atmósfera o en la fabricación de componentes electrónicos.</li>
                                                                                        </ul>
                                                                                    `;
                                                                                
                                   }  else if (elementName === 'Rubidio') {
                                                                                        popupContent.innerHTML = `
                                                                                            <h2>RUBIDIO</h2>
                                                                                            <p><strong>Símbolo químico:</strong> Rb</p>
                                                                                            <p><strong>Número atómico:</strong> 37</p>
                                                                                            <p><strong>Grupo:</strong> 1 (metales alcalinos)</p>
                                                                                            <p><strong>Periodo:</strong> 5</p>
                                                                                            <p><strong>Masa atómica:</strong> 85.4678 u</p>
                                                                                            <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
                                                                                            <p><strong>Color:</strong> Blanco plateado, metálico</p>
                                                                                            
                                                                                            <p><strong>Propiedades:</strong></p>
                                                                                            <ul>
                                                                                                <li>El rubidio es un metal alcalino, altamente reactivo, especialmente con el agua, con la que forma hidróxido de rubidio y libera hidrógeno.</li>
                                                                                                <li>Es un metal suave y altamente electropositivo.</li>
                                                                                                <li>Tiene un punto de fusión bajo (39.3 °C), lo que le permite fundirse fácilmente por encima de la temperatura ambiente.</li>
                                                                                            </ul>
                                                                                    
                                                                                            <p><strong>Características Físicas:</strong></p>
                                                                                            <ul>
                                                                                                <li><strong>Punto de ebullición:</strong> 688 °C</li>
                                                                                                <li><strong>Punto de fusión:</strong> 39.3 °C</li>
                                                                                                <li><strong>Densidad:</strong> 1.532 g/cm³ a 20 °C</li>
                                                                                                <li><strong>Conductividad eléctrica:</strong> Muy alta</li>
                                                                                            </ul>
                                                                                    
                                                                                            <p><strong>Usos:</strong></p>
                                                                                            <ul>
                                                                                                <li><strong>Investigación científica:</strong> Se utiliza en estudios sobre la teoría de la relatividad y la física cuántica.</li>
                                                                                                <li><strong>Industria de vidrio:</strong> Se emplea en la fabricación de ciertos tipos de vidrio, especialmente en equipos de alta tecnología.</li>
                                                                                                <li><strong>Relojes atómicos:</strong> Se utiliza en algunos relojes atómicos debido a sus propiedades para generar frecuencias precisas.</li>
                                                                                            </ul>
                                                                                    
                                                                                            <p><strong>Abundancia y fuentes:</strong></p>
                                                                                            <ul>
                                                                                                <li>El rubidio es relativamente raro y se encuentra principalmente en minerales como la lepidolita.</li>
                                                                                                <li>Se extrae de fuentes como el mineral de pegmatita y tiene una concentración de alrededor de 0.03 % en la corteza terrestre.</li>
                                                                                            </ul>
                                                                                    
                                                                                            <p><strong>Descubrimiento:</strong></p>
                                                                                            <ul>
                                                                                                <li>Fue descubierto en 1861 por los químicos Robert Bunsen y Gustav Kirchhoff mediante espectroscopía.</li>
                                                                                            </ul>
                                                                                    
                                                                                            <p><strong>Reactividad:</strong></p>
                                                                                            <ul>
                                                                                                <li>El rubidio reacciona violentamente con el agua y el oxígeno, produciendo calor y liberando hidrógeno, lo que puede causar explosiones si se maneja incorrectamente.</li>
                                                                                            </ul>
                                                                                    
                                                                                            <p><strong>Precauciones:</strong></p>
                                                                                            <ul>
                                                                                                <li>Debido a su alta reactividad, debe almacenarse en condiciones controladas, como bajo aceite o en atmósferas inertes para evitar reacciones peligrosas.</li>
                                                                                            </ul>
                                                                                        `;
                                                                                    
                                   }else if (elementName === 'Estroncio') {
            popupContent.innerHTML = `
                <h2>ESTRONCIO</h2>
                <p><strong>Símbolo químico:</strong> Sr</p>
                <p><strong>Número atómico:</strong> 38</p>
                <p><strong>Grupo:</strong> 2 (metales alcalinotérreos)</p>
                <p><strong>Periodo:</strong> 5</p>
                <p><strong>Masa atómica:</strong> 87.62 u</p>
                <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
                <p><strong>Color:</strong> Blanco plateado</p>
                
                <p><strong>Propiedades Químicas:</strong></p>
                <ul>
                    <li><strong>Reactividad con agua:</strong> El estroncio reacciona moderadamente con agua, produciendo hidróxido de estroncio (Sr(OH)₂) y liberando hidrógeno. La ecuación química es: 2Sr + 2H₂O → 2Sr(OH)₂ + H₂</li>
                    <li><strong>Reactividad con oxígeno:</strong> El estroncio se oxida rápidamente en el aire, formando una capa de óxido (SrO) que lo protege parcialmente de una mayor oxidación.</li>
                    <li><strong>Reactividad con halógenos:</strong> Reacciona fácilmente con halógenos, como el cloro, el bromo y el yodo, formando compuestos como el cloruro de estroncio (SrCl₂).</li>
                </ul>
        
                <p><strong>Composición Isotópica:</strong></p>
                <ul>
                    <li><strong>Estroncio-88 (Sr-88):</strong> Es el isótopo más abundante y estable, constituyendo alrededor del 82.6% del estroncio natural.</li>
                    <li><strong>Estroncio-87 (Sr-87):</strong> Isótopo estable que forma una pequeña fracción del estroncio natural.</li>
                    <li><strong>Estroncio-89 (Sr-89):</strong> Isótopo radiactivo utilizado en medicina para tratar el cáncer óseo.</li>
                    <li><strong>Estroncio-90 (Sr-90):</strong> Isótopo radiactivo usado en generadores termoeléctricos y en algunos tratamientos médicos, pero requiere precauciones debido a su larga vida media.</li>
                </ul>
        
                <p><strong>Usos del Estroncio:</strong></p>
                <ul>
                    <li><strong>Pilas nucleares:</strong> El estroncio-90 se usa en generadores termoeléctricos para satélites y sondas espaciales, debido a su capacidad para producir electricidad durante muchos años.</li>
                    <li><strong>Aplicaciones médicas:</strong> El estroncio-89 se utiliza en la radioterapia para tratar el cáncer óseo, emitiendo partículas beta para destruir células cancerosas en los huesos.</li>
                    <li><strong>Composición de aleaciones:</strong> El estroncio se emplea en algunas aleaciones de metales para mejorar las propiedades de los materiales en cohetes y aviones.</li>
                </ul>
        
                <p><strong>Influencia en la Salud:</strong></p>
                <ul>
                    <li>El estroncio-90 puede tener efectos negativos sobre la salud, como causar cáncer debido a su radiactividad, por lo que se toman medidas estrictas para manejarlo de manera segura.</li>
                    <li>El estroncio no radiactivo, como el que se encuentra en minerales naturales, no presenta riesgos significativos para la salud en las concentraciones comunes.</li>
                </ul>
        
                <p><strong>Abundancia en la Tierra:</strong></p>
                <ul>
                    <li>El estroncio se encuentra principalmente en minerales como la celestina (SrSO₄) y la estroncianita (SrCO₃), y se extrae de depósitos de celestina en lugares como España, México y China.</li>
                    <li>A pesar de ser relativamente raro, el estroncio es más abundante que otros metales como el oro.</li>
                </ul>
        
                <p><strong>Presencia en la Naturaleza:</strong></p>
                <ul>
                    <li>El estroncio está presente en concentraciones bajas en la corteza terrestre y es absorbido por organismos debido a su similitud con el calcio, un elemento vital para muchas funciones biológicas.</li>
                </ul>
        
                <p><strong>Historia del Estroncio:</strong></p>
                <ul>
                    <li><strong>Descubrimiento:</strong> Aislado en 1790 por William Cruickshank y Humphry Davy, pero el metal puro fue obtenido en 1808 por Sir Humphry Davy mediante electrólisis de óxido de estroncio.</li>
                    <li><strong>Origen del nombre:</strong> El nombre "estroncio" proviene de la ciudad de Strontian, en Escocia, donde se encontraron minerales que contenían este elemento.</li>
                </ul>
            `;
        
        
         
         
    }else if (elementName === 'Itrio') {
            popupContent.innerHTML = `
                <h2>ITRIO</h2>
                <p><strong>Símbolo químico:</strong> Y</p>
                <p><strong>Número atómico:</strong> 39</p>
                <p><strong>Grupo:</strong> 3</p>
                <p><strong>Periodo:</strong> 5</p>
                <p><strong>Masa atómica:</strong> 88.905 u</p>
                <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
                <p><strong>Color:</strong> Blanco plateado</p>
                
                <p><strong>Propiedades:</strong></p>
                <ul>
                    <li>El itrio es un metal de transición, duro y resistente a la corrosión, con propiedades metálicas similares a las de los lantánidos.</li>
                    <li>No se encuentra libre en la naturaleza, sino en minerales combinados con otros elementos.</li>
                    <li>Gran resistencia a la oxidación y relativamente estable al aire.</li>
                </ul>
        
                <p><strong>Características Físicas:</strong></p>
                <ul>
                    <li><strong>Punto de ebullición:</strong> 3337 °C</li>
                    <li><strong>Punto de fusión:</strong> 1526 °C</li>
                    <li><strong>Densidad:</strong> 4.472 g/cm³ a 20 °C</li>
                    <li><strong>Conductividad eléctrica:</strong> Moderada</li>
                </ul>
        
                <p><strong>Usos del Itrio:</strong></p>
                <ul>
                    <li><strong>Materiales de alta tecnología:</strong> Se utiliza en la fabricación de LEDs, pantallas LCD, láseres y superconductores como el YBCO (óxido de itrio-bario-cobre).</li>
                    <li><strong>Cerámica y vidrios especiales:</strong> Se usa en la fabricación de cerámica de alta calidad y vidrios resistentes al calor y la corrosión.</li>
                    <li><strong>Catalizadores y aleaciones:</strong> Se emplea en procesos industriales como catalizador y en aleaciones metálicas.</li>
                    <li><strong>Medicina:</strong> El isótopo itrio-90 se usa en la radioterapia para tratar ciertos tipos de cáncer, especialmente el cáncer hepático.</li>
                </ul>
        
                <p><strong>Abundancia y Fuentes:</strong></p>
                <ul>
                    <li>El itrio se encuentra principalmente en minerales como xenotima y bastnäsite, y se extrae de depósitos de tierras raras.</li>
                    <li>Su abundancia total en la corteza terrestre es baja, alrededor de 33 partes por millón.</li>
                </ul>
        
                <p><strong>Descubrimiento:</strong></p>
                <ul>
                    <li>Descubierto en 1794 por Jöns Jacob Berzelius y Nils Gabriel Sefström a partir de un mineral de tierras raras encontrado en Ytterby, Suecia.</li>
                    <li>El mineral fue llamado itrita en honor a la ciudad de Ytterby.</li>
                </ul>
        
                <p><strong>Reactividad:</strong></p>
                <ul>
                    <li>Es relativamente estable al aire, formando una capa de óxido que lo protege.</li>
                    <li>Reacciona lentamente con ácidos formando sales de itrio como el cloruro de itrio (YCl₃).</li>
                </ul>
        
                <p><strong>Isótopos:</strong></p>
                <ul>
                    <li><strong>Ytrio-89:</strong> Isótopo estable más común.</li>
                    <li><strong>Ytrio-90:</strong> Isótopo radiactivo utilizado en aplicaciones médicas como la radioterapia para el tratamiento del cáncer hepático.</li>
                    <li><strong>Ytrio-88:</strong> Isótopo estable utilizado en estudios de investigación.</li>
                </ul>
        
                <p><strong>Aplicaciones en la Energía Nuclear:</strong></p>
                <ul>
                    <li>El itrio-90 se utiliza en generadores termoeléctricos y dispositivos nucleares debido a su capacidad para absorber neutrones.</li>
                </ul>
        
                <p><strong>Precauciones:</strong></p>
                <ul>
                    <li>El itrio en su forma pura no presenta riesgos significativos para la salud humana.</li>
                    <li>Los compuestos radiactivos como el itrio-90 deben ser manejados con cuidado debido a su radiactividad.</li>
                    <li>Las exposiciones a grandes cantidades de polvo de itrio pueden ser tóxicas, por lo que se deben seguir normas de seguridad adecuadas.</li>
                </ul>
            `;

    }else if (elementName === 'Circonio') {
                popupContent.innerHTML = `
                    <h2>CIRCONIO</h2>
                    <p><strong>Símbolo químico:</strong> Zr</p>
                    <p><strong>Número atómico:</strong> 40</p>
                    <p><strong>Grupo:</strong> 4</p>
                    <p><strong>Periodo:</strong> 5</p>
                    <p><strong>Masa atómica:</strong> 91.224 u</p>
                    <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
                    <p><strong>Color:</strong> Blanco plateado, metálico</p>
                    
                    <p><strong>Propiedades:</strong></p>
                    <ul>
                        <li>Metal de transición con alta resistencia a la corrosión, especialmente en ambientes con agua y cloro.</li>
                        <li>Material muy duro y resistente a temperaturas extremas.</li>
                        <li>Forma una capa de óxido que lo protege de la oxidación.</li>
                    </ul>
            
                    <p><strong>Características Físicas:</strong></p>
                    <ul>
                        <li><strong>Punto de ebullición:</strong> 4377 °C</li>
                        <li><strong>Punto de fusión:</strong> 1855 °C</li>
                        <li><strong>Densidad:</strong> 6.52 g/cm³ a 20 °C</li>
                        <li><strong>Conductividad eléctrica:</strong> Moderada</li>
                    </ul>
            
                    <p><strong>Usos del Circonio:</strong></p>
                    <ul>
                        <li><strong>Reactor nuclear:</strong> Se usa en la industria nuclear debido a su resistencia a la corrosión y su baja absorción de neutrones.</li>
                        <li><strong>Aleaciones de alta temperatura:</strong> Empleadas en motores a reacción y turbinas aeroespaciales.</li>
                        <li><strong>Cerámica y vidrio:</strong> Usado en la fabricación de porcelanas, sanitarios y vidrios resistentes al calor.</li>
                        <li><strong>Papel y textiles:</strong> Se utiliza en pigmentos y recubrimientos industriales.</li>
                        <li><strong>Pinturas y recubrimientos:</strong> Empleado en recubrimientos resistentes a la abrasión y corrosión.</li>
                        <li><strong>Medicina:</strong> El dióxido de circonio (ZrO₂) se usa en implantes dentales y prótesis médicas.</li>
                    </ul>
            
                    <p><strong>Abundancia y Fuentes:</strong></p>
                    <ul>
                        <li>Abundancia en la corteza terrestre: ~0.02%.</li>
                        <li>Se encuentra en minerales como la circonita (ZrSiO₄) y la baddeleyita (ZrO₂).</li>
                        <li>Su extracción y purificación son costosas.</li>
                    </ul>
            
                    <p><strong>Descubrimiento:</strong></p>
                    <ul>
                        <li>Descubierto en 1789 por Martin Heinrich Klaproth a partir del mineral circonita.</li>
                        <li>Su nombre proviene del mineral "zirkon", derivado del árabe "zarqūn" (rojo).</li>
                    </ul>
            
                    <p><strong>Reactividad:</strong></p>
                    <ul>
                        <li>Forma una capa de óxido protectora contra la corrosión.</li>
                        <li>No reacciona fácilmente con ácidos diluidos ni bases fuertes.</li>
                        <li>Forma compuestos con halógenos y otros elementos reactivos bajo condiciones controladas.</li>
                    </ul>
            
                    <p><strong>Isótopos:</strong></p>
                    <ul>
                        <li><strong>Zr-90:</strong> Isótopo más abundante (~50% del circonio natural).</li>
                        <li><strong>Zr-91:</strong> Otro isótopo estable y común.</li>
                        <li><strong>Zr-94:</strong> Isótopo radiactivo con aplicaciones científicas.</li>
                        <li><strong>Zr-89 y Zr-93:</strong> Isótopos radiactivos producidos artificialmente.</li>
                    </ul>
            
                    <p><strong>Aplicaciones en la Energía Nuclear:</strong></p>
                    <ul>
                        <li>Se utiliza en aleaciones para combustibles nucleares y barras de control en reactores.</li>
                        <li>Alta resistencia al calor y la corrosión, ideal para entornos nucleares.</li>
                    </ul>
            
                    <p><strong>Precauciones:</strong></p>
                    <ul>
                        <li>El circonio puro no es tóxico.</li>
                        <li>El polvo de circonio puede irritar los pulmones si se inhala.</li>
                        <li>Los isótopos radiactivos deben ser manejados con precaución.</li>
                    </ul>
                `;
        
     } else if (elementName === 'Niobio') {
                    popupContent.innerHTML = `
                        <h2>NIOBIO</h2>
                        <p><strong>Símbolo químico:</strong> Nb</p>
                        <p><strong>Número atómico:</strong> 41</p>
                        <p><strong>Grupo:</strong> 5</p>
                        <p><strong>Periodo:</strong> 5</p>
                        <p><strong>Masa atómica:</strong> 92.906 u</p>
                        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
                        <p><strong>Color:</strong> Gris plateado</p>
                
                        <p><strong>Propiedades:</strong></p>
                        <ul>
                            <li>Metal de transición con alta resistencia a la corrosión.</li>
                            <li>Conserva sus propiedades a temperaturas extremadamente bajas.</li>
                            <li>Buen conductor de electricidad, aunque no tanto como el cobre o la plata.</li>
                        </ul>
                
                        <p><strong>Características Físicas:</strong></p>
                        <ul>
                            <li><strong>Punto de ebullición:</strong> 4744 °C</li>
                            <li><strong>Punto de fusión:</strong> 2477 °C</li>
                            <li><strong>Densidad:</strong> 8.57 g/cm³ a 20 °C</li>
                            <li><strong>Conductividad eléctrica:</strong> Alta, aunque menor que la del cobre.</li>
                        </ul>
                
                        <p><strong>Usos del Niobio:</strong></p>
                        <ul>
                            <li><strong>Aleaciones de acero:</strong> Usado en acero inoxidable y estructuras de alta resistencia.</li>
                            <li><strong>Superconductores:</strong> Empleado en imanes superconductores para resonancia magnética y aceleradores de partículas.</li>
                            <li><strong>Electrónica:</strong> Presente en condensadores y circuitos avanzados.</li>
                            <li><strong>Aeroespacial:</strong> Utilizado en motores a reacción y sistemas de propulsión espacial.</li>
                            <li><strong>Industria nuclear:</strong> Componente en reactores debido a su resistencia a la radiación y temperaturas extremas.</li>
                        </ul>
                
                        <p><strong>Abundancia y Fuentes:</strong></p>
                        <ul>
                            <li>Extraído de minerales como la columbita y la niobita.</li>
                            <li>Brasil es el mayor productor mundial (90% de la producción).</li>
                        </ul>
                
                        <p><strong>Descubrimiento:</strong></p>
                        <ul>
                            <li>Descubierto en 1801 por Charles Hatchett a partir del mineral columbita.</li>
                            <li>El nombre proviene de Niobe, hija de Tántalo en la mitología griega.</li>
                        </ul>
                
                        <p><strong>Reactividad:</strong></p>
                        <ul>
                            <li>Forma una capa protectora de óxido que lo hace resistente a la corrosión.</li>
                            <li>A temperaturas elevadas, reacciona lentamente con oxígeno y halógenos.</li>
                        </ul>
                
                        <p><strong>Isótopos:</strong></p>
                        <ul>
                            <li><strong>Nb-93:</strong> Único isótopo estable.</li>
                            <li><strong>Nb-94:</strong> Isótopo radiactivo con aplicaciones en investigación nuclear.</li>
                        </ul>
                
                        <p><strong>Aplicaciones en la Energía Nuclear:</strong></p>
                        <ul>
                            <li>Utilizado en aleaciones para reactores nucleares debido a su alta resistencia.</li>
                        </ul>
                
                        <p><strong>Precauciones:</strong></p>
                        <ul>
                            <li>El niobio puro no es tóxico.</li>
                            <li>Algunos compuestos, como el fluoruro de niobio (NbF₄), pueden ser peligrosos.</li>
                            <li>El polvo de niobio es inflamable en condiciones específicas.</li>
                        </ul>
                
                        <p><strong>Datos Curiosos:</strong></p>
                        <ul>
                            <li>Baja absorción de neutrones, ideal para reactores nucleares.</li>
                            <li>Clave en la fabricación de superconductores y aplicaciones aeroespaciales.</li>
                        </ul>
                    `;
            
     }else if (elementName === 'Molibdeno') {
                        popupContent.innerHTML = `
                            <h2>MOLIBDENO</h2>
                            <p><strong>Símbolo químico:</strong> Mo</p>
                            <p><strong>Número atómico:</strong> 42</p>
                            <p><strong>Grupo:</strong> 6</p>
                            <p><strong>Periodo:</strong> 5</p>
                            <p><strong>Masa atómica:</strong> 95.95 u</p>
                            <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
                            <p><strong>Color:</strong> Gris plateado</p>
                    
                            <p><strong>Propiedades:</strong></p>
                            <ul>
                                <li>Metal de transición duro, resistente a la corrosión y a temperaturas extremas.</li>
                                <li>Clave en la industria por su capacidad de formar aleaciones resistentes a la oxidación y al desgaste.</li>
                            </ul>
                    
                            <p><strong>Características Físicas:</strong></p>
                            <ul>
                                <li><strong>Punto de ebullición:</strong> 4639 °C</li>
                                <li><strong>Punto de fusión:</strong> 2623 °C</li>
                                <li><strong>Densidad:</strong> 10.28 g/cm³ a 20 °C</li>
                                <li><strong>Conductividad eléctrica:</strong> Baja comparada con el cobre, pero excelente conductor térmico.</li>
                            </ul>
                    
                            <p><strong>Usos del Molibdeno:</strong></p>
                            <ul>
                                <li><strong>Aleaciones de acero y hierro:</strong> Usado en acero inoxidable y de alta resistencia para motores a reacción y turbinas.</li>
                                <li><strong>Electrónica y microchips:</strong> Se usa en transistores y circuitos integrados debido a su resistencia a la corrosión.</li>
                                <li><strong>Lubricantes de alta temperatura:</strong> Utilizado en la industria automotriz y maquinaria pesada.</li>
                                <li><strong>Industria nuclear:</strong> Componente en reactores por su resistencia a la radiación y corrosión.</li>
                                <li><strong>Molibdato de amonio:</strong> Utilizado en tintes, pigmentos y productos químicos.</li>
                                <li><strong>Medicina:</strong> El isótopo Mo-99 es esencial en la producción de Tc-99m para gammagrafías.</li>
                            </ul>
                    
                            <p><strong>Abundancia y Fuentes:</strong></p>
                            <ul>
                                <li>Presente en la corteza terrestre con una concentración de ~1.5 ppm.</li>
                                <li>Se encuentra en minerales como molibdenita (MoS₂) y wulfenita (PbMoO₄).</li>
                                <li>Principales productores: China, EE.UU., Chile y Perú.</li>
                            </ul>
                    
                            <p><strong>Descubrimiento:</strong></p>
                            <ul>
                                <li>Descubierto en 1778 por Carl Wilhelm Scheele a partir de molibdenita.</li>
                                <li>El nombre proviene del griego "molybdos" (plomo), por su similitud con minerales de plomo.</li>
                            </ul>
                    
                            <p><strong>Reactividad:</strong></p>
                            <ul>
                                <li>Alta resistencia a la corrosión, formando una capa protectora de óxido.</li>
                                <li>Reacciona con oxígeno y halógenos a temperaturas elevadas.</li>
                            </ul>
                    
                            <p><strong>Isótopos:</strong></p>
                            <ul>
                                <li><strong>Mo-98:</strong> Isótopo más abundante.</li>
                                <li><strong>Mo-99:</strong> Isótopo radiactivo usado en medicina nuclear.</li>
                                <li><strong>Mo-95:</strong> Aplicaciones en investigación científica.</li>
                            </ul>
                    
                            <p><strong>Aplicaciones en la Energía Nuclear:</strong></p>
                            <ul>
                                <li>Utilizado en aleaciones de molibdeno y tungsteno en reactores.</li>
                                <li>Mo-99 es clave en la producción de Tc-99m para diagnósticos médicos.</li>
                            </ul>
                    
                            <p><strong>Presencia en la Naturaleza:</strong></p>
                            <ul>
                                <li>Se encuentra en minerales como molibdenita, wulfenita y powellita.</li>
                                <li>Requiere procesos químicos específicos para su extracción.</li>
                            </ul>
                    
                            <p><strong>Historia y Origen del Nombre:</strong></p>
                            <ul>
                                <li>Nombrado por su similitud con el plomo.</li>
                                <li>Aislado por Peter Woulfe en 1782.</li>
                            </ul>
                    
                            <p><strong>Precauciones:</strong></p>
                            <ul>
                                <li>El molibdeno metálico es seguro, pero algunos compuestos pueden ser tóxicos.</li>
                                <li>El polvo de molibdeno puede causar irritación respiratoria.</li>
                            </ul>
                    
                            <p><strong>Datos Curiosos:</strong></p>
                            <ul>
                                <li>Esencial para la vida en pequeñas cantidades, clave en el metabolismo del nitrógeno.</li>
                                <li>Las plantas lo necesitan para la fijación de nitrógeno.</li>
                                <li>Resiste temperaturas extremas, ideal para motores a reacción.</li>
                            </ul>
                        `;
     }else if (elementName === 'Tecnecio') {
                            popupContent.innerHTML = `
                                <h2>TECNECIO</h2>
                                <p><strong>Símbolo químico:</strong> Tc</p>
                                <p><strong>Número atómico:</strong> 43</p>
                                <p><strong>Grupo:</strong> 7</p>
                                <p><strong>Periodo:</strong> 5</p>
                                <p><strong>Masa atómica:</strong> 98 u</p>
                                <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
                                <p><strong>Color:</strong> Gris plateado</p>
                        
                                <p><strong>Propiedades:</strong></p>
                                <ul>
                                    <li>Primer elemento descubierto de forma artificial.</li>
                                    <li>Metal de transición radiactivo con propiedades similares al manganeso y renio.</li>
                                </ul>
                        
                                <p><strong>Características Físicas:</strong></p>
                                <ul>
                                    <li><strong>Punto de ebullición:</strong> 4265 °C</li>
                                    <li><strong>Punto de fusión:</strong> 2157 °C</li>
                                    <li><strong>Densidad:</strong> 11 g/cm³ a 20 °C</li>
                                    <li><strong>Radiactividad:</strong> Emite radiación beta.</li>
                                </ul>
                        
                                <p><strong>Producción:</strong></p>
                                <ul>
                                    <li>Producido artificialmente en reactores nucleares al bombardear Molibdeno-98 con neutrones.</li>
                                    <li>Se genera como subproducto en reactores de fisión nuclear.</li>
                                </ul>
                        
                                <p><strong>Usos del Tecnecio:</strong></p>
                                <ul>
                                    <li><strong>Medicina nuclear:</strong> Tc-99m es el isótopo más utilizado en gammagrafía y diagnóstico por imágenes.</li>
                                    <li><strong>Investigación nuclear:</strong> Estudio de la radiactividad y formación de elementos pesados.</li>
                                    <li><strong>Radiografía industrial:</strong> Usado para pruebas no destructivas de materiales.</li>
                                    <li><strong>Aleaciones metálicas:</strong> Se investiga su uso para mejorar la resistencia a la corrosión.</li>
                                </ul>
                        
                                <p><strong>Abundancia y Fuentes:</strong></p>
                                <ul>
                                    <li>Presente en la corteza terrestre en trazas mínimas debido a su descomposición radiactiva.</li>
                                    <li>Encontrado en algunas estrellas y supernovas.</li>
                                </ul>
                        
                                <p><strong>Descubrimiento:</strong></p>
                                <ul>
                                    <li>Descubierto en 1937 por Carlo Perrier y Emilio Segrè.</li>
                                    <li>Nombrado "Tecnecio" del griego "techne" que significa "artificial".</li>
                                </ul>
                        
                                <p><strong>Reactividad:</strong></p>
                                <ul>
                                    <li>Reacciona con ácidos y oxígeno formando compuestos radiactivos.</li>
                                    <li>Puede formar pertecnetato en soluciones acuosas.</li>
                                </ul>
                        
                                <p><strong>Isótopos:</strong></p>
                                <ul>
                                    <li><strong>Tc-99:</strong> Isótopo con una vida media de 210,000 años.</li>
                                    <li><strong>Tc-99m:</strong> Isótopo de vida media corta (6 horas) usado en medicina.</li>
                                </ul>
                        
                                <p><strong>Aplicaciones en la Energía Nuclear:</strong></p>
                                <ul>
                                    <li>Subproducto en reactores nucleares, investigado para aplicaciones en almacenamiento de desechos radiactivos.</li>
                                </ul>
                        
                                <p><strong>Precauciones:</strong></p>
                                <ul>
                                    <li>Debido a su radiactividad, debe manipularse con protección adecuada.</li>
                                    <li>Se almacena en contenedores blindados para evitar la exposición a la radiación.</li>
                                </ul>
                        
                                <p><strong>Datos Curiosos:</strong></p>
                                <ul>
                                    <li>Fue el primer elemento creado artificialmente en un laboratorio.</li>
                                    <li>Se ha detectado Tecnecio en algunas estrellas, lo que demuestra procesos de nucleosíntesis en el espacio.</li>
                                </ul>
                            `;
                        
     }else if (elementName === 'Rutenio') {
        popupContent.innerHTML = `
            <h2>RUTENIO</h2>
            <p><strong>Símbolo químico:</strong> Ru</p>
            <p><strong>Número atómico:</strong> 44</p>
            <p><strong>Grupo:</strong> 8</p>
            <p><strong>Periodo:</strong> 5</p>
            <p><strong>Masa atómica:</strong> 101.07 u</p>
            <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
            <p><strong>Color:</strong> Blanco plateado</p>
    
            <p><strong>Propiedades:</strong></p>
            <ul>
                <li>Metal de transición raro, resistente a la corrosión.</li>
                <li>Se encuentra en minerales de platino y níquel.</li>
            </ul>
    
            <p><strong>Producción:</strong></p>
            <ul>
                <li>Obtenido como subproducto en la minería del platino y paladio.</li>
                <li>Refinado mediante electrólisis y reducción química.</li>
            </ul>
    
            <p><strong>Usos del Rutenio:</strong></p>
            <ul>
                <li><strong>Aleaciones:</strong> Mejora la dureza y resistencia de platino y paladio.</li>
                <li><strong>Catalizadores:</strong> Usado en hidrogenación y producción de amoniaco.</li>
                <li><strong>Electrónica:</strong> Utilizado en discos duros y contactos eléctricos.</li>
                <li><strong>Medicina:</strong> Investigado para tratamientos contra el cáncer.</li>
            </ul>
    
            <p><strong>Descubrimiento:</strong></p>
            <ul>
                <li>Descubierto en 1844 por Karl Klaus.</li>
                <li>Nombrado en honor a Rusia (Ruthenia).</li>
            </ul>
    
            <p><strong>Propiedades Físicas:</strong></p>
            <ul>
                <li><strong>Punto de fusión:</strong> 2334 °C</li>
                <li><strong>Punto de ebullición:</strong> 4150 °C</li>
                <li><strong>Densidad:</strong> 12.37 g/cm³</li>
            </ul>
        `;

      } else if (elementName === 'Rutenio') {
            popupContent.innerHTML = `
                <h2>RUTENIO</h2>
                <p><strong>Símbolo químico:</strong> Ru</p>
                <p><strong>Número atómico:</strong> 44</p>
                <p><strong>Grupo:</strong> 8</p>
                <p><strong>Periodo:</strong> 5</p>
                <p><strong>Masa atómica:</strong> 101.07 u</p>
                <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
                <p><strong>Color:</strong> Blanco plateado</p>
        
                <p><strong>Propiedades:</strong></p>
                <ul>
                    <li>Metal de transición raro, resistente a la corrosión.</li>
                    <li>Se encuentra en minerales de platino y níquel.</li>
                </ul>
        
                <p><strong>Producción:</strong></p>
                <ul>
                    <li>Obtenido como subproducto en la minería del platino y paladio.</li>
                    <li>Refinado mediante electrólisis y reducción química.</li>
                </ul>
        
                <p><strong>Usos del Rutenio:</strong></p>
                <ul>
                    <li><strong>Aleaciones:</strong> Mejora la dureza y resistencia de platino y paladio.</li>
                    <li><strong>Catalizadores:</strong> Usado en hidrogenación y producción de amoniaco.</li>
                    <li><strong>Electrónica:</strong> Utilizado en discos duros y contactos eléctricos.</li>
                    <li><strong>Medicina:</strong> Investigado para tratamientos contra el cáncer.</li>
                </ul>
        
                <p><strong>Descubrimiento:</strong></p>
                <ul>
                    <li>Descubierto en 1844 por Karl Klaus.</li>
                    <li>Nombrado en honor a Rusia (Ruthenia).</li>
                </ul>
        
                <p><strong>Propiedades Físicas:</strong></p>
                <ul>
                    <li><strong>Punto de fusión:</strong> 2334 °C</li>
                    <li><strong>Punto de ebullición:</strong> 4150 °C</li>
                    <li><strong>Densidad:</strong> 12.37 g/cm³</li>
                </ul>
            `;
        
       } else if (elementName === 'Rodio') {
                popupContent.innerHTML = `
                    <h2>RODIO</h2>
                    <p><strong>Símbolo químico:</strong> Rh</p>
                    <p><strong>Número atómico:</strong> 45</p>
                    <p><strong>Grupo:</strong> 9</p>
                    <p><strong>Periodo:</strong> 5</p>
                    <p><strong>Masa atómica:</strong> 102.91 u</p>
                    <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
                    <p><strong>Color:</strong> Blanco plateado brillante</p>
            
                    <h3>¿Qué es el Rodio?</h3>
                    <p>El Rodio (Rh) es un elemento químico de la tabla periódica con el símbolo Rh y el número atómico 45. Es un metal de transición perteneciente al grupo 10 de la tabla periódica, en el período 5. El rodio es un metal raro, de color blanco plateado, brillante y altamente reflectante. Se encuentra principalmente en minerales de platino y en depósitos de níquel. El nombre "rodio" proviene del griego "rhodon", que significa "rosa", debido al color rosado de algunos de sus compuestos.</p>
            
                    <h3>¿Cómo se produce el Rodio?</h3>
                    <p>El Rodio es uno de los metales más raros de la Tierra y no se encuentra en grandes cantidades. Se produce como subproducto en la minería de otros metales preciosos, como el platino y el paladio, que se encuentran en concentraciones mucho mayores. El proceso de producción incluye:</p>
                    <ul>
                        <li><strong>Minería y extracción:</strong> El rodio se obtiene principalmente de los minerales de platino, donde se encuentra como una mezcla con otros metales del grupo del platino. Los depósitos más importantes de estos minerales se encuentran en Sudáfrica, Rusia, y Canadá.</li>
                        <li><strong>Refinación:</strong> Una vez extraído el mineral, se somete a procesos de refinación por medio de técnicas como la electrólisis o reducción química para separar el rodio de otros metales presentes.</li>
                        <li><strong>Procesos de extracción secundaria:</strong> En algunos casos, el rodio también se obtiene a partir de la recuperación de metales preciosos en productos desechados, como convertidores catalíticos usados en automóviles.</li>
                    </ul>
            
                    <h3>¿Cómo se almacena el Rodio?</h3>
                    <p>El rodio es un metal muy estable que no se oxida fácilmente, lo que lo hace resistente a la corrosión y a la mayoría de los ácidos, excepto el ácido nítrico y el agua regia (una mezcla de ácido clorhídrico y ácido nítrico). A pesar de su resistencia a la oxidación, el rodio debe almacenarse en condiciones seguras debido a su alto valor y su rareza.</p>
                    <ul>
                        <li><strong>Contenedores de seguridad:</strong> Debido a su alto valor y rareza, el rodio se almacena en contenedores sellados o en recipientes de seguridad en condiciones controladas, para evitar pérdidas o robos.</li>
                        <li><strong>Almacenamiento en seco:</strong> A pesar de su resistencia a la corrosión, el rodio debe almacenarse en lugares secos para evitar reacciones con humedad o con ciertos compuestos que puedan contaminarlo o afectarlo a largo plazo.</li>
                    </ul>
            
                    <h3>¿Qué aplicaciones tiene el Rodio?</h3>
                    <p>El rodio es uno de los metales más valiosos y tiene diversas aplicaciones en la industria, la tecnología y la joyería. A continuación, se detallan algunas de sus principales aplicaciones:</p>
                    <h4>Aplicaciones industriales</h4>
                    <ul>
                        <li><strong>Catalizadores automotrices:</strong> El rodio se utiliza principalmente en convertidores catalíticos para reducir las emisiones de gases contaminantes de los vehículos.</li>
                        <li><strong>Fabricación de aleaciones:</strong> El rodio se utiliza en la fabricación de aleaciones con otros metales como el platino, paladio y rutenio.</li>
                        <li><strong>Fabricación de contactos eléctricos:</strong> El rodio se emplea en contactos eléctricos y componentes de interruptores debido a su resistencia al desgaste.</li>
                    </ul>
                    <h4>Aplicaciones en joyería</h4>
                    <ul>
                        <li><strong>Baño de rodio en joyería:</strong> El rodio se utiliza como revestimiento de joyas de plata o oro para mejorar su apariencia y resistencia.</li>
                    </ul>
                    <h4>Aplicaciones en investigación</h4>
                    <ul>
                        <li><strong>Electrónica avanzada:</strong> El rodio se utiliza en aplicaciones de microelectrónica y sistemas de comunicación.</li>
                        <li><strong>Investigación sobre catalizadores:</strong> El rodio se emplea en estudios sobre catalizadores y reacciones químicas.</li>
                    </ul>
                    <h4>Aplicaciones en la industria de la química</h4>
                    <ul>
                        <li><strong>Catalizadores en la industria química:</strong> El rodio se utiliza como catalizador en diversas reacciones químicas.</li>
                    </ul>
                    <h4>Aplicaciones médicas (experimental)</h4>
                    <ul>
                        <li>Investigado para su posible uso en aplicaciones de radioterapia y tratamientos de cáncer.</li>
                    </ul>
            
                    <h3>Características adicionales y propiedades</h3>
                    <h4>Propiedades físicas</h4>
                    <ul>
                        <li><strong>Densidad:</strong> 12.41 g/cm³</li>
                        <li><strong>Punto de fusión:</strong> 1,964°C</li>
                        <li><strong>Excelente conductor de electricidad y calor.</li>
                    </ul>
                    <h4>Propiedades químicas</h4>
                    <ul>
                        <li>Resistente a la corrosión, especialmente en condiciones de alta temperatura.</li>
                        <li>No se oxida fácilmente en el aire y es resistente a los ácidos y álcalis.</li>
                    </ul>
                    <h4>Valor y rareza</h4>
                    <p>El rodio es uno de los metales más caros del mundo debido a su rareza y la alta demanda en aplicaciones industriales.</p>
                `;
            
            } else if (elementName === 'Paladio') {
                popupContent.innerHTML = `
                    <h2>PALADIO</h2>
                    <p><strong>Símbolo químico:</strong> Pd</p>
                    <p><strong>Número atómico:</strong> 46</p>
                    <p><strong>Grupo:</strong> 10</p>
                    <p><strong>Periodo:</strong> 5</p>
                    <p><strong>Masa atómica:</strong> 106.42 u</p>
                    <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
                    <p><strong>Color:</strong> Blanco plateado</p>
            
                    <p><strong>¿Qué es el Paladio?</strong></p>
                    <p>El Paladio (Pd) es un metal de transición que pertenece al grupo 10 de la tabla periódica y se encuentra en el período 5. Es un metal blanco plateado con una excelente capacidad para absorber hidrógeno, lo que lo hace único en comparación con otros metales. Fue descubierto en 1803 por el químico inglés William Hyde Wollaston y su nombre proviene de Pallas, un asteroide recién descubierto en ese momento.</p>
            
                    <p><strong>¿Cómo se produce el Paladio?</strong></p>
                    <ul>
                        <li><strong>Minería:</strong> Extraído principalmente de depósitos de platino y níquel en países como Sudáfrica, Rusia y Canadá.</li>
                        <li><strong>Refinación:</strong> Refinado por medio de electrólisis o reducción química para separar el paladio de otros metales.</li>
                        <li><strong>Reciclaje:</strong> Una parte significativa proviene de productos reciclados, como catalizadores automotrices y componentes electrónicos.</li>
                    </ul>
            
                    <p><strong>¿Cómo se almacena el Paladio?</strong></p>
                    <ul>
                        <li><strong>Contenedores sellados:</strong> Se almacena en contenedores sellados para evitar su pérdida o robo.</li>
                        <li><strong>Condiciones secas:</strong> Se debe almacenar en lugares secos para evitar la humedad.</li>
                        <li><strong>Joyería y componentes electrónicos:</strong> Los productos de paladio, como joyas, se almacenan en lugares protegidos de la luz directa.</li>
                    </ul>
            
                    <p><strong>¿Qué aplicaciones tiene el Paladio?</strong></p>
                    <p><strong>Aplicaciones industriales:</strong></p>
                    <ul>
                        <li><strong>Catalizadores automotrices:</strong> Usado en convertidores catalíticos para reducir emisiones de gases contaminantes.</li>
                        <li><strong>Catalizadores en la industria química:</strong> Se utiliza en la hidrogenación de aceites vegetales y en la síntesis de productos químicos.</li>
                        <li><strong>Electrónica:</strong> Se usa en contactos eléctricos y componentes electrónicos avanzados debido a su alta conductividad eléctrica.</li>
                        <li><strong>Pilas de combustible y almacenamiento de hidrógeno:</strong> Clave en el desarrollo de pilas de combustible y sistemas de almacenamiento de hidrógeno.</li>
                    </ul>
            
                    <p><strong>Aplicaciones en joyería:</strong></p>
                    <ul>
                        <li><strong>Joyas de paladio:</strong> Se utiliza en la fabricación de joyas debido a su durabilidad y resistencia a la corrosión.</li>
                        <li><strong>Aleaciones de paladio:</strong> Se usa en aleaciones de oro para producir joyas más ligeras y resistentes.</li>
                    </ul>
            
                    <p><strong>Aplicaciones en investigación:</strong></p>
                    <ul>
                        <li><strong>Investigación en materiales y química:</strong> Usado en la investigación química debido a sus propiedades catalíticas únicas.</li>
                        <li><strong>Electrónica y nanotecnología:</strong> Estudiado para aplicaciones en nanotecnología y dispositivos electrónicos de próxima generación.</li>
                    </ul>
            
                    <p><strong>Aplicaciones en medicina:</strong></p>
                    <ul>
                        <li><strong>Implantes dentales:</strong> Utilizado en la fabricación de implantes y coronas dentales por su biocompatibilidad.</li>
                        <li><strong>Tratamientos de cáncer:</strong> Algunos compuestos de paladio están siendo estudiados para su uso en tratamientos contra el cáncer.</li>
                    </ul>
            
                    <p><strong>Características adicionales y propiedades:</strong></p>
                    <ul>
                        <li><strong>Propiedades físicas:</strong> Alta densidad (12.02 g/cm³), punto de fusión de 1,554°C, maleable y ductil.</li>
                        <li><strong>Propiedades químicas:</strong> Resistente a la oxidación y a los ácidos, y capaz de absorber hidrógeno en su estructura cristalina.</li>
                        <li><strong>Valor y rareza:</strong> Es uno de los metales más caros debido a su rareza y alta demanda.</li>
                    </ul>
                `;
            
            } else if (elementName === 'Plata') {
                popupContent.innerHTML = `
                    <h2>PLATA</h2>
                    <p><strong>Símbolo químico:</strong> Ag</p>
                    <p><strong>Número atómico:</strong> 47</p>
                    <p><strong>Grupo:</strong> 11</p>
                    <p><strong>Periodo:</strong> 5</p>
                    <p><strong>Masa atómica:</strong> 107.87 u</p>
                    <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
                    <p><strong>Color:</strong> Blanco brillante</p>
            
                    <p><strong>Historia de la Plata</strong></p>
                    <ul>
                        <li><strong>Civilizaciones antiguas:</strong> Utilizada en Egipto, Grecia y Roma en joyas y monedas.</li>
                        <li><strong>Uso en monedas:</strong> Durante la Edad Antigua y Media, las monedas de plata fueron fundamentales en el comercio.</li>
                        <li><strong>Auge de la minería de plata:</strong> En los siglos XVI y XVII, especialmente en México y Perú, la minería de plata se expandió enormemente.</li>
                    </ul>
            
                    <p><strong>Formas de plata en la naturaleza</strong></p>
                    <ul>
                        <li><strong>Plata nativa:</strong> Se encuentra en su forma metálica pura en depósitos naturales, aunque es rara.</li>
                        <li><strong>Minerales:</strong> Los principales minerales que contienen plata son la argentita (Ag₂S) y la acantita.</li>
                        <li><strong>Aleaciones de plata:</strong> La plata a menudo se encuentra en aleaciones con metales como plomo, cobre y oro.</li>
                    </ul>
            
                    <p><strong>Propiedades y Características de la Plata</strong></p>
                    <ul>
                        <li><strong>Propiedades físicas:</strong> La plata es maleable, ductil, y el mejor conductor de electricidad y calor.</li>
                        <li><strong>Resistencia a la corrosión:</strong> Aunque resistente, se oscurece en presencia de azufre.</li>
                        <li><strong>Reactividad:</strong> Reacciona con halógenos como el cloro, formando haluros de plata.</li>
                    </ul>
            
                    <p><strong>Producción de Plata</strong></p>
                    <ul>
                        <li><strong>Extracción del mineral:</strong> Extraída principalmente de minerales como la argentita y acantita mediante minería.</li>
                        <li><strong>Refinación:</strong> Se utiliza fundición, cianuración y electrorefinación para obtener plata pura.</li>
                        <li><strong>Reciclaje:</strong> La plata se recicla de productos viejos como joyería y componentes electrónicos.</li>
                    </ul>
            
                    <p><strong>Aplicaciones Adicionales de la Plata</strong></p>
                    <ul>
                        <li><strong>Catalizadores:</strong> Utilizada en procesos catalíticos, como la producción de formaldehído.</li>
                        <li><strong>Medicina:</strong> Usada en tratamientos para quemaduras e infecciones debido a sus propiedades antibacterianas.</li>
                        <li><strong>Industria textil:</strong> Se utiliza en ropa antimicrobiana para evitar bacterias y malos olores.</li>
                        <li><strong>Deportes y trofeos:</strong> Común en trofeos y medallas, como las medallas olímpicas de plata.</li>
                    </ul>
            
                    <p><strong>Plata en la Cultura y la Historia</strong></p>
                    <ul>
                        <li><strong>Mitología y leyendas:</strong> En la mitología romana, Diana era la diosa asociada con la plata.</li>
                        <li><strong>En la moneda:</strong> La plata ha sido crucial en la acuñación de monedas a lo largo de la historia.</li>
                    </ul>
            
                    <p><strong>Valor de la Plata</strong></p>
                    <ul>
                        <li><strong>Inversión en plata:</strong> La plata es considerada un refugio seguro en tiempos de inestabilidad económica y es utilizada como cobertura contra la inflación.</li>
                    </ul>
                `;
            
            }else if (elementName === 'Cadmio') {
                    popupContent.innerHTML = `
                        <h2>CADMIO</h2>
                        <p><strong>Símbolo químico:</strong> Cd</p>
                        <p><strong>Número atómico:</strong> 48</p>
                        <p><strong>Grupo:</strong> 12</p>
                        <p><strong>Periodo:</strong> 5</p>
                        <p><strong>Masa atómica:</strong> 112.41 u</p>
                        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
                        <p><strong>Color:</strong> Blanco plateado</p>
                
                        <p><strong>¿Qué es el Cadmio?</strong></p>
                        <p>El Cadmio (Cd) es un metal pesado de transición, blanco plateado y blando, que se encuentra principalmente en minerales de zinc. Es tóxico para los seres humanos y el medio ambiente.</p>
                
                        <p><strong>¿Cómo se produce el Cadmio?</strong></p>
                        <ul>
                            <li><strong>Extracción:</strong> Se obtiene como subproducto de la minería de zinc, principalmente de la esfalerita (ZnS).</li>
                            <li><strong>Purificación:</strong> Refinado mediante electrólisis para obtener cadmio de alta pureza.</li>
                        </ul>
                
                        <p><strong>¿Cómo se almacena el Cadmio?</strong></p>
                        <ul>
                            <li><strong>Contenedores herméticos:</strong> Para evitar liberación de vapores tóxicos.</li>
                            <li><strong>Ambientes ventilados:</strong> Se almacena en áreas con buena ventilación.</li>
                            <li><strong>Protección personal:</strong> Uso de guantes, máscaras respiratorias y ropa de seguridad.</li>
                        </ul>
                
                        <p><strong>¿Qué aplicaciones tiene el Cadmio?</strong></p>
                        <ul>
                            <li><strong>Baterías recargables:</strong> En baterías de níquel-cadmio (Ni-Cd), aunque su uso ha disminuido.</li>
                            <li><strong>Recubrimientos:</strong> Se usa en galvanizado para proteger metales de la corrosión.</li>
                            <li><strong>Aleaciones:</strong> En industria aeroespacial y electrónica.</li>
                            <li><strong>Paneles solares:</strong> En células solares de selenuro de cadmio (CdSe).</li>
                            <li><strong>Pigmentos:</strong> En pinturas, plásticos y cerámica.</li>
                        </ul>
                
                        <p><strong>Toxicidad y efectos en la salud</strong></p>
                        <ul>
                            <li><strong>Efectos agudos:</strong> Inhalación de vapores puede causar problemas respiratorios.</li>
                            <li><strong>Efectos crónicos:</strong> Daño renal, cáncer de pulmón y osteoporosis.</li>
                            <li><strong>Contaminación ambiental:</strong> Se bioacumula y contamina agua y suelos.</li>
                        </ul>
                
                        <p><strong>Regulación y normativas</strong></p>
                        <ul>
                            <li>Restricciones en productos de consumo, baterías y pinturas.</li>
                            <li>Normativas laborales para reducir la exposición industrial.</li>
                            <li>Control estricto en la eliminación de desechos con cadmio.</li>
                        </ul>
                
                        <p><strong>Perspectivas futuras</strong></p>
                        <p>El uso del cadmio está disminuyendo debido a su toxicidad. Tecnologías más seguras, como baterías de iones de litio y avances en energía solar, están reemplazándolo en muchas aplicaciones.</p>
                    `;
                }else if (elementName === 'Indio') {
                    popupContent.innerHTML = `
                        <h2>INDIO</h2>
                        <p><strong>Símbolo químico:</strong> In</p>
                        <p><strong>Número atómico:</strong> 49</p>
                        <p><strong>Grupo:</strong> 13</p>
                        <p><strong>Periodo:</strong> 5</p>
                        <p><strong>Masa atómica:</strong> 114.82 u</p>
                        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
                        <p><strong>Color:</strong> Blanco plateado</p>
                
                        <p><strong>¿Qué es el Indio?</strong></p>
                        <p>El Indio (In) es un metal blando, maleable y raro en la naturaleza. Se descubrió en 1863 en Alemania al analizar minerales de zinc.</p>
                
                        <p><strong>¿Cómo se produce el Indio?</strong></p>
                        <ul>
                            <li><strong>Extracción:</strong> Se obtiene como subproducto del refinado del zinc y otros metales.</li>
                            <li><strong>Purificación:</strong> Refinado para obtener indio de alta pureza, utilizado en electrónica.</li>
                        </ul>
                
                        <p><strong>¿Cómo se almacena el Indio?</strong></p>
                        <ul>
                            <li><strong>Ambientes secos:</strong> Para evitar reacciones con sustancias ácidas.</li>
                            <li><strong>Contenedores sellados:</strong> Protegidos de la contaminación ambiental.</li>
                            <li><strong>Uso seguro:</strong> Manipulación con guantes en laboratorios e industrias.</li>
                        </ul>
                
                        <p><strong>¿Qué aplicaciones tiene el Indio?</strong></p>
                        <ul>
                            <li><strong>Electrónica:</strong> Usado en pantallas LCD, dispositivos táctiles y semiconductores.</li>
                            <li><strong>Aleaciones:</strong> Se mezcla con estaño para soldaduras de baja temperatura.</li>
                            <li><strong>Recubrimientos:</strong> Protege metales contra la corrosión.</li>
                            <li><strong>Paneles solares:</strong> Utilizado en tecnologías fotovoltaicas avanzadas.</li>
                        </ul>
                
                        <p><strong>Riesgos y Toxicidad</strong></p>
                        <ul>
                            <li><strong>Baja toxicidad:</strong> No es altamente peligroso, pero puede causar daño pulmonar en altas exposiciones.</li>
                            <li><strong>Precauciones:</strong> Evitar el contacto con polvo de indio y vapores derivados.</li>
                        </ul>
                
                        <p><strong>Curiosidades</strong></p>
                        <ul>
                            <li>El indio puede chillar cuando se dobla, debido a su estructura cristalina.</li>
                            <li>Se utiliza en espejos de alta precisión en astronomía.</li>
                        </ul>
                    `;
                }else if (elementName === 'Estaño') {
                    popupContent.innerHTML = `
                        <h2>ESTAÑO</h2>
                        <p><strong>Símbolo químico:</strong> Sn</p>
                        <p><strong>Número atómico:</strong> 50</p>
                        <p><strong>Grupo:</strong> 14</p>
                        <p><strong>Periodo:</strong> 5</p>
                        <p><strong>Masa atómica:</strong> 118.71 u</p>
                        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
                        <p><strong>Color:</strong> Blanco plateado con un tono grisáceo</p>
                
                        <p><strong>¿Qué es el Estaño?</strong></p>
                        <p>El Estaño (Sn) es un metal maleable y dúctil que se ha utilizado desde la Antigüedad, principalmente en aleaciones como el bronce.</p>
                
                        <p><strong>¿Cómo se produce el Estaño?</strong></p>
                        <ul>
                            <li><strong>Extracción:</strong> Se obtiene principalmente de la casiterita (SnO₂).</li>
                            <li><strong>Purificación:</strong> Refinado para eliminar impurezas y obtener estaño de alta pureza.</li>
                        </ul>
                
                        <p><strong>¿Cómo se almacena el Estaño?</strong></p>
                        <ul>
                            <li><strong>Ambientes secos:</strong> Para evitar la formación de óxidos.</li>
                            <li><strong>Protección contra bajas temperaturas:</strong> Para prevenir la "enfermedad del estaño".</li>
                            <li><strong>Contenedores herméticos:</strong> Para evitar la contaminación con otros metales.</li>
                        </ul>
                
                        <p><strong>¿Qué aplicaciones tiene el Estaño?</strong></p>
                        <ul>
                            <li><strong>Aleaciones:</strong> Componente principal del bronce y soldaduras electrónicas.</li>
                            <li><strong>Recubrimientos:</strong> Protege el acero en latas de conserva contra la corrosión.</li>
                            <li><strong>Electrónica:</strong> Base de muchas soldaduras modernas sin plomo.</li>
                            <li><strong>Vidrio:</strong> Utilizado en la producción de vidrios planos y espejos.</li>
                        </ul>
                
                        <p><strong>Riesgos y Toxicidad</strong></p>
                        <ul>
                            <li><strong>Baja toxicidad:</strong> Seguro en pequeñas cantidades.</li>
                            <li><strong>Compuestos organoestánnicos:</strong> Pueden ser tóxicos y afectar el medio ambiente.</li>
                        </ul>
                
                        <p><strong>Curiosidades</strong></p>
                        <ul>
                            <li>Se mezcla con casi todos los metales, lo que lo hace extremadamente versátil.</li>
                            <li>Durante siglos, se ha usado en la fabricación de utensilios y esculturas.</li>
                            <li>La "enfermedad del estaño" lo vuelve quebradizo a bajas temperaturas.</li>
                        </ul>
                
                        <p><strong>Reemplazo en aplicaciones</strong></p>
                        <p>Las soldaduras con plomo están siendo reemplazadas por aleaciones de estaño debido a preocupaciones ambientales y de salud.</p>
                    `;
                
                }else if (elementName === 'Antimonio') {
                    popupContent.innerHTML = `
                        <h2>ANTIMONIO</h2>
                        <p><strong>Símbolo químico:</strong> Sb</p>
                        <p><strong>Número atómico:</strong> 51</p>
                        <p><strong>Grupo:</strong> 15</p>
                        <p><strong>Periodo:</strong> 5</p>
                        <p><strong>Masa atómica:</strong> 121.76 u</p>
                        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
                        <p><strong>Color:</strong> Gris plateado</p>
                
                        <p><strong>¿Qué es el Antimonio?</strong></p>
                        <p>El Antimonio (Sb) es un metaloide que se encuentra en la naturaleza principalmente en forma de sulfuros, como la estibina (Sb₂S₃). Se usa en diversas industrias debido a sus propiedades químicas y físicas.</p>
                
                        <p><strong>¿Cómo se produce el Antimonio?</strong></p>
                        <ul>
                            <li><strong>Extracción del mineral:</strong> Se encuentra en la estibina, con depósitos principales en China, Rusia, Bolivia y México.</li>
                            <li><strong>Procesamiento del mineral:</strong> Se tritura y muele para facilitar la separación del antimonio mediante flotación.</li>
                            <li><strong>Fundición y refinamiento:</strong> Se calienta con hierro o carbono para obtener antimonio metálico. También se usa oxidación y lixiviación para su purificación.</li>
                        </ul>
                
                        <p><strong>¿Qué aplicaciones tiene el Antimonio?</strong></p>
                        <ul>
                            <li><strong>Industria metalúrgica:</strong> Se usa en aleaciones con plomo para mejorar su resistencia en baterías de automóviles y municiones.</li>
                            <li><strong>Fabricación de soldaduras, cojinetes y revestimientos de cables.</strong></li>
                            <li><strong>Industria de plásticos y textiles:</strong> Se emplea como retardante de llama en plásticos, ropa y materiales de construcción.</li>
                            <li><strong>Fabricación de poliéster y resinas.</strong></li>
                        </ul>
                    `;
                }else if (elementName === 'Telurio') {
                    popupContent.innerHTML = `
                        <h2>TELURIO</h2>
                        <p><strong>Símbolo químico:</strong> Te</p>
                        <p><strong>Número atómico:</strong> 52</p>
                        <p><strong>Grupo:</strong> 16</p>
                        <p><strong>Periodo:</strong> 5</p>
                        <p><strong>Masa atómica:</strong> 127.60 u</p>
                        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
                        <p><strong>Color:</strong> Plateado</p>
                
                        <p><strong>¿Qué es el Telurio?</strong></p>
                        <p>El Telurio (Te) es un metaloide raro con propiedades tanto metálicas como no metálicas. Se encuentra principalmente en minerales como la calaverita (AuTe₂) y como subproducto del refinamiento del cobre.</p>
                
                        <p><strong>¿Cómo se produce el Telurio?</strong></p>
                        <ul>
                            <li><strong>Obtención como subproducto del cobre:</strong> Se encuentra en los lodos anódicos que quedan tras la electrólisis del cobre.</li>
                            <li><strong>Extracción y purificación:</strong> Se separa de otros metales como oro y plata mediante tratamientos con ácidos y electrólisis.</li>
                        </ul>
                
                        <p><strong>¿Qué aplicaciones tiene el Telurio?</strong></p>
                        <ul>
                            <li><strong>Industria electrónica y energía solar:</strong> Se usa en paneles solares de telurio de cadmio (CdTe), dispositivos termoeléctricos y semiconductores.</li>
                            <li><strong>Industria metalúrgica:</strong> Se añade al acero inoxidable y cobre para mejorar su resistencia y maquinabilidad.</li>
                            <li><strong>Industria química y de vidrio:</strong> Se emplea en la fabricación de vidrios tintados, cerámicas y como catalizador en reacciones químicas.</li>
                        </ul>
                    `;
                
                }else if (elementName === 'Yodo') {
                    popupContent.innerHTML = `
                        <h2>YODO</h2>
                        <p><strong>Símbolo químico:</strong> I</p>
                        <p><strong>Número atómico:</strong> 53</p>
                        <p><strong>Grupo:</strong> 17 (Halógenos)</p>
                        <p><strong>Periodo:</strong> 5</p>
                        <p><strong>Masa atómica:</strong> 126.90 u</p>
                        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
                        <p><strong>Color:</strong> Gris oscuro (sublima en gas violeta)</p>
                
                        <p><strong>¿Qué es el Yodo?</strong></p>
                        <p>El Yodo (I) es un elemento no metálico del grupo de los halógenos. Es un sólido cristalino de color gris oscuro que sublima directamente en gas violeta al calentarse. Es esencial para la vida humana y la función tiroidea.</p>
                
                        <p><strong>¿Cómo se produce el Yodo?</strong></p>
                        <ul>
                            <li><strong>Fuentes naturales:</strong> Se encuentra en agua de mar, algas marinas, suelos y minerales como la yodargirita (AgI).</li>
                            <li><strong>Extracción de salmueras:</strong> Se obtiene de aguas subterráneas ricas en yodo y se trata con cloro para liberar yodo molecular.</li>
                            <li><strong>Extracción de nitratos (Chile):</strong> Se extrae de soluciones obtenidas al procesar nitratos y se trata con agentes oxidantes para precipitar el yodo.</li>
                            <li><strong>Proceso de sublimación:</strong> Se calienta el yodo sólido para purificarlo, sublimando y reconvirtiéndolo en sólido.</li>
                        </ul>
                
                        <p><strong>¿Qué aplicaciones tiene el Yodo?</strong></p>
                        <ul>
                            <li><strong>Medicina y salud:</strong> Se usa como antiséptico en soluciones como la povidona yodada.</li>
                            <li><strong>Nutrición:</strong> Es esencial para la función tiroidea y previene el bocio.</li>
                            <li><strong>Imagenología médica:</strong> Se emplea en medios de contraste radiológico para estudios médicos.</li>
                        </ul>
                    `;
                
                }else if (elementName === 'Xenón') {
                    popupContent.innerHTML = `
                        <h2>XENÓN</h2>
                        <p><strong>Símbolo químico:</strong> Xe</p>
                        <p><strong>Número atómico:</strong> 54</p>
                        <p><strong>Grupo:</strong> 18 (Gases nobles)</p>
                        <p><strong>Periodo:</strong> 5</p>
                        <p><strong>Masa atómica:</strong> 131.29 u</p>
                        <p><strong>Estado a temperatura y presión normales:</strong> Gas</p>
                        <p><strong>Color:</strong> Incoloro</p>
                
                        <p><strong>¿Qué es el Xenón?</strong></p>
                        <p>El Xenón (Xe) es un gas noble incoloro, inodoro y pesado. Se encuentra en la atmósfera en concentraciones muy bajas. Aunque es químicamente inerte en la mayoría de las condiciones, puede formar algunos compuestos bajo circunstancias específicas.</p>
                
                        <p><strong>¿Cómo se produce el Xenón?</strong></p>
                        <ul>
                            <li><strong>Obtención de la atmósfera:</strong> Se encuentra en la atmósfera terrestre en concentraciones muy bajas (0.000009% en volumen).</li>
                            <li><strong>Proceso de separación:</strong> Se extrae mediante destilación fraccionada del aire líquido, separando primero el nitrógeno y el oxígeno antes de recuperar el xenón.</li>
                            <li><strong>Purificación y almacenamiento:</strong> El xenón obtenido se purifica mediante adsorción en tamices moleculares y otros procesos.</li>
                        </ul>
                
                        <p><strong>¿Qué aplicaciones tiene el Xenón?</strong></p>
                        <ul>
                            <li><strong>Iluminación y láseres:</strong> Se usa en lámparas de descarga de xenón, que producen luz blanca intensa, empleadas en faros de automóviles y proyectores de cine.</li>
                            <li><strong>Láseres de excímero:</strong> Se utilizan en cirugía ocular (LASIK) y procesos industriales.</li>
                            <li><strong>Medicina y anestesia:</strong> El xenón se usa como gas anestésico seguro y eficiente, especialmente en cirugías de alto nivel.</li>
                            <li><strong>Investigación médica:</strong> Se investiga su uso en protección neuronal para tratar lesiones cerebrales.</li>
                        </ul>
                    `;
                }else if (elementName === 'Cesio') {
                    popupContent.innerHTML = `
                        <h2>CESIO</h2>
                        <p><strong>Símbolo químico:</strong> Cs</p>
                        <p><strong>Número atómico:</strong> 55</p>
                        <p><strong>Grupo:</strong> 1 (Metales alcalinos)</p>
                        <p><strong>Periodo:</strong> 6</p>
                        <p><strong>Masa atómica:</strong> 132.91 u</p>
                        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
                        <p><strong>Color:</strong> Dorado plateado</p>
                
                        <p><strong>¿Qué es el Cesio?</strong></p>
                        <p>El Cesio (Cs) es un metal alcalino blando, de color dorado plateado, altamente reactivo y uno de los elementos más electropositivos. Es extremadamente raro en la naturaleza y reacciona violentamente con el agua, formando hidróxido de cesio.</p>
                
                        <p><strong>¿Cómo se produce el Cesio?</strong></p>
                        <ul>
                            <li><strong>Fuentes naturales:</strong> Se encuentra en minerales como la polucita (CsAlSi₂O₆·nH₂O), principalmente en Canadá y Zimbabue. También puede obtenerse como subproducto del refinamiento de litio.</li>
                            <li><strong>Métodos de extracción:</strong> Se extrae mediante trituración del mineral polucita y tratamiento con ácidos fuertes. Para obtener el metal puro, se realiza una reducción química usando sodio o calcio.</li>
                            <li><strong>Purificación y almacenamiento:</strong> El cesio se purifica mediante destilación fraccionada en atmósfera inerte.</li>
                        </ul>
                
                        <p><strong>¿Qué aplicaciones tiene el Cesio?</strong></p>
                        <ul>
                            <li><strong>Relojes atómicos y metrología:</strong> Se usa en relojes atómicos de cesio, los más precisos del mundo, que regulan el tiempo universal (UTC), base del segundo en el Sistema Internacional de Unidades (SI).</li>
                            <li><strong>Exploración petrolera y sísmica:</strong> Se emplea en líquidos de perforación de alta densidad, mejorando la eficiencia en perforaciones profundas.</li>
                            <li><strong>Industria espacial y propulsión iónica:</strong> Se investiga su uso en motores iónicos para satélites y exploración espacial.</li>
                        </ul>
                    `;
                                
                }else if (elementName === 'Bario') {
                    popupContent.innerHTML = `
                        <h2<BARIO</h2>
                        <p><strong>Símbolo químico:</strong> Ba</p>
                        <p><strong>Número atómico:</strong> 56</p>
                        <p><strong>Grupo:</strong> 2 (Metales alcalinotérreos)</p>
                        <p><strong>Periodo:</strong> 6</p>
                        <p><strong>Masa atómica:</strong> 137.33 u</p>
                        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
                        <p><strong>Color:</strong> Plateado</p>
                
                        <p><strong>¿Qué es el Bario?</strong></p>
                        <p>El Bario (Ba) es un metal alcalinotérreo blando, de color plateado, altamente reactivo y no se encuentra en estado libre en la naturaleza debido a su alta reactividad con el oxígeno y el agua. Se encuentra principalmente en minerales como la barita (BaSO₄) y la witherita (BaCO₃).</p>
                
                        <p><strong>¿Cómo se produce el Bario?</strong></p>
                        <ul>
                            <li><strong>Extracción del mineral:</strong> Se obtiene principalmente de la barita (BaSO₄), un mineral abundante en países como China, India y Estados Unidos. La barita se extrae mediante minería a cielo abierto o subterránea.</li>
                            <li><strong>Procesamiento del mineral:</strong> El mineral se reduce químicamente calentando la barita con carbón en un horno para obtener sulfuro de bario (BaS). Luego, se purifica tratando el sulfuro con ácidos o carbonatos.</li>
                            <li><strong>Producción del metal puro:</strong> El metal de bario se obtiene por electrólisis de sales fundidas o mediante reducción con aluminio o silicio.</li>
                        </ul>
                
                        <p><strong>¿Qué aplicaciones tiene el Bario?</strong></p>
                        <ul>
                            <li><strong>Medicina y diagnóstico:</strong> El sulfato de bario (BaSO₄) se usa en radiografías de contraste para visualizar el tracto digestivo, debido a que es insoluble en agua y no es tóxico.</li>
                            <li><strong>Industria del petróleo y gas:</strong> La barita pulverizada se usa en lodos de perforación para estabilizar pozos petroleros.</li>
                        </ul>
                    `;
                }else if (elementName === 'Lantano') {
                    popupContent.innerHTML = `
                        <h2>Lantano</h2>
                        <p><strong>Símbolo químico:</strong> La</p>
                        <p><strong>Número atómico:</strong> 57</p>
                        <p><strong>Grupo:</strong> Lantánidos (Tierras raras)</p>
                        <p><strong>Periodo:</strong> 6</p>
                        <p><strong>Masa atómica:</strong> 138.91 u</p>
                        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
                        <p><strong>Color:</strong> Plateado</p>
                
                        <p><strong>¿Qué es el Lantano?</strong></p>
                        <p>El lantano (La) es un metal blando, plateado y altamente reactivo que pertenece a los lantánidos, aunque a veces se clasifica como un metal de transición. Es uno de los elementos de tierras raras y, aunque no es muy abundante, se encuentra en minerales como la monacita y la bastnasita.</p>
                
                        <p><strong>¿Cómo se produce el Lantano?</strong></p>
                        <ul>
                            <li><strong>Extracción de minerales:</strong> Se obtiene principalmente de minerales como la monacita (Ce, La, Th, Nd, Y)PO₄ y la bastnasita (Ce, La, Nd)CO₃F. Los principales productores son China, EE.UU., India y Australia.</li>
                            <li><strong>Separación y purificación:</strong> Se usan técnicas como extracción con solventes e intercambio iónico para separar el lantano de otros lantánidos, obteniendo compuestos como cloruro de lantano (LaCl₃) o óxido de lantano (La₂O₃).</li>
                            <li><strong>Producción del metal puro:</strong> Se obtiene mediante electrólisis de sales fundidas o reducción con calcio o aluminio.</li>
                        </ul>
                
                        <p><strong>¿Qué aplicaciones tiene el Lantano?</strong></p>
                        <ul>
                            <li><strong>Industria automotriz y energética:</strong> Se usa en baterías de níquel-hidruro metálico (NiMH), como las que se emplean en automóviles híbridos. También se utiliza en aleaciones de magnesio y aluminio para mejorar la resistencia y reducir el peso.</li>
                            <li><strong>Catalizadores y refinación de petróleo:</strong> Actúa como catalizador en el proceso de craqueo del petróleo, mejorando la producción de gasolina.</li>
                            <li><strong>Óptica y electrónica:</strong> Se usa en vidrios ópticos especiales para lentes de cámaras y telescopios.</li>
                        </ul>
                    `;
                }else if (elementName === 'Cerio') {
                    popupContent.innerHTML = `
                        <h2>Cerio</h2>
                        <p><strong>Símbolo químico:</strong> Ce</p>
                        <p><strong>Número atómico:</strong> 58</p>
                        <p><strong>Grupo:</strong> Lantánidos (Tierras raras)</p>
                        <p><strong>Periodo:</strong> 6</p>
                        <p><strong>Masa atómica:</strong> 140.12 u</p>
                        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
                        <p><strong>Color:</strong> Plateado</p>
                
                        <p><strong>¿Qué es el Cerio?</strong></p>
                        <p>El cerio (Ce) es un metal blando, plateado y dúctil que pertenece a la serie de los lantánidos (tierras raras). Es el más abundante de este grupo y tiene propiedades químicas versátiles, lo que lo hace útil en diversas aplicaciones industriales.</p>
                
                        <p><strong>¿Cómo se produce el Cerio?</strong></p>
                        <ul>
                            <li><strong>Extracción de minerales:</strong> Se obtiene de minerales de tierras raras como monacita ((Ce, La, Th, Nd, Y)PO₄) y bastnasita ((Ce, La, Nd)CO₃F). Las principales fuentes están en China, EE.UU., Australia, India y Brasil.</li>
                            <li><strong>Separación y purificación:</strong> Se extrae mediante procesos de flotación y separación por solventes para aislarlo de otros lantánidos. Se convierte en óxido de cerio (CeO₂), que es el compuesto más utilizado.</li>
                            <li><strong>Producción del metal puro:</strong> Se obtiene por electrólisis de sales fundidas o mediante reducción química con calcio o aluminio.</li>
                        </ul>
                
                        <p><strong>¿Qué aplicaciones tiene el Cerio?</strong></p>
                        <ul>
                            <li><strong>Catalizadores y medio ambiente:</strong> Se usa en convertidores catalíticos de automóviles para reducir emisiones contaminantes. También se emplea en procesos industriales para la purificación de gases y la eliminación de contaminantes.</li>
                            <li><strong>Pulido y vidrio óptico:</strong> El óxido de cerio (CeO₂) se usa como agente de pulido de vidrios y lentes en la industria óptica.</li>
                        </ul>
                    `;
            
                }else if (elementName === 'Praseodimio') {
                    popupContent.innerHTML = `
                        <h2>Praseodimio</h2>
                        <p><strong>Símbolo químico:</strong> Pr</p>
                        <p><strong>Número atómico:</strong> 59</p>
                        <p><strong>Grupo:</strong> Lantánidos (Tierras raras)</p>
                        <p><strong>Periodo:</strong> 6</p>
                        <p><strong>Masa atómica:</strong> 140.907 u</p>
                        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
                        <p><strong>Color:</strong> Plateado</p>
                
                        <p><strong>¿Qué es el Praseodimio?</strong></p>
                        <p>El praseodimio (Pr) es un metal blando, plateado y maleable que pertenece a los lantánidos (tierras raras). Es moderadamente reactivo y, aunque no es tan abundante, se encuentra en minerales como la monacita y la bastnasita.</p>
                
                        <p><strong>¿Cómo se produce el Praseodimio?</strong></p>
                        <ul>
                            <li><strong>Extracción de minerales:</strong> Se obtiene de monacita ((Ce, La, Th, Nd, Y)PO₄) y bastnasita ((Ce, La, Nd)CO₃F). Los principales productores son China, EE.UU., Australia, India y Brasil.</li>
                            <li><strong>Separación y purificación:</strong> Se usa flotación, extracción con solventes e intercambio iónico para separarlo de otros lantánidos. Se convierte en óxido de praseodimio (Pr₂O₃) o sales solubles.</li>
                            <li><strong>Producción del metal puro:</strong> Se obtiene por electrólisis de sales fundidas o reducción con calcio o magnesio.</li>
                        </ul>
                
                        <p><strong>¿Qué aplicaciones tiene el Praseodimio?</strong></p>
                        <ul>
                            <li><strong>Aleaciones y metalurgia:</strong> Se usa en imanes de neodimio-praseodimio para motores eléctricos y turbinas eólicas. También se emplea en aleaciones de magnesio para mejorar su resistencia.</li>
                            <li><strong>Óptica y vidrio especial:</strong> Se usa en vidrios ópticos y gafas de soldador para filtrar radiación infrarroja y ultravioleta. Da color amarillo-verde a vidrios y esmaltes cerámicos.</li>
                            <li><strong>Industria aeroespacial:</strong> Se emplea en motores de aviones y materiales resistentes al calor.</li>
                        </ul>
                    `;
               
                }else if (elementName === 'Neodimio') {
                    popupContent.innerHTML = `
                        <h2>Neodimio</h2>
                        <p><strong>Símbolo químico:</strong> Nd</p>
                        <p><strong>Número atómico:</strong> 60</p>
                        <p><strong>Grupo:</strong> Tierras raras</p>
                        <p><strong>Periodo:</strong> 6</p>
                        <p><strong>Masa atómica:</strong> 144.24 u</p>
                        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
                        <p><strong>Color:</strong> Plateado</p>
                
                        <p><strong>¿Qué es el Neodimio?</strong></p>
                        <p>El neodimio es un elemento químico de la tabla periódica con el número atómico 60. Es un metal de tierras raras, de color plateado y relativamente blando, que se oxida fácilmente al contacto con el aire.</p>
                
                        <p><strong>¿Cómo se produce el Neodimio?</strong></p>
                        <ul>
                            <li><strong>Extracción:</strong> Se obtiene de yacimientos minerales mediante minería, principalmente de minerales como monacita y bastnasita.</li>
                            <li><strong>Separación:</strong> Se emplean técnicas químicas para separar el neodimio de otros elementos presentes en los minerales.</li>
                            <li><strong>Purificación:</strong> Se utilizan métodos como la cristalización o la extracción con solventes para obtener neodimio de alta pureza.</li>
                            <li><strong>Refinación y fabricación:</strong> Se transforma en metal o en aleaciones, como los imanes de neodimio-hierro-boro (NdFeB).</li>
                        </ul>
                
                        <p><strong>¿Qué aplicaciones tiene el Neodimio?</strong></p>
                        <ul>
                            <li><strong>Imanes de Neodimio (NdFeB):</strong> Son los imanes más potentes que existen. Se usan en motores eléctricos, discos duros, turbinas eólicas, altavoces y audífonos, así como en herramientas magnéticas y sistemas de levitación magnética (Maglev).</li>
                            <li><strong>Industria de la Tecnología y Energía:</strong> Se usa en pantallas LED y láseres. Es un componente en baterías recargables de vehículos eléctricos.</li>
                        </ul>
                    `;
                
                }else if (elementName === 'Prometio') {
                    popupContent.innerHTML = `
                        <h2>Prometio</h2>
                        <p><strong>Símbolo químico:</strong> Pm</p>
                        <p><strong>Número atómico:</strong> 61</p>
                        <p><strong>Grupo:</strong> Tierras raras</p>
                        <p><strong>Periodo:</strong> 6</p>
                        <p><strong>Masa atómica:</strong> 145 u</p>
                        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
                        <p><strong>Color:</strong> Plateado</p>
                
                        <p><strong>¿Qué es el Prometio?</strong></p>
                        <p>El prometio es un elemento químico de la tabla periódica con el número atómico 61. Es un metal de tierras raras, radiactivo y extremadamente raro en la naturaleza. A diferencia de otros elementos de tierras raras, no tiene isótopos estables y se encuentra en cantidades muy pequeñas en minerales como la monacita.</p>
                
                        <p><strong>¿Cómo se produce el Prometio?</strong></p>
                        <ul>
                            <li><strong>Producción en reactores nucleares:</strong> Se obtiene bombardeando neodimio-146 con neutrones, lo que provoca la desintegración y la formación de prometio-147. También se puede producir como un subproducto de la fisión del uranio en reactores nucleares.</li>
                            <li><strong>Extracción de desechos nucleares:</strong> Se recupera de los residuos de reactores donde se han producido reacciones de fisión nuclear.</li>
                        </ul>
                
                        <p><strong>¿Qué aplicaciones tiene el Prometio?</strong></p>
                        <ul>
                            <li><strong>Fuentes de energía nuclear portátil:</strong> Se usa en baterías nucleares que generan electricidad a partir de la desintegración radiactiva del Pm-147. Estas baterías se emplean en satélites, sondas espaciales y equipos militares donde se necesita una fuente de energía duradera y confiable.</li>
                            <li><strong>Pintura luminiscente (histórico):</strong> Antes se usaba en diales de relojes y tableros de aviones, pero fue reemplazado por materiales más seguros como el tritio.</li>
                            <li><strong>Medidores de espesor y defectos en materiales:</strong> Su radiación beta permite analizar el espesor de materiales en la industria de manufactura y detectar fallas en estructuras metálicas.</li>
                        </ul>
                    `;
                }else if (elementName === 'Samario') {
                    popupContent.innerHTML = `
                        <h2>Samario</h2>
                        <p><strong>Símbolo químico:</strong> Sm</p>
                        <p><strong>Número atómico:</strong> 62</p>
                        <p><strong>Grupo:</strong> Tierras raras</p>
                        <p><strong>Periodo:</strong> 6</p>
                        <p><strong>Masa atómica:</strong> 150.36 u</p>
                        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
                        <p><strong>Color:</strong> Plateado</p>
                
                        <p><strong>¿Qué es el Samario?</strong></p>
                        <p>El samario es un elemento químico de la tabla periódica con el número atómico 62. Pertenece a las tierras raras y es un metal plateado que se oxida fácilmente al contacto con el aire. Aunque no es tan conocido como el neodimio, el samario tiene aplicaciones importantes en tecnología y ciencia.</p>
                
                        <p><strong>¿Cómo se produce el Samario?</strong></p>
                        <ul>
                            <li><strong>Extracción minera:</strong> Se obtiene a partir de minerales de tierras raras como la monacita y la bastnasita.</li>
                            <li><strong>Separación química:</strong> Se utilizan métodos como la cristalización fraccionada y la extracción con solventes para aislar el samario de otros elementos.</li>
                            <li><strong>Reducción a metal puro:</strong> Se usa calcio o lantano para reducir el óxido de samario (Sm₂O₃) a su forma metálica.</li>
                        </ul>
                
                        <p><strong>¿Qué aplicaciones tiene el Samario?</strong></p>
                        <ul>
                            <li><strong>Imanes de Samario-Cobalto (SmCo):</strong> Son imanes permanentes muy resistentes al calor y la corrosión. Se usan en motores de alta temperatura, turbinas y generadores de energía. También se aplican en dispositivos médicos y militares donde se necesita estabilidad magnética.</li>
                            <li><strong>Reactores Nucleares:</strong> El samario-149 absorbe neutrones, lo que lo hace útil como material de control en reactores nucleares.</li>
                        </ul>
                    `;
                
                }else if (elementName === 'Europio') {
                    popupContent.innerHTML = `
                        <h2>Europio</h2>
                        <p><strong>Símbolo químico:</strong> Eu</p>
                        <p><strong>Número atómico:</strong> 63</p>
                        <p><strong>Grupo:</strong> Tierras raras</p>
                        <p><strong>Periodo:</strong> 6</p>
                        <p><strong>Masa atómica:</strong> 151.96 u</p>
                        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
                        <p><strong>Color:</strong> Plateado</p>
                
                        <p><strong>¿Qué es el Europio?</strong></p>
                        <p>El europio es un elemento químico con número atómico 63 y pertenece a la familia de las tierras raras. Es un metal blando, plateado y altamente reactivo, que se oxida rápidamente en contacto con el aire y el agua. Se considera el elemento más reactivo de las tierras raras y tiene importantes aplicaciones en tecnología.</p>
                
                        <p><strong>¿Cómo se produce el Europio?</strong></p>
                        <ul>
                            <li><strong>Extracción minera:</strong> Se obtiene a partir de minerales de tierras raras como la monacita y la bastnasita.</li>
                            <li><strong>Separación química:</strong> Se usan solventes orgánicos para separar el europio de otros elementos de tierras raras. También se puede reducir químicamente usando metales como el calcio.</li>
                            <li><strong>Purificación y conversión a óxidos o sales:</strong> El europio puro se presenta en forma de óxido (Eu₂O₃) o sales solubles que se utilizan en aplicaciones tecnológicas.</li>
                        </ul>
                
                        <p><strong>¿Qué aplicaciones tiene el Europio?</strong></p>
                        <ul>
                            <li><strong>Pantallas y Televisores LED:</strong> Es un material clave en los fósforos rojos utilizados en pantallas de televisores, monitores y luces LED. También se usa en pantallas de teléfonos móviles y tabletas para mejorar el brillo y la calidad de los colores.</li>
                            <li><strong>Iluminación de Seguridad y Billetes:</strong> Se usa en tintas fluorescentes para billetes de banco y documentos de seguridad, ya que brilla bajo luz ultravioleta.</li>
                        </ul>
                    `;
                }else if (elementName === 'Gadolinio') {
                    popupContent.innerHTML = `
                        <h2>Gadolinio</h2>
                        <p><strong>Símbolo químico:</strong> Gd</p>
                        <p><strong>Número atómico:</strong> 64</p>
                        <p><strong>Grupo:</strong> Tierras raras</p>
                        <p><strong>Periodo:</strong> 6</p>
                        <p><strong>Masa atómica:</strong> 157.25 u</p>
                        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
                        <p><strong>Color:</strong> Plateado</p>
                
                        <p><strong>¿Qué es el Gadolinio?</strong></p>
                        <p>El gadolinio es un elemento químico con número atómico 64. Es un metal de tierras raras con propiedades magnéticas y de absorción de neutrones. A temperatura ambiente, es un metal plateado y dúctil, pero cuando se enfría por debajo de su temperatura de Curie (≈20°C), se vuelve ferromagnético.</p>
                
                        <p><strong>¿Cómo se produce el Gadolinio?</strong></p>
                        <ul>
                            <li><strong>Extracción minera:</strong> Se obtiene a partir de minerales ricos en tierras raras como la monacita y la bastnasita.</li>
                            <li><strong>Separación química:</strong> Se usan técnicas de extracción con solventes y cristalización fraccionada para separar el gadolinio de otros elementos de tierras raras.</li>
                            <li><strong>Reducción a metal puro:</strong> El óxido de gadolinio (Gd₂O₃) se reduce utilizando calcio o lantano para obtener el metal puro.</li>
                        </ul>
                
                        <p><strong>¿Qué aplicaciones tiene el Gadolinio?</strong></p>
                        <ul>
                            <li><strong>Agente de contraste en resonancias magnéticas (RMN):</strong> Los compuestos de gadolinio se usan en agentes de contraste para mejorar la calidad de las imágenes en resonancias magnéticas, ayudando en el diagnóstico de enfermedades cerebrales, cardíacas y musculoesqueléticas.</li>
                            <li><strong>Protección en reactores nucleares:</strong> Debido a su alta capacidad de absorber neutrones, el gadolinio se usa en barras de control en reactores nucleares para regular las reacciones de fisión.</li>
                        </ul>
                    `;
                
                }else if (elementName === 'Terbio') {
                    popupContent.innerHTML = `
                        <h2>Terbio</h2>
                        <p><strong>Símbolo químico:</strong> Tb</p>
                        <p><strong>Número atómico:</strong> 65</p>
                        <p><strong>Grupo:</strong> Tierras raras</p>
                        <p><strong>Periodo:</strong> 6</p>
                        <p><strong>Masa atómica:</strong> 158.93 u</p>
                        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
                        <p><strong>Color:</strong> Plateado</p>
                
                        <p><strong>¿Qué es el Terbio?</strong></p>
                        <p>El terbio es un elemento químico con número atómico 65, perteneciente a la familia de las tierras raras. Es un metal plateado, maleable y relativamente blando. Tiene propiedades magnéticas, ópticas y luminiscentes que lo hacen muy útil en diversas aplicaciones tecnológicas.</p>
                
                        <p><strong>¿Cómo se produce el Terbio?</strong></p>
                        <ul>
                            <li><strong>Extracción minera:</strong> Se obtiene de minerales ricos en tierras raras, principalmente monacita, bastnasita y xenotima.</li>
                            <li><strong>Separación química:</strong> Se usan técnicas como extracción con solventes y cromatografía de intercambio iónico para aislar el terbio de otros elementos similares.</li>
                            <li><strong>Reducción a metal puro:</strong> El terbio se obtiene mediante la reducción de su óxido (Tb₄O₇) utilizando calcio o lantano.</li>
                        </ul>
                
                        <p><strong>¿Qué aplicaciones tiene el Terbio?</strong></p>
                        <ul>
                            <li><strong>Pantallas y dispositivos electrónicos:</strong> Se utiliza en fósforos verdes para pantallas de televisores LED, teléfonos y proyectores. Mejora la calidad del color en pantallas LCD y OLED.</li>
                        </ul>
                    `;
                }else if (elementName === 'Disprosio') {
                    popupContent.innerHTML = `
                        <h2>Disprosio</h2>
                        <p><strong>Símbolo químico:</strong> Dy</p>
                        <p><strong>Número atómico:</strong> 66</p>
                        <p><strong>Grupo:</strong> Tierras raras</p>
                        <p><strong>Periodo:</strong> 6</p>
                        <p><strong>Masa atómica:</strong> 162.50 u</p>
                        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
                        <p><strong>Color:</strong> Plateado</p>
                
                        <p><strong>¿Qué es el Disprosio?</strong></p>
                        <p>El disprosio es un elemento químico de la tabla periódica con número atómico 66. Es un metal de tierras raras, plateado y relativamente blando. Se caracteriza por su alta resistencia a temperaturas extremas y su capacidad para absorber neutrones, lo que lo hace valioso en aplicaciones tecnológicas y energéticas.</p>
                
                        <p><strong>¿Cómo se produce el Disprosio?</strong></p>
                        <ul>
                            <li><strong>Extracción minera:</strong> Se obtiene de yacimientos ricos en tierras raras mediante minería.</li>
                            <li><strong>Separación química:</strong> Se utilizan técnicas como extracción con solventes y cromatografía de intercambio iónico para separar el disprosio de otros elementos.</li>
                            <li><strong>Reducción a metal puro:</strong> El disprosio se obtiene mediante la reducción del óxido de disprosio (Dy₂O₃) con calcio o lantano.</li>
                        </ul>
                
                        <p><strong>¿Qué aplicaciones tiene el Disprosio?</strong></p>
                        <ul>
                            <li><strong>Imanes de alta resistencia térmica:</strong> Se usa en aleaciones con neodimio y terbio para fabricar imanes de alta potencia, esenciales en motores eléctricos de vehículos eléctricos (EVs), turbinas eólicas, discos duros y equipos electrónicos de precisión. Mejora la estabilidad térmica de los imanes, evitando que pierdan magnetismo a altas temperaturas.</li>
                            <li><strong>Reactores nucleares:</strong> Debido a su alta capacidad de absorber neutrones, el disprosio se usa en barras de control de reactores nucleares para regular la fisión nuclear.</li>
                        </ul>
                    `;
                }else if (elementName === 'Holmio') {
                    popupContent.innerHTML = `
                        <h2>Holmio</h2>
                        <p><strong>Símbolo químico:</strong> Ho</p>
                        <p><strong>Número atómico:</strong> 67</p>
                        <p><strong>Grupo:</strong> Tierras raras</p>
                        <p><strong>Periodo:</strong> 6</p>
                        <p><strong>Masa atómica:</strong> 164.93 u</p>
                        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
                        <p><strong>Color:</strong> Plateado</p>
                
                        <p><strong>¿Qué es el Holmio?</strong></p>
                        <p>El holmio es un elemento químico de la tabla periódica con número atómico 67. Es un metal de tierras raras de color plateado, blando y maleable. Aunque no es muy conocido, el holmio posee la mayor fuerza magnética de todos los elementos, lo que lo hace útil en diversas aplicaciones tecnológicas y científicas.</p>
                
                        <p><strong>¿Cómo se produce el Holmio?</strong></p>
                        <ul>
                            <li><strong>Extracción minera:</strong> Se obtiene de minerales ricos en tierras raras mediante minería.</li>
                            <li><strong>Separación química:</strong> Se utilizan procesos como extracción con solventes y cromatografía de intercambio iónico para separar el holmio de otros elementos.</li>
                            <li><strong>Reducción a metal puro:</strong> Se obtiene al reducir el óxido de holmio (Ho₂O₃) con calcio o lantano.</li>
                        </ul>
                
                        <p><strong>¿Qué aplicaciones tiene el Holmio?</strong></p>
                        <ul>
                            <li><strong>Imanes y dispositivos magnéticos:</strong> Debido a su fuerza magnética extrema, se usa en aleaciones con disprosio y neodimio para fabricar imanes superfuertes. Se utiliza en motores eléctricos avanzados, generadores y discos duros.</li>
                            <li><strong>Reactores nucleares:</strong> Su capacidad de absorber neutrones lo hace ideal para barras de control en reactores nucleares, ayudando a regular la fisión nuclear.</li>
                            <li><strong>Láseres de Holmio:</strong> Se usa en láseres de estado sólido, con aplicaciones en medicina (cirugías de tejidos blandos, tratamientos en urología y oftalmología) y en la industria (corte y soldadura de metales).</li>
                        </ul>
                    `;
                
                
                }else if (elementName === 'Tulio') {
                    popupContent.innerHTML = `
                        <h2>Tulio</h2>
                        <p><strong>Símbolo químico:</strong> Ho</p>
                        <p><strong>Número atómico:</strong> 69</p>
                        <p><strong>Grupo:</strong> Tierras raras</p>
                        <p><strong>Periodo:</strong> 6</p>
                        <p><strong>Masa atómica:</strong> 164.93 u</p>
                        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
                        <p><strong>Color:</strong> Plateado</p>
                
                        <p><strong>¿Qué es el Holmio?</strong></p>
                        <p>El holmio es un elemento químico de la tabla periódica con número atómico 67. Es un metal de tierras raras de color plateado, blando y maleable. Aunque no es muy conocido, el holmio posee la mayor fuerza magnética de todos los elementos, lo que lo hace útil en diversas aplicaciones tecnológicas y científicas.</p>
                
                        <p><strong>¿Cómo se produce el Holmio?</strong></p>
                        <ul>
                            <li><strong>Extracción minera:</strong> Se obtiene de minerales ricos en tierras raras mediante minería.</li>
                            <li><strong>Separación química:</strong> Se utilizan procesos como extracción con solventes y cromatografía de intercambio iónico para separar el holmio de otros elementos.</li>
                            <li><strong>Reducción a metal puro:</strong> Se obtiene al reducir el óxido de holmio (Ho₂O₃) con calcio o lantano.</li>
                        </ul>
                
                        <p><strong>¿Qué aplicaciones tiene el Holmio?</strong></p>
                        <ul>
                            <li><strong>Imanes y Dispositivos Magnéticos:</strong> Debido a su fuerza magnética extrema, se usa en aleaciones con disprosio y neodimio para fabricar imanes superfuertes. Se usa en motores eléctricos avanzados, generadores y discos duros.</li>
                            <li><strong>Reactores Nucleares:</strong> Su capacidad de absorber neutrones lo hace ideal para barras de control en reactores nucleares, ayudando a regular la fisión nuclear.</li>
                            <li><strong>Láseres de Holmio:</strong> Se usa en láseres de estado sólido, que tienen aplicaciones en: 
                                <ul>
                                    <li>Medicina (cirugías de tejidos blandos, tratamientos en urología y oftalmología).</li>
                                    <li>Industria (corte y soldadura de metales).</li>
                                </ul>
                            </li>
                        </ul>
                    `;
                
                
                }else if (elementName === 'Iterbio') {
                    popupContent.innerHTML = `
                        <h2>Iterbio</h2>
                        <p><strong>Símbolo químico:</strong> Yb</p>
                        <p><strong>Número atómico:</strong> 70</p>
                        <p><strong>Grupo:</strong> Tierras raras</p>
                        <p><strong>Periodo:</strong> 6</p>
                        <p><strong>Masa atómica:</strong> 173.04 u</p>
                        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
                        <p><strong>Color:</strong> Plateado</p>
                
                        <p><strong>¿Qué es el Iterbio?</strong></p>
                        <p>El iterbio es un elemento químico de la tabla periódica con número atómico 70. Es un metal de tierras raras de color plateado, blando y maleable. Aunque es menos conocido que otros elementos de su grupo, el iterbio tiene aplicaciones clave en láseres, dispositivos electrónicos y medicina.</p>
                
                        <p><strong>¿Cómo se produce el Iterbio?</strong></p>
                        <ul>
                            <li><strong>Extracción minera:</strong> Se extrae de minerales ricos en tierras raras mediante minería.</li>
                            <li><strong>Separación química:</strong> Se emplean técnicas como extracción con solventes y cromatografía de intercambio iónico para aislar el iterbio de otros elementos.</li>
                            <li><strong>Reducción a metal puro:</strong> Se obtiene al reducir el óxido de iterbio (Yb₂O₃) con calcio o lantano.</li>
                        </ul>
                
                        <p><strong>¿Qué aplicaciones tiene el Iterbio?</strong></p>
                        <ul>
                            <li><strong>Láseres de Estado Sólido:</strong> Se usa en láseres de iterbio (Yb:YAG) para aplicaciones en: 
                                <ul>
                                    <li>Cirugía médica (tratamientos oculares y dermatológicos).</li>
                                    <li>Corte y soldadura de metales en la industria.</li>
                                    <li>Comunicaciones ópticas avanzadas.</li>
                                </ul>
                            </li>
                            <li><strong>Aleaciones de Alta Resistencia:</strong> Se usa en aleaciones con acero inoxidable para mejorar su resistencia mecánica y anticorrosión. Se emplea en componentes de la industria aeroespacial y automotriz.</li>
                            <li><strong>Dispositivos Electrónicos y Sensores:</strong> Se usa en sensores de presión y temperatura, esenciales en industrias de petróleo y gas. Se investiga su uso en baterías avanzadas y semiconductores.</li>
                        </ul>
                    `;
                
                }else if (elementName === 'Lutecio') {
                    popupContent.innerHTML = `
                        <h2>Lutecio</h2>
                        <p><strong>Símbolo químico:</strong> Lu</p>
                        <p><strong>Número atómico:</strong> 71</p>
                        <p><strong>Grupo:</strong> Tierras raras</p>
                        <p><strong>Periodo:</strong> 6</p>
                        <p><strong>Masa atómica:</strong> 174.97 u</p>
                        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
                        <p><strong>Color:</strong> Plateado</p>
                
                        <p><strong>¿Qué es el Lutecio?</strong></p>
                        <p>El lutecio es un elemento químico de la tabla periódica con número atómico 71. Es el último y el más pesado de las tierras raras. Es un metal plateado, denso y resistente a la corrosión. Aunque es uno de los elementos más raros y costosos, el lutecio tiene aplicaciones avanzadas en medicina, industria y tecnología nuclear.</p>
                
                        <p><strong>¿Cómo se produce el Lutecio?</strong></p>
                        <ul>
                            <li><strong>Extracción minera:</strong> Se obtiene de minerales ricos en tierras raras mediante minería.</li>
                            <li><strong>Separación química:</strong> Se usan técnicas como extracción con solventes y cromatografía de intercambio iónico para aislar el lutecio de otros elementos.</li>
                            <li><strong>Reducción a metal puro:</strong> Se obtiene al reducir el óxido de lutecio (Lu₂O₃) con calcio o lantano.</li>
                        </ul>
                
                        <p><strong>¿Qué aplicaciones tiene el Lutecio?</strong></p>
                        <ul>
                            <li><strong>Medicina Nuclear y Tratamiento del Cáncer:</strong> 
                                <ul>
                                    <li>Se usa en radiofármacos para terapia contra el cáncer, como en el Lutecio-177, utilizado para tratar tumores neuroendocrinos y cáncer de próstata.</li>
                                    <li>Su capacidad para emitir radiación beta lo hace ideal para terapias dirigidas sin dañar tejidos sanos.</li>
                                </ul>
                            </li>
                            <li><strong>Catalizadores en la Industria del Petróleo:</strong> Se usa en catalizadores de craqueo para la refinación de petróleo, mejorando la producción de combustibles como gasolina y diésel.</li>
                            <li><strong>Detectores y Dispositivos Científicos:</strong> 
                                <ul>
                                    <li>Se usa en detectores de rayos X y PET (tomografía por emisión de positrones) en hospitales y laboratorios de investigación.</li>
                                    <li>Se emplea en cristales centelleadores, que convierten la radiación en señales detectables.</li>
                                </ul>
                            </li>
                        </ul>
                    `;
                
                }else if (elementName === 'Hafnio') {
                    popupContent.innerHTML = `
                        <h2>Hafnio</h2>
                        <p><strong>Símbolo químico:</strong> Hf</p>
                        <p><strong>Número atómico:</strong> 72</p>
                        <p><strong>Grupo:</strong> Metales de transición</p>
                        <p><strong>Periodo:</strong> 6</p>
                        <p><strong>Masa atómica:</strong> 178.49 u</p>
                        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
                        <p><strong>Color:</strong> Gris plateado</p>
                
                        <p><strong>¿Qué es el Hafnio?</strong></p>
                        <p>El hafnio es un elemento químico de la tabla periódica con número atómico 72. Es un metal de transición de color gris plateado, muy resistente a la corrosión y con un alto punto de fusión (2,233 °C). Su gran capacidad para absorber neutrones lo hace fundamental en la industria nuclear y en aleaciones de alta temperatura.</p>
                
                        <p><strong>¿Cómo se produce el Hafnio?</strong></p>
                        <ul>
                            <li><strong>Extracción minera:</strong> Se extrae de minerales ricos en circonio.</li>
                            <li><strong>Separación del circonio:</strong> Se usa extracción con solventes o destilación fraccionada para separar el hafnio del circonio, ya que tienen propiedades químicas muy similares.</li>
                            <li><strong>Reducción a metal puro:</strong> Se obtiene al reducir el tetracloruro de hafnio (HfCl₄) con sodio o magnesio en el proceso Kroll.</li>
                        </ul>
                
                        <p><strong>¿Qué aplicaciones tiene el Hafnio?</strong></p>
                        <ul>
                            <li><strong>Industria Nuclear (Control de Reactores Nucleares):</strong> 
                                <ul>
                                    <li>Debido a su alta capacidad de absorción de neutrones, el hafnio se usa en barras de control de reactores nucleares, regulando la fisión y evitando accidentes.</li>
                                    <li>Su resistencia a la corrosión lo hace ideal para ambientes de alta radiación.</li>
                                </ul>
                            </li>
                            <li><strong>Aleaciones de Alta Resistencia (Aeroespacial y Militar):</strong> 
                                <ul>
                                    <li>Se usa en aleaciones con níquel, titanio y tántalo para fabricar turbinas de aviones y cohetes.</li>
                                    <li>Se emplea en componentes de misiles y naves espaciales, ya que soporta temperaturas extremas.</li>
                                </ul>
                            </li>
                            <li><strong>Microprocesadores y Electrónica Avanzada:</strong> 
                                <ul>
                                    <li>Se usa en la fabricación de chips de computadora y transistores, mejorando la eficiencia y reduciendo la fuga de corriente en dispositivos electrónicos.</li>
                                </ul>
                            </li>
                        </ul>
                    `;
                
                }else if (elementName === 'Tantalio') {
                    popupContent.innerHTML = `
                        <h2>Tantalio</h2>
                        <p><strong>Símbolo químico:</strong> Ta</p>
                        <p><strong>Número atómico:</strong> 73</p>
                        <p><strong>Grupo:</strong> Metales de transición</p>
                        <p><strong>Periodo:</strong> 6</p>
                        <p><strong>Masa atómica:</strong> 180.95 u</p>
                        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
                        <p><strong>Color:</strong> Gris azulado</p>
                
                        <p><strong>¿Qué es el Tantalio?</strong></p>
                        <p>El tantalio es un elemento químico de la tabla periódica con número atómico 73. Es un metal de transición de color gris azulado, altamente resistente a la corrosión y con un alto punto de fusión (3,017 °C). Su excelente conductividad y biocompatibilidad lo hacen fundamental en la electrónica, la industria aeroespacial y la medicina.</p>
                
                        <p><strong>¿Cómo se produce el Tantalio?</strong></p>
                        <ul>
                            <li><strong>Extracción minera:</strong> Se extrae de depósitos de coltan, principalmente en África (República Democrática del Congo), Australia y Brasil.</li>
                            <li><strong>Separación del niobio:</strong> Se usan técnicas de extracción con solventes y cristalización fraccionada para separar el tantalio del niobio.</li>
                        </ul>
                
                        <p><strong>¿Qué aplicaciones tiene el Tantalio?</strong></p>
                        <ul>
                            <li><strong>Industria Electrónica:</strong> 
                                <ul>
                                    <li><strong>Condensadores y resistencias de tantalio:</strong> Se usa en teléfonos móviles, computadoras, tabletas y otros dispositivos electrónicos.</li>
                                    <li>Gracias a su alta capacidad de almacenamiento de carga, permite dispositivos más pequeños y eficientes.</li>
                                    <li><strong>Semiconductores y microprocesadores:</strong> Se usa como material en la fabricación de chips y circuitos integrados avanzados.</li>
                                </ul>
                            </li>
                            <li><strong>Medicina y Biotecnología:</strong> 
                                <ul>
                                    <li><strong>Implantes médicos y quirúrgicos:</strong> Debido a su biocompatibilidad y resistencia a la corrosión, se usa en prótesis óseas, placas para fracturas y marcapasos.</li>
                                </ul>
                            </li>
                        </ul>
                    `;
                
                }else if (elementName === 'Wolframio') {
                    popupContent.innerHTML = `
                        <h2>Wolframio (Tungsteno)</h2>
                        <p><strong>Símbolo químico:</strong> W</p>
                        <p><strong>Número atómico:</strong> 74</p>
                        <p><strong>Grupo:</strong> Metales de transición</p>
                        <p><strong>Periodo:</strong> 6</p>
                        <p><strong>Masa atómica:</strong> 183.84 u</p>
                        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
                        <p><strong>Color:</strong> Gris acerado</p>
                
                        <p><strong>¿Qué es el Wolframio?</strong></p>
                        <p>El wolframio, también conocido como tungsteno, es un elemento químico de la tabla periódica con número atómico 74. Es un metal de transición de color gris acerado, con el punto de fusión más alto de todos los metales (3,422 °C) y una gran densidad, lo que lo hace extremadamente resistente al calor y al desgaste.</p>
                
                        <p><strong>¿Cómo se produce el Wolframio?</strong></p>
                        <ul>
                            <li><strong>Extracción minera:</strong> Se obtiene de yacimientos ricos en wolframita y scheelita, principalmente en China, Rusia, Bolivia y Austria.</li>
                            <li><strong>Conversión a óxido de wolframio:</strong> Se trata con ácidos y álcalis para formar trióxido de tungsteno (WO₃).</li>
                            <li><strong>Reducción a wolframio metálico:</strong> El óxido de wolframio se reduce con hidrógeno o carbono a temperaturas elevadas para obtener wolframio en polvo.</li>
                            <li><strong>Producción de piezas metálicas:</strong> Se compacta en polvo y se sinteriza para formar herramientas y componentes industriales.</li>
                        </ul>
                
                        <p><strong>¿Qué aplicaciones tiene el Wolframio?</strong></p>
                        <ul>
                            <li><strong>Herramientas de Corte e Industria Metalúrgica:</strong> 
                                <ul>
                                    <li>Se usa en brocas, cuchillas, fresas y herramientas de minería por su dureza y resistencia al desgaste.</li>
                                    <li>Se emplea en aleaciones con cobalto y carbono (carburo de tungsteno) para fabricar herramientas de alto rendimiento.</li>
                                </ul>
                            </li>
                            <li><strong>Filamentos de Bombillas y Electrónica:</strong> 
                                <ul>
                                    <li>Antes de la llegada de los LEDs, se usaba en los filamentos de bombillas incandescentes debido a su alta resistencia al calor.</li>
                                    <li>Se usa en electrodos de soldadura y contactos eléctricos en circuitos avanzados.</li>
                                </ul>
                            </li>
                        </ul>
                    `;
                }else if (elementName === 'Renio') {
                    popupContent.innerHTML = `
                        <h2>Renio</h2>
                        <p><strong>Símbolo químico:</strong> Re</p>
                        <p><strong>Número atómico:</strong> 75</p>
                        <p><strong>Grupo:</strong> Metales de transición</p>
                        <p><strong>Periodo:</strong> 6</p>
                        <p><strong>Masa atómica:</strong> 186.21 u</p>
                        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
                        <p><strong>Color:</strong> Gris plateado</p>
                
                        <p><strong>¿Qué es el Renio?</strong></p>
                        <p>El renio es un elemento químico de la tabla periódica con número atómico 75. Es un metal de transición de color gris plateado, extremadamente denso y resistente al calor, con un punto de fusión de 3,180 °C (el tercero más alto de todos los elementos). Es un material estratégico en la industria aeroespacial y catalizadores de alto rendimiento.</p>
                
                        <p><strong>¿Cómo se produce el Renio?</strong></p>
                        <ul>
                            <li><strong>Extracción de minerales de cobre y molibdeno:</strong> Se obtiene como subproducto en la minería de estos metales.</li>
                            <li><strong>Recuperación del renio:</strong> Se obtiene a partir de los gases emitidos en el procesamiento del molibdeno, donde el renio se encuentra como trióxido de renio (Re₂O₇).</li>
                            <li><strong>Purificación y reducción:</strong> Se reduce con hidrógeno a renio metálico en polvo.</li>
                        </ul>
                        <p>Debido a su rareza y dificultad de extracción, el renio es uno de los metales más costosos del mundo.</p>
                
                        <p><strong>¿Qué aplicaciones tiene el Renio?</strong></p>
                        <ul>
                            <li><strong>Industria Aeroespacial y Turbinas de Aviones:</strong> 
                                <ul>
                                    <li>Se usa en aleaciones con níquel para fabricar turbinas de motores a reacción y cohetes, ya que resiste altas temperaturas sin deformarse.</li>
                                    <li>Mejora la eficiencia y prolonga la vida útil de los motores.</li>
                                </ul>
                            </li>
                            <li><strong>Catalizadores en la Industria del Petróleo:</strong> 
                                <ul>
                                    <li>Se usa en catalizadores de reformado de hidrocarburos para producir gasolina de alto octanaje y otros combustibles.</li>
                                    <li>Su capacidad para soportar altas temperaturas y presiones lo hace ideal para refinerías de petróleo.</li>
                                </ul>
                            </li>
                        </ul>
                    `;
                }else if (elementName === 'Osmio') {
                    popupContent.innerHTML = `
                        <h2>Osmio</h2>
                        <p><strong>Símbolo químico:</strong> Os</p>
                        <p><strong>Número atómico:</strong> 76</p>
                        <p><strong>Grupo:</strong> Metales de transición (Grupo del Platino)</p>
                        <p><strong>Periodo:</strong> 6</p>
                        <p><strong>Masa atómica:</strong> 190.23 u</p>
                        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
                        <p><strong>Color:</strong> Azul grisáceo</p>
                
                        <p><strong>¿Qué es el Osmio?</strong></p>
                        <p>El osmio es un elemento químico de la tabla periódica con número atómico 76. Es un metal de transición del grupo del platino, de color azul grisáceo, extremadamente denso (el metal más denso conocido, con 22.59 g/cm³) y resistente a la corrosión. Tiene un punto de fusión muy alto (3,033 °C) y se usa en aplicaciones especializadas debido a su rareza y toxicidad en algunas formas.</p>
                
                        <p><strong>¿Cómo se produce el Osmio?</strong></p>
                        <ul>
                            <li><strong>Extracción de minerales ricos en platino y níquel:</strong> Se obtiene como subproducto en la minería de estos metales.</li>
                            <li><strong>Separación de metales del grupo del platino (PGMs):</strong> Se emplean procesos químicos para aislar el osmio en forma de tetraóxido de osmio (OsO₄).</li>
                            <li><strong>Reducción y purificación:</strong> Se reduce el OsO₄ para obtener osmio metálico puro o para convertirlo en aleaciones.</li>
                        </ul>
                        <p>El osmio es uno de los metales más raros y difíciles de extraer, lo que lo hace muy costoso y poco común en aplicaciones comerciales masivas.</p>
                
                        <p><strong>¿Qué aplicaciones tiene el Osmio?</strong></p>
                        <ul>
                            <li><strong>Aleaciones de Alta Dureza (Joyería y Relojería):</strong> 
                                <ul>
                                    <li>Se usa en plumas estilográficas, relojes de lujo y agujas de fonógrafos debido a su extrema dureza.</li>
                                    <li>Se mezcla con platino o iridio para crear aleaciones resistentes al desgaste.</li>
                                </ul>
                            </li>
                            <li><strong>Contactos Eléctricos y Equipos de Precisión:</strong> 
                                <ul>
                                    <li>Se usa en contactos eléctricos de alto rendimiento, como en circuitos especializados que requieren resistencia extrema al desgaste.</li>
                                    <li>Se emplea en instrumentos científicos de alta precisión, como microscopios electrónicos.</li>
                                </ul>
                            </li>
                        </ul>
                    `;
                }else if (elementName === 'Iridio') {
                    popupContent.innerHTML = `
                        <h2>Iridio</h2>
                        <p><strong>Símbolo químico:</strong> Ir</p>
                        <p><strong>Número atómico:</strong> 77</p>
                        <p><strong>Grupo:</strong> Metales de transición (Grupo del Platino)</p>
                        <p><strong>Periodo:</strong> 6</p>
                        <p><strong>Masa atómica:</strong> 192.22 u</p>
                        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
                        <p><strong>Color:</strong> Plateado-blanquecino</p>
                
                        <p><strong>¿Qué es el Iridio?</strong></p>
                        <p>El iridio es un elemento químico de la tabla periódica con número atómico 77. Es un metal de transición del grupo del platino, de color plateado-blanquecino, extremadamente denso (22.56 g/cm³) y resistente a la corrosión, incluso en ambientes extremos. Es el segundo metal más denso después del osmio y uno de los más resistentes al calor y la corrosión.</p>
                
                        <p><strong>¿Cómo se produce el Iridio?</strong></p>
                        <ul>
                            <li><strong>Extracción de minerales de platino y níquel:</strong> Se obtiene como subproducto en la minería de estos metales.</li>
                            <li><strong>Separación del iridio de otros metales del grupo del platino (PGMs):</strong> Se usan procesos de lixiviación y refinación química para aislar el iridio en su forma pura.</li>
                            <li><strong>Purificación final:</strong> Se obtiene iridio metálico en polvo o se funde para formar lingotes o aleaciones.</li>
                        </ul>
                        <p>El iridio es uno de los metales más raros en la Tierra, pero se encuentra en mayores concentraciones en meteoritos, lo que ha llevado a teorías sobre su papel en la extinción de los dinosaurios.</p>
                
                        <p><strong>¿Qué aplicaciones tiene el Iridio?</strong></p>
                        <ul>
                            <li><strong>Aleaciones de Alta Resistencia (Industria Aeroespacial y Automotriz):</strong> 
                                <ul>
                                    <li>Se usa en motores de cohetes, turbinas de aviones y componentes de satélites, ya que resiste altas temperaturas y ambientes extremos.</li>
                                    <li>Se mezcla con platino y osmio para formar aleaciones ultraduraderas.</li>
                                </ul>
                            </li>
                            <li><strong>Electrónica y Contactos Eléctricos:</strong> 
                                <ul>
                                    <li>Se usa en electrodos de bujías de automóviles de alto rendimiento, aumentando su durabilidad.</li>
                                    <li>Se emplea en contactos eléctricos y circuitos electrónicos, ya que mantiene su conductividad en condiciones extremas.</li>
                                </ul>
                            </li>
                        </ul>
                    `;
                }else if (elementName === 'Platino') {
                    popupContent.innerHTML = `
                        <h2>Platino</h2>
                        <p><strong>Símbolo químico:</strong> Pt</p>
                        <p><strong>Número atómico:</strong> 78</p>
                        <p><strong>Grupo:</strong> Metales de transición (Grupo del Platino)</p>
                        <p><strong>Periodo:</strong> 6</p>
                        <p><strong>Masa atómica:</strong> 195.08 u</p>
                        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
                        <p><strong>Color:</strong> Blanco plateado</p>
                
                        <p><strong>¿Qué es el Platino?</strong></p>
                        <p>El platino es un elemento químico de la tabla periódica con número atómico 78. Es un metal de transición de color blanco plateado, conocido por su alta resistencia a la corrosión, su dureza y su alta densidad (21.45 g/cm³). Debido a su estabilidad química, el platino no se oxida fácilmente y es un material muy valioso, utilizado en varias aplicaciones de alta tecnología, automotrices, médicas y joyería.</p>
                
                        <p><strong>¿Cómo se produce el Platino?</strong></p>
                        <ul>
                            <li><strong>Extracción de minerales de platino y otros metales del grupo del platino (PGMs):</strong> Se obtiene como subproducto en la minería de níquel y cobre.</li>
                            <li><strong>Refinación y separación de impurezas:</strong> Se usa una combinación de procesos como lixiviación ácida, separación por solventes y reducción para obtener platino puro.</li>
                            <li><strong>Purificación final:</strong> Se realiza mediante procesos como electrólisis para obtener platino de alta pureza, utilizado en diversas aplicaciones industriales.</li>
                        </ul>
                        <p>Los principales países productores de platino incluyen Sudáfrica, Rusia y Canadá.</p>
                
                        <p><strong>¿Qué aplicaciones tiene el Platino?</strong></p>
                        <ul>
                            <li><strong>Industria Automotriz (Catalizadores):</strong> 
                                <ul>
                                    <li>El platino se usa en catalizadores de vehículos, donde actúa como catalizador para reducir las emisiones de gases contaminantes, como óxidos de nitrógeno (NOx), monóxido de carbono (CO) y hidrocarburos.</li>
                                    <li>Esta aplicación representa uno de los usos más grandes del platino, dado su efecto positivo sobre el medio ambiente.</li>
                                </ul>
                            </li>
                            <li><strong>Joyería y Relojería:</strong> 
                                <ul>
                                    <li>El platino es muy apreciado en joyería de lujo, especialmente en anillos de boda, pulseras, collares y relojes de alta gama, debido a su durabilidad y resistencia a la corrosión.</li>
                                    <li>No se oxida ni cambia de color con el tiempo, lo que lo hace ideal para joyas de larga duración.</li>
                                </ul>
                            </li>
                        </ul>
                    `;
                    }else if (elementName === 'Oro') {
    popupContent.innerHTML = `
        <h2>Oro</h2>
        <p><strong>Símbolo químico:</strong> Au</p>
        <p><strong>Número atómico:</strong> 79</p>
        <p><strong>Grupo:</strong> Metales de transición</p>
        <p><strong>Periodo:</strong> 6</p>
        <p><strong>Masa atómica:</strong> 196.97 u</p>
        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
        <p><strong>Color:</strong> Amarillo brillante</p>

        <p><strong>¿Qué es el Oro?</strong></p>
        <p>El oro es un elemento químico con el símbolo Au (del latín <em>aurum</em>) y número atómico 79. Es un metal precioso de color amarillo brillante, altamente maleable, dúctil y resistente a la corrosión. Ha sido valorado a lo largo de la historia como símbolo de riqueza y poder.</p>

        <p><strong>¿Cómo se produce el Oro?</strong></p>
        <ul>
            <li><strong>Extracción minera:</strong>
                <ul>
                    <li>El oro se extrae principalmente de yacimientos de vetas de cuarzo o de depósitos aluviales en ríos y arroyos.</li>
                    <li>Los métodos tradicionales de extracción incluyen la minería a cielo abierto y la minería subterránea.</li>
                </ul>
            </li>
            <li><strong>Proceso de refinación:</strong>
                <ul>
                    <li>El oro bruto extraído se somete a procesos de refinación como la lixiviación con cianuro o el proceso de amalgamación con mercurio.</li>
                    <li>El oro refinado se purifica a través de electrólisis o mediante el uso de fuegos para eliminar impurezas.</li>
                </ul>
            </li>
            <li><strong>Purificación final:</strong>
                <ul>
                    <li>El oro refinado se puede convertir en lingotes, monedas o joyas.</li>
                </ul>
            </li>
        </ul>

        <p><strong>¿Qué aplicaciones tiene el Oro?</strong></p>
        <ul>
            <li><strong>Joyería y Accesorios de Lujo:</strong>
                <ul>
                    <li>El oro es uno de los materiales más utilizados en la fabricación de joyas de lujo, como anillos, collares, pulseras y pendientes debido a su belleza, maleabilidad y resistencia al desgaste.</li>
                    <li>Su color amarillo brillante y resistencia a la corrosión lo convierten en el metal ideal para productos de alta gama.</li>
                </ul>
            </li>
        </ul>
    `;
}else if (elementName === 'Mercurio') {
    popupContent.innerHTML = `
        <h2>Mercurio</h2>
        <p><strong>Símbolo químico:</strong> Hg</p>
        <p><strong>Número atómico:</strong> 80</p>
        <p><strong>Grupo:</strong> Metales de transición</p>
        <p><strong>Periodo:</strong> 6</p>
        <p><strong>Masa atómica:</strong> 200.59 u</p>
        <p><strong>Estado a temperatura y presión normales:</strong> Líquido</p>
        <p><strong>Color:</strong> Plateado brillante</p>

        <p><strong>¿Qué es el Mercurio?</strong></p>
        <p>El mercurio es un elemento químico con el símbolo Hg (del latín <em>hydrargyrum</em>, que significa "agua plateada") y número atómico 80. Es el único metal que es líquido a temperatura ambiente. Es denso, plateado y altamente tóxico. Aunque ha tenido diversos usos industriales y científicos, su uso está cada vez más regulado debido a sus efectos perjudiciales para la salud y el medio ambiente.</p>

        <p><strong>¿Cómo se produce el Mercurio?</strong></p>
        <ul>
            <li><strong>Extracción de cinabrio:</strong>
                <ul>
                    <li>El cinabrio es el principal mineral que contiene mercurio.</li>
                </ul>
            </li>
            <li><strong>Proceso de sublimación:</strong>
                <ul>
                    <li>El cinabrio se calienta en un horno a altas temperaturas, lo que provoca que el mercurio se evapore y luego se condense en forma líquida en un recipiente.</li>
                </ul>
            </li>
            <li><strong>Purificación:</strong>
                <ul>
                    <li>El mercurio obtenido se purifica a través de un proceso de destilación para eliminar impurezas.</li>
                </ul>
            </li>
        </ul>
        <p>El mercado global de mercurio está controlado principalmente por países como China, España y Kyrgyzstán, que poseen grandes depósitos y plantas de producción.</p>

        <p><strong>¿Qué aplicaciones tiene el Mercurio?</strong></p>
        <ul>
            <li><strong>Termómetros y Barómetros:</strong>
                <ul>
                    <li>El mercurio se utilizaba en termómetros y barómetros debido a su alta densidad y resistencia a las fluctuaciones de temperatura.</li>
                    <li>En termómetros clínicos, se usaba tradicionalmente para medir temperaturas corporales, aunque este uso está en desuso por los riesgos para la salud.</li>
                </ul>
            </li>
            <li><strong>Industria de la Electrónica:</strong>
                <ul>
                    <li>El mercurio se emplea en la fabricación de interruptores eléctricos, relés y dispositivos de encendido debido a sus propiedades conductoras.</li>
                </ul>
            </li>
        </ul>
    `;
}else if (elementName === 'Talio') {
    popupContent.innerHTML = `
        <h2>Talio</h2>
        <p><strong>Símbolo químico:</strong> Tl</p>
        <p><strong>Número atómico:</strong> 81</p>
        <p><strong>Grupo:</strong> Metales pobres</p>
        <p><strong>Periodo:</strong> 6</p>
        <p><strong>Masa atómica:</strong> 204.38 u</p>
        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
        <p><strong>Color:</strong> Gris verdoso</p>

        <p><strong>¿Qué es el Talio?</strong></p>
        <p>El talio es un metal pesado, blando y de color gris verdoso. Con el símbolo Tl y número atómico 81, es conocido por su alta toxicidad, lo que requiere un manejo cuidadoso. Aunque tiene aplicaciones en varias industrias, su uso está limitado debido a sus riesgos para la salud.</p>

        <p><strong>¿Cómo se produce el Talio?</strong></p>
        <ul>
            <li><strong>Extracción de minerales de talio:</strong>
                <ul>
                    <li>El talio se extrae principalmente de mineral de talquita, pero también se encuentra en pequeñas cantidades en minerales de plomo y zinc.</li>
                </ul>
            </li>
            <li><strong>Refinación:</strong>
                <ul>
                    <li>El talio se obtiene por un proceso de reducción química, utilizando carbono o hidrógeno para liberar el metal de sus compuestos.</li>
                </ul>
            </li>
            <li><strong>Purificación:</strong>
                <ul>
                    <li>Después de la extracción, el talio se somete a un proceso de purificación y refinación, utilizando técnicas como la electrólisis.</li>
                </ul>
            </li>
        </ul>

        <p><strong>¿Qué aplicaciones tiene el Talio?</strong></p>
        <ul>
            <li><strong>Electrónica (Semiconductores):</strong>
                <ul>
                    <li>El talio se utiliza en la fabricación de dispositivos electrónicos, como celdas solares y semiconductores.</li>
                    <li>En combinación con otros materiales, como el arseniuro de galio, se usa para fabricar diodos emisores de luz (LEDs) y otros componentes de tecnología avanzada.</li>
                </ul>
            </li>
            <li><strong>Alta Tecnología (Fibra Óptica):</strong>
                <ul>
                    <li>El talio se utiliza en la fabricación de fibras ópticas, donde se incorpora en algunas aleaciones o recubrimientos, mejorando la transmisión de señales a través de cables ópticos de alta velocidad.</li>
                </ul>
            </li>
            <li><strong>Materiales Ópticos y Lentes Especializados:</strong>
                <ul>
                    <li>Se emplea en la fabricación de lentes y cristales ópticos especializados, como los usados en telescopios o lentes infrarrojas de alta precisión.</li>
                </ul>
            </li>
        </ul>
    `;
}else if (elementName === 'Plomo') {
    popupContent.innerHTML = `
        <h2>Plomo</h2>
        <p><strong>Símbolo químico:</strong> Pb</p>
        <p><strong>Número atómico:</strong> 82</p>
        <p><strong>Grupo:</strong> Metales pobres</p>
        <p><strong>Periodo:</strong> 6</p>
        <p><strong>Masa atómica:</strong> 207.2 u</p>
        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
        <p><strong>Color:</strong> Gris azulado</p>

        <p><strong>¿Qué es el Plomo?</strong></p>
        <p>El plomo es un metal pesado, maleable y dúctil, con el símbolo Pb y el número atómico 82. Aunque tiene aplicaciones en diversas industrias, es tóxico para los seres humanos y animales, lo que ha restringido su uso en muchos sectores.</p>

        <p><strong>¿Cómo se produce el Plomo?</strong></p>
        <ul>
            <li><strong>Extracción de galena:</strong>
                <ul>
                    <li>El mineral de galena se extrae de minas subterráneas o a cielo abierto.</li>
                </ul>
            </li>
            <li><strong>Proceso de refinación:</strong>
                <ul>
                    <li>El mineral se tritura y se somete a un proceso de fundición en un horno para separar el plomo del azufre. Esto produce plomo metálico y dióxido de azufre (SO2), que luego se convierte en ácido sulfúrico.</li>
                </ul>
            </li>
            <li><strong>Purificación:</strong>
                <ul>
                    <li>El plomo obtenido de la fundición puede contener impurezas, por lo que se realiza una purificación a través de varios métodos, como la electrólisis y el uso de agentes químicos para obtener plomo de alta pureza.</li>
                </ul>
            </li>
        </ul>

        <p><strong>¿Qué aplicaciones tiene el Plomo?</strong></p>
        <ul>
            <li><strong>Baterías (Baterías de Plomo-Ácido):</strong>
                <ul>
                    <li>El uso más importante del plomo hoy en día es en la fabricación de baterías de plomo-ácido, utilizadas en vehículos, sistemas de energía de respaldo y otros dispositivos de almacenamiento de energía.</li>
                    <li>Las baterías de plomo-ácido son ampliamente usadas en automóviles, camiones y vehículos eléctricos debido a su bajo costo y alta capacidad de almacenamiento.</li>
                </ul>
            </li>
        </ul>
    `;
}else if (elementName === 'Bismuto') {
    popupContent.innerHTML = `
        <h2>Bismuto</h2>
        <p><strong>Símbolo químico:</strong> Bi</p>
        <p><strong>Número atómico:</strong> 83</p>
        <p><strong>Grupo:</strong> Metales pobres</p>
        <p><strong>Periodo:</strong> 6</p>
        <p><strong>Masa atómica:</strong> 208.98 u</p>
        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
        <p><strong>Color:</strong> Blanco plateado con un ligero tinte rosado</p>

        <p><strong>¿Qué es el Bismuto?</strong></p>
        <p>El bismuto es un metal pesado, frágil, de color blanco plateado con un ligero tinte rosado. A pesar de ser un metal pesado, el bismuto es relativamente no tóxico en comparación con otros metales pesados como el plomo o el mercurio, lo que lo convierte en un material más seguro en diversas aplicaciones.</p>

        <p><strong>¿Cómo se produce el Bismuto?</strong></p>
        <ul>
            <li><strong>Extracción de minerales:</strong>
                <ul>
                    <li>El bismuto se extrae principalmente de la bismutita (Bi2O3) y de minerales de plomo y cobre, donde se encuentra en forma de sulfuros o óxidos.</li>
                </ul>
            </li>
            <li><strong>Fundición y refinación:</strong>
                <ul>
                    <li>El mineral de bismuto se funde a altas temperaturas, y el metal se separa mediante procesos como la destilación o el uso de reducción química para obtener bismuto metálico.</li>
                </ul>
            </li>
            <li><strong>Purificación:</strong>
                <ul>
                    <li>El bismuto refinado se somete a un proceso de purificación para obtener bismuto de alta pureza, que se usa en diversas aplicaciones industriales.</li>
                </ul>
            </li>
        </ul>

        <p><strong>¿Qué aplicaciones tiene el Bismuto?</strong></p>
        <ul>
            <li><strong>Aleaciones de Bajo Punto de Fusión:</strong>
                <ul>
                    <li>El bismuto se utiliza en aleaciones de bajo punto de fusión, como las que se usan en la fabricación de fusibles y sistemas de protección térmica.</li>
                    <li>Estas aleaciones tienen una temperatura de fusión más baja que la mayoría de los metales, lo que las hace útiles para proteger equipos electrónicos y eléctricos de sobrecalentamientos.</li>
                </ul>
            </li>
        </ul>
    `;
}else if (elementName === 'Polonio') {
    popupContent.innerHTML = `
        <h2>Polonio</h2>
        <p><strong>Símbolo químico:</strong> Po</p>
        <p><strong>Número atómico:</strong> 84</p>
        <p><strong>Grupo:</strong> Metales postransicionales</p>
        <p><strong>Periodo:</strong> 6</p>
        <p><strong>Masa atómica:</strong> 209.9829 u</p>
        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
        <p><strong>Color:</strong> Plateado grisáceo (en su forma pura)</p>

        <p><strong>¿Qué es el Polonio?</strong></p>
        <p>El polonio es un elemento químico radiactivo y altamente tóxico, descubierto por Marie Curie y su esposo Pierre Curie en 1898. Su nombre fue elegido en honor a Polonia, el país natal de Marie Curie.</p>

        <p><strong>¿Cómo se produce el Polonio?</strong></p>
        <ul>
            <li><strong>Fuentes naturales:</strong>
                <ul>
                    <li>El polonio se encuentra en concentraciones muy bajas en los minerales de uranio y torio. Estos minerales liberan pequeñas cantidades de polonio a través de un proceso de desintegración radiactiva.</li>
                </ul>
            </li>
            <li><strong>Producción artificial:</strong>
                <ul>
                    <li>El polonio-210 (el isótopo más utilizado) se produce irradiando bismuto-209 con neutrones en un reactor nuclear, generando polonio-210 a través de una reacción de captura de neutrones.</li>
                </ul>
            </li>
        </ul>

        <p><strong>¿Qué aplicaciones tiene el Polonio?</strong></p>
        <ul>
            <li><strong>Fuentes de Radiación (Generadores termoeléctricos):</strong>
                <ul>
                    <li>El polonio-210 se utiliza en generadores termoeléctricos de radioisótopos, especialmente en misiones espaciales, para convertir la radiación emitida por el polonio en electricidad.</li>
                    <li>Su alta capacidad de liberación de radiación alfa lo hace ideal para generar calor sin fuentes externas de energía.</li>
                </ul>
            </li>
            <li><strong>Control de Carga Estática (Eliminación de Carga Electroestática):</strong>
                <ul>
                    <li>El polonio se utiliza en dispositivos ionizadores para eliminar la carga electrostática en la industria electrónica y textil, reduciendo los efectos de la electricidad estática en la fabricación de productos.</li>
                </ul>
            </li>
        </ul>
    `;
}else if (elementName === 'Asto') {
    popupContent.innerHTML = `
        <h2>Asto</h2>
        <p><strong>Símbolo químico:</strong> At</p>
        <p><strong>Número atómico:</strong> 85</p>
        <p><strong>Grupo:</strong> Halógenos</p>
        <p><strong>Periodo:</strong> 6</p>
        <p><strong>Masa atómica:</strong> 210 u</p>
        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
        <p><strong>Color:</strong> Gris metálico</p>

        <p><strong>¿Qué es el Asto?</strong></p>
        <p>El astato es un elemento químico radiactivo y metaloide de la tabla periódica. Es extremadamente raro en la naturaleza debido a su inestabilidad. El astato es el más raro de los halógenos y se encuentra en pequeñas cantidades en la corteza terrestre debido a su desintegración radiactiva.</p>

        <p><strong>¿Cómo se produce el Asto?</strong></p>
        <ul>
            <li><strong>Formación natural:</strong>
                <ul>
                    <li>El astato se forma en pequeñas cantidades en la corteza terrestre a través de la desintegración radiactiva de uranio y torio.</li>
                </ul>
            </li>
            <li><strong>Producción artificial:</strong>
                <ul>
                    <li>En los reactores nucleares, el astato se puede producir bombardeando el bismuto-209 con partículas alfa o neutrones, lo que crea astato-211, el isótopo más utilizado.</li>
                </ul>
            </li>
        </ul>

        <p><strong>¿Qué aplicaciones tiene el Asto?</strong></p>
        <ul>
            <li><strong>Tratamiento del Cáncer (Terapia Radiactiva):</strong>
                <ul>
                    <li>El astato-211, un isótopo radiactivo del astato, se ha mostrado prometedor en la terapia dirigida para el tratamiento del cáncer. Astatoterapia utiliza la radiación alfa para atacar las células cancerígenas, siendo más selectiva y menos dañina para los tejidos sanos.</li>
                </ul>
            </li>
            <li><strong>Investigación Científica:</strong>
                <ul>
                    <li>Debido a su radiactividad, el astato se utiliza en investigaciones científicas sobre radiactividad, decaimiento nuclear y el comportamiento de elementos radiactivos.</li>
                </ul>
            </li>
        </ul>
    `;
}else if (elementName === 'Radón') {
    popupContent.innerHTML = `
        <h2>Radón</h2>
        <p><strong>Símbolo químico:</strong> Rn</p>
        <p><strong>Número atómico:</strong> 86</p>
        <p><strong>Grupo:</strong> Gases nobles</p>
        <p><strong>Periodo:</strong> 6</p>
        <p><strong>Masa atómica:</strong> 222.0176 u</p>
        <p><strong>Estado a temperatura y presión normales:</strong> Gas</p>
        <p><strong>Color:</strong> Incoloro</p>

        <p><strong>¿Qué es el Radón?</strong></p>
        <p>El radón es un gas noble radiactivo, incoloro, inodoro e insípido que se forma de manera natural como resultado de la descomposición radiactiva del radio en la corteza terrestre. Es conocido por ser altamente radiactivo y representa un peligro para la salud, especialmente en áreas cerradas y mal ventiladas.</p>

        <p><strong>¿Cómo se produce el Radón?</strong></p>
        <ul>
            <li><strong>Descomposición del radio:</strong>
                <ul>
                    <li>El radón se forma cuando el radio-226 se desintegra, liberando radón-222, el isótopo más común y peligroso del radón.</li>
                </ul>
            </li>
            <li><strong>Emisión al aire:</strong>
                <ul>
                    <li>El radón-222 se emite al aire desde el suelo o rocas, infiltrándose en edificios, especialmente en sótanos y lugares mal ventilados. También puede disolverse en agua subterránea.</li>
                </ul>
            </li>
        </ul>

        <p><strong>¿Qué aplicaciones tiene el Radón?</strong></p>
        <ul>
            <li><strong>Terapia Radiactiva (Radioterapia):</strong>
                <ul>
                    <li>En el pasado, el radón se utilizó en el tratamiento de ciertas enfermedades cancerígenas en una modalidad conocida como terapia de radón o radioterapia radón. Sin embargo, este uso ha caído en desuso debido a los riesgos para la salud y la disponibilidad de tratamientos más seguros.</li>
                </ul>
            </li>
            <li><strong>Investigación Científica:</strong>
                <ul>
                    <li>El radón se emplea en investigaciones científicas sobre radiactividad, comportamiento de gases radiactivos y interacciones nucleares. Es utilizado para estudiar la radiación alfa y sus efectos en materiales y organismos vivos.</li>
                </ul>
            </li>
        </ul>
    `;
}else if (elementName === 'Francio') {
    popupContent.innerHTML = `
        <h2>Francio</h2>
        <p><strong>Símbolo químico:</strong> Fr</p>
        <p><strong>Número atómico:</strong> 87</p>
        <p><strong>Grupo:</strong> Alcalinos</p>
        <p><strong>Periodo:</strong> 7</p>
        <p><strong>Masa atómica:</strong> 223 u</p>
        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
        <p><strong>Color:</strong> Metal plateado</p>

        <p><strong>¿Qué es el Francio?</strong></p>
        <p>El francio es un metaloide radiactivo y uno de los elementos más raros y peligrosos de la naturaleza. Fue descubierto en 1939 por Marguerite Perey en el Instituto Curie en París, Francia, y recibe su nombre en honor al país. Debido a su extrema inestabilidad y radiactividad, el francio se encuentra en cantidades extremadamente bajas en la naturaleza.</p>

        <p><strong>¿Cómo se produce el Francio?</strong></p>
        <ul>
            <li><strong>Formación natural:</strong>
                <ul>
                    <li>El francio se forma en pequeñas cantidades a través de la descomposición del actinio y otros elementos radiactivos en la corteza terrestre. Este proceso es extremadamente lento, y el francio se encuentra solo en trazas.</li>
                </ul>
            </li>
            <li><strong>Producción artificial:</strong>
                <ul>
                    <li>En un acelerador de partículas o reactor nuclear, se puede crear francio bombardeando bismuto-209 con partículas alfa, produciendo francio-223, el isótopo más estable y utilizado.</li>
                </ul>
            </li>
        </ul>

        <p><strong>¿Qué aplicaciones tiene el Francio?</strong></p>
        <ul>
            <li><strong>Investigación Científica y Estudio de la Radiactividad:</strong>
                <ul>
                    <li>El francio se utiliza principalmente en investigaciones científicas para estudiar propiedades nucleares y radiactivas de elementos. Los investigadores exploran su comportamiento radiactivo y cómo interactúa con otros isótopos en estudios de decadencia nuclear.</li>
                </ul>
            </li>
        </ul>
    `;
}else if (elementName === 'Radio') {
    popupContent.innerHTML = `
        <h2>Radio</h2>
        <p><strong>Símbolo químico:</strong> Ra</p>
        <p><strong>Número atómico:</strong> 88</p>
        <p><strong>Grupo:</strong> Alcalinotérreos</p>
        <p><strong>Periodo:</strong> 7</p>
        <p><strong>Masa atómica:</strong> 226 u</p>
        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
        <p><strong>Color:</strong> Blanco plateado</p>

        <p><strong>¿Qué es el Radio?</strong></p>
        <p>El radio es un elemento químico radiactivo que fue descubierto en 1898 por los científicos Marie y Pierre Curie. Se encuentra en la misma familia que el magnesio, el calcio y el estroncio, pero se distingue por su alta radiactividad. Aunque fue muy utilizado en la primera mitad del siglo XX, hoy en día su uso ha disminuido debido a los peligros asociados con su radiactividad.</p>

        <p><strong>¿Cómo se produce el Radio?</strong></p>
        <ul>
            <li><strong>Formación natural:</strong>
                <ul>
                    <li>El radio se forma de manera natural a partir de la descomposición radiactiva del uranio-238 y el torio-232. Este proceso genera isótopos de radio (como el radio-226) en pequeñas cantidades, emitiendo radiación alfa mientras se desintegran.</li>
                </ul>
            </li>
            <li><strong>Producción artificial:</strong>
                <ul>
                    <li>El radio también puede producirse en reactores nucleares o aceleradores de partículas mediante el bombardeo de bario-138 con neutrones, generando isótopos de radio en laboratorios especializados.</li>
                </ul>
            </li>
        </ul>

        <p><strong>¿Qué aplicaciones tiene el Radio?</strong></p>
        <ul>
            <li><strong>Terapia Radiactiva (Radioterapia):</strong>
                <ul>
                    <li>El radio-226 se utilizó en radioterapia para tratar cánceres. Su radiación alfa destruía las células cancerígenas. Sin embargo, hoy en día se han reemplazado estos tratamientos debido a los efectos secundarios graves y la toxicidad del radio.</li>
                </ul>
            </li>
        </ul>
    `;
}else if (elementName === 'Actinio') {
    popupContent.innerHTML = `
        <h2>Actinio</h2>
        <p><strong>Símbolo químico:</strong> Ac</p>
        <p><strong>Número atómico:</strong> 89</p>
        <p><strong>Grupo:</strong> Actínidos</p>
        <p><strong>Periodo:</strong> 7</p>
        <p><strong>Masa atómica:</strong> 227 u</p>
        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
        <p><strong>Color:</strong> Blanco plateado</p>

        <p><strong>¿Qué es el Actinio?</strong></p>
        <p>El actinio es un elemento químico radiactivo descubierto en 1899 por el químico alemán Friedrich Oskar Giesel. Es un metal blando y brillante que pertenece a la serie de los actínidos, conocidos por su alta radiactividad. El nombre proviene del griego "aktinos", que significa "rayo" o "radiante", debido a la notable radiactividad del actinio.</p>

        <p><strong>¿Cómo se produce el Actinio?</strong></p>
        <ul>
            <li><strong>Formación natural:</strong>
                <ul>
                    <li>El actinio se encuentra en trazas en minerales que contienen uranio y torio, como la pechblenda. Se forma a través de la descomposición radiactiva de estos elementos en la corteza terrestre.</li>
                </ul>
            </li>
            <li><strong>Producción artificial:</strong>
                <ul>
                    <li>En los laboratorios, el actinio se puede producir mediante el bombardeo de bismuto o radón con partículas alfa o neutrones en reactores nucleares, generando isótopos como el actinio-227.</li>
                </ul>
            </li>
        </ul>

        <p><strong>¿Qué aplicaciones tiene el Actinio?</strong></p>
        <ul>
            <li><strong>Fuente de radiación en investigaciones científicas:</strong>
                <ul>
                    <li>El actinio-227 se utiliza en investigaciones nucleares debido a su alta radiactividad. Se emplea como fuente de partículas alfa para estudios sobre radiactividad y decadencia nuclear.</li>
                </ul>
            </li>
        </ul>
    `;
}else if (elementName === 'Torio') {
    popupContent.innerHTML = `
        <h2>Torio</h2>
        <p><strong>Símbolo químico:</strong> Th</p>
        <p><strong>Número atómico:</strong> 90</p>
        <p><strong>Grupo:</strong> Actínidos</p>
        <p><strong>Periodo:</strong> 7</p>
        <p><strong>Masa atómica:</strong> 232.04 u</p>
        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
        <p><strong>Color:</strong> Plateado</p>

        <p><strong>¿Qué es el Torio?</strong></p>
        <p>El torio es un elemento químico radiactivo descubierto en 1828 por Jöns Jakob Berzelius. Es un metal plateado que forma parte de los actínidos en la tabla periódica. Aunque su radiactividad es menor que la del uranio, el torio ha ganado interés como una posible fuente de energía nuclear debido a su abundancia y propiedades favorables.</p>

        <p><strong>¿Cómo se produce el Torio?</strong></p>
        <ul>
            <li><strong>Formación natural:</strong>
                <ul>
                    <li>El torio se forma naturalmente en la corteza terrestre a través de la descomposición de otros elementos radiactivos, como el uranio. Se encuentra principalmente en minerales como la monacita y la thorita, que contienen compuestos que liberan torio-232.</li>
                </ul>
            </li>
            <li><strong>Producción artificial:</strong>
                <ul>
                    <li>El torio también puede ser producido en reactores nucleares mediante la irradiación de torio-232 con neutrones rápidos, lo que lo convierte en uranio-233, un material fisible que puede ser utilizado para generar energía.</li>
                </ul>
            </li>
        </ul>

        <p><strong>¿Qué aplicaciones tiene el Torio?</strong></p>
        <ul>
            <li><strong>Energía nuclear (Ciclo torio-uranio):</strong>
                <ul>
                    <li>El torio ha sido propuesto como un posible combustible nuclear alternativo al uranio. El torio-232 se convierte en uranio-233 en reactores nucleares, lo que puede generar energía. Este ciclo torio-uranio es considerado más seguro y eficiente que el ciclo tradicional de uranio-235.</li>
                </ul>
            </li>
        </ul>
    `;
}else if (elementName === 'Protactinio') {
    popupContent.innerHTML = `
        <h2>Protactinio</h2>
        <p><strong>Símbolo químico:</strong> Pa</p>
        <p><strong>Número atómico:</strong> 91</p>
        <p><strong>Grupo:</strong> Actínidos</p>
        <p><strong>Periodo:</strong> 7</p>
        <p><strong>Masa atómica:</strong> 231.04 u</p>
        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
        <p><strong>Color:</strong> Plateado</p>

        <p><strong>¿Qué es el Protactinio?</strong></p>
        <p>El protactinio es un elemento químico radiactivo que pertenece a la serie de los actínidos en la tabla periódica. Fue descubierto en 1899 por Otto Hahn y Lise Meitner. Es un elemento raro y de alta radiactividad, y debido a su escasez y peligrosidad, tiene aplicaciones limitadas.</p>

        <p><strong>¿Cómo se produce el Protactinio?</strong></p>
        <ul>
            <li><strong>Formación natural:</strong>
                <ul>
                    <li>El protactinio se forma naturalmente como un producto de la descomposición radiactiva de uranio-238 y torio-232, dando lugar al protactinio-231, el isótopo más estable de este elemento.</li>
                </ul>
            </li>
            <li><strong>Producción artificial:</strong>
                <ul>
                    <li>El protactinio también puede producirse en reactores nucleares mediante la irradiación de uranio o torio, lo que genera protactinio-233, que eventualmente se desintegra en uranio-233.</li>
                </ul>
            </li>
        </ul>

        <p><strong>¿Qué aplicaciones tiene el Protactinio?</strong></p>
        <ul>
            <li><strong>Investigación nuclear:</strong>
                <ul>
                    <li>El protactinio se utiliza principalmente en investigaciones nucleares para estudiar la desintegración radiactiva y los procesos nucleares. Los isótopos de protactinio, como el protactinio-233, son de interés en el estudio de ciclos nucleares en reactores.</li>
                </ul>
            </li>
        </ul>
    `;
}else if (elementName === 'Uranio') {
    popupContent.innerHTML = `
        <h2>Uranio</h2>
        <p><strong>Símbolo químico:</strong> U</p>
        <p><strong>Número atómico:</strong> 92</p>
        <p><strong>Grupo:</strong> Actínidos</p>
        <p><strong>Periodo:</strong> 7</p>
        <p><strong>Masa atómica:</strong> 238.02891 u</p>
        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
        <p><strong>Color:</strong> Plateado</p>

        <p><strong>¿Qué es el Uranio?</strong></p>
        <p>El uranio es un elemento químico radiactivo que pertenece a la serie de los actínidos en la tabla periódica. Fue descubierto en 1789 por el químico alemán Martin Heinrich Klaproth, y su nombre proviene del planeta Urano. Es un metal pesado de color plateado, conocido principalmente por su uso en la producción de energía nuclear.</p>

        <p><strong>¿Cómo se produce el Uranio?</strong></p>
        <ul>
            <li><strong>Formación natural:</strong>
                <ul>
                    <li>El uranio se forma naturalmente en la corteza terrestre, encontrándose principalmente en minerales como la uraninita (pechblenda), que contiene uranio-238. Este isótopo es el más abundante en la naturaleza.</li>
                </ul>
            </li>
            <li><strong>Producción artificial:</strong>
                <ul>
                    <li>El uranio también puede obtenerse de manera artificial en cantidades pequeñas en reactores nucleares, o a través de procesos de separación isotópica para concentrar el uranio-235, el isótopo utilizado en la fisión nuclear.</li>
                </ul>
            </li>
        </ul>

        <p><strong>¿Qué aplicaciones tiene el Uranio?</strong></p>
        <ul>
            <li><strong>Energía nuclear:</strong>
                <ul>
                    <li>El uranio es fundamental en la generación de energía nuclear. En los reactores nucleares, el uranio-235 es utilizado como combustible, en un proceso llamado fisión nuclear. Este proceso genera calor que se convierte en energía eléctrica.</li>
                </ul>
            </li>
        </ul>
    `;
}else if (elementName === 'Neptunio') {
    popupContent.innerHTML = `
        <h2>Neptunio</h2>
        <p><strong>Símbolo químico:</strong> Np</p>
        <p><strong>Número atómico:</strong> 93</p>
        <p><strong>Grupo:</strong> Actínidos</p>
        <p><strong>Periodo:</strong> 7</p>
        <p><strong>Masa atómica:</strong> 237.05 u</p>
        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
        <p><strong>Color:</strong> Plateado</p>

        <p><strong>¿Qué es el Neptunio?</strong></p>
        <p>El neptunio es un elemento químico radiactivo que pertenece a la serie de los actínidos en la tabla periódica. Fue el primer elemento transuránico (con un número atómico superior al del uranio) descubierto en 1940 por Glenn T. Seaborg y su equipo en la Universidad de California, Berkeley. El neptunio se obtiene principalmente mediante procesos nucleares en reactores o aceleradores de partículas.</p>

        <p><strong>¿Cómo se produce el Neptunio?</strong></p>
        <ul>
            <li><strong>Producción en reactores nucleares:</strong>
                <ul>
                    <li>El neptunio-239 se forma cuando el uranio-238 captura un neutrón y se convierte en uranio-239, que luego se desintegra para formar neptunio-239.</li>
                </ul>
            </li>
            <li><strong>Otras fuentes:</strong>
                <ul>
                    <li>El neptunio también puede ser producido en cantidades pequeñas en aceleradores de partículas, aunque la producción en reactores nucleares es la más común.</li>
                </ul>
            </li>
        </ul>

        <p><strong>¿Qué aplicaciones tiene el Neptunio?</strong></p>
        <ul>
            <li><strong>Investigación nuclear:</strong>
                <ul>
                    <li>El neptunio-239 se utiliza principalmente en investigaciones nucleares, siendo un intermediario en la fabricación de plutonio-239, que tiene aplicaciones en reactores nucleares y en la fabricación de armas nucleares.</li>
                    <li>Además, el neptunio se utiliza en el estudio de los actínidos y otros elementos transuránicos, lo que es crucial para comprender los procesos nucleares y la química de los elementos pesados.</li>
                </ul>
            </li>
        </ul>
    `;
}else if (elementName === 'Plutonio') {
    popupContent.innerHTML = `
        <h2>Plutonio</h2>
        <p><strong>Símbolo químico:</strong> Pu</p>
        <p><strong>Número atómico:</strong> 94</p>
        <p><strong>Grupo:</strong> Actínidos</p>
        <p><strong>Periodo:</strong> 7</p>
        <p><strong>Masa atómica:</strong> 244.06 u</p>
        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
        <p><strong>Color:</strong> Plateado</p>

        <p><strong>¿Qué es el Plutonio?</strong></p>
        <p>El plutonio es un elemento químico radiactivo que pertenece a la serie de los actínidos en la tabla periódica. Fue descubierto en 1940 por un equipo de científicos liderado por Glenn T. Seaborg en la Universidad de California, Berkeley. Su nombre proviene del planeta Plutón. Es un metal pesado y altamente radiactivo, con aplicaciones significativas en la energía nuclear y la defensa.</p>

        <p><strong>¿Cómo se produce el Plutonio?</strong></p>
        <ul>
            <li><strong>Producción en reactores nucleares:</strong>
                <ul>
                    <li>El plutonio-239 se forma cuando el uranio-238 captura un neutrón en un reactor nuclear. Luego, el uranio-239 sufre una desintegración beta y se convierte en plutonio-239.</li>
                    <li>El plutonio-239 es un isótopo fisible, lo que significa que puede ser utilizado como combustible nuclear en reactores nucleares.</li>
                </ul>
            </li>
        </ul>

        <p><strong>¿Qué aplicaciones tiene el Plutonio?</strong></p>
        <ul>
            <li><strong>Energía nuclear:</strong>
                <ul>
                    <li>El plutonio-239 se utiliza en reactores nucleares como combustible. A través de la fisión nuclear, se libera gran cantidad de energía que se convierte en calor, utilizado para generar electricidad.</li>
                    <li>En algunos reactores nucleares, el plutonio se reutiliza como parte del ciclo nuclear, lo que permite aprovecharlo tras su fisión.</li>
                </ul>
            </li>
            <li><strong>Armas nucleares:</strong>
                <ul>
                    <li>El plutonio-239 es uno de los materiales más eficientes para la fabricación de armas nucleares. Se utiliza como material activo en bombas atómicas y otros dispositivos nucleares.</li>
                </ul>
            </li>
        </ul>
    `;
}else if (elementName === 'Americio') {
    popupContent.innerHTML = `
        <h2>Americio</h2>
        <p><strong>Símbolo químico:</strong> Am</p>
        <p><strong>Número atómico:</strong> 95</p>
        <p><strong>Grupo:</strong> Actínidos</p>
        <p><strong>Periodo:</strong> 7</p>
        <p><strong>Masa atómica:</strong> 243.06 u</p>
        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
        <p><strong>Color:</strong> Plateado</p>

        <p><strong>¿Qué es el Americio?</strong></p>
        <p>El americio es un elemento químico radiactivo con el símbolo Am y el número atómico 95. Es un metal de transición actínido que pertenece a la serie de los actínidos en la tabla periódica. Fue descubierto en 1944 por Glenn T. Seaborg, Albert Ghiorso y Ralph A. James en el Laboratorio de Radiación de la Universidad de California, Berkeley. Su nombre proviene del continente América debido a su descubrimiento en el contexto de la investigación nuclear estadounidense.</p>

        <p><strong>¿Cómo se produce el Americio?</strong></p>
        <ul>
            <li><strong>Producción en reactores nucleares:</strong>
                <ul>
                    <li>El americio-241, el isótopo más común, se produce cuando el plutonio-239 captura un neutrón en un reactor nuclear y se convierte en plutonio-240, que luego se desintegra en americio-241.</li>
                    <li>Los isótopos de americio también se producen en cantidades pequeñas cuando el uranio o el neptunio son bombardeados con neutrones en reactores nucleares.</li>
                </ul>
            </li>
        </ul>

        <p><strong>¿Qué aplicaciones tiene el Americio?</strong></p>
        <ul>
            <li><strong>Fuentes de radiación (medición y detección):</strong>
                <ul>
                    <li>El americio-241 se utiliza en detectores de humo ionizantes. En estos dispositivos, el americio emite radiación alfa que ioniza el aire en una cámara de detección. Si el humo interrumpe este flujo de partículas, el detector activa una alarma.</li>
                </ul>
            </li>
        </ul>
    `;
}else if (elementName === 'Curio') {
    popupContent.innerHTML = `
        <h2>Curio</h2>
        <p><strong>Símbolo químico:</strong> Cm</p>
        <p><strong>Número atómico:</strong> 96</p>
        <p><strong>Grupo:</strong> Actínidos</p>
        <p><strong>Periodo:</strong> 7</p>
        <p><strong>Masa atómica:</strong> 247.07 u</p>
        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
        <p><strong>Color:</strong> Plateado</p>

        <p><strong>¿Qué es el Curio?</strong></p>
        <p>El curio es un elemento químico radiactivo con el símbolo Cm y el número atómico 96. Pertenece a la serie de los actínidos y fue descubierto en 1944 por los científicos Albert Ghiorso, Glenn T. Seaborg y Ralph A. James en la Universidad de California, Berkeley. El curio fue nombrado en honor a Marie Curie, la científica pionera en el estudio de la radiactividad.</p>

        <p><strong>¿Cómo se produce el Curio?</strong></p>
        <ul>
            <li><strong>Producción en reactores nucleares:</strong>
                <ul>
                    <li>El curio se produce principalmente en reactores nucleares al bombardear plutonio o uranio con neutrones.</li>
                    <li>Cuando el plutonio-239 o el uranio-238 captura un neutrón, se transforma en plutonio-240 o uranio-239, que luego se convierte en curio-244 o curio-243 a través de una serie de reacciones nucleares.</li>
                </ul>
            </li>
        </ul>

        <p><strong>¿Qué aplicaciones tiene el Curio?</strong></p>
        <ul>
            <li><strong>Fuentes de radiación:</strong>
                <ul>
                    <li>El curio, especialmente el curio-242, se utiliza en la fabricación de fuentes de radiación. Estos generadores de neutrones emiten neutrones a través de la desintegración radiactiva, lo que es útil para investigaciones científicas en áreas como la física nuclear y la química.</li>
                </ul>
            </li>
            <li><strong>Investigación científica:</strong>
                <ul>
                    <li>El curio tiene aplicaciones en investigaciones nucleares y físicas, siendo útil en experimentos que requieren neutrones rápidos, como la fusión nuclear y otros estudios de materia nuclear.</li>
                </ul>
            </li>
        </ul>
    `;
}else if (elementName === 'Berkelio') {
    popupContent.innerHTML = `
        <h2>Berkelio</h2>
        <p><strong>Símbolo químico:</strong> Bk</p>
        <p><strong>Número atómico:</strong> 97</p>
        <p><strong>Grupo:</strong> Actínidos</p>
        <p><strong>Periodo:</strong> 7</p>
        <p><strong>Masa atómica:</strong> 247.07 u</p>
        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
        <p><strong>Color:</strong> Plateado</p>

        <p><strong>¿Qué es el Berkelio?</strong></p>
        <p>El berkelio es un elemento químico radiactivo con el símbolo Bk y el número atómico 97. Pertenece a la serie de los actínidos y fue descubierto en 1949 por los científicos Glenn T. Seaborg, Albert Ghiorso, y Ralph A. James en el Laboratorio de Radiación de la Universidad de California en Berkeley, de donde proviene su nombre.</p>

        <p><strong>¿Cómo se produce el Berkelio?</strong></p>
        <ul>
            <li><strong>Producción en reactores nucleares:</strong>
                <ul>
                    <li>El berkelio se produce al bombardear curio con neutrones en un reactor nuclear. Esta reacción nuclear transforma el curio en berkelio.</li>
                    <li>También se puede producir a partir de la irradiación de actínidos como el californio en un reactor nuclear.</li>
                </ul>
            </li>
        </ul>

        <p><strong>¿Qué aplicaciones tiene el Berkelio?</strong></p>
        <ul>
            <li><strong>Investigación científica:</strong>
                <ul>
                    <li>El berkelio se utiliza principalmente en la investigación nuclear y en estudios sobre los actínidos y su comportamiento en procesos nucleares.</li>
                    <li><strong>Investigaciones nucleares:</strong> El berkelio se utiliza para crear neutrones en experimentos nucleares. Los isótopos radiactivos del berkelio, como el berkelio-249, se utilizan en la producción de neutrones rápidos para investigaciones en física nuclear y química nuclear.</li>
                    <li><strong>Estudios sobre la fusión nuclear:</strong> Los isótopos del berkelio también han sido utilizados para estudiar los procesos de fusión nuclear debido a su capacidad para generar neutrones en reacciones controladas.</li>
                </ul>
            </li>
        </ul>
    `;
}else if (elementName === 'Californio') {
    popupContent.innerHTML = `
        <h2>Californio</h2>
        <p><strong>Símbolo químico:</strong> Cf</p>
        <p><strong>Número atómico:</strong> 98</p>
        <p><strong>Grupo:</strong> Actínidos</p>
        <p><strong>Periodo:</strong> 7</p>
        <p><strong>Masa atómica:</strong> 251.08 u</p>
        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
        <p><strong>Color:</strong> Plateado</p>

        <p><strong>¿Qué es el Californio?</strong></p>
        <p>El californio es un elemento químico radiactivo con el símbolo Cf y el número atómico 98. Pertenece a la serie de los actínidos y fue descubierto en 1950 por un equipo de científicos en la Universidad de California, Berkeley: Stanley G. Thompson, Kenneth Street Jr., Albert Ghiorso y Glenn T. Seaborg. Su nombre proviene del estado de California, donde fue sintetizado por primera vez.</p>

        <p><strong>¿Cómo se produce el Californio?</strong></p>
        <ul>
            <li><strong>Proceso de producción:</strong>
                <ul>
                    <li><strong>Bombardeo de neutrones:</strong> El californio se produce a partir del curio-242 o curio-244, que es bombardeado con neutrones en un reactor nuclear. A través de una serie de capturas de neutrones y desintegraciones beta, se forma el californio-252.</li>
                    <li><strong>Separación química:</strong> Una vez formado, el californio debe ser extraído y purificado a través de complejos procesos químicos.</li>
                </ul>
            </li>
        </ul>

        <p><strong>¿Qué aplicaciones tiene el Californio?</strong></p>
        <ul>
            <li><strong>Fuente de neutrones:</strong>
                <ul>
                    <li>El californio-252 es una de las fuentes de neutrones más intensas disponibles. Sus neutrones son utilizados en:</li>
                    <ul>
                        <li><strong>Análisis de materiales:</strong> En industrias y laboratorios para detectar impurezas en materiales metálicos y plásticos.</li>
                        <li><strong>Investigación nuclear:</strong> Se usa en experimentos de física nuclear y en reactores de investigación.</li>
                    </ul>
                </ul>
            </li>
        </ul>
    `;
}else if (elementName === 'Einstenio') {
    popupContent.innerHTML = `
        <h2>Einstenio</h2>
        <p><strong>Símbolo químico:</strong> Es</p>
        <p><strong>Número atómico:</strong> 99</p>
        <p><strong>Grupo:</strong> Actínidos</p>
        <p><strong>Periodo:</strong> 7</p>
        <p><strong>Masa atómica:</strong> 252.08 u</p>
        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
        <p><strong>Color:</strong> Plateado</p>

        <p><strong>¿Qué es el Einstenio?</strong></p>
        <p>El einstenio es un elemento químico radiactivo con el símbolo Es y número atómico 99. Pertenece a la serie de los actínidos y fue descubierto en 1952 como un producto de la explosión de la primera bomba de hidrógeno (la prueba nuclear "Ivy Mike"). Su nombre honra al físico Albert Einstein.</p>

        <p><strong>¿Cómo se produce el Einstenio?</strong></p>
        <ul>
            <li><strong>Proceso de producción:</strong>
                <ul>
                    <li><strong>Bombardeo de neutrones:</strong> Se parte del curio o californio, que es bombardeado con neutrones en reactores nucleares de alto flujo. A través de capturas sucesivas de neutrones y desintegraciones beta, se forma el einstenio-252 o einstenio-254.</li>
                    <li><strong>Separación química:</strong> El einstenio debe ser separado de otros elementos mediante complejos procesos químicos en laboratorios especializados.</li>
                </ul>
            </li>
        </ul>

        <p><strong>¿Qué aplicaciones tiene el Einstenio?</strong></p>
        <ul>
            <li><strong>Investigación científica:</strong>
                <ul>
                    <li>Se usa para estudiar propiedades de los actínidos y cómo se comportan los elementos superpesados en condiciones extremas.</li>
                </ul>
            </li>
            <li><strong>Producción de elementos más pesados:</strong>
                <ul>
                    <li>Se ha utilizado en la síntesis de elementos más pesados, como el mendelevio (Md), al bombardear el einstenio con partículas en aceleradores.</li>
                </ul>
            </li>
            <li><strong>Estudios sobre la radiactividad:</strong>
                <ul>
                    <li>Se usa para investigar la estructura nuclear y el comportamiento de materiales radiactivos.</li>
                </ul>
            </li>
        </ul>
    `;
}else if (elementName === 'Fermio') {
    popupContent.innerHTML = `
        <h2>Fermio</h2>
        <p><strong>Símbolo químico:</strong> Fm</p>
        <p><strong>Número atómico:</strong> 100</p>
        <p><strong>Grupo:</strong> Actínidos</p>
        <p><strong>Periodo:</strong> 7</p>
        <p><strong>Masa atómica:</strong> 257 u</p>
        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
        <p><strong>Color:</strong> Plateado</p>

        <p><strong>¿Qué es el Fermio?</strong></p>
        <p>El fermio es un elemento químico radiactivo con el símbolo Fm y número atómico 100. Pertenece a la serie de los actínidos y fue descubierto en 1952 como un subproducto de la explosión de la primera bomba de hidrógeno (prueba nuclear "Ivy Mike"). Su nombre honra al físico Enrico Fermi, pionero en la física nuclear.</p>

        <p><strong>¿Cómo se produce el Fermio?</strong></p>
        <ul>
            <li><strong>Proceso de producción:</strong>
                <ul>
                    <li><strong>Bombardeo de neutrones:</strong> Se parte de curio o californio, que es bombardeado con neutrones en un reactor nuclear. A través de múltiples capturas de neutrones y desintegraciones beta, se obtiene fermio-257.</li>
                    <li><strong>Separación química:</strong> Se usa cromatografía de intercambio iónico para separar el fermio de otros actínidos producidos en el reactor.</li>
                </ul>
            </li>
        </ul>

        <p><strong>¿Qué aplicaciones tiene el Fermio?</strong></p>
        <ul>
            <li><strong>Estudios de física nuclear:</strong> Se usa para investigar la estructura de los núcleos atómicos y los límites de la tabla periódica.</li>
            <li><strong>Producción de elementos más pesados:</strong> Se ha utilizado en experimentos para intentar crear elementos superpesados en aceleradores de partículas.</li>
        </ul>
    `;
}else if (elementName === 'Fermio') {
    popupContent.innerHTML = `
        <h2>Fermio</h2>
        <p><strong>Símbolo químico:</strong> Fm</p>
        <p><strong>Número atómico:</strong> 100</p>
        <p><strong>Grupo:</strong> Actínidos</p>
        <p><strong>Periodo:</strong> 7</p>
        <p><strong>Masa atómica:</strong> 257 u</p>
        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
        <p><strong>Color:</strong> Plateado</p>

        <p><strong>¿Qué es el Fermio?</strong></p>
        <p>El fermio es un elemento químico radiactivo con el símbolo Fm y número atómico 100. Pertenece a la serie de los actínidos y fue descubierto en 1952 como un subproducto de la explosión de la primera bomba de hidrógeno (prueba nuclear "Ivy Mike"). Su nombre honra al físico Enrico Fermi, pionero en la física nuclear.</p>

        <p><strong>¿Cómo se produce el Fermio?</strong></p>
        <ul>
            <li><strong>Proceso de producción:</strong>
                <ul>
                    <li><strong>Bombardeo de neutrones:</strong> Se parte de curio o californio, que es bombardeado con neutrones en un reactor nuclear. A través de múltiples capturas de neutrones y desintegraciones beta, se obtiene fermio-257.</li>
                    <li><strong>Separación química:</strong> Se usa cromatografía de intercambio iónico para separar el fermio de otros actínidos producidos en el reactor.</li>
                </ul>
            </li>
        </ul>

        <p><strong>¿Qué aplicaciones tiene el Fermio?</strong></p>
        <ul>
            <li><strong>Estudios de física nuclear:</strong> Se usa para investigar la estructura de los núcleos atómicos y los límites de la tabla periódica.</li>
            <li><strong>Producción de elementos más pesados:</strong> Se ha utilizado en experimentos para intentar crear elementos superpesados en aceleradores de partículas.</li>
        </ul>
    `;
}else if (elementName === 'Mendelevio') {
    popupContent.innerHTML = `
        <h2>Mendelevio</h2>
        <p><strong>Símbolo químico:</strong> Md</p>
        <p><strong>Número atómico:</strong> 101</p>
        <p><strong>Grupo:</strong> Actínidos</p>
        <p><strong>Periodo:</strong> 7</p>
        <p><strong>Masa atómica:</strong> 258 u</p>
        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
        <p><strong>Color:</strong> Desconocido (posiblemente plateado o metálico)</p>

        <p><strong>¿Qué es el Mendelevio?</strong></p>
        <p>El mendelevio es un elemento químico radiactivo con el símbolo Md y número atómico 101. Pertenece a la serie de los actínidos y fue descubierto en 1955 por un equipo de científicos liderado por Albert Ghiorso, Glenn T. Seaborg, Gregory Choppin, Bernard G. Harvey y Stanley G. Thompson en el Laboratorio Nacional de Berkeley (EE.UU.). Su nombre honra al químico Dmitri Mendeléyev, creador de la tabla periódica.</p>

        <p><strong>¿Cómo se produce el Mendelevio?</strong></p>
        <ul>
            <li><strong>Proceso de producción:</strong>
                <ul>
                    <li><strong>Bombardeo de partículas:</strong> Se bombardea einstenio-253 con iones de helio (partículas alfa) en un ciclotrón (acelerador de partículas). Este proceso produce átomos de mendelevio-256, que tienen una vida media de solo 1,27 horas.</li>
                    <li><strong>Separación química:</strong> Se emplean técnicas de cromatografía de intercambio iónico para aislar el mendelevio de otros productos de reacción.</li>
                </ul>
            </li>
        </ul>

        <p><strong>¿Qué aplicaciones tiene el Mendelevio?</strong></p>
        <ul>
            <li><strong>Estudios de química nuclear:</strong> Se usa para investigar las propiedades de los actínidos y la estructura de los elementos superpesados.</li>
            <li><strong>Síntesis de nuevos elementos:</strong> Se ha utilizado en experimentos para crear elementos aún más pesados en la tabla periódica.</li>
        </ul>
    `;
}else if (elementName === 'Nobelio') {
    popupContent.innerHTML = `
        <h2>Nobelio</h2>
        <p><strong>Símbolo químico:</strong> No</p>
        <p><strong>Número atómico:</strong> 102</p>
        <p><strong>Grupo:</strong> Actínidos</p>
        <p><strong>Periodo:</strong> 7</p>
        <p><strong>Masa atómica:</strong> 259 u</p>
        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
        <p><strong>Color:</strong> Desconocido (posiblemente plateado o metálico)</p>

        <p><strong>¿Qué es el Nobelio?</strong></p>
        <p>El nobelio es un elemento químico radiactivo con el símbolo No y número atómico 102. Fue descubierto en 1957 por científicos del Instituto Nobel de Física en Suecia, aunque su descubrimiento definitivo se atribuye al Laboratorio Nacional de Lawrence Berkeley (EE.UU.) en 1958. Su nombre honra a Alfred Nobel, inventor de la dinamita y fundador de los premios Nobel.</p>

        <p><strong>¿Cómo se produce el Nobelio?</strong></p>
        <ul>
            <li><strong>Proceso de producción:</strong>
                <ul>
                    <li><strong>Bombardeo de iones:</strong> Se bombardea curio-244 o californio-249 con iones de carbono o neón en un acelerador de partículas. Esto genera átomos de nobelio-259, que tienen una vida media muy corta.</li>
                    <li><strong>Separación química:</strong> Se usan técnicas de cromatografía de intercambio iónico para aislar el nobelio de otros elementos producidos en la reacción.</li>
                </ul>
            </li>
        </ul>

        <p><strong>¿Qué aplicaciones tiene el Nobelio?</strong></p>
        <ul>
            <li><strong>Investigación científica:</strong> Se usa para estudiar las propiedades de los actínidos y la estructura de los elementos superpesados.</li>
            <li><strong>Química de los elementos transuránicos:</strong> Permite analizar el comportamiento químico de los elementos más allá del uranio.</li>
        </ul>
    `;
}else if (elementName === 'Lawrencio') {
    popupContent.innerHTML = `
        <h2>Lawrencio</h2>
        <p><strong>Símbolo químico:</strong> Lr</p>
        <p><strong>Número atómico:</strong> 103</p>
        <p><strong>Grupo:</strong> Actínidos</p>
        <p><strong>Periodo:</strong> 7</p>
        <p><strong>Masa atómica:</strong> 262 u</p>
        <p><strong>Estado a temperatura y presión normales:</strong> Sólido</p>
        <p><strong>Color:</strong> Desconocido (posiblemente plateado o metálico)</p>

        <p><strong>¿Qué es el Lawrencio?</strong></p>
        <p>El lawrencio es un elemento químico radiactivo con el símbolo Lr y número atómico 103. Fue descubierto en 1961 por científicos del Laboratorio Nacional de Lawrence Berkeley (EE.UU.). Su nombre honra a Ernest Lawrence, inventor del ciclotrón, un tipo de acelerador de partículas.</p>

        <p><strong>¿Cómo se produce el Lawrencio?</strong></p>
        <ul>
            <li><strong>Proceso de producción:</strong>
                <ul>
                    <li><strong>Bombardeo de iones:</strong> Se bombardea californio-249 con iones de boro o neón en un acelerador de partículas. Se generan átomos de lawrencio-262, que tienen una vida media corta.</li>
                    <li><strong>Separación química:</strong> Se utilizan técnicas de cromatografía de intercambio iónico para aislar el lawrencio de otros elementos.</li>
                </ul>
            </li>
        </ul>

        <p><strong>¿Qué aplicaciones tiene el Lawrencio?</strong></p>
        <ul>
            <li><strong>Investigación científica:</strong> Se usa para estudiar las propiedades de los actínidos y los elementos superpesados.</li>
            <li><strong>Química de los elementos transuránicos:</strong> Ayuda a comprender el comportamiento químico de los elementos más pesados.</li>
        </ul>
    `;



























                                
                
                
                
                
                
                
                
                
                
                
    
     }else{ popupContent.innerHTML = `
            <h2>${elementName}</h2>
            <p>Número atómico: ${element.querySelector('.atomic-number').textContent}</p>
            <p>Masa atómica: ${element.querySelector('.atomic-mass').textContent}</p>
        `;
    }

        popup.style.display = 'block';
        popupOverlay.style.display = 'block';

        // Asegúrate de que el contenido sea desplazable si es necesario
        popup.style.overflowY = 'auto';
    }
});

