**1\. Primero: pagos — Mercado Pago vs. Stripe**

### **Stripe: no lo elegiría para este evento**

Actualmente Stripe **no admite Argentina como país para abrir una cuenta de pagos estándar**. Argentina no aparece en el listado oficial de países soportados. 

Podrías abrir Stripe en otro país solamente si realmente tenés allí una estructura que cumpla sus requisitos: entidad legal, identificación fiscal, domicilio físico, teléfono, cuenta bancaria física, etc. 

Por lo tanto, **no intentaría montar el evento sobre Stripe desde Argentina**.

---

## **2\. Mercado Pago sí encaja muy bien**

Mercado Pago permite cobrar mediante Link de Pago o integrar Checkout directamente dentro de tu sitio. Además, tiene webhooks para avisarle automáticamente a tu sistema cuando un pago queda aprobado, rechazado o pendiente. 

Y esto es especialmente interesante para vos porque ya trabajás con **n8n \+ Airtable/Google Sheets**.

Podemos hacer:

**Landing → Mercado Pago → Webhook → n8n → Base de asistentes → Email/WhatsApp → Onboarding**

Sin que tengas que revisar manualmente quién pagó.

### **Comisiones actuales**

Mercado Pago publica actualmente para Link de Pago:

| Cuándo recibís el dinero | Comisión publicada |
| ----- | ----- |
| Inmediato | 6,29% \+ IVA |
| 10 días | 4,39% \+ IVA |
| 18 días | 3,39% \+ IVA |
| 35 días | 1,49% \+ IVA |

Los costos pueden variar por impuestos provinciales y condiciones de la cuenta. 

**Yo no elegiría cobrar inmediatamente salvo que necesites la liquidez.** Para un evento que vendés con varias semanas de anticipación, tiene sentido evaluar 10/18/35 días y preservar margen.

Ejemplo conceptual:

Si el workshop costara **$50.000** y cobrás inmediatamente:

* Comisión: $3.145  
* IVA sobre comisión: $660,45  
* costo aproximado: **$3.805**  
* recibís aproximadamente: **$46.195**

Antes de impuestos/retenciones que puedan corresponder.

No tomes esto como cálculo fiscal definitivo: para la facturación y situación específica de tu monotributo conviene validarlo con tu contador. ARCA establece el régimen de facturación correspondiente para monotributistas y actualmente publica las categorías y parámetros vigentes. 

**Ser monotributista no te impide estructurar el evento y cobrarlo**, pero tenés que cuidar que la actividad esté correctamente encuadrada y emitir el comprobante correspondiente.

---

# **3\. El producto que realmente estamos vendiendo**

Acá está el punto más importante.

No vendería:

“Un curso de inteligencia artificial.”

Ni:

“Un workshop para aprender IA.”

Eso es demasiado genérico.

La propuesta debería ser:

# **WORKSHOP PRÁCTICO DE IA**

### **Construí soluciones con IA**

Durante un día, el participante **ve cómo se construye una solución real**, trabaja sobre una base preparada y se lleva:

* repositorio descargable;  
* código;  
* recursos;  
* configuraciones;  
* ejemplos;  
* documentación;  
* una base para seguir construyendo después del workshop.

La promesa central sería:

**No te vas solamente con apuntes. Te vas con una base real sobre la que podés seguir construyendo.**

Eso es mucho más tangible.

---

# **4\. El producto tiene que tener un “antes” y un “después”**

Esto es fundamental para venderlo.

### **Antes**

La persona:

* quiere empezar a construir con IA;  
* tiene ideas pero no sabe por dónde empezar;  
* copia tutoriales;  
* salta entre herramientas;  
* no sabe cómo conectar las piezas;  
* siente que necesita saber muchísimo código;  
* no tiene una base desde la cual arrancar.

### **Después**

Queremos que pueda decir:

“Ahora entiendo cómo está armado.”

“Tengo el repositorio.”

“Puedo modificarlo.”

“Sé qué componentes necesito.”

“Puedo seguir experimentando después.”

Ese es el **resultado del producto**.

---

# **5\. Cómo estructuraría el workshop**

Yo no lo haría de 8-10 horas de contenido.

Haría:

## **Sábado 5 de septiembre**

