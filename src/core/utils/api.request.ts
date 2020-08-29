export default class API {
  protected url: string = '';
  protected key: string = '';

  constructor(url: string = '', key: string = '') {
    this.url = url;
    this.key = key;
  }

  parameters(params: any = {}) {
    const object = { ...params, api_key: this.key };
    return new URLSearchParams(object).toString();
  }

  get(path: string = '', params: any = {}): Promise<any> {
    return fetch(`${this.url}${path}?${this.parameters(params)}`)
      .then((res) => res.json())
      .then((data) => data);
  }
}
