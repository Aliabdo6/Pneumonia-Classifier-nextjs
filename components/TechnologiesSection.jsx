const TechnologiesSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Technologies Used
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Technology 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">
              Python 3.9
            </h3>
            <p>
              A powerful programming language used
              for building machine learning models
              and backend development.
            </p>
          </div>
          {/* Technology 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">
              TensorFlow 2.7
            </h3>
            <p>
              An open-source machine learning
              framework for building and training
              deep learning models.
            </p>
          </div>
          {/* Technology 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">
              OpenCV 4.5.5
            </h3>
            <p>
              An open-source computer vision
              library used for image and video
              processing tasks.
            </p>
          </div>
          {/* Technology 4 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">
              Pandas 1.3.5
            </h3>
            <p>
              A Python library used for data
              manipulation and analysis,
              particularly for structured data.
            </p>
          </div>
          {/* Technology 5 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">
              Matplotlib 3.6.2
            </h3>
            <p>
              A Python plotting library used for
              creating static, animated, and
              interactive visualizations.
            </p>
          </div>
          {/* Technology 6 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">
              Seaborn 0.11.2
            </h3>
            <p>
              A Python data visualization library
              based on Matplotlib, used for
              statistical graphics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