### **10:00 → 17:00**

**7 horas de jornada total**, aproximadamente:

* 5 h 30 min / 6 h de contenido real  
* 2 descansos  
* pausa para almuerzo

Eso permite venderlo como:

**1 DÍA INTENSIVO**

Y no como una clase eterna.

### **Cronograma tentativo**

**10:00 — Apertura**

Qué vamos a construir, qué se van a llevar y cómo funciona el repositorio.

---

**10:30 — BLOQUE 1**

### **Cómo pensar una solución con IA**

* problema;  
* arquitectura;  
* componentes;  
* modelos;  
* datos;  
* APIs;  
* lógica;  
* interfaz;  
* automatizaciones/integraciones cuando correspondan.

Acá posicionás tu conocimiento.

---

**11:30 — BLOQUE 2**

### **Construcción**

Empezás a trabajar sobre la solución real.

Código.

Configuración.

Integraciones.

Pruebas.

---

**13:00 — BREAK / ALMUERZO**

---

**14:00 — BLOQUE 3**

### **Implementación en vivo**

Acá tiene que pasar la parte más interesante:

**“Mirá, ahora hacemos que esto funcione.”**

---

**15:30 — BLOQUE 4**

### **Personalización**

Cómo tomar la base y adaptarla.

Qué cambiar.

Dónde tocar código.

Qué variables modificar.

Cómo conectar otros servicios.

---

**16:15 — BLOQUE 5**

### **De prototipo a solución**

Errores comunes.

Seguridad.

Costos.

Escalabilidad.

Qué pasa cuando esto deja de ser una demo.

Esto es importante para vos porque refuerza tu posicionamiento de **implementador tecnológico**, no de creador de contenido de IA.

---

**16:45 — Cierre**

Entrega del repositorio.

Recursos.

Preguntas.

Próximos pasos.

---

# **6\. La oferta debería tener tres niveles**

No necesariamente tres productos completamente diferentes.

Podemos usar tres modalidades para aumentar conversión.

### **OPCIÓN A — ONLINE**

**Workshop \+ repositorio \+ recursos**

Precio base.

---

### **OPCIÓN B — PRESENCIAL**

**Workshop \+ repositorio \+ recursos \+ experiencia presencial**

Precio ligeramente superior.

---

### **OPCIÓN C — PREMIUM**

**Workshop \+ repositorio \+ recursos \+ encuentro adicional**

Por ejemplo:

sesión grupal posterior de 60 minutos para resolver implementación.

Esto puede ser un cupo muy limitado.

Y además te sirve para detectar potenciales clientes para Future.

---

# **7\. Hay una segunda venta escondida**

Esto me parece estratégicamente muy importante.

El workshop **no debería ser solamente un producto que genera dinero**.

También debería ser un **producto de adquisición de clientes para Future**.

Porque vas a tener personas que después del workshop van a decir:

“Yo quiero hacer esto pero para mi empresa.”

Ahí aparece Future.

Entonces el embudo puede ser:

**Contenido**

↓

**Workshop**

↓

**Participante**

↓

**Aprende cómo construís soluciones**

↓

**Detecta que necesita implementar algo propio**

↓

**Consultoría / auditoría**

↓

**Proyecto Future**

Esto convierte el workshop en un canal de adquisición B2B.

---

# **8\. Landing page**

La landing no debería ser larguísima por obligación.

Tiene que responder rápidamente:

**¿Qué es?**

**¿Para quién es?**

**¿Qué voy a aprender?**

**¿Qué me llevo?**

**¿Cuándo es?**

**¿Cómo participo?**

**¿Cuánto cuesta?**

**¿Quién lo dicta?**

**¿Qué pasa después de pagar?**

---

# **9\. Estructura exacta de la landing**

## **HERO**

### **WORKSHOP PRÁCTICO DE IA**

# **CONSTRUÍ SOLUCIONES CON IA**

**Una jornada práctica para aprender construyendo sobre una base real y llevarte un repositorio que podés seguir utilizando después del workshop.**

**Sábado 5 de septiembre · Formosa Capital \+ Online en vivo**

**\[RESERVAR MI LUGAR\]**

Debajo:

