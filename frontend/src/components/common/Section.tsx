import CardServicos from '../servicos/cardServicos'

export default function Section() {
    return (
        <section className="w-full py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <CardServicos />
            </div>
        </section>
    )
}