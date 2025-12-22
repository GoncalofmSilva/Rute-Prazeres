const servicos = [
  {
    titulo: "Osteopatia",
    descricao: "Terapia manual para dores crónicas e postura.",
  },
  {
    titulo: "Massagem Desportiva",
    descricao: "Recuperação muscular para atletas e praticantes de exercício.",
  },
  {
    titulo: "Massagem de Recuperação",
    descricao: "Alívio de tensões e bem-estar após esforço físico.",
  },
]

export default function CardServicos() {
  return (
    <div className="flex flex-col gap-12 py-8">
      {/* Título */}
      <div className="text-center">
        <p className="text-3xl font-normal text-gray-800 italic">
          Descobre como podemos ajudar-te
        </p>
      </div>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
        {servicos.map((servico, index) => (
          <div
            key={index}
            className="bg-white p-8 border-4 border-[#4A9FD8] rounded-lg shadow-sm hover:shadow-lg transition-shadow flex flex-col items-center justify-center min-h-[280px]"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {servico.titulo}
            </h2>
            <p className="text-gray-700 text-center leading-relaxed">
              {servico.descricao}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}