import { Task } from '@type/todo.types';
import 'regenerator-runtime';

class TodoAPI {
  async getSingle(id: string): Promise<Task> {
    const response = await fetch(`${process.env.API_URL}/${id}`);
    const data = await this.getDataFromResponse(response);

    return data;
  }

  async getAll(): Promise<Task[]> {
    const response = await fetch(process.env.API_URL);
    const data = await this.getDataFromResponse(response);

    return data;
  }

  async createTask(value: string): Promise<Task> {
    const response = await fetch(process.env.API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ value }),
    });
    const data = await this.getDataFromResponse(response);

    return data;
  }

  async updateTask(task: Task): Promise<Task> {
    const response = await fetch(process.env.API_URL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
    });
    const data = await this.getDataFromResponse(response);

    return data;
  }

  async toggleTasks(): Promise<boolean> {
    const response = await fetch(`${process.env.API_URL}/toggle`, {
      method: 'PUT',
    });
    const data = await this.getDataFromResponse(response);

    return data;
  }

  async deleteCompleted(filter: boolean): Promise<Task[]> {
    const response = await fetch(`${process.env.API_URL}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(filter),
    });
    const data = await this.getDataFromResponse(response);

    return data;
  }

  async deleteTask(id: string): Promise<Task> {
    const response = await fetch(`${process.env.API_URL}/${id}`, {
      method: 'DELETE',
    });
    const data = await this.getDataFromResponse(response);

    return data;
  }

  async getDataFromResponse(
    response: Response
  ): Promise<boolean & Task & Task[]> {
    if (response.ok) {
      const data = await response.json();

      return data.payload;
    }
    const error = await response.text();
    throw new Error(error);
  }
}

export default TodoAPI;
