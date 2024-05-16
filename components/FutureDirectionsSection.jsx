const FutureDirectionsSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Future Directions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Direction 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">
              Incorporating Additional Data
              Sources
            </h3>
            <p>
              Expanding the dataset with diverse
              chest X-ray images to improve the
              model's generalization capabilities.
            </p>
          </div>
          {/* Direction 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">
              Exploring Advanced Deep Learning
              Techniques
            </h3>
            <p>
              Investigating the use of
              state-of-the-art deep learning
              techniques, such as transfer
              learning and ensemble methods, to
              further enhance the model's
              performance.
            </p>
          </div>
          {/* Direction 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">
              Integration with Electronic Health
              Records (EHRs)
            </h3>
            <p>
              Integrating the system with EHRs to
              enable seamless access to patient
              data and facilitate more informed
              clinical decision-making.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureDirectionsSection;