Cupos limitados · Repositorio descargable · Demo en vivo

---

# **SECCIÓN 2**

## **¿Qué vamos a hacer?**

No sería una clase de teoría.

Durante el workshop vamos a trabajar sobre una solución concreta, analizar cómo está construida y recorrer el proceso de implementación.

**La idea es que entiendas qué hay detrás de una solución con IA y puedas continuar trabajando sobre ella después.**

---

# **SECCIÓN 3**

## **¿Qué te llevás?**

Acá vendería visualmente los cuatro activos:

### **REPOSITORIO REAL**

Una base descargable en formato ZIP.

### **CÓDIGO**

Código y estructura sobre la que podés trabajar.

### **RECURSOS**

Plantillas, configuraciones y materiales utilizados.

### **IMPLEMENTACIÓN**

Vas a ver cómo se construye y funciona en vivo.

---

# **SECCIÓN 4**

## **¿Para quién es?**

Esto es importantísimo.

Podríamos dividir:

### **PARA VOS SI…**

* querés empezar a construir soluciones con IA;  
* sos desarrollador;  
* sos estudiante;  
* trabajás en tecnología;  
* sos emprendedor;  
* tenés una idea y querés convertirla en algo funcional;  
* querés entender mejor cómo se integran IA, software y APIs.

### **NO ES NECESARIO…**

No vendería “no necesitás saber nada”.

Eso puede bajar la percepción.

Mejor:

**No necesitás ser experto en IA. Vamos a construir desde una base preparada y explicar cada parte del proceso.**

---

# **SECCIÓN 5**

## **¿Qué vas a aprender?**

Acá podemos poner un esquema:

**IDEA → ARQUITECTURA → CÓDIGO → IA → INTEGRACIONES → IMPLEMENTACIÓN**

Y debajo explicar cada etapa.

---

# **SECCIÓN 6**

## **CRONOGRAMA**

Visual.

**10:00 — Inicio**

**10:30 — Arquitectura**

**11:30 — Construcción**

**13:00 — Break**

**14:00 — Implementación**

**15:30 — Personalización**

**16:15 — De prototipo a solución**

**17:00 — Cierre**

---

# **SECCIÓN 7**

## **DOS FORMAS DE PARTICIPAR**

### **PRESENCIAL**

📍 Formosa Capital

**Lugar a confirmar**

---

### **ONLINE**

💻 En vivo

Participás mediante Zoom/Google Meet y ves exactamente la pantalla, demostraciones y desarrollo.

---

# **SECCIÓN 8**

## **¿QUIÉN LO DICTA?**

Acá entrás vos.

No pondría un CV gigantesco.

Algo como:

**Adrián Gamarra**

Desarrollador y especialista en IA aplicada, automatización y transformación tecnológica.

Desde Future trabajo en la construcción e implementación de soluciones de software e inteligencia artificial para empresas.

Y una foto tuya profesional.

Esto conecta el workshop con tu posicionamiento.

---

# **SECCIÓN 9**

## **PRECIO**

Acá recomiendo **no esconder el precio**.

Ejemplo:

# **$XX.XXX**

**Precio lanzamiento**

Después:

~~$XX.XXX~~

Y contador:

**El precio de lanzamiento termina el XX/XX.**

Botón:

# **QUIERO MI LUGAR**

---

# **SECCIÓN 10**

## **PREGUNTAS FRECUENTES**

Mínimo:

**¿Es presencial u online?**

**¿Cuánto dura?**

**¿Necesito saber programar?**

**¿Qué recibo después de inscribirme?**

**¿Recibo el repositorio?**

**¿Puedo participar desde otra ciudad?**

**¿Se graba?**

**¿Qué pasa si no puedo asistir?**

**¿Cómo recibo el material?**

**¿Dónde se realiza?**

**¿Puedo pedir factura?**

Esta sección reduce muchísimo la fricción.

---

# **10\. El flujo técnico que te recomiendo**

