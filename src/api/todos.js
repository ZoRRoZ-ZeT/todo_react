import 'regenerator-runtime';

class TodoAPI {
  async getSingle(id) {
    const response = await fetch(`${process.env.API_URL}/${id}`);
    const data = await this.getDataFromResponse(response);

    return data;
  }

  async getAll() {
    const response = await fetch(process.env.API_URL);
    const data = await this.getDataFromResponse(response);

    return data;
  }

  async createTask(body) {
    const response = await fetch(process.env.API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const data = await this.getDataFromResponse(response);

    return data;
  }

  async updateTask(body) {
    const response = await fetch(process.env.API_URL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const data = await this.getDataFromResponse(response);

    return data;
  }

  async toggleTasks() {
    const response = await fetch(`${process.env.API_URL}/toggle`, {
      method: 'PUT',
    });
    const data = await this.getDataFromResponse(response);

    return data;
  }

  async deleteCompleted(filter) {
    const response = await fetch(`${process.env.API_URL}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(filter),
    });
    const data = await this.getDataFromResponse(response);

    return data;
  }

  async deleteTask(id) {
    const response = await fetch(`${process.env.API_URL}/${id}`, {
      method: 'DELETE',
    });
    const data = await this.getDataFromResponse(response);

    return data;
  }

  async getDataFromResponse(response) {
    const data = await response.json();
    if (data.statusCode === 200) {
      return data.payload;
    }
    throw new Error(JSON.stringify(data));
  }
}

export default TodoAPI;
