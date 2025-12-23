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
    <div className="">
      {/* Título */}
      <div className="">
        <p className="">
          Descobre como podemos ajudar-te
        </p>
      </div>

      {/* Grid de Cards */}
      <div className="">
        {servicos.map((servico, index) => (
          <div
            key={index}
            className=""
          >
            <h2 className="">
              {servico.titulo}
            </h2>
            <p className="">
              {servico.descricao}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}