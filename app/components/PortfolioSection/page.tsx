import PortfolioCarousel from "../PortfolioCarousel/page";

export default function PortfolioSection() {
  return (
    <section className="w-full px-4 lg:px-6 py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Our Success Stories
          </h2>
          <p className="text-xl text-gray-600">
            Discover how we've transformed properties and maximized returns for
            our clients
          </p>
        </div>

        <PortfolioCarousel />
      </div>
    </section>
  );
}
