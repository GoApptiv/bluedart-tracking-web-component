import { HttpPostClient } from "../../data/protocols/http/http-post-client";

export class FetchHttpClient implements HttpPostClient{
  private static instance: FetchHttpClient;

  /**
   * Singleton class private contructor
   */
  private constructor() { }

  /**
   * Singleton class create instance
   */
  public static getInstance(): FetchHttpClient {
      if (!FetchHttpClient.instance) {
        FetchHttpClient.instance = new FetchHttpClient();
      }
      return FetchHttpClient.instance;
  }

  /**
   * Post request
   * @param params
   * @returns
   */
  async post(params: HttpPostClient.Params): Promise<any> {
    let response: Response;
    try {
      response =  await fetch(params.url, {
        method: 'POST',
        body: JSON.stringify(params.body),
      });
    } catch (error) {
      response = error.json();
    }
    return response.json();
  }
}
