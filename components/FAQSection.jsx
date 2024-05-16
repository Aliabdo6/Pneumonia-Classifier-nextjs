const FAQSection = () => {
  return (
    <>
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Project FAQs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* FAQ 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">
                What is the goal of the project?
              </h3>
              <p className="text-gray-800">
                The primary goal of our project is
                to develop an automated system for
                chest X-ray analysis to aid in the
                detection of pneumonia.
              </p>
            </div>
            {/* FAQ 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">
                What technologies were used in the
                project?
              </h3>
              <p className="text-gray-800">
                Our project leverages Next.js and
                Tailwind CSS for front-end
                development, and Python with
                TensorFlow for deep learning model
                development.
              </p>
            </div>
            {/* FAQ 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">
                How accurate is the pneumonia
                detection system?
              </h3>
              <p className="text-gray-800">
                The accuracy of the system depends
                on various factors, including the
                quality of the dataset and the
                performance of the deep learning
                models. Our system undergoes
                rigorous evaluation and validation
                to ensure reliable results.
              </p>
            </div>
            {/* FAQ 4 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">
                Is the project scalable for
                real-world implementation?
              </h3>
              <p className="text-gray-800">
                Yes, our project is designed to be
                scalable and adaptable to various
                clinical settings. The system
                architecture and model design
                allow for seamless integration and
                deployment in real-world
                scenarios.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSection;
