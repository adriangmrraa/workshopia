const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScMAwRueNaKLBONOOakpJYPbVfTRJkejaWj348geaf3VWElxQ/viewform";

export function Precio() {
  return (
    <section id="precio" className="py-20 lg:py-32 bg-[#2A2D31]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Inversión
          </h2>
          <div className="bg-[#1B1D20] border border-[#3A3D41] rounded-2xl p-8 sm:p-12 space-y-6">
            <div>
              <p className="text-sm font-semibold text-[#E62E2E] uppercase tracking-wider">
                Precio lanzamiento
              </p>
              <p className="text-5xl sm:text-6xl font-black mt-2">$XX.XXX</p>
            </div>
            <p className="text-[#8A8D91]">
              El precio de lanzamiento termina el XX/XX.
            </p>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#E62E2E] text-white font-bold rounded-xl hover:bg-transparent hover:text-[#E62E2E] border-2 border-[#E62E2E] transition-all text-lg w-full sm:w-auto"
            >
              Quiero mi lugar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
