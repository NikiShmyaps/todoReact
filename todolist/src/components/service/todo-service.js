export default class Service {
  _apiBase = "http://localhost:3000";
  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if(!res.ok) {
      throw new Error(`Could no fetxh ${url} received ${res.status}`);
    }
    return await res.json();
  }
  async getPosts() {
    return await this.getResource("/data");
  }
  async getString() {
    return await this.getResource("/term");
  }
}