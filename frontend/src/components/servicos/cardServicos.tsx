export default function CardServicos() {
    return (
        <div className="flex flex-col gap-12">
            {/* Título */}
            <div>
                <p className="text-2xl font-semibold text-gray-800">
                    Descobre como podemos ajudar-te
                </p>
            </div>

            {/* Grid de Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* Card */}
                <div className="p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">Osteopatia</h2>
                    <p className="text-gray-600">
                        Terapia manual para dores crónicas e postura.
                    </p>
                </div>

                <div className="p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">Massagem Desportiva</h2>
                    <p className="text-gray-600">
                        Recuperação muscular para atletas e praticantes de exercício.
                    </p>
                </div>

                <div className="p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">Massagem de Recuperação</h2>
                    <p className="text-gray-600">
                        Alívio de tensões e bem-estar após esforço físico.
                    </p>
                </div>

            </div>
        </div>
    )
}
