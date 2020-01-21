import axios from "axios";

const fetchUser = async () => {
  const currentUser = await axios.get("/api/current_user");
}

export default fetchUser;