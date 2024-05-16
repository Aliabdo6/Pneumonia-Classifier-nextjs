const AboutUsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        About Us
      </h1>

      {/* Doctor's Section */}
      <div className="text-center mb-12">
        <img
          src="https://th.bing.com/th/id/OIP.x7X2oAehk5M9IvGwO_K0PgHaHa?rs=1&pid=ImgDetMain"
          alt="Doctor"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h2 className="text-xl font-semibold mb-2">
          Dr. Alex Johnson
        </h2>
        <p className="text-gray-600">
          Role: Project Supervisor
        </p>
      </div>

      {/* People Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Person 1 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <img
            src="https://th.bing.com/th/id/OIP.x7X2oAehk5M9IvGwO_K0PgHaHa?rs=1&pid=ImgDetMain"
            alt="Person 1"
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">
            John Doe
          </h2>
          <p className="text-gray-600 mb-4">
            Role: Project Lead
          </p>
        </div>
        {/* Person 2 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <img
            src="https://th.bing.com/th/id/OIP.x7X2oAehk5M9IvGwO_K0PgHaHa?rs=1&pid=ImgDetMain"
            alt="Person 2"
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">
            Jane Smith
          </h2>
          <p className="text-gray-600 mb-4">
            Role: Developer
          </p>
        </div>
        {/* Person 3 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <img
            src="https://th.bing.com/th/id/OIP.x7X2oAehk5M9IvGwO_K0PgHaHa?rs=1&pid=ImgDetMain"
            alt="Person 3"
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">
            Michael Johnson
          </h2>
          <p className="text-gray-600 mb-4">
            Role: Data Scientist
          </p>
        </div>
        {/* Person 4 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <img
            src="https://th.bing.com/th/id/OIP.x7X2oAehk5M9IvGwO_K0PgHaHa?rs=1&pid=ImgDetMain"
            alt="Person 4"
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">
            Emily Davis
          </h2>
          <p className="text-gray-600 mb-4">
            Role: Designer
          </p>
        </div>
        {/* Person 5 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <img
            src="https://th.bing.com/th/id/OIP.x7X2oAehk5M9IvGwO_K0PgHaHa?rs=1&pid=ImgDetMain"
            alt="Person 5"
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">
            Andrew Wilson
          </h2>
          <p className="text-gray-600 mb-4">
            Role: Researcher
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
