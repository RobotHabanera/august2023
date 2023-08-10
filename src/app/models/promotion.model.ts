export class Promotion {
  constructor(
      public definition: string,
      public choose_products: string,
      public exclude_products: string,
      public bonus_products: string,
      public products_limits: string,
      public choose_clients: string,
      public exclude_clients: string,
      public clients_limits: string
  ) {}
}
