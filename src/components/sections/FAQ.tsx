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
      "Tenés dos caminos: presencial en Formosa Capital o online en vivo. En ambos casos vas a ver la ejecución real, la lógica detrás y la forma de trabajar con IA sobre un caso concreto.",
  },
  {
    question: "¿Cuánto dura?",
    answer:
      "La jornada es de 10:00 a 17:00 con pausas incluidas, pensada para recorrer desde la idea hasta la ejecución real sin saturar.",
  },
  {
    question: "¿Necesito saber programar?",
    answer:
      "No hace falta ser experto. Lo importante es tener interés en construir, probar y entender cómo se toma una idea y se convierte en una solución con IA.",
  },
  {
    question: "¿Qué recibo después de inscribirme?",
    answer:
      "Recibís confirmación con fecha, modalidad, horario, materiales, preparación y acceso a la base de trabajo para seguir desarrollando después del taller.",
  },
  {
    question: "¿Recibo el repositorio?",
    answer:
      "Sí. Te queda una base descargable con código, estructura, recursos y configuración para seguir estudiando y adaptando la solución.",
  },
  {
    question: "¿Puedo participar desde otra ciudad?",
    answer:
      "Sí. La modalidad online te permite participar desde cualquier lugar con conexión a internet y seguir la ejecución en vivo.",
  },
  {
    question: "¿Se graba?",
    answer:
      "La grabación no está incluida en la inscripción estándar. Si te interesa, consultanos por disponibilidad y condiciones.",
  },
  {
    question: "¿Qué pasa si no puedo asistir?",
    answer:
      "Consultanos por la política de cancelación y reubicación. Si hay disponibilidad, se puede reprogramar tu participación.",
  },
  {
    question: "¿Cómo recibo el material?",
    answer:
      "El material se entrega por email y/o drive privado con acceso al repositorio, configuraciones y recursos para continuar trabajando.",
  },
  {
    question: "¿Dónde se realiza?",
    answer:
      "En Formosa Capital con la modalidad presencial. La dirección exacta te la enviamos por email antes del evento.",
  },
  {
    question: "¿Puedo pedir factura?",
    answer:
      "Sí. Te emitimos el comprobante correspondiente para que lo puedas gestionar según tu necesidad.",
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
