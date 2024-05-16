import {
  LightningBoltIcon,
  CheckCircleIcon,
  ScaleIcon,
} from "@heroicons/react/outline"; // Import icons from Heroicons

const FeaturesSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center bg-gradient-to-r from-blue-500 to-blue-700 text-white p-8 rounded-lg">
            <LightningBoltIcon className="h-16 w-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Automated Analysis
            </h3>
            <p className="text-center">
              Our system automates the analysis of
              chest X-ray images, reducing manual
              workload.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col items-center bg-gradient-to-r from-green-500 to-green-700 text-white p-8 rounded-lg">
            <CheckCircleIcon className="h-16 w-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Improved Efficiency
            </h3>
            <p className="text-center">
              Enhance efficiency and accuracy of
              pneumonia detection with deep
              learning models.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col items-center bg-gradient-to-r from-purple-500 to-purple-700 text-white p-8 rounded-lg">
            <ScaleIcon className="h-16 w-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Scalability
            </h3>
            <p className="text-center">
              Designed to be scalable and
              adaptable to various clinical
              settings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
