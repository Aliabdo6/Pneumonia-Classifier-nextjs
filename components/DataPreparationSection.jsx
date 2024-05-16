const DataPreparationSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Data Preparation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg shadow-md p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">
              Comprehensive Dataset
            </h3>
            <p>
              A comprehensive dataset of chest
              X-ray images meticulously labeled by
              medical experts.
            </p>
          </div>
          {/* Step 2 */}
          <div className="bg-gradient-to-r from-green-400 to-green-600 rounded-lg shadow-md p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">
              Data Cleaning
            </h3>
            <p>
              Preprocessing steps such as noise
              removal, image resizing, and
              normalization.
            </p>
          </div>
          {/* Step 3 */}
          <div className="bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg shadow-md p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">
              Data Augmentation
            </h3>
            <p>
              Applying transformations like
              rotation, flipping, and scaling to
              increase dataset diversity.
            </p>
          </div>
          {/* Step 4 */}
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg shadow-md p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">
              Train-Test Split
            </h3>
            <p>
              Dividing the dataset into training
              and testing sets for model
              evaluation.
            </p>
          </div>
          {/* Step 5 */}
          <div className="bg-gradient-to-r from-red-400 to-red-600 rounded-lg shadow-md p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">
              Data Normalization
            </h3>
            <p>
              Scaling pixel values to a range
              suitable for neural network
              training.
            </p>
          </div>
          {/* Step 6 */}
          <div className="bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-lg shadow-md p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">
              Data Augmentation
            </h3>
            <p>
              Applying transformations like
              rotation, flipping, and scaling to
              increase dataset diversity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataPreparationSection;
