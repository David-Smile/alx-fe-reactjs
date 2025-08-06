function UserProfile() {
    return (
      <div className="bg-gray-100 p-8 max-w-sm mx-auto, my-20 rounded-lg shadow-lg user-profile">
        <img className="rounded-full w-36 h-36 mx-auto user-image"src="https://via.placeholder.com/150" alt="User" />
        <h1 className="text-xl text-blue-800 my-4 user-name">John Doe</h1>
        <p classNamw="text-gray-600 text-base user-descritpion">Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
  }
  
  export default UserProfile;