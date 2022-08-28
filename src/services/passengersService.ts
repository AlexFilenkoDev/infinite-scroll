import axios from "axios"

class PassengersService {
  async fetchPassengers(page: number, size: number) {
    const responce = await axios.get(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=${size}`)
    return responce.data;
  }
}

export default new PassengersService()