Acá podemos aprovechar muchísimo tu stack.

                INSTAGRAM  
                     │  
                     ▼  
              LANDING PAGE  
                     │  
          ┌──────────┴──────────┐  
          │                     │  
          ▼                     ▼  
       INFORMACIÓN          BOTÓN COMPRAR  
                                │  
                                ▼  
                         MERCADO PAGO  
                                │  
                         PAGO APROBADO  
                                │  
                                ▼  
                            WEBHOOK  
                                │  
                                ▼  
                              n8n  
                                │  
              ┌─────────────────┼─────────────────┐  
              │                 │                 │  
              ▼                 ▼                 ▼  
           Airtable         Email          WhatsApp  
          Asistente       confirmación      confirmación  
              │  
              ▼  
        BASE ASISTENTES

Esto es exactamente el tipo de automatización que después también podés mostrar como caso práctico.

---

# **11\. Onboarding automático**

Después del pago:

### **INMEDIATAMENTE**

Email:

**¡Estás dentro\!**

Incluye:

* confirmación;  
* fecha;  
* modalidad;  
* horario;  
* qué llevar;  
* qué preparar;  
* información importante.

---

### **48-72 HORAS DESPUÉS**

Email:

**Prepará tu entorno para el workshop**

Por ejemplo:

* cuentas necesarias;  
* software;  
* GitHub;  
* editor;  
* herramientas que vayan a utilizar;  
* instrucciones de instalación.

Esto reduce muchísimo los problemas el día del evento.

---

### **7 DÍAS ANTES**

Email:

**Falta una semana.**

Checklist.

---

### **24 HORAS ANTES**

WhatsApp/email:

**Mañana nos vemos.**

Lugar / link / horario.

---

### **1 HORA ANTES**

Mensaje automático:

**Comenzamos en 1 hora.**

Para online:

**link de Meet/Zoom.**

---

# **12\. Después del workshop**

Acá es donde mucha gente se equivoca.

No termina cuando termina la clase.

### **\+1 HORA**

Enviar:

Gracias por participar.

---

### **\+1 DÍA**

Enviar:

**Tu repositorio ya está disponible.**

Link privado.

---

### **\+3 DÍAS**

Enviar:

**¿Qué construiste después del workshop?**

Esto genera engagement.

---

### **\+7 DÍAS**

Enviar:

**¿Querés llevarlo a un caso real?**

Y ahí aparece Future.

No vendería agresivamente.

Algo como:

Si tenés una idea o proceso de tu empresa que querés convertir en una solución real con IA, podés solicitar una evaluación de tu caso.

**\[SOLICITAR EVALUACIÓN\]**

Eso transforma participantes en leads B2B.

---

# **13\. La estrategia comercial desde hoy**

Tenemos aproximadamente **26 días hasta el sábado 5 de septiembre de 2026**.

Yo lo dividiría así:

## **FASE 1 — 10 al 16 de agosto**

### **PRELANZAMIENTO**

Todavía no vender agresivamente.

Contenido:

“Estoy preparando algo que hace tiempo quería hacer.”

Mostrar:

* repositorio;  
* código;  
* pantalla;  
* preparación;  
* concepto;  
* problema que resuelve.

CTA:

**“Comentá IA / mandame mensaje / sumate a la lista.”**

Objetivo:

### **CONSEGUIR INTERESADOS**

---

# **FASE 2 — 17 al 23 de agosto**

## **LANZAMIENTO**

Landing publicada.

Mercado Pago funcionando.

Oferta lanzamiento.

Contenido:

* anuncio;  
* reel;  
* historias;  
* demostración;  
* explicación del workshop;  
* qué recibe;  
* quién debería asistir.

Acá empieza:

**TRÁFICO → LANDING → COMPRA**

---

# **FASE 3 — 24 al 30 de agosto**

## **PRUEBA SOCIAL \+ OBJECIONES**

Mostrar:

* qué vas a construir;  
* fragmentos del repositorio;  
* herramientas;  
* demos;  
* tu preparación;  
* detrás de escena;  
* preguntas frecuentes.

Contenido tipo:

“¿Necesito saber programar?”

“¿Qué me llevo?”

“¿Qué vamos a construir?”

“¿Puedo hacerlo desde otra ciudad?”

Esto elimina objeciones.

---

# **FASE 4 — 31 agosto al 4 septiembre**

## **CIERRE**

Ahora sí:

**CUPOS**

**FECHA**

**ÚLTIMOS LUGARES**

**PRECIO SUBE**

