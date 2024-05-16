const SubscriptionSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Subscribe to Our Newsletter
        </h2>
        <div className="max-w-lg mx-auto">
          <p className="text-center text-gray-600 mb-8">
            Stay up to date with the latest news
            and updates. Subscribe to our
            newsletter now!
          </p>
          <form className="flex flex-col md:flex-row justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full md:w-auto px-4 py-3 mb-4 md:mb-0 md:mr-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;
