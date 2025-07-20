const RegisterPage = () => {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-2xl mx-auto bg-gray-900 rounded-lg shadow-xl p-8">
            <a href="/" className="text-primary hover:text-primary_dark mb-8 inline-block">&larr; Back to Home</a>
            <h1 className="text-4xl font-bold text-white mb-6">Volunteer Registration</h1>
            <p className="text-gray-400 mb-8">Fill out the form below to become a part of the SIP team.</p>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-white mb-2">Full Name</label>
                  <input type="text" id="name" className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:border-primary" />
                </div>
                <div className="mb-4">
                  <label htmlFor="usn" className="block text-white mb-2">USN</label>
                  <input type="text" id="usn" className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:border-primary" />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input type="email" id="email" className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:border-primary" />
              </div>
              <div className="mb-4">
                <label htmlFor="branch" className="block text-white mb-2">Branch</label>
                <select id="branch" className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:border-primary">
                  <option>Information Science & Engineering</option>
                  <option>Computer Science & Engineering</option>
                  <option>Electronics & Communication Engineering</option>
                  {/* Add other branches */}
                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="why" className="block text-white mb-2">Why do you want to volunteer?</label>
                <textarea id="why" rows={4} className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:border-primary"></textarea>
              </div>
              <button type="submit" className="w-full bg-primary hover:bg-primary_dark text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105">Submit Registration</button>
            </form>
          </div>
        </div>
      </div>
    );
  };

  export default RegisterPage;