**MAÑANA**

Etcétera.

Acá el objetivo no es educar.

Es:

# **CONVERTIR.**

---

# **14\. La métrica principal**

No mediría solamente likes.

El funnel real sería:

### **Contenido**

**Alcance**

↓

### **Interesados**

**clics**

↓

### **Landing**

**visitas**

↓

### **Checkout**

**inicios de compra**

↓

### **Pago**

**ventas**

↓

### **Workshop**

**asistentes**

↓

### **Post-workshop**

**leads Future**

---

## **Tus KPIs**

Por ejemplo:

| Métrica | Qué queremos saber |
| ----- | ----- |
| Visitas landing | ¿Generamos tráfico? |
| CTR | ¿El contenido despierta interés? |
| Inicio checkout | ¿La oferta convence? |
| Conversión a pago | ¿La landing/oferta funciona? |
| CAC | ¿Cuánto cuesta conseguir un participante? |
| % asistencia | ¿El onboarding funciona? |
| NPS | ¿El workshop realmente gustó? |
| Leads B2B | ¿Generó oportunidades para Future? |
| Ventas posteriores | ROI real del workshop |

---

# **15\. Y hay una decisión de negocio que tomaría ahora**

No lanzaría el workshop hasta tener estas **8 cosas cerradas**:

### **1\.**

**Qué solución concreta se va a construir.**

### **2\.**

**Qué contiene exactamente el ZIP.**

### **3\.**

**Duración definitiva.**

### **4\.**

**Precio.**

### **5\.**

**Cupos máximos presenciales.**

### **6\.**

**Cupos máximos online.**

### **7\.**

**Política de devolución/cancelación.**

### **8\.**

**Qué pasa después del workshop.**

Porque si esas cosas no están definidas, la landing va a terminar siendo una colección de promesas.

---

# **16\. Mi arquitectura final del negocio**

Yo lo plantearía así:

                   CONTENIDO  
                       │  
                       ▼  
                WORKSHOP DE IA  
                       │  
          ┌────────────┴────────────┐  
          ▼                         ▼  
      PRESENCIAL                  ONLINE  
          │                         │  
          └────────────┬────────────┘  
                       ▼  
                EXPERIENCIA  
                       │  
                       ▼  
             REPOSITORIO \+ RECURSOS  
                       │  
                       ▼  
                POST WORKSHOP  
                       │  
             ┌─────────┴─────────┐  
             ▼                   ▼  
        PARTICIPANTE         POTENCIAL CLIENTE  
             │                   │  
             ▼                   ▼  
       COMUNIDAD /          AUDITORÍA / CONSULTORÍA  
        CONTENIDO                │  
                                 ▼  
                            FUTURE / IA

Así deja de ser simplemente:

**“Hago un workshop y cobro entradas.”**

Y pasa a ser:

**Un producto educativo que monetiza conocimiento, construye autoridad, genera audiencia propia y alimenta el pipeline comercial de Future.**

Y además hay algo particularmente bueno: **el propio sistema de venta del workshop puede convertirse en un caso práctico de automatización**. Landing → pago → webhook → n8n → base de datos → confirmación → onboarding → recordatorios → entrega del repositorio. Eso es totalmente coherente con el posicionamiento que querés construir: IA aplicada, procesos, software e implementación, no “humo de IA”.

### **Siguiente orden de trabajo que recomiendo**

1. **Definir exactamente qué se construye en el workshop.**  
2. Definir **qué contiene el repositorio ZIP**.  
3. Fijar **duración, cupos y precio**.  
4. Diseñar **la oferta y las modalidades presencial/online**.  
5. Armar **la landing completa sección por sección**.  
6. Implementar **Mercado Pago \+ webhook \+ n8n \+ Airtable**.  
7. Crear **el sistema automático de onboarding**.  
8. Diseñar **el calendario de contenido y ventas del 10/8 al 5/9**.  
9. Crear **los anuncios/reels/stories de lanzamiento**.  
10. Preparar **la operación del día del evento y el follow-up comercial hacia Future**.

Ese es el orden que seguiría. **No empezaría escribiendo la landing todavía**: primero cerraría el producto y la oferta, porque de ahí sale todo lo demás.

