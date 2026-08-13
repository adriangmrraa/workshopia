import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Es presencial u online?",
    answer:
      "Tenés dos modalidades: presencial en Formosa Capital o online en vivo por Zoom/Google Meet. En ambos casos vas a ver exactamente la pantalla, demostraciones y desarrollo.",
  },
  {
    question: "¿Cuánto dura?",
    answer:
      "La jornada completa es de 10:00 a 17:00, con descansos y pausa para almuerzo incluidas.",
  },
  {
    question: "¿Necesito saber programar?",
    answer:
      "No es necesario ser experto. Vamos a construir desde una base preparada y explicar cada parte del proceso para que lo entiendas y lo puedas seguir modificando.",
  },
  {
    question: "¿Qué recibo después de inscribirme?",
    answer:
      "Recibís confirmación por email con fecha, modalidad, horario, qué llevar y qué preparar. Después del workshop accedés al repositorio descargable.",
  },
  {
    question: "¿Recibo el repositorio?",
    answer:
      "Sí, el repositorio completo con código, recursos y configuraciones lo recibís después del workshop para seguir trabajando.",
  },
  {
    question: "¿Puedo participar desde otra ciudad?",
    answer:
      "Sí, con la modalidad online en vivo podés participar desde cualquier lugar con conexión a internet.",
  },
  {
    question: "¿Se graba?",
    answer:
      "La grabación no está incluida en la inscripción estándar. Consultanos por disponibilidad de grabación.",
  },
  {
    question: "¿Qué pasa si no puedo asistir?",
    answer:
      "Consultanos por la política de cancelación. Te recomendamos coordinar con anticipación para reubicarte en otra fecha si está disponible.",
  },
  {
    question: "¿Cómo recibo el material?",
    answer:
      "El material se entrega por email y/o drive privado después del workshop, con acceso para descargar el repositorio y recursos.",
  },
  {
    question: "¿Dónde se realiza?",
    answer:
      "Formosa Capital. Lugar a confirmar. Te enviaremos la dirección exacta por email una semana antes del evento.",
  },
  {
    question: "¿Puedo pedir factura?",
    answer:
      "Sí, emitimos el comprobante correspondiente. Consultanos por los datos de facturación al inscribirte.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-12 lg:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0b0d] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 lg:mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight-custom text-white">
              Preguntas frecuentes
            </h2>
          </div>
          <Accordion className="w-full space-y-3 animate-fade-in-up">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass rounded-2xl border-0 px-6 py-2 data-[state=open]:bg-white/[0.04] transition-colors duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-white hover:text-[#E62E2E] transition-colors py-5 text-base sm:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/60 leